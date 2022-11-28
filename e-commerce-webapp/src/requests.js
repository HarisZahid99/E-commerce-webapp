import axios from 'axios';
const url = "http://localhost:3030"

export const login = async (username, password) => {
    var u = username.username_ref.current.value;
    var p = password.password_ref.current.value;
    console.log(username.username_ref.current.value);
    console.log("Attempting to login....")D

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
        firstName = fn,
        lastName = ln,
        email = e,
        username: u,
        password: p,
        phoneNumber = pn,
        address = a,
        optIn = o
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
        firstName = fn,
        lastName = ln,
        email = e,
        username: u,
        password: p,
        phoneNumber = pn,
        address = a,
        optIn = o,
        storeName = sn,
        storeId = si
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
        orderStatus = os,
        itemId = ii,
        userId = ui,
        orderQty: oq,
        orderPrice: op,
        cardNumber = cn,
        securityCode = s,
        expiry = e,
        cardholderName = ch
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
        userId = u
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
        firstName = fn,
        lastName = ln,
        email = e,
        username: u,
        password: p,
        phoneNumber = pn,
        address = a,
        optIn = o
      }
    })
    .then(function (response) {
     return response;
    })
    .catch(function (error) {
      return false;
    });
};

export const getSeller = async (userId) => {
  var u = userId.userId_ref.current.value;

 await axios({
      method: 'post',
      url: url + '/buyer/getOrder', 
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      data: {
        userId = u
      }
    })
    .then(function (response) {
     return response;
    })
    .catch(function (error) {
      return false;
    });
};