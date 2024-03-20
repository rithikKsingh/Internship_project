// import UserOrderDetailsPageComponent from "./components/UserOrderDetailsPageComponent";
// import { useSelector } from "react-redux";
// import axios from 'axios'
// import { loadScript } from "@paypal/paypal-js";

// const getOrder = async (orderId) => {
//     const { data } = await axios.get("/api/orders/user/" + orderId);
//     return data;
// }

// const loadPayPalScript = () => {
//     loadScript({"client-id": "AY4K78gW1ugdnLW-NtVaK86Nx6iVPnYcYF28ix1sHzs0BJw7t5CvFmwMhu1gTpL6lZBkZJyNKvRVOgFb"})
//     .then(paypal => {
//         paypal
//         .Buttons({
//             createOrder: createPayPalOrderHandler,
//             onCancel: onCancelHandler,
//             onApprove: onApproveHandler,
//             onError: onErrorHandler,

//         })
//         .render("#paypal-container-element");
//     })
//     .catch(err => {
//         console.error("failed to load the PayPal JS SDK script", err);
//     })
// }

// const createPayPalOrderHandler = function () {
//     console.log("createPayPalOrderHandler");
// }

// const onCancelHandler = function () {
//     console.log("cancel");
// }

// const onApproveHandler = function () {
//     console.log("onApproveHandler");
// }

// const onErrorHandler = function (err) {
//     console.log("error");
// }

// const UserOrderDetailsPage = () => {
//     const userInfo = useSelector((state) => state.userRegisterLogin.userInfo);

//     const getUser = async () => {
//         const { data } = await axios.get("/api/users/profile/" + userInfo._id);
//         return data;
//     }

//   return <UserOrderDetailsPageComponent userInfo={userInfo} getUser={getUser} getOrder={getOrder} loadPayPalScript={loadPayPalScript} />;
// };

// export default UserOrderDetailsPage;



// import UserOrderDetailsPageComponent from "./components/UserOrderDetailsPageComponent";
// import { useSelector } from "react-redux";
// import axios from 'axios'
// import { loadScript } from "@paypal/paypal-js";

// const getOrder = async (orderId) => {
//     const { data } = await axios.get("/api/orders/user/" + orderId);
//     return data;
// }

// const loadPayPalScript = (cartSubtotal, cartItems) => {
//     loadScript({"client-id": "AcG2h8dtRTzakPqx7y8QuAi7ODo5zhhtNVey94z6s2XIelNN_0QzcyYcBRsI7a4uIu9uVHieRXZ3MbQB"})
//     .then(paypal => {
//         paypal
//         .Buttons(buttons(cartSubtotal, cartItems))
//         .render("#paypal-container-element");
//     })
//     .catch(err => {
//         console.error("failed to load the PayPal JS SDK script", err);
//     })
// }

// const buttons = (cartSubtotal, cartItems) => {
//     return {
//         createOrder: function (data, actions) {
//             return actions.order.create({
//                 purchase_units: [
//                     {
//                         amount: {
//                             value: cartSubtotal,
//                             breakdown: {
//                                 item_total: {
//                                     currency_code: "USD",
//                                     value: cartSubtotal,
//                                 }
//                             }
//                         },
//                         items: cartItems.map(product => {
//                             return {
//                                name: product.name,
//                                 unit_amount: {
//                                    currency_code: "USD", 
//                                    value: product.price,
//                                 },
//                                 quantity: product.quantity,
//                             }
//                         })
//                     }
//                 ]
//             })
//         },
//         onCancel: onCancelHandler,
//         onApprove: onApproveHandler,
//         onError: onErrorHandler,
//     }
// }


// const onCancelHandler = function () {
//     console.log("cancel");
// }

// const onApproveHandler = function () {
//     console.log("onApproveHandler");
// }

// const onErrorHandler = function (err) {
//     console.log("error");
// }

// const UserOrderDetailsPage = () => {
//     const userInfo = useSelector((state) => state.userRegisterLogin.userInfo);

//     const getUser = async () => {
//         const { data } = await axios.get("/api/users/profile/" + userInfo._id);
//         return data;
//     }

//   return <UserOrderDetailsPageComponent userInfo={userInfo} getUser={getUser} getOrder={getOrder} loadPayPalScript={loadPayPalScript} />;
// };

// export default UserOrderDetailsPage;

// import UserOrderDetailsPageComponent from "./components/UserOrderDetailsPageComponent";
// import { useSelector } from "react-redux";
// import axios from 'axios'
// import { loadScript } from "@paypal/paypal-js";

// const getOrder = async (orderId) => {
//     const { data } = await axios.get("/api/orders/user/" + orderId);
//     return data;
// }

// const loadPayPalScript = (cartSubtotal, cartItems) => {
//     loadScript({"client-id": "AcG2h8dtRTzakPqx7y8QuAi7ODo5zhhtNVey94z6s2XIelNN_0QzcyYcBRsI7a4uIu9uVHieRXZ3MbQB"})
//     .then(paypal => {
//         paypal
//         .Buttons(buttons(cartSubtotal, cartItems))
//         .render("#paypal-container-element");
//     })
//     .catch(err => {
//         console.error("failed to load the PayPal JS SDK script", err);
//     })
// }

