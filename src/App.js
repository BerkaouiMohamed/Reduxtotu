import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Afiichage from './Afiichage';
import { store } from './redux/Store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
   <Afiichage/>
    </div>
    </Provider> 
  );
}

export default App;
