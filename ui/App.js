
import { Provider } from "react-redux";
import Main from './Main';
import Store from "./redux/store";


export default function App() {
  return (
    <Provider store={Store}>
    <Main />
  </Provider>   

  )}
