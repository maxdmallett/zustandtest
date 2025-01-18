import { Input1 } from "./Input1";
import { Input2 } from "./Input2";
import { Preview } from "./Preview";
import { ResetButton } from "./ResetButton";

function App() {
    return (
        <div className="main-container">
          <div className="col">
            <h2>Input value</h2>
            <Input1 />
            <Input2 />
            <ResetButton />
          </div>
          <div className="col">
            <Preview />
          </div>
        </div>
    );
}

export default App;
