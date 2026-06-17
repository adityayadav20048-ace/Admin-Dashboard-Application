import { create } from "zustand";
import axios from "axios";

const useProductStore = create((set, get) => ({

  products: [],
  selectedProduct: null,
  categories: [],

  total: 0,
  currentPage: 1,

  loading: false,
  error: null,


  // Fetch Products with Pagination

  fetchProducts: async (page = 1, limit = 10) => {

    try {

      // Simple cache

      if (
        get().products.length > 0 &&
        get().currentPage === page
      ) {
        return;
      }

      set({
        loading: true,
        error: null,
        currentPage: page,
      });

      const skip = (page - 1) * limit;

      const response = await axios.get(

        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`

      );

      set({

        products: response.data.products,

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


  // Search Products

  searchProducts: async (query) => {

    try {

      set({

        loading: true,

        error: null,

      });

      const response = await axios.get(

        `https://dummyjson.com/products/search?q=${query}`

      );

      set({

        products: response.data.products,

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


  // Fetch Categories

  fetchCategories: async () => {

    try {

      if (get().categories.length > 0) {

        return;

      }

      const response = await axios.get(

        "https://dummyjson.com/products/categories"

      );

      set({

        categories: response.data,

      });

    }

    catch (error) {

      set({

        error: error.message,

      });

    }

  },


  // Filter By Category

  fetchByCategory: async (category) => {

    try {

      set({

        loading: true,

        error: null,

      });

      const response = await axios.get(

        `https://dummyjson.com/products/category/${category}`

      );

      set({

        products: response.data.products,

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


  // Single Product

  fetchProductById: async (id) => {

    try {

      set({

        loading: true,

        error: null,

      });

      const response = await axios.get(

        `https://dummyjson.com/products/${id}`

      );

      set({

        selectedProduct: response.data,

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


  // Clear Selected Product

  clearSelectedProduct: () => {

    set({

      selectedProduct: null,

    });

  },


  // Clear Products

  clearProducts: () => {

    set({

      products: [],

      total: 0,

    });

  },

}));


export default useProductStore;