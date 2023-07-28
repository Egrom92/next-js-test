import Link from "next/link";
import { Navigation } from "./Navigation";


const Header = () => {
  const navLinks = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Blog',
      path: '/blog'
    }
  ]
  
  return (
    <nav style={{display: 'flex', width: '200px', justifyContent: 'space-between'}}>
      <Navigation navLinks={navLinks} />
    </nav>
  );
};

export { Header }