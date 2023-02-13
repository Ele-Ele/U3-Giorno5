import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyCards from "./components/MyCards";
import MyNav from "./components/NavBar";
function App() {
  return (
    <div className="App">
      <MyNav />
      <MyCards />
    </div>
  );
}

export default App;
