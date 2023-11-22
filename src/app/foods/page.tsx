import List from "@/components/List";
import type { Metadata } from "next";
import Image from "next/image";
import { merriweather } from "../layout";

export const metadata: Metadata = {
  title: "Favourite Food | Lee Mander",
  description: "Lee Mander's favourite foods",
};

export default function Page() {
  return (
    <main className="bg-orange-200 h-full text-red-900 py-5 ">
      <div className="container mx-auto h-full">
        <h2 className={`text-2xl ${merriweather.className} mb-2`}>
          My Favourite Food
        </h2>
        <List array={["Pizza", "Curry", "Noodles"]} />
        <h3 className={`text-2xl ${merriweather.className} my-4`}>Gallery</h3>
        <div className="flex justify-center gap-8">
          <Image
            src="/za.avif"
            alt="Pepperoni pizza"
            className="food__img"
            height={400}
            width={400}
          />
          <Image
            src="/curry.avif"
            alt="Indian curry"
            className="food__img"
            height={400}
            width={400}
          />
          <Image
            src="/noods.avif"
            alt="Beef noodles"
            className="food__img"
            height={400}
            width={400}
          />
        </div>
      </div>
    </main>
  );
}
