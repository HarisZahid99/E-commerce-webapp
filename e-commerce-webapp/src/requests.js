import axios from 'axios';
const url = "http://localhost:3030"

export const login = async (username, password) => {
  var u = username.username_ref.current.value;
  var p = password.password_ref.current.value;
  console.log(username.username_ref.current.value);
  console.log("Attempting to login....");

  await axios({
    method: 'post',
    url: url + '/auth/login',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      username: u,
      password: p
    }
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return false;
    });
};

export const addBuyer = async (firstName, lastName, email, username, password, phoneNumber, address, optIn) => {
  var fn = firstName.firstName_ref.current.value;
  var ln = lastName.lastName_ref.current.value;
  var e = email.email_ref.current.value;
  var u = username.username_ref.current.value;
  var p = password.password_ref.current.value;
  var pn = phoneNumber.phoneNumber_ref.current.value;
  var a = address.address_ref.current.value;
  var o = optIn.optIn_ref.current.value;

  await axios({
    method: 'post',
    url: url + '/auth/addBuyer',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      firstName: fn,
      lastName: ln,
      email: e,
      username: u,
      password: p,
      phoneNumber: pn,
      address: a,
      optIn: o
    }
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return false;
    });
};

export const addSeller = async (firstName, lastName, email, username, password, phoneNumber, address, optIn, storeName, storeId) => {
  var fn = firstName.firstName_ref.current.value;
  var ln = lastName.lastName_ref.current.value;
  var e = email.email_ref.current.value;
  var u = username.username_ref.current.value;
  var p = password.password_ref.current.value;
  var pn = phoneNumber.phoneNumber_ref.current.value;
  var a = address.address_ref.current.value;
  var o = optIn.optIn_ref.current.value;
  var sn = storeName.storeName_ref.current.value;
  var si = storeId.storeId_ref.current.value;

  await axios({
    method: 'post',
    url: url + '/auth/addSeller',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      firstName: fn,
      lastName: ln,
      email: e,
      username: u,
      password: p,
      phoneNumber: pn,
      address: a,
      optIn: o,
      storeName: sn,
      storeId: si
    }
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return false;
    });
};

export const addOrder = async (orderStatus, itemId, userId, orderQty, orderPrice, cardNumber, securityCode, expiry, cardholderName) => {
  var os = orderStatus.orderStatus_ref.current.value;
  var ii = itemId.itemId_ref.current.value;
  var ui = userId.userId_ref.current.value;
  var oq = orderQty.orderQty_ref.current.value;
  var op = orderPrice.orderPrice_ref.current.value;
  var cn = cardNumber.cardNumber_ref.current.value;
  var s = securityCode.securityCode_ref.current.value;
  var e = expiry.expiry_ref.current.value;
  var ch = cardholderName.cardholderName_ref.current.value;

  await axios({
    method: 'put',
    url: url + '/buyer/newOrder',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      orderStatus: os,
      itemId: ii,
      userId: ui,
      orderQty: oq,
      orderPrice: op,
      cardNumber: cn,
      securityCode: s,
      expiry: e,
      cardholderName: ch
    }
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return false;
    });
};

export const getOrder = async (userId) => {
  var u = userId.userId_ref.current.value;

  await axios({
    method: 'post',
    url: url + '/buyer/getOrder',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      userId: u
    }
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return false;
    });
};

export const editBuyerProfile = async (firstName, lastName, email, username, password, phoneNumber, address, optIn) => {
  var fn = firstName.firstName_ref.current.value;
  var ln = lastName.lastName_ref.current.value;
  var e = email.email_ref.current.value;
  var u = username.username_ref.current.value;
  var p = password.password_ref.current.value;
  var pn = phoneNumber.phoneNumber_ref.current.value;
  var a = address.address_ref.current.value;
  var o = optIn.optIn_ref.current.value;

  await axios({
    method: 'post',
    url: url + '/buyer/editProfile',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      firstName: fn,
      lastName: ln,
      email: e,
      username: u,
      password: p,
      phoneNumber: pn,
      address: a,
      optIn: o
    }
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return false;
    });
};

export const getSeller = async (email) => {
  var e = email.email_ref.current.value;

  await axios({
    method: 'get',
    url: url + '/seller/',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      email: e
    }
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return false;
    });
};

export const patchSeller = async (email, storeName, phoneNumber, address, optIn) => {
  var e = email.email_ref.current.value;
  var s = storeName.storeName_ref.current.value;
  var p = phoneNumber.phoneNumber_ref.current.value;
  var a = address.address_ref.current.value;
  var o = optIn.optIn_ref.current.value;

  await axios({
    method: 'patch',
    url: url + '/seller/',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      email: e,
      storeName: s,
      phoneNumber: p,
      address: a,
      optIn: o
    }
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return false;
    });
};

export const postSeller = async (email, storeName, phoneNumber, address, optIn, type) => {
  var e = email.email_ref.current.current.value;
  var s = storeName.storeName_ref.current.value;
  var p = phoneNumber.phoneNumber_ref.current.value;
  var a = address.address_ref.current.value;
  var o = optIn.optIn_ref.current.value;
  var t = type.type_ref.current.value;

  await axios({
    method: 'patch',
    url: url + '/seller/add',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      email: e,
      storeName: s,
      phoneNumber: p,
      address: a,
      optIn: o,
      type: t
    }
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return false;
    });
};

export const editItems = async (item_name, item_description, item_price, item_quantity, item_number, picture, account_id) => {
  var i_name = item_name.item_name_ref.current.value;
  var i_d = item_description.item_description_ref.current.value;
  var i_p = item_price.item_price_ref.current.value;
  var i_q = item_quantity.item_quantity_ref.current.value;
  var i_num = item_number.item_ref.current.value;
  var p = picture.picture_ref.current.value;
  var a = account_id.account_id_ref.current.value;

  await axios({
    method: 'patch',
    url: url + '/seller/items',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      item_name: i_name,
      item_description: i_d,
      item_price: i_p,
      item_quantity: i_q,
      item_number: i_num,
      picture: p,
      account_id: a
    }
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return false;
    });
};

export const postItems = async (item_name, item_description, item_price, item_quantity, picture_url, account_id) => {
  var i_name = item_name.item_name_ref.current.value;
  var i_d = item_description.item_description_ref.current.value;
  var i_p = item_price.item_price_ref.current.value;
  var i_q = item_quantity.item_quantity_ref.current.value;
  var p = picture_url.picture_url_ref.current.value;
  var a = account_id.account_id_ref.current.value;

  await axios({
    method: 'post',
    url: url + '/seller/items/add',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      itemName: i_name,
      itemDescription: i_d,
      itemPrice: i_p,
      itemQty: i_q,
      pictureUrl: p,
      accountId: a
    }
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return false;
    });
};

export const viewItems = async (email) => {
  var email = email.email_ref.current.value;

  await axios({
    method: 'get',
    url: url + '/seller/view',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      email: email
    }
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return false;
    });
};



