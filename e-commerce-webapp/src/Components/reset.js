function reset() {
    localStorage.setItem("first_name", null);
  localStorage.setItem("last_name", null);

  localStorage.setItem("email", null);
  localStorage.setItem("username", null);
  localStorage.setItem("password", null);
  
  localStorage.setItem("phone_number", null);
  localStorage.setItem("address", null);
  localStorage.setItem("opt_in", null);

  localStorage.setItem("store_name", null);
  localStorage.setItem("store_id", null);

  localStorage.setItem("type", null);
  localStorage.setItem("account_id", null);
  localStorage.setItem("items", null);
}

export { reset } 