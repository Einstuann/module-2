import { Route, Routes } from "react-router-dom";
import { layoutCustomer } from "../config/route-config/customer-route";
import LayoutContainer from "./layoutContainer";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/">
        {layoutCustomer.map(({ path, component, isHeader, isFooter }) => (
          <Route
            path={path}
            element={
              <LayoutContainer
                component={component}
                isHeader={isHeader}
                isFooter={isFooter}
              />
            }
          />
        ))}
      </Route>
    </Routes>
  );
};

export default RouterComponent;
