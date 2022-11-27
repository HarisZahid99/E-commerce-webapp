import axios from 'axios';
const url = "http://localhost:3030"

export const login = async (username, password) => {
    var u = username.username_ref.current.value;
    var p = password.password_ref.current.value;
    console.log(username.username_ref.current.value);
    console.log("Attempting to login....")

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