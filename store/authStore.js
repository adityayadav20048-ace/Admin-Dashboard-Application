import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set) => ({

  token:
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null,

  user:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null,

  loading: false,

  isAuthenticated:
    typeof window !== "undefined"
      ? !!localStorage.getItem("token")
      : false,



  // LOGIN

  login: async (username, password) => {

    try {

      set({ loading: true });

      const response = await axios.post(

        "https://dummyjson.com/auth/login",

        {

          username,

          password,

          expiresInMins: 60,

        }

      );


      const data = response.data;


      localStorage.setItem(

        "token",

        data.accessToken

      );


      localStorage.setItem(

        "user",

        JSON.stringify(data)

      );


      set({

        token: data.accessToken,

        user: data,

        isAuthenticated: true,

        loading: false,

      });


      return {

        success: true,

      };

    }

    catch (error) {

      set({

        loading: false,

      });


      return {

        success: false,

        message:

          error.response?.data?.message ||

          "Login Failed",

      };

    }

  },



  // LOGOUT

  logout: () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");


    set({

      token: null,

      user: null,

      isAuthenticated: false,

    });

  },



  // CHECK AUTH

  checkAuth: () => {

    const token = localStorage.getItem("token");

    const user = JSON.parse(

      localStorage.getItem("user")

    );


    if (token) {

      set({

        token,

        user,

        isAuthenticated: true,

      });

    }

    else {

      set({

        token: null,

        user: null,

        isAuthenticated: false,

      });

    }

  },

}));


export default useAuthStore;