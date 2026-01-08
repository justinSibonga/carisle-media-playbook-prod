import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isAuthenticated = !!req.auth;

  // Debug logging (remove in production after testing)
  console.log(`[Middleware] Path: ${pathname}, Authenticated: ${isAuthenticated}, Auth:`, req.auth);

  // Public routes that don't require authentication
  const publicRoutes = ["/", "/api/auth"];
  const isPublicRoute = publicRoutes.some(route => pathname === route || pathname.startsWith(route));

  // If accessing a public route, allow it
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // If not authenticated and trying to access protected route, redirect to login
  if (!isAuthenticated) {
    const loginUrl = new URL("/", req.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Allow authenticated users to access protected routes
  return NextResponse.next();
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder assets
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
