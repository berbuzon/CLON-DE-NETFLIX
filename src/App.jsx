import { environment } from "@environments";

const App = () => {
  return (
    <div>
      <h1>ESTO ES PARA QUE EL DESARROLLADOR TESTEE</h1>
      <h2>{environment.title}</h2>
    </div>
  );
};

export default App;
