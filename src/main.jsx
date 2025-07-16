import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PlantPage from "./pages/PlantPage";
// import system here
import { system } from "@chakra-ui/react/preset";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* pass system value here */}
    <ChakraProvider value={system}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/plant/:plantId" element={<PlantPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
);
