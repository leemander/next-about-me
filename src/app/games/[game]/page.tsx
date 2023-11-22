type gameParam = { params: { game: string } };
type queryParams = {
  searchParams: {
    title: string;
    imgUrl: string;
    review: string;
  };
};
import styles from "./game.module.css";

function renderTitle(string: string) {
  const arr = string.split("%20");
  return arr
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ")
    .replace("%3A", ":");
}

export async function generateMetadata({ params }: gameParam) {
  return {
    title: renderTitle(params.game) + " | Lee Mander",
    description: `All about ${renderTitle(params.game)}`,
  };
}

export default function Page({
  params,
  searchParams,
}: {
  params: gameParam;
  searchParams: queryParams;
}) {
  return (
    <main className="py-5">
      <div className="container mx-auto h-full">
        <h2 className="text-2xl font-bold">{renderTitle(params.game)}</h2>
        <img
          src={searchParams.imgUrl}
          alt={renderTitle(params.game)}
          className={`${styles.game__img} game__img my-4`}
        />
        <h3 className="text-xl font-semibold">Why it's great:</h3>
        <p className="my-2">{searchParams.review}</p>
      </div>
    </main>
  );
}
