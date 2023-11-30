
import "./App.css";

let name = "Samyuk";

function App() {
  return (
    <>
      <nav id="sam">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name}</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
          consectetur tempore rerum similique est possimus ut nam mollitia iure
          natus! Veritatis atque sed reprehenderit nihil. Quaerat illum ad dicta
          illo soluta deserunt, quo pariatur.
        </p>
        <img
          src="https://miro.medium.com/v2/resize:fit:800/1*VFStJoxV3Wa8Ees7ZtnN7A.png"
          alt="React"
        />
      </div>
    </>
  );
}

export default App;
