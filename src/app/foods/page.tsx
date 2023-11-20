import List from "@/components/List";

export default function Page() {
  return (
    <main className="bg-orange-200 text-red-900 py-5">
      <div className="container mx-auto h-full">
        <h2 className="text-2xl font-bold">My Favourite Foods</h2>
        <List array={["Pizza", "Curry", "Noodles"]} />
      </div>
    </main>
  );
}
