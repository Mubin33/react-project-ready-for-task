import "./App.css";
import Footer from "./component/_ui/Footer";
import Navbar from "./component/_ui/Navbar";
import Paragraph from "./component/_ui/Text";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Paragraph word="Hello bangladesh" className="text-7xl font-bold" />
        <Paragraph word="Hello bangladesh" className="text-[40px] font-bold" />
        <Paragraph
          word="Hello bangladesh"
          className="text-[40px] text-gray-300"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
