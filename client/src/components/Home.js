import Browseproject from "./BrowseProject";
import StartProject from "./createproject";
import FeaturedProject from "./featuredproject";
import CreateProject from "./startproject";
import "../styles.css";

 function Home() {
    return (
      <div className="test">
        <Browseproject />
        <FeaturedProject />
        <CreateProject />
        <StartProject />
      </div>
    );
  }
  
  export default Home;