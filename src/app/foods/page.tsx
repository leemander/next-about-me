import List from "@/components/List";

export default function Page() {
  return (
    <main>
      <h2>My Favourite Foods</h2>
      <List array={["Pizza", "Curry", "Noodles"]} />
    </main>
  );
}
