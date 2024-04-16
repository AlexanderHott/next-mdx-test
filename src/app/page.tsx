import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex bg-black h-screen w-screen items-center justify-center">
      <Link href="/test" className="underline">
        test.mdx
      </Link>
    </main>
  );
}
