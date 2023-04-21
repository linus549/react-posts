import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "components/App";
import Start from "components/Start";
import Latest from "components/Latest";
import Search from "components/Search/Search";
import Faq from "components/Faq/Faq";
import Post from "components/Post/Post";
import Registration from "components/Registration/Registration";
import NoMatch from "components/NoMatch";

const root = ReactDOM.createRoot(document.getElementById("app-root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Start />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/search" element={<Search />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
