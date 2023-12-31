import Image from "next/image";
import styles from "./game.module.css";
import { merriweather } from "@/app/layout";

type propsType = {
  params: { game: string };
  searchParams: {
    title: string;
    imgUrl: string;
    review: string;
  };
};

function renderTitle(string: string) {
  const arr = string.split("%20");
  return arr
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ")
    .replace("%3A", ":");
}

export async function generateMetadata({ params }: propsType) {
  return {
    title: renderTitle(params.game) + " | Lee Mander",
    description: `All about ${renderTitle(params.game)}`,
  };
}

export default function Page({ params, searchParams }: propsType) {
  return (
    <main className="py-5">
      <div className="container mx-auto h-full">
        <h2 className={`text-2xl ${merriweather.className}`}>
          {renderTitle(params.game)}
        </h2>
        <Image
          src={searchParams.imgUrl}
          alt={renderTitle(params.game)}
          className={`${styles.game__img} my-4`}
          height={500}
          width={889}
        />
        <h3 className={`text-xl ${merriweather.className}`}>Why it's great:</h3>
        <p className="my-2">{searchParams.review}</p>
      </div>
    </main>
  );
}
