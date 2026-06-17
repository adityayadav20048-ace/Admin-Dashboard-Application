"use client";

import Link from "next/link";

import {

  Card,

  CardMedia,

  CardContent,

  Typography,

  Button,

  Rating,

  Box,

} from "@mui/material";


export default function ProductCard({

  product,

}) {

  return (

    <Card

      sx={{

        height: "100%",

        borderRadius: 3,

        boxShadow: 3,

      }}

    >


      <CardMedia

        component="img"

        height="220"

        image={product.thumbnail}

        alt={product.title}

      />


      <CardContent>


        <Typography

          variant="h6"

          fontWeight="bold"

          gutterBottom

        >

          {product.title}

        </Typography>


        <Typography>

          Price :

          ${product.price}

        </Typography>


        <Typography>

          Category :

          {product.category}

        </Typography>


        <Box mt={1}>

          <Rating

            value={product.rating}

            precision={0.5}

            readOnly

          />

        </Box>


        <Link

          href={`/products/${product.id}`}

        >

          <Button

            variant="contained"

            sx={{ mt: 2 }}

          >

            View Details

          </Button>

        </Link>


      </CardContent>

    </Card>

  );

}