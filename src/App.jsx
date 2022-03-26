
import './app.scss';
import Topbar from './components/topbar/Topbar';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="app">
     <Topbar />
     <div className="sections">
       <Portfolio />
       <Contact />

     </div>
    </div>
  );
}

export default App;
