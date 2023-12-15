import "../../styles/globals.css";
import HeaderTop from "../HeaderTop/HeaderTop";
import Navbar from "../Navbar/Navbar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div>
      <HeaderTop />
      <Navbar />
    </div>
  );
};

export default Layout;
