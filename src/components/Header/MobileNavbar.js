import React from "react";
import { Stack, Box } from "@mui/material";

import { navData } from "../../constants/data";
import Link from "../ui-components/Link";

function MobileNavbar({ handleOpen }) {
  const opacity = handleOpen ? 1 : 0;
  const visibility = handleOpen ? "visible" : "hidden";
  const display = handleOpen ? "flex" : "none";
  const top = handleOpen ? 100 : -300;

  return (
    <Box
      sx={{
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        top,
        left: 100,
        right: 100,
        backgroundColor: "rgba(173, 191, 252, 0.8)",
        px: 5,
        py: 2,
        borderRadius: 15,
        display,
        visibility,
        opacity,
        transition: "0.3s ease-in-out",
        zIndex: 999,
      }}
    >
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={4}
      >
        {navData.map((item, index) => (
          <Link href={item.link} key={index}>
            {item.title}
          </Link>
        ))}
      </Stack>
    </Box>
  );
}

export default MobileNavbar;
