"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";

import useAuthStore from "@/store/authStore";

export default function Dashboard() {
  const router = useRouter();

  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);

  // Protect Route
  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (!storedToken && !token) {
      router.push("/login");
    }
  }, [token, router]);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const cards = [
    {
      title: "Users",
      description: "Manage all users",
      icon: <PeopleIcon sx={{ fontSize: 50 }} />,
      path: "/users",
    },

    {
      title: "Products",
      description: "Manage all products",
      icon: <InventoryIcon sx={{ fontSize: 50 }} />,
      path: "/products",
    },
  ];

  return (
    <Box sx={{ p: 4 }}>

      {/* Header */}

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={5}
      >
        <Typography variant="h4" fontWeight="bold">
          Admin Dashboard
        </Typography>

        <Button
          variant="contained"
          color="error"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>

      {/* Welcome Text */}

      <Typography variant="body1" mb={4}>
        Welcome to the Admin Panel.
      </Typography>

      {/* Dashboard Cards */}

      <Grid container spacing={4}>

        {cards.map((card) => (

          <Grid item xs={12} sm={6} key={card.title}>

            <Card
              onClick={() => router.push(card.path)}
              sx={{
                cursor: "pointer",
                p: 3,
                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >

              <CardContent>

                <Box mb={2}>
                  {card.icon}
                </Box>

                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                >
                  {card.title}
                </Typography>

                <Typography color="text.secondary">
                  {card.description}
                </Typography>

              </CardContent>

            </Card>

          </Grid>

        ))}

      </Grid>

    </Box>
  );
}