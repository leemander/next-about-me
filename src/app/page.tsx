import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-orange-200 text-red-900">
      <div className="container mx-auto grid grid-cols-2 items-center h-full">
        <Image
          className="h-100 w-100 rounded-full border-green-500 border-8 border-solid mx-auto my-4"
          src="/me.png"
          alt="Lee Mander"
          height={500}
          width={500}
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
