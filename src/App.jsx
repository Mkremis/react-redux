import Contador from './components/Contador';
import { Provider } from 'react-redux';
import store from './store';
import ShoppingCart from './components/ShoppingCart';
import CrudApi from './components/CrudApi';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Getting Started with Redux</h1>
        <Contador />
      </div>
      <hr />
      <ShoppingCart />
      <hr />
      <CrudApi />
    </Provider>
  );
}

export default App;
