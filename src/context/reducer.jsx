import storeProducts from "./api/data";

export let initialState = {
  products: SetProducts(),
  cart: [],
  modalOpen: false,
  modalProduct: {},
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
};

export function addTotals(state) {
  let subTotal = 0;
  state.cart.map((item) => (subTotal += item.total));
  let tempTax = subTotal * 0.1;
  let tax = parseFloat(tempTax.toFixed(2));
  let total = subTotal + tax;
  return {
    cartSubTotal: subTotal,
    cartTax: tax,
    cartTotal: total,
  };
}

export function SetProducts() {
  let tempProducts = [];
  storeProducts.forEach((item) => {
    let singleItem = { ...item };
    tempProducts = [...tempProducts, singleItem];
  });
  return tempProducts;
}

let reducer = (state, action) => {
  switch (action.type) {
    
    case "ADD_TOcART":
      let tempProducts = [...state.products];
      let productItems = tempProducts.find((item) => item.id === action.id);
      if (productItems) {
        productItems.inCart = true;
        productItems.total = productItems.price;
        productItems.count = 1;
      } else {
        console.warn(
          `can't remove product (id: ${action.id}) as its not in cart`
        );
      }
      return {
        ...state,
        modalProduct: productItems,
        modalOpen: true,
        cart: [...state.cart, productItems],
      };

    case "CLOSE_MODAL": {
      state.modalOpen = false;
      return {
        ...state,
      };
    }

    case "ADD_TOTAL": {
      let subTotal = 0;
      state.cart.map((item) => (subTotal += item.total));
      let tempTax = subTotal * 0.1;
      let tax = parseFloat(tempTax.toFixed(2));
      let total = subTotal + tax;
      return {
        ...state,
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    }

    case "CLEAR_CART": {
      let tempProduct = [...state.products].map((item) => ({
        ...item,
        inCart: false,
      }));
      state.cartSubTotal = 0;
      state.cartTax = 0;
      state.cartTotal = 0;
      state.cart = [];
      return {
        ...state,
        products: tempProduct,
      };
    }

    case "REMOVE": {
      let tempCart = [...state.cart];
      let tempProducts = [...state.products];
      tempCart = tempCart.filter((item) => item.id !== action.id);
      let index = tempProducts.findIndex((item) => item.id === action.id);
      let removedProduct = tempProducts[index];
      removedProduct.inCart = false;
      return {
        ...state,
        cart: tempCart,
      };
    }

    case "INCREMENT_NumberOfCART": {
      let tempCart = [...state.cart];
      let selectedProduct = tempCart.find((item) => item.id === action.id);
      let index = tempCart.indexOf(selectedProduct);
      let product = tempCart[index];
      let { price, count } = product;
      let newCount = count + 1;
      tempCart[index] = {
        ...product,
        count: newCount,
        total: newCount * price,
      };
      return {
        ...state,
        cart: [...tempCart],
      };
    }

    case "DECREMENT_NumberOfCART": {
      let tempCart = [...state.cart];
      let index = tempCart.findIndex((item) => item.id === action.id);
      let product = tempCart[index];
      let { price, count } = product;
      let newCount = count - 1;
      tempCart[index] = {
        ...product,
        count: newCount,
        total: newCount * price,
      };
      return {
        ...state,
        cart: [...tempCart],
      };
    }

    default:
      return state;
  }
};

export default reducer;
