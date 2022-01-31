import { Card, Avatar, Box, Typography } from "@mui/material";
import React from "react";

import Link from "../ui-components/Link";

function FounderCard({ image, title, link, name, description }) {
  return (
    <Card sx={{ backgroundColor: "transparent" }} elevation={0}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar alt="title" src={image} sx={{ width: 200, height: 200 }} />
        <Link href={link} underline="always">
          {title}
        </Link>
        <Typography color="white" sx={{ py: 2, opacity: 0.6 }}>
          {name}
        </Typography>
        <Typography color="white" variant="h6" sx={{ opacity: 0.6 }}>
          {description}
        </Typography>
      </Box>
    </Card>
  );
}

export default FounderCard;
