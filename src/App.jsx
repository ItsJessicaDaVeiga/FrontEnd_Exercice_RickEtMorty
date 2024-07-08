import Header from "./components/Header.jsx";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Accueil from "./pages/Accueil.jsx";
import Techno from "./pages/Techno.jsx";
import List from "./pages/List.jsx";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <Accueil/> }/> 
        <Route path="/list" element={ <List/>} />
        <Route path="/techno" element={ <Techno/>} />
      </Routes>
    </Router>
  )
}