import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/"><a>Home</a></Link>
      <Link href="/create-event"><a>Create Event</a></Link>
      // Add other navigation links as needed
    </nav>
  );
};

export default Navbar;
