
import './App.css';
import "./style/halamanutama.css";
// import components
import Navigationbar from './components/Navigationbar';
import Intro from "./components/Intro";
import Trendingmovie from "./components/Trending-movie";
import Superhero from "./components/Superhero";
function App() {
  return (
   <div>
     {/* intro sections */}
     <div className="bekgron">
     <Navigationbar/>   
     <Intro/>
     </div>
     {/* end of intro */}
     {/* Trending section */}
     <div className="trending-movie">
       <Trendingmovie/> 
     </div>
     {/* end of trending section */}
     <div className="superhero">
       <Superhero/>
     </div>
   </div>
  );
}

export default App;

