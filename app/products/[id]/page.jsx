"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  CircularProgress,
  Rating,
} from "@mui/material";

export default function ProductDetails() {

  const { id } = useParams();

  const router = useRouter();

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  const [currentImage, setCurrentImage] = useState(0);


  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const response = await fetch(

          `https://dummyjson.com/products/${id}`

        );

        const data = await response.json();

        setProduct(data);

      }

      catch (error) {

        console.log(error);

      }

      finally {

        setLoading(false);

      }

    };

    fetchProduct();

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

        onClick={() => router.push("/products")}

        sx={{ mb: 3 }}

      >

        Back to Products

      </Button>



      <Card sx={{ p: 3 }}>


        <Grid container spacing={4}>


          {/* Images Section */}

          <Grid item xs={12} md={5}>


            <Box

              component="img"

              src={product.images[currentImage]}

              alt={product.title}

              sx={{

                width: "100%",

                height: 350,

                objectFit: "contain",

                borderRadius: 2,

                mb: 2,

              }}

            />


            <Box

              display="flex"

              gap={1}

              flexWrap="wrap"

            >

              {

                product.images.map((image, index) => (

                  <Box

                    key={index}

                    component="img"

                    src={image}

                    alt="thumbnail"

                    onClick={() =>

                      setCurrentImage(index)

                    }

                    sx={{

                      width: 70,

                      height: 70,

                      objectFit: "cover",

                      border:

                        currentImage === index

                          ? "2px solid blue"

                          : "1px solid #ccc",

                      borderRadius: 1,

                      cursor: "pointer",

                    }}

                  />

                ))

              }

            </Box>


          </Grid>



          {/* Product Details */}


          <Grid item xs={12} md={7}>


            <CardContent>


              <Typography

                variant="h4"

                fontWeight="bold"

                gutterBottom

              >

                {product.title}

              </Typography>


              <Typography

                color="text.secondary"

                paragraph

              >

                {product.description}

              </Typography>



              <Typography

                variant="h6"

                sx={{ mb: 2 }}

              >

                Price :

                ${product.price}

              </Typography>



              <Typography sx={{ mb: 1 }}>

                <strong>Brand:</strong>

                {" "}

                {product.brand}

              </Typography>



              <Typography sx={{ mb: 1 }}>

                <strong>Category:</strong>

                {" "}

                {product.category}

              </Typography>



              <Typography sx={{ mb: 1 }}>

                <strong>Stock:</strong>

                {" "}

                {product.stock}

              </Typography>



              <Box

                display="flex"

                alignItems="center"

                gap={2}

                mt={2}

              >

                <Typography>

                  Rating:

                </Typography>


                <Rating

                  value={product.rating}

                  precision={0.5}

                  readOnly

                />

              </Box>


            </CardContent>


          </Grid>


        </Grid>


      </Card>


    </Box>

  );

}