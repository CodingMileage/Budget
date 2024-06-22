import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Auth } from "./Pages/auth/index";
import { Budget } from "./Pages/budget/index";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" exact element={<Auth />} />
            <Route path="/budget" element={<Budget />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
