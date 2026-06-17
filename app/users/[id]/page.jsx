"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Grid,
  CircularProgress,
} from "@mui/material";

export default function UserDetails() {

  const { id } = useParams();

  const router = useRouter();

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchUser = async () => {

      try {

        const response = await fetch(

          `https://dummyjson.com/users/${id}`

        );

        const data = await response.json();

        setUser(data);

      }

      catch (error) {

        console.log(error);

      }

      finally {

        setLoading(false);

      }

    };

    fetchUser();

  }, [id]);


  if (loading) {

    return (

      <Box
        display="flex"
        justifyContent="center"
        mt={5}
      >

        <CircularProgress />

      </Box>

    );

  }


  return (

    <Box p={4}>

      <Button
        variant="outlined"
        onClick={() => router.push("/users")}
        sx={{ mb: 3 }}
      >

        Back to Users

      </Button>


      <Card>

        <CardContent>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mb={4}
          >

            <Avatar

              src={user.image}

              sx={{

                width: 120,

                height: 120,

                mb: 2,

              }}

            />

            <Typography
              variant="h4"
              fontWeight="bold"
            >

              {user.firstName} {user.lastName}

            </Typography>

          </Box>


          <Grid container spacing={3}>


            <Grid item xs={12} md={6}>

              <Typography>

                <strong>Email:</strong>

                {" "}

                {user.email}

              </Typography>

            </Grid>


            <Grid item xs={12} md={6}>

              <Typography>

                <strong>Phone:</strong>

                {" "}

                {user.phone}

              </Typography>

            </Grid>


            <Grid item xs={12} md={6}>

              <Typography>

                <strong>Gender:</strong>

                {" "}

                {user.gender}

              </Typography>

            </Grid>


            <Grid item xs={12} md={6}>

              <Typography>

                <strong>Age:</strong>

                {" "}

                {user.age}

              </Typography>

            </Grid>


            <Grid item xs={12} md={6}>

              <Typography>

                <strong>Birth Date:</strong>

                {" "}

                {user.birthDate}

              </Typography>

            </Grid>


            <Grid item xs={12} md={6}>

              <Typography>

                <strong>Blood Group:</strong>

                {" "}

                {user.bloodGroup}

              </Typography>

            </Grid>


            <Grid item xs={12} md={6}>

              <Typography>

                <strong>Company:</strong>

                {" "}

                {user.company?.name}

              </Typography>

            </Grid>


            <Grid item xs={12} md={6}>

              <Typography>

                <strong>Department:</strong>

                {" "}

                {user.company?.department}

              </Typography>

            </Grid>


            <Grid item xs={12}>

              <Typography>

                <strong>Address:</strong>

                {" "}

                {user.address?.address},

                {" "}

                {user.address?.city},

                {" "}

                {user.address?.state}

              </Typography>

            </Grid>

          </Grid>

        </CardContent>

      </Card>

    </Box>

  );

}