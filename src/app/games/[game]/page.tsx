type gameParam = { params: { game: string } };

export default function Page({ params }: gameParam) {
  function renderTitle(string: string) {
    const arr = string.split("%20");
    return arr
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ")
      .replace("%3A", ":");
  }

  return (
    <main className="py-5">
      <div className="container mx-auto h-full">
        <h2 className="text-2xl font-bold">{renderTitle(params.game)}</h2>
      </div>
    </main>
  );
}
