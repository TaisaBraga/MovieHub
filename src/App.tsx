import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/Templates/NavigationBar";
import MoviePage from "./components/Templates/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<MoviePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
