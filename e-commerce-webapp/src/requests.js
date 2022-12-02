//Import axios 
import axios from "axios";

//set URL variable
const url = "http://localhost:3030";

/** AUTH CALLS */

//LOGIN FUNCTION
async function login(username, password) {
  var u = username.username_ref.current.value;
  var p = password.password_ref.current.value;

  console.log("Attempting to login....");

  return await axios({
    method: "post",
    url: url + "/auth/login",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      username: u,
      password: p,
    },
  })
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
}

//ADD NEW SELLER
async function add_seller(user) {
  console.log("Attempting to add seller....");
  

  return await axios({
    method: "post",
    url: url + "/auth/addSeller",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      first_name: user.first_name_ref.current.value,
      last_name: user.first_name_ref.last_name,
      email: user.first_name_ref.email,
      username: user.first_name_ref.username,
      password: user.first_name_ref.password,
      phone_number: user.first_name_ref.phoneNumber,
      address: user.addrss_ref.address,
      opt_in: user.opt_in_ref.opt_in,
      store_name: user.store_name_ref.store_name,
      store_id: user.store_id_ref.store_id,
    },
  })
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
}

//ADD BUYER
async function add_buyer(first_name, last_name,email,username, password, phone_number, address, opt_in, store_name, store_id) {
  console.log("Attempting to add new buyer....");
  var fn = first_name.first_name_ref.current.value;
  var ln = last_name.last_name_ref.current.value;
  var e = email.username_ref.current.value;
  var u = username.username_ref.current.value;
  var p = password.password_ref.current.value;
  var pn = phone_number.phone_number_ref.current.value
  var a = address.addrss_ref.current.value;
  var o = opt_in.opt_in_ref.current.value
  var sN = store_name.store_name_ref.current.value;
  var sID = store_id.store_id_ref.current.value



  return await axios({
    method: "post",
    url: url + "/auth/addBuyer",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      first_name: fn,
      last_name: ln,
      email: e,
      username: u,
      password: p,
      phone_number: pn,
      address: a,
      opt_in: o,
      store_name: sN,
      store_id: sID,
    },
  })
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
}

/** BUYER CALLS */
//EDIT BUYER PROFILE
async function edit_profile_buyer(first_name, last_name,email,username, password, phone_number, address, opt_in) {
  console.log("Attempting to edit buyer info....");
  var fn = first_name.first_name_ref.current.value;
  var ln = last_name.last_name_ref.current.value;
  var e = email.email_ref.current.value;
  var u = username.username_ref.current.value;
  var p = password.password_ref.current.value;
  var pn = phone_number.phone_number_ref.current.value
  var a = address.address_ref.current.value;
  var o = opt_in.opt_in_ref.current.value

  return await axios({
    method: "post",
    url: url + "/buyer/edit",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      first_name: fn,
      last_name: ln,
      email: e,
      username: u,
      password: p,
      phone_number: pn,
      address: a,
      opt_in: o,
    },
  })
    .then((response) => {
      console.log("Sending back reponse from edit_profile_buyer method")
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
}

//GET CART
async function get_cart(c_id){
  
  return await axios({
    method: "post",
    url: url + "/buyer/cart/get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      cart_id: c_id
    },
  })
    .then((response) => {
      console.log("Sending back reponse from get_cart method")
      
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });

}

//ADD CART
async function add_cart( account_id, item_id  ){
  
  return await axios({
    method: "post",
    url: url + "/buyer/cart/add",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      account_id: account_id,
      item_id: item_id,
      
    },
  })
    .then((response) => {
      console.log("Sending back reponse from add_cart method")
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });

}


//GET ORDERS 
async function get_orders(a_id){
  
  return await axios({
    method: "post",
    url: url + "/buyer/order/get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
     account_id: a_id
    },
  })
    .then((response) => {
      console.log("Sending back reponse from get_orders method")
      console.log(response)
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
}

//ADD ORDER
//GET ITEMS 
async function add_orders(a_id){
  
  return await axios({
    method: "post",
    url: url + "/buyer/order/get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
     account_id: a_id
    },
  })
    .then((response) => {
      console.log("Sending back reponse from get_orders method")
      console.log(response)
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
}

/** SELLER CALLS */
//EDIT SELLER PROFILE
async function edit_profile_seller(first_name, last_name,email,username, password, phone_number, address, opt_in) {
  console.log("Attempting to edit seller info....");
  var fn = first_name.first_name_ref.current.value;
  var ln = last_name.last_name_ref.current.value;
  var e = email.email_ref.current.value;
  var u = username.username_ref.current.value;
  var p = password.password_ref.current.value;
  var pn = phone_number.phone_number_ref.current.value
  var a = address.address_ref.current.value;
  var o = opt_in.opt_in_ref.current.value

  return await axios({
    method: "post",
    url: url + "/seller/edit",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      first_name: fn,
      last_name: ln,
      email: e,
      username: u,
      password: p,
      phone_number: pn,
      address: a,
      opt_in: o,
    },
  })
    .then((response) => {
      console.log("Sending back reponse from edit_profile_seller method")
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
}

//GET ITEMS 
async function get_items(a_id){
  
  return await axios({
    method: "post",
    url: url + "/seller/items/view",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
     account_id: a_id
    },
  })
    .then((response) => {
      console.log("Sending back reponse from get_items method")
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
}

//ADD ITEMS 
async function add_items(item_price, item_quantity, item_name, picture_url, item_description, account_id  ){
  console.log(item_name)
  var iN = item_name.item_ref.current.value;
  var iD = item_description.description_ref.current.value;
  var iP = item_price.price_ref.current.value;
  var iQ = item_quantity.quantity_ref.current.value;
  var pU = picture_url.img_ref.current.value;
  var aId = account_id

  return await axios({
    method: "post",
    url: url + "/seller/items/add",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      itemName: iN,
      itemDescription: iD,
      itemPrice: iP,
      itemQty: iQ,
      pictureUrl: pU,
      accountId: aId
    },
  })
    .then((response) => {
      console.log("Sending back reponse from add_items method")
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });

}



export { login, add_buyer, add_seller,edit_profile_buyer, get_cart, add_cart, get_orders, add_orders, edit_profile_seller, get_items, add_items, };
