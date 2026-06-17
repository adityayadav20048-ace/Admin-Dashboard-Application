"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import LogoutIcon from "@mui/icons-material/Logout";

import useAuthStore from "@/store/authStore";

export default function Navbar() {

  const router = useRouter();

  const pathname = usePathname();

  const logout = useAuthStore((state) => state.logout);


  const handleLogout = () => {

    logout();

    localStorage.removeItem("token");

    router.push("/login");

  };


  const navItems = [

    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <DashboardIcon sx={{ mr: 1 }} />,
    },

    {
      name: "Users",
      path: "/users",
      icon: <PeopleIcon sx={{ mr: 1 }} />,
    },

    {
      name: "Products",
      path: "/products",
      icon: <InventoryIcon sx={{ mr: 1 }} />,
    },

  ];


  return (

    <AppBar position="static">

      <Toolbar>


        {/* Logo */}

        <Typography

          variant="h6"

          sx={{

            fontWeight: "bold",

            flexGrow: 1,

          }}

        >

          Admin Panel

        </Typography>



        {/* Navigation Buttons */}

        <Box display="flex" gap={1}>


          {

            navItems.map((item) => (

              <Link

                key={item.name}

                href={item.path}

                style={{

                  textDecoration: "none",

                }}

              >

                <Button

                  color="inherit"

                  variant={

                    pathname === item.path

                      ? "outlined"

                      : "text"

                  }

                  startIcon={item.icon}

                >

                  {item.name}

                </Button>

              </Link>

            ))

          }



          {/* Logout */}

          <Button

            color="inherit"

            startIcon={<LogoutIcon />}

            onClick={handleLogout}

          >

            Logout

          </Button>


        </Box>


      </Toolbar>

    </AppBar>

  );

}