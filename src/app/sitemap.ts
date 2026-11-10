import type { MetadataRoute } from "next";
import { COURSES } from "@/lib/courses";
import { getAllLessons } from "@/lib/lessons";
import { loadCollection } from "@/lib/content";
import { GATED_PATHS } from "@/lib/gate";

const BASE = "https://vibecoding20.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["/", "/lectures", "/basics", "/skills", "/ideas", "/tips", "/prompts", "/repos", "/cases", "/cases/youngliving"];
  const dynamic = [
    ...COURSES.map((c) => `/lectures/${c.slug}`),
    ...COURSES.flatMap((c) => getAllLessons(c.slug).map((l) => `/lectures/${c.slug}/${l.slug}`)),
    ...(["basics", "skills", "ideas"] as const).flatMap((dir) => loadCollection(dir).map((d) => `/${dir}/${d.slug}`)),
  ];
  return [...fixed, ...dynamic]
    .filter((p) => !GATED_PATHS.includes(p))
    .map((p) => ({ url: BASE + p }));
}
