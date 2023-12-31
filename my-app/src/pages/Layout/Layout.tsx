import "../../styles/globals.css";
import Footer from "../Footer/Footer";
import HeaderTop from "../HeaderTop/HeaderTop";
import MainContact from "../MainContact/MainContact";
import MainGeneralInfo from "../MainGeneralInfo/MainGeneralInfo";
import MainImageTop from "../MainImageTop/MainImageTop";
import MainNews from "../MainNews/MainNews";
import MainServices from "../MainServices/MainServices";
import Navbar from "../Navbar/Navbar";
import PhoneButtons from "../PhoneButtons/PhoneButtons";
import ScrollUpButton from "../ScrollUpButton/ScrollUpButton";

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
      <Footer />
      <ScrollUpButton />
      <PhoneButtons />
    </div>
  );
};

export default Layout;
