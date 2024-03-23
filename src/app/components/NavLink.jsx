import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block text-white py-2 pl-3 pr-10 sm:text-xl rounded md:p-0 hover:text-pink"
    >
      {title}
    </Link>
  );
};

export default NavLink;
