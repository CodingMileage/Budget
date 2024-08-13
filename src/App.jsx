import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Auth } from "./Pages/auth/index";
import { Budget } from "./Pages/budget/index";
import { Test } from "./Pages/test/index";
import { Test2 } from "./Pages/test2/index";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" exact element={<Auth />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/test" element={<Test />} />
            <Route path="/test2" element={<Test2 />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
