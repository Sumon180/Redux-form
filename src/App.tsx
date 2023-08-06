import { Provider } from "react-redux";
import "./App.css";
import UserForm from "./components/FormComponent";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <UserForm />
      </Provider>
    </>
  );
}

export default App;
