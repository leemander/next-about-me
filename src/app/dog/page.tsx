import List from "@/components/List";
import Link from "next/link";

import { Metadata } from "next";

import styles from "./dog.module.css";

export const metadata: Metadata = {
  title: "My Dog | Lee Mander",
  description: "All about Lee Mander's pet dog Grace.",
};

type filterQuery = { filter: string };
import Image from "next/image";
import { merriweather } from "@/app/layout";

export default function Page({ searchParams }: { searchParams: filterQuery }) {
  const filter = searchParams.filter;

  return (
    <main className="bg-orange-200 text-red-900 py-5">
      <div className="container mx-auto h-full">
        <h2 className={`text-2xl ${merriweather.className}`}>My Dawg</h2>
        <div className="mx-auto w-2/3 grid my-4">
          <div className="bg-orange-400 w-full rounded-t-xl">
            <Image
              className={`${filter} w-80 h-80 object-cover rounded-full my-4 mx-auto`}
              src="/grace_bday.jpg"
              alt="Grace"
              height={320}
              width={320}
            />
          </div>
          <div>
            <ul className=" bg-green-700 flex items-center text-center h-full px-8 py-4 w-full gap-2 w-full rounded-b-xl">
              <li className="w-full">
                <Link
                  className={styles.filter_button}
                  href={`/dog?filter=invert`}
                >
                  Invert
                </Link>
              </li>
              <li className="w-full">
                <Link
                  className={styles.filter_button}
                  href={`/dog?filter=sepia`}
                >
                  Sepia
                </Link>
              </li>
              <li className="w-full">
                <Link
                  className={styles.filter_button}
                  href={`/dog?filter=grayscale`}
                >
                  Grayscale
                </Link>
              </li>
              <li className="w-full">
                <Link className={styles.filter_button} href={`/dog`}>
                  Remove Filter
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p>
          I have a pet dog called Grace. Grace is a German Shorthaired Pointer
          (GSP) and she is 3 and a half years old.
        </p>
        <h3 className={`text-xl my-4 ${merriweather.className}`}>
          Grace's favourite things:
        </h3>
        <List
          array={["Tennis balls", "Cheese", "Watching for cats", "Belly rubs"]}
        />
      </div>
    </main>
  );
}
