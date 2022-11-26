import './App.css';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (    
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <p>Super app</p>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
