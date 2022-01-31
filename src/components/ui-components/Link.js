import React from "react";
import { Link as MuiLink } from "@mui/material";

function Link({ children, href, underline = "none", color = "white" }) {
  return (
    <MuiLink
      href={href}
      variant="h5"
      underline={underline}
      sx={{
        textDecorationColor: "white",
        color,
        "&:hover": {
          color: "#FFADDE",
        },
      }}
    >
      {children}
    </MuiLink>
  );
}

export default Link;
