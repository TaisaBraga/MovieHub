import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/Templates/NavigationBar";
import MovieHomePage from "./components/Templates/MovieHomePage";
import { Suspense } from "react";
import Loader from "./components/Molecules/Loader";

function App() {
  return (
    <BrowserRouter>
      <div >
        <NavigationBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<MovieHomePage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
