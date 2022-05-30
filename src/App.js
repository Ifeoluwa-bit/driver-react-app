import Contact from "./components/Contact/Contact";
import Handling from "./components/Handling/Handling";
import Navbar from "./components/Navbar/Navbar";
import Options from "./components/Options/Options";
import Power from "./components/Power/Power";
import Speed from "./components/Speed/Speed";

function App() {
  return (
    <>
      <Navbar />
      <Power />
      <Speed />
      <Handling />
      <Options />
      <Contact />
    </>
  );
}

export default App;
