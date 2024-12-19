import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex justify-between">
      <Logo />
      <nav>
        <Link href="/">Home</Link>
        <Link href="/events/all">All events</Link>
      </nav>
    </header>
  );
};

export default Header;
