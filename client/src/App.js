import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsScreen from "./screens/ProductsScreen";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/products' element={<ProductsScreen />} />
          </Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
