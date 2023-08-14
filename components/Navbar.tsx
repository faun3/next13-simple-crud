import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between bg-slate-800 text-slate-200 px-4 py-4 rounded-xl items-center">
      <Link href={"/"} className="cursor-pointer">
        Home
      </Link>
      <Link
        href={"/add-topic"}
        className="bg-emerald-600 rounded-lg px-4 py-2 text-slate-200 font-bold text-md">
        Add topic
      </Link>
    </nav>
  );
};
export default Navbar;
