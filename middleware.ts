import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Allow public routes (root login page and auth API)
  const publicPaths = ["/", "/api/auth"];
  const isPublicPath = publicPaths.some(path => 
    pathname === path || pathname.startsWith("/api/auth")
  );
  
  if (isPublicPath) {
    return NextResponse.next();
  }
  
  // Check authentication
  const session = await auth();
  
  // Redirect to login (root) if not authenticated
  if (!session) {
    const loginUrl = new URL("/", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and _next
    "/((?!_next/static|_next/image|favicon.ico|cm-icon.png|CMLogo-text.svg|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)",
  ],
};
