import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Home from "./views/Home";
import '@fontsource-variable/inter';

function App() {
  return (
    <div className="font-['Inter_Variable']">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
