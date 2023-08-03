
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "./redux/store";
import { router } from './Routes/Routes';

const App = () => {

  return (
    <div>
    
        <Provider store = {store}>
        <RouterProvider router={router} />
        </Provider>
        <Toaster/>

    </div>
  );
};

export default App;
