import './App.css';
import { Footer } from './MyComponents/Footer';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';

function App() {
  return (
    <div className="App">
      <Header />
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
