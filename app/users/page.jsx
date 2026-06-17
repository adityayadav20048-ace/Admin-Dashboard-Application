"use client";

import { useEffect, useState } from "react";

import {
  Box,
  Typography,
  Pagination,
  CircularProgress,
  Grid,
} from "@mui/material";

import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import UserCard from "@/components/UserCard";

export default function UsersPage() {

  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);

  const [totalPages, setTotalPages] = useState(1);

  const limit = 10;


  const fetchUsers = async () => {

    try {

      setLoading(true);

      let url = "";

      if (search.trim()) {

        url =

          `https://dummyjson.com/users/search?q=${search}`;

      }

      else {

        const skip = (page - 1) * limit;

        url =

          `https://dummyjson.com/users?limit=${limit}&skip=${skip}`;

      }


      const response = await fetch(url);

      const data = await response.json();

      setUsers(data.users);

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

    fetchUsers();

  }, [page, search]);


  return (

    <>

      <Navbar />

      <Box p={4}>


        <Typography

          variant="h4"

          fontWeight="bold"

          mb={3}

        >

          Users

        </Typography>


        <SearchBar

          label="Search Users"

          value={search}

          onChange={(value) => {

            setSearch(value);

            setPage(1);

          }}

        />


        {

          loading ?

          (

            <CircularProgress />

          )

          :

          (

            <Grid container spacing={3}>


              {

                users.map((user) => (

                  <Grid

                    item

                    xs={12}

                    sm={6}

                    md={4}

                    key={user.id}

                  >

                    <UserCard user={user} />

                  </Grid>

                ))

              }


            </Grid>

          )

        }


        {

          !search && (

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