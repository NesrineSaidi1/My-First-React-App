import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Formulaire from "./components/Formulaire";
import Navbarr from "./components/Navbarr";
function App() {
  return (
    <div className="App">
      <Navbarr />
      <Formulaire />
    </div>
  );
}

export default App;
