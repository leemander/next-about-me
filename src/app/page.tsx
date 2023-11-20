export default function Home() {
  return (
    <main className="bg-orange-200 text-red-900">
      <div className="container mx-auto grid grid-cols-2 items-center h-full">
        <img
          className="h-80 w-80 rounded-full border-green-500 border-4 border-solid mx-auto my-4"
          src="https://avatars.githubusercontent.com/u/76167331?v=4"
          alt="Lee Mander"
        />
        <p>
          Hello! My name is{" "}
          <span className="text-green-500 font-semibold text-xl">Lee</span> and
          I am an aspiring web developer. I've made this page to practice my
          Next.js skills and celebrate some of my favourite things, I hope you
          like it!
        </p>
      </div>
    </main>
  );
}
