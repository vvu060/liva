const baseUrl = process.env.REACT_APP_BASE_URL;

export const headersPublic = {
  "X-Authorization": process.env.REACT_APP_CHEC_PUBLIC_KEY,
  "Content-Type": "application/json",
};

export const headersSecret = {
  "X-Authorization": process.env.REACT_APP_CHEC_SECRET_KEY,
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const endpoints = {
  products: `${baseUrl}/products`,
  categories: `${baseUrl}/categories`,
  cart: `${baseUrl}/carts`,
  customers: `${baseUrl}/customers`,
  checkout: `${baseUrl}/checkouts`,
};