// const buttons = (cartSubtotal, cartItems) => {
//     return {
//         createOrder: function (data, actions) {
//             return actions.order.create({
//                 purchase_units: [
//                     {
//                         amount: {
//                             value: cartSubtotal,
//                             breakdown: {
//                                 item_total: {
//                                     currency_code: "USD",
//                                     value: cartSubtotal,
//                                 }
//                             }
//                         },
//                         items: cartItems.map(product => {
//                             return {
//                                name: product.name,
//                                 unit_amount: {
//                                    currency_code: "USD", 
//                                    value: product.price,
//                                 },
//                                 quantity: product.quantity,
//                             }
//                         })
//                     }
//                 ]
//             })
//         },
//         onCancel: onCancelHandler,
//         onApprove: function (data, actions) {
//             return actions.order.capture().then(function (orderData) {
//                 var transaction = orderData.purchase_units[0].payments.captures[0];
//                 if (transaction.status === "COMPLETED" && Number(transaction.amount.value) === Number(cartSubtotal)) {
//                     console.log('update order in database');
//                 }
//             })
//         },
//         onError: onErrorHandler,
//     }
// }


// const onCancelHandler = function () {
//     console.log("cancel");
// }

// const onApproveHandler = function () {
//     console.log("onApproveHandler");
// }

// const onErrorHandler = function (err) {
//     console.log("error");
// }

// const UserOrderDetailsPage = () => {
//     const userInfo = useSelector((state) => state.userRegisterLogin.userInfo);

//     const getUser = async () => {
//         const { data } = await axios.get("/api/users/profile/" + userInfo._id);
//         return data;
//     }

//   return <UserOrderDetailsPageComponent userInfo={userInfo} getUser={getUser} getOrder={getOrder} loadPayPalScript={loadPayPalScript} />;
// };

// export default UserOrderDetailsPage;


import UserOrderDetailsPageComponent from "./components/UserOrderDetailsPageComponent";
import { useSelector } from "react-redux";
import axios from 'axios'
import { loadScript } from "@paypal/paypal-js";

const getOrder = async (orderId) => {
    const { data } = await axios.get("/api/orders/user/" + orderId);
    return data;
}

const loadPayPalScript = (cartSubtotal, cartItems, orderId, updateStateAfterOrder) => {
    loadScript({"client-id": "AcG2h8dtRTzakPqx7y8QuAi7ODo5zhhtNVey94z6s2XIelNN_0QzcyYcBRsI7a4uIu9uVHieRXZ3MbQB"})
    .then(paypal => {
        paypal
        .Buttons(buttons(cartSubtotal, cartItems, orderId, updateStateAfterOrder))
        .render("#paypal-container-element");
    })
    .catch(err => {
        console.error("failed to load the PayPal JS SDK script", err);
    })
}

const buttons = (cartSubtotal, cartItems, orderId, updateStateAfterOrder) => {
    return {
        createOrder: function (data, actions) {
            return actions.order.create({
                purchase_units: [
                    {
                        amount: {
                            value: cartSubtotal,
                            breakdown: {
                                item_total: {
                                    currency_code: "USD",
                                    value: cartSubtotal,
                                }
                            }
                        },
                        items: cartItems.map(product => {
                            return {
                               name: product.name,
                                unit_amount: {
                                   currency_code: "USD", 
                                   value: product.price,
                                },
                                quantity: product.quantity,
                            }
                        })
                    }
                ]
            })
        },
        onCancel: onCancelHandler,
        onApprove: function (data, actions) {
            return actions.order.capture().then(function (orderData) {
                var transaction = orderData.purchase_units[0].payments.captures[0];
                if (transaction.status === "COMPLETED" && Number(transaction.amount.value) === Number(cartSubtotal)) {
                    updateOrder(orderId)
                    .then(data => {
                        if (data.isPaid) {
                            updateStateAfterOrder(data.paidAt);
                        }
                    })
                    .catch((er) => console.log(er));
                }
            })
        },
        onError: onErrorHandler,
    }
}


const onCancelHandler = function () {
    console.log("cancel");
}


const onErrorHandler = function (err) {
    console.log("error");
}

const updateOrder = async (orderId) => {
    const { data } = await axios.put("/api/orders/paid/" + orderId);
    return data;
}

const UserOrderDetailsPage = () => {
    const userInfo = useSelector((state) => state.userRegisterLogin.userInfo);

    const getUser = async () => {
        const { data } = await axios.get("/api/users/profile/" + userInfo._id);
        return data;
    }

  return <UserOrderDetailsPageComponent userInfo={userInfo} getUser={getUser} getOrder={getOrder} loadPayPalScript={loadPayPalScript} />;
};

export default UserOrderDetailsPage;
