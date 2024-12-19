import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex justify-between border-b border-white/ h-14 items-center px-3 md:px-9">
      <Logo />
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/events/all">All events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
