import Link from "next/link";
import Logo from "./Logo";
const links = [
  {
    path: "Home",
    href: "/",
  },
  {
    path: "All events",
    href: "/events/all",
  },
];
const Header = () => {
  return (
    <header className="flex justify-between border-b border-white/ h-14 items-center px-3 md:px-9">
      <Logo />
      <nav>
        <ul className="flex gap-x-6 text-sm">
          {links.map((link) => (
            <li
              key={link.path}
              className="text-white/50 hover:text-white transition"
            >
              <Link href={link.href}>{link.path}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
