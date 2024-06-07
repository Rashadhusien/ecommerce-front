import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publickRoutes: ["/", "product-details/(.*)"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
