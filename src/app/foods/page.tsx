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
        <h3 className="text-2xl font-semibold my-4">Gallery</h3>
        <div className="flex gap-8">
          <img
            src="https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Pepperoni pizza"
            className="food__img"
          />
          <img
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Indian curry"
            className="food__img"
          />
          <img
            src="https://images.unsplash.com/photo-1577859714523-5f0b6c98ece7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Beef noodles"
            className="food__img"
          />
        </div>
      </div>
    </main>
  );
}
