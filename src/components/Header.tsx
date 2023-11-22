import Link from "next/link";

export default function Header() {
  return (
    <header className="py-5 bg-green-900 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-5xl tracking-wide	text-red-400 font-bold font-serif">
          About Me
        </h1>
        <nav className="text-purple-400 font-semibold font-mono text-lg">
          <ul className="flex gap-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/foods">Fave Foods</Link>
            </li>
            <li>
              <Link href="/games">Fave Games</Link>
            </li>
            <li>
              <Link href="/dog">My Dog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
