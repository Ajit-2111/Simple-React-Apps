import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Interest from "./components/Interest";

function App() {
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center text-center">
        <div className="col-md-7">
          <div className="card p-3 py-4">
            <Info />

            <About />
            <Interest />

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
