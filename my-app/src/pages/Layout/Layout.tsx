import "../../styles/globals.css";
import HeaderTop from "../HeaderTop/HeaderTop";
import MainImageTop from "../MainImageTop/MainImageTop";
import Navbar from "../Navbar/Navbar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div>
      <HeaderTop />
      <Navbar />
      <MainImageTop />
    </div>
  );
};

export default Layout;
