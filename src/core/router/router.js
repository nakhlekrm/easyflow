import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Pricing from "../screens/pricing/pricing";
import Why from "../screens/why/why";

export const route = {
  why: "/",
  pricing: "/pricing",
  company: "/company"
}

const AppRouter = (props) => {
  return (
   
  
    <Router>
      <Routes>
      <Route path={route.home} element={Home />} />
        <Route path={route.why} element={<Why />} />
        <Route path={route.pricing} element={<Pricing />} />
      </Routes>
    </Router >
   
  )
}
export default AppRouter;