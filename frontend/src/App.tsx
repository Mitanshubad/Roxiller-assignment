import ProductTable from "./components/Table/ProductTable";
import Charts from "./components/Charts/Charts";

const App = () => {

  return (
    <main className="h-full m-0 ">
      <div className="p-0 ">
        <ProductTable />
      </div>

      <div className="p-0 md:p-5">
        < Charts />
      </div>
    </main>
  );
};

export default App;
