import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoginAuth from "./Authentication";
import Cookies from "js-cookie";

export function useLogin(){
    const navigate = useNavigate();
    async function login(userData) {
        try {
            const response = await LoginAuth(userData);
            const { status, data} = response;

            if (status==200){
                Cookies.set('token', data.token);
                Cookies.set('username', data.username);
            }
        } catch (error) {
            if (error.response && error.response.status == 401){
                alert("Invalid Email or Password!");
            }
        }

        console.error("Something went wrong: ",error);
    }
}

return {login};

export function Authenticated() {
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
      const token = Cookies.get("token");
      
      if (token) {
        setAuthenticated(true);
        const User = Cookies.get("username");
        console.log(User);
        }
      }, [authenticated, location.pathname, navigate]);
    
      return null;
    }