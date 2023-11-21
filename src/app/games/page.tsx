import List from "@/components/List";
import Link from "next/link";

export default function Page() {
  const games = [
    "Super Mario Galaxy",
    "The Legend of Zelda: Breath of the Wild",
    "Rocket League",
    "Half Life 2",
    "Rock Band",
  ];

  return (
    <main className="bg-orange-200 text-red-900 py-5">
      <div className="container mx-auto h-full">
        <h2 className="text-2xl font-bold">My Favourite Video Games</h2>
        <ul className="grid gap-2 my-4">
          {games.map((game) => {
            return (
              <li>
                <Link
                  href={`/games/${game.toLowerCase()}`}
                  className="underline"
                >
                  {game}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
