import "../../styles/globals.css";
import HeaderTop from "../HeaderTop/HeaderTop";
import MainGeneralInfo from "../MainGeneralInfo/MainGeneralInfo";
import MainImageTop from "../MainImageTop/MainImageTop";
import MainServices from "../MainServices/MainServices";
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
      <MainGeneralInfo />
      <MainServices />
    </div>
  );
};

export default Layout;
