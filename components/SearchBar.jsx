"use client";

import { memo } from "react";

import {
  TextField,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

function SearchBar({

  label = "Search",

  value,

  onChange,

}) {

  return (

    <TextField

      fullWidth

      variant="outlined"

      label={label}

      value={value}

      onChange={(e) => onChange(e.target.value)}

      sx={{

        mb: 3,

        backgroundColor: "#fff",

      }}

      InputProps={{

        startAdornment: (

          <InputAdornment position="start">

            <SearchIcon />

          </InputAdornment>

        ),

      }}

    />

  );

}

export default memo(SearchBar);