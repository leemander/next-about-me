export default function List({ array }: { array: Array<string> }) {
  return (
    <ul className="list-none my-1 grid gap-1">
      {array.map((item, index) => {
        return (
          <li className="list__item" key={index}>
            {item}
          </li>
        );
      })}
    </ul>
  );
}
