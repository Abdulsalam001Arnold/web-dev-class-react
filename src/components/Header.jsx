export const Header = ({title}) => {
  return (
    <section className="w-full p-4 bg-blue-950 flex flex-col justify-between">
      <h1 className="text-xl text-red-700 leading-1.5">
        {title}
      </h1>
    </section>
  );
}
