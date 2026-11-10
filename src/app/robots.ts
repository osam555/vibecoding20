import type { MetadataRoute } from "next";
import { GATED_PATHS } from "@/lib/gate";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/gate", "/api/", ...GATED_PATHS] },
    sitemap: "https://vibecoding20.vercel.app/sitemap.xml",
  };
}
