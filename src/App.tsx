import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/Templates/NavigationBar";
import MovieHomePage from "./components/Templates/MovieHomePage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<MovieHomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
