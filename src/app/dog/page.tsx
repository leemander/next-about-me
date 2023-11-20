import List from "@/components/List";

export default function Page() {
  return (
    <main className="bg-orange-200 text-red-900 py-5">
      <div className="container mx-auto h-full">
        <h2 className="text-2xl font-bold">My Dawg</h2>
        <img
          className="w-80 h-80 object-cover rounded-full border-green-500 border-8 mx-auto my-4"
          src="/grace_bday.jpg"
          alt="Grace"
        />
        <p>
          I have a pet dog called Grace. Grace is a German Shorthaired Pointer
          (GSP) and she is 3 and a half years old.
        </p>
        <h3 className="text-xl font-semibold my-4">
          Grace's favourite things:
        </h3>
        <List
          array={["Tennis balls", "Cheese", "Watching for cats", "Belly rubs"]}
        />
      </div>
    </main>
  );
}
