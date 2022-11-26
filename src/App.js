import "./App.css";
import Game from "./components/Game.js";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Game/>
      </div>
    </ChakraProvider>
  );
}

export default App;