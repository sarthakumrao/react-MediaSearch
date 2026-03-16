import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5 bg-(--c1) text-2xl font-bold ">
      <h2 className="font-medium text-2xl">Media Search</h2>
      <div className="flex gap-5 text-xl items-center">
        <Link
          className="text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2  "
          to="/"
        >
          Search
        </Link>
        <Link
          className="text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2"
          to="/collection"
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
