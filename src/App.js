
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  return (
    <>
      <Navbar title="Aroni-Samyuk" home="Home" about="About" />
      <div className="container my-5">
      <TextForm heading = "Enter the text here"/>
      </div>
    </>
  );
}

export default App;
