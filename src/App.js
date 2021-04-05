import './App.css';
import Layout from './Components/Layout'
import data from './data.json'
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  
  let d=data[0];
  fetch("/data.json")
  .then()

  return (
    <Provider store={store}>
    <div className="App">
      <Layout/>
    </div>
    </Provider>
  );
}

export default App;
