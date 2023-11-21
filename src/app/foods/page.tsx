import List from "@/components/List";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favourite Food | Lee Mander",
  description: "Lee Mander's favourite foods",
};

export default function Page() {
  return (
    <main className="bg-orange-200 h-full text-red-900 py-5 ">
      <div className="container mx-auto h-full">
        <h2 className="text-2xl font-bold">My Favourite Food</h2>
        <List array={["Pizza", "Curry", "Noodles"]} />
      </div>
    </main>
  );
}
