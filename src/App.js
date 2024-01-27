import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      Counter: {counter}<br/>
      <button className="btn btn-primary" onClick={() => setCounter(()=>counter+1)}>Increment</button>
    </div>
  );
}
export default App;
