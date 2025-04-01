import Link from "next/link";

export function Header() {
  return (
    <header className="w-full ">
      <Link href="/" className="text-lg font-semibold text-blue-600">
        MediChip
      </Link>
      <p className="text-[10px]">위급할 때, 가장 빠르게</p>
    </header>
  );
}
