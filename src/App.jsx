import "bootstrap/dist/css/bootstrap.min.css";
import { AppRouter } from "./routers/AppRouter";
import { ProductContextProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductContextProvider>
      <AppRouter />
    </ProductContextProvider>
  );
}

export default App;
