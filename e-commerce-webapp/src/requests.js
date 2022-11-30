import axios from "axios";
const url = "http://localhost:3030";

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

async function addSeller(user) {
  console.log("Attempting to add user....");
  console.log("request user: " + user);

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

async function add(first_name, last_name,email,username, password, phone_number, address, opt_in, store_name, store_id) {
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

async function get_user_info(email) {
  var e = email;

  console.log("Attempting to get seller info....");

  return await axios({
    method: "post",
    url: url + "/auth/",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      email: e,
    },
  })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
}

export { login, add, addSeller, get_user_info };
