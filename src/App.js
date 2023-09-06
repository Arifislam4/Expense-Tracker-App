import './App.css';
import Container from './Components/Container/container';
import Header from './Components/Header/header';

import { GlobalProvider } from './contexts/GlobalState';

function App() {
  return (
    <>
    <GlobalProvider>
      <Header />
      <Container />
      </GlobalProvider>
    </>
  );
}

export default App;
