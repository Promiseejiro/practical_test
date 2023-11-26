import Favourite from "../favorite/favorite";
import Logo from "../logo/logo";

import './header.css'
const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Favourite />
    </header>
  );
};

export default Header;
