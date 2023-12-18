import loadable from "@loadable/component";

export const HomePage = loadable(() =>
  import("../../pages/site-customer/homepage/home-page")
);
export const Products = loadable(() =>
  import("../../pages/site-customer/products/products")
);
