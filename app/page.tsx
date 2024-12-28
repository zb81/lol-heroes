import HeroList from "@/components/HeroList";
import HeroListSkeleton from "@/components/HeroListSkeleton";
import { Suspense } from "react";

interface Props {
  searchParams?: Promise<Record<string, string>>
}

export default async function Page({ searchParams }: Props) {
  const { q } = searchParams ? (await searchParams) : {}

  return (
    <Suspense fallback={<HeroListSkeleton />}>
      <HeroList q={q} />
    </Suspense>
  )
}
