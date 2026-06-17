"use client";

import { useEffect, useState } from "react";

import {

  Box,

  Typography,

  Grid,

  Pagination,

  CircularProgress,

  TextField,

  MenuItem,

} from "@mui/material";

import Navbar from "@/components/Navbar";

import SearchBar from "@/components/SearchBar";

import ProductCard from "@/components/ProductCard";


export default function ProductsPage() {


  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);

  const [totalPages, setTotalPages] = useState(1);

  const limit = 10;



  const fetchCategories = async () => {

    const res = await fetch(

      "https://dummyjson.com/products/categories"

    );

    const data = await res.json();

    setCategories(data);

  };



  const fetchProducts = async () => {

    try {

      setLoading(true);

      let url = "";


      if (search) {

        url =

          `https://dummyjson.com/products/search?q=${search}`;

      }

      else if (category) {

        url =

          `https://dummyjson.com/products/category/${category}`;

      }

      else {

        const skip = (page - 1) * limit;

        url =

          `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

      }


      const response = await fetch(url);

      const data = await response.json();

      setProducts(data.products);

      setTotalPages(

        Math.ceil(data.total / limit)

      );

    }

    catch (error) {

      console.log(error);

    }

    finally {

      setLoading(false);

    }

  };



  useEffect(() => {

    fetchCategories();

  }, []);



  useEffect(() => {

    fetchProducts();

  }, [page, search, category]);



  return (

    <>

      <Navbar />


      <Box p={4}>


        <Typography

          variant="h4"

          fontWeight="bold"

          mb={3}

        >

          Products

        </Typography>



        <Grid container spacing={2} mb={3}>


          <Grid item xs={12} md={6}>


            <SearchBar

              label="Search Products"

              value={search}

              onChange={(value) => {

                setSearch(value);

                setCategory("");

                setPage(1);

              }}

            />


          </Grid>


          <Grid item xs={12} md={6}>


            <TextField

              select

              fullWidth

              label="Category"

              value={category}

              onChange={(e) => {

                setCategory(e.target.value);

                setSearch("");

                setPage(1);

              }}

            >

              <MenuItem value="">

                All Categories

              </MenuItem>


              {

                categories.map((item) => (

                  <MenuItem

                    key={item.slug}

                    value={item.slug}

                  >

                    {item.name}

                  </MenuItem>

                ))

              }

            </TextField>


          </Grid>

        </Grid>



        {

          loading ?

          (

            <CircularProgress />

          )

          :

          (

            <Grid container spacing={3}>


              {

                products.map((product) => (

                  <Grid

                    item

                    xs={12}

                    sm={6}

                    md={4}

                    key={product.id}

                  >

                    <ProductCard

                      product={product}

                    />

                  </Grid>

                ))

              }


            </Grid>

          )

        }



        {

          !search && !category && (

            <Box

              mt={4}

              display="flex"

              justifyContent="center"

            >

              <Pagination

                page={page}

                count={totalPages}

                color="primary"

                onChange={(e, value) => {

                  setPage(value);

                }}

              />

            </Box>

          )

        }


      </Box>

    </>

  );

}