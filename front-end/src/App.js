// // DEPENDENCIES
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";

// // PAGES
import Details from "./Pages/Details";
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import New from "./Pages/New";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          main
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/:id" element={<Details />} />
            <Route path="/new" element={<New />} />
            <Route path="/:id/edit" element={<Edit />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
