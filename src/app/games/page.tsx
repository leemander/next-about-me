import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Favourite Games | Lee Mander",
  description: "Lee Mander's favourite video games",
};
export default function Page() {
  const games = [
    {
      title: "Super Mario Galaxy",
      imgUrl:
        "https://www.giantbomb.com/a/uploads/original/0/498/177378-e3_070612_smg_smg001.jpg",
      review: "Very imaginative and fun with a wealth of creative ideas.",
    },
    {
      title: "The Legend of Zelda: Breath of the Wild",
      imgUrl:
        "https://www.giantbomb.com/a/uploads/original/0/1486/2930342-capture%20screenshot%202017-03-14%2007-46-56.jpg",
      review:
        "Incredible reinvention of a classic franchise that breathes new life into the open-world genre.",
    },
    {
      title: "Rocket League",
      imgUrl:
        "https://www.giantbomb.com/a/uploads/original/0/329/2767327-rocket%20league_20150721175909.jpg",
      review:
        "A simple idea executed pretty much flawlessly. One of the best playing games of all time.",
    },
    {
      title: "Half Life 2",
      imgUrl:
        "https://www.giantbomb.com/a/uploads/original/0/1317/257542-halflife.jpg",
      review:
        "Raised the bar for video games physics and storytelling within the action genre.",
    },
    {
      title: "Rock Band",
      imgUrl:
        "https://www.giantbomb.com/a/uploads/original/0/3699/437865-120689_5_2.jpg",
      review:
        "One of the best rhythm action games ever and provided many happy memories annoying the neighbours at university.",
    },
  ];

  return (
    <main className="bg-orange-200 text-red-900 py-5">
      <div className="container mx-auto h-full">
        <h2 className="text-2xl font-bold">My Favourite Video Games</h2>
        <ul className="grid gap-2 my-4">
          {games.map((game, index) => {
            return (
              <li key={index}>
                <Link
                  href={{
                    pathname: `/games/${game.title.toLowerCase()}`,
                    query: {
                      imgUrl: game.imgUrl,
                      review: game.review,
                    },
                  }}
                  className="underline"
                >
                  {game.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
