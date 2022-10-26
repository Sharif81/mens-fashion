import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Orders from './components/Orders/Orders';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Orders></Orders>
      <Footer></Footer>
    </div>
  );
}

export default App;
