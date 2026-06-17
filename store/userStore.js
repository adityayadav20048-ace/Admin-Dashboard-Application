import { create } from "zustand";
import axios from "axios";

const useUserStore = create((set, get) => ({

  users: [],

  selectedUser: null,

  total: 0,

  loading: false,

  error: null,



  // Fetch Users with Pagination

  fetchUsers: async (page = 1, limit = 10) => {

    try {

      // Cache Check

      if (get().users.length > 0 && get().currentPage === page) {

        return;

      }

      set({

        loading: true,

        error: null,

        currentPage: page,

      });

      const skip = (page - 1) * limit;

      const response = await axios.get(

        `https://dummyjson.com/users?limit=${limit}&skip=${skip}`

      );

      set({

        users: response.data.users,

        total: response.data.total,

        loading: false,

      });

    }

    catch (error) {

      set({

        error: error.message,

        loading: false,

      });

    }

  },



  // Search Users

  searchUsers: async (query) => {

    try {

      set({

        loading: true,

        error: null,

      });

      const response = await axios.get(

        `https://dummyjson.com/users/search?q=${query}`

      );

      set({

        users: response.data.users,

        total: response.data.total,

        loading: false,

      });

    }

    catch (error) {

      set({

        error: error.message,

        loading: false,

      });

    }

  },



  // Single User

  fetchUserById: async (id) => {

    try {

      set({

        loading: true,

        error: null,

      });

      const response = await axios.get(

        `https://dummyjson.com/users/${id}`

      );

      set({

        selectedUser: response.data,

        loading: false,

      });

    }

    catch (error) {

      set({

        error: error.message,

        loading: false,

      });

    }

  },



  // Clear Selected User

  clearSelectedUser: () => {

    set({

      selectedUser: null,

    });

  },



  // Clear Search Results

  clearUsers: () => {

    set({

      users: [],

      total: 0,

    });

  },

}));


export default useUserStore;