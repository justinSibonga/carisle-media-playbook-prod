---
description: How to create and manage API routes in Next.js App Router
---

# API Routes Guide

## File Structure

API routes live in `/src/app/api/`:

```
src/app/api/
├── users/
│   ├── route.ts           # GET /api/users, POST /api/users
│   └── [id]/
│       └── route.ts       # GET /api/users/:id, PUT, DELETE
├── auth/
│   ├── login/route.ts     # POST /api/auth/login
│   └── logout/route.ts    # POST /api/auth/logout
```

## Route Handler Template

```tsx
// src/app/api/resource/route.ts
import { NextRequest, NextResponse } from "next/server";

// GET /api/resource
export async function GET(request: NextRequest) {
  try {
    // Get query params
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");

    // Fetch data
    const data = await fetchData(query);

    return NextResponse.json(data);
  } catch (error) {
    console.error("GET /api/resource error:", error);
    return NextResponse.json(
      { error: "Failed to fetch resource" },
      { status: 500 }
    );
  }
}

// POST /api/resource
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    if (!body.name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    // Create resource
    const created = await createResource(body);

    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error("POST /api/resource error:", error);
    return NextResponse.json(
      { error: "Failed to create resource" },
      { status: 500 }
    );
  }
}
```

## Dynamic Route Handler

```tsx
// src/app/api/users/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET /api/users/:id
export async function GET(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;

  try {
    const user = await getUser(id);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

// PUT /api/users/:id
export async function PUT(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const body = await request.json();

  try {
    const updated = await updateUser(id, body);
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

// DELETE /api/users/:id
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;

  try {
    await deleteUser(id);
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
```

## Server Actions Alternative

For mutations, consider using Server Actions instead of API routes:

```tsx
// src/actions/user-actions.ts
"use server";

import { revalidatePath } from "next/cache";

export async function createUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  // Validate
  if (!name || !email) {
    return { error: "Name and email are required" };
  }

  // Create
  await db.user.create({ data: { name, email } });

  // Revalidate
  revalidatePath("/users");

  return { success: true };
}
```

Usage in component:

```tsx
import { createUser } from "@/actions/user-actions";

export function CreateUserForm() {
  return (
    <form action={createUser}>
      <input name="name" required />
      <input name="email" type="email" required />
      <button type="submit">Create</button>
    </form>
  );
}
```

## Best Practices

1. **Always handle errors** - Wrap logic in try/catch
2. **Validate input** - Never trust client data
3. **Use proper status codes** - 200, 201, 400, 401, 404, 500
4. **Log errors** - Use console.error for debugging
5. **Return consistent shapes** - Always return `{ data }` or `{ error }`
6. **Prefer Server Actions** - For mutations from UI forms
