import { Outlet } from "react-router";
import "./App.css";
import Footer from "./component/_ui/Footer";
import Navbar from "./component/_ui/Navbar";
import Paragraph from "./component/_ui/Text";

function App() {
  return (
    <>
      <Navbar />
       <Outlet/>
      <Footer />
    </>
  );
}

export default App;
