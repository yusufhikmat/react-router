import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Newpost from './components/Newpost';
import About from './components/About';
import Missing from './components/Missing';
import PostPage from './components/PostPage';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
  useHisory,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
      <Route>
      <Home/>
      </Route>
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
