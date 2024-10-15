import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "./styles/App.css";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<ItemListContainer />} />
//         <Route path="/category/:id" element={<ItemListContainer />} />
//         <Route path="/item/:id" element={<ItemDetailContainer />} />
//       </Routes>
//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      <footer>
        <p>© 2024 Tienda Online. Todos los derechos reservados.</p>
      </footer>
    </Router>
  );
}

export default App;
