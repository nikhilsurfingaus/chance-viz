import HeroSection from '../components/HeroUI/HeroSection'
import HomeExplain from '../components/HomeUI/HomeExplain'
import ScrollToTop from "react-scroll-to-top";
import HomeSummary from '../components/HomeUI/HomeSummary';

const Home = () => {
  return (
    <div>
      <ScrollToTop smooth color="#1A64BA " />
      <HeroSection />
      <hr className="glowing-hr" style={{marginTop: '-6px'}} /> 
      <HomeExplain />
      <hr className="glowing-hr" /> 
      <HomeSummary />
    </div>
  )
}

export default Home