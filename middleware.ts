import { auth } from "@/lib/auth";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  
  // Allow public routes (root login page and auth API)
  const publicPaths = ["/", "/api/auth"];
  const isPublicPath = publicPaths.some(path => 
    pathname === path || pathname.startsWith("/api/auth")
  );
  
  if (isPublicPath) {
    return;
  }
  
  // Redirect to login (root) if not authenticated
  if (!req.auth) {
    const loginUrl = new URL("/", req.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return Response.redirect(loginUrl);
  }
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
