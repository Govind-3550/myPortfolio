import NavBar from "./NavBar";
import { FaRegUser} from "react-icons/fa";
import SectionOne from './sectionOne';
import Contact from './Contact';
import "./App.css";
import Timeline from "./Timeline";
import Footer from "./Footer";
import Projects from "./Projects";
import FloatingSocials from "./FloatingSocials";

function App() {
  const navebarItems = ['About','Projects','Resume','Contact'];
  let heading = `Hey folks, I'm `;
  let description = `Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.`;
  const logoSvg = <FaRegUser></FaRegUser>;
  return (
    <>
    <NavBar logo= {logoSvg} liName = {navebarItems} />
    <SectionOne heading={heading} description={description}></SectionOne>
    <Projects></Projects>
    <Timeline></Timeline>
    <Contact></Contact>
    <Footer></Footer>
    <FloatingSocials></FloatingSocials>
    </>
  )
}

export default App
