import "../../styles/globals.css";
import HeaderTop from "../HeaderTop/HeaderTop";
import MainContact from "../MainContact/MainContact";
import MainGeneralInfo from "../MainGeneralInfo/MainGeneralInfo";
import MainImageTop from "../MainImageTop/MainImageTop";
import MainNews from "../MainNews/MainNews";
import MainServices from "../MainServices/MainServices";
import Navbar from "../Navbar/Navbar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="flex flex-col relative">
      <HeaderTop />
      <Navbar />
      <MainImageTop />
      <MainGeneralInfo />
      <MainServices />
      <MainContact />
      <MainNews />
    </div>
  );
};

export default Layout;
