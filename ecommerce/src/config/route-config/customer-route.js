import { Component } from "react";
import { URL } from "../../constants/api-constants";
import { Products } from "../loadable-routes/clientLoadable";
import { HomePage } from "../loadable-routes/clientLoadable";

export const layoutCustomer = [
  {
    path: URL.HOME,
    component: Products,
    isHeader: true,
    isFooter: true,
  },
];
