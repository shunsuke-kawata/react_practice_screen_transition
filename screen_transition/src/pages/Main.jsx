import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DynamicPage from "./DynamicPage";
import Home from "./Home";

const Main = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path={`/dynamic/`}
            element={<DynamicPage param="画面遷移" />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default Main;
