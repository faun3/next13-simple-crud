import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href={"/"}>Home</Link>
      <Link href={"/add-topic"}>Add topic</Link>
    </nav>
  );
};
export default Navbar;
