import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { CASES } from "@/lib/cases";

export const metadata: Metadata = {
  title: "구축 사례",
  description: "바이브코딩 스쿨의 도구로 실제 사업자에게 만들어 드린 것들. 무엇을, 왜, 어떻게 만들었는지.",
};

export default function CasesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <SectionHeader
        eyebrow="Cases"
        title="구축 사례"
        description="강의에서 쓰는 도구 그대로, 실제 사업자에게 만들어 드린 것들입니다. 화면 몇 장과 함께 요구부터 배운 점까지 적어 두었으니, 여러분의 프로젝트를 기획할 때 견본으로 쓰세요."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {CASES.map((c) => (
          <Link
            key={c.slug}
            href={`/cases/${c.slug}`}
            className="group overflow-hidden rounded-xl border border-line bg-card transition hover:border-accent hover:shadow-sm"
          >
            <div className="relative aspect-[1200/630] w-full bg-accent-soft">
              <Image src={c.cover} alt={c.title} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-accent">{c.client}</p>
              <h3 className="mt-1.5 font-bold leading-snug group-hover:text-accent">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.summary}</p>
              <p className="mt-3 flex flex-wrap gap-1.5">
                {c.stack.map((s) => (
                  <span key={s} className="rounded-md bg-accent-soft px-2 py-0.5 text-xs text-accent">{s}</span>
                ))}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
