
import './app.scss';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="app">
     <Topbar />
     <div className="sections">
       <Intro />
       <Contact />

     </div>
    </div>
  );
}

export default App;
