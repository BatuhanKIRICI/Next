import "../../styles/globals.css";
import HeaderTop from "../HeaderTop/HeaderTop";
import Navbar from "../Navbar/Navbar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="bg-rose-950">
      <HeaderTop />
    </div>
  );
};

export default Layout;
