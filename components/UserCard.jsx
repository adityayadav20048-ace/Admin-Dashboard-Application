"use client";

import Link from "next/link";

import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";

export default function UserCard({ user }) {

  return (

    <Card
      sx={{
        height: "100%",
        borderRadius: 3,
        boxShadow: 3,
      }}
    >

      <CardContent>

        <Typography variant="h6" fontWeight="bold">

          {user.firstName} {user.lastName}

        </Typography>


        <Stack spacing={1} mt={2}>

          <Typography>

            <strong>Email:</strong> {user.email}

          </Typography>

          <Typography>

            <strong>Gender:</strong> {user.gender}

          </Typography>

          <Typography>

            <strong>Phone:</strong> {user.phone}

          </Typography>

          <Typography>

            <strong>Company:</strong>

            {" "}

            {user.company?.name}

          </Typography>

        </Stack>


        <Link href={`/users/${user.id}`}>

          <Button

            variant="contained"

            sx={{ mt: 3 }}

          >

            View Details

          </Button>

        </Link>

      </CardContent>

    </Card>

  );

}