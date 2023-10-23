import "./App.css";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <div className="max-w-full min-h-screen text-gray-500 bg-gradient-to-tl from-green-200 via-white to-green-200">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
