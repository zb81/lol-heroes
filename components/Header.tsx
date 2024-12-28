import Image from "next/image";
import lol from '@/assets/lol.png'
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import SearchField from "./SearchField";

export default function Header() {
  return (
    <header className="sticky top-0 bg-background py-3 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <Image src={lol} alt="LOL 英雄查询" width={40} />
        </Link>
        <SearchField className="ml-4" />
      </div>

      <ThemeToggle />
    </header>
  )
}
