import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import "../data/cart-class.js";
// import "../data/backend-practice.js";

async function loadPage() {
  try {
    // throw 'error1';  //manually add error
    await loadProductsFetch();
    const value = await new Promise((resolve, reject) => {
      // throw 'error2';
      loadCart(() => {
        // reject('error3');  //in promise we havw to create reject we can't use throw in promise

        resolve("value3");
      });
    });
  } catch (error) {
    console.log("unexpected error. Please try again later.");
  }

  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

/*

Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

*/

// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve();
//   });
// }).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });

/*
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});*/
