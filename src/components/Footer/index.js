/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";


function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <Container sx={{ py: 15 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <a href="#" className={classes.link}>
            <Typography align="center">
            Created by the Magic Tiger Founders with special ♥️ to our developer
              partners, Tiger media NFT, our moderators, dynamitecryptoman, disclosure, and
              the support from the community, our friends, families, and loved
              ones.
            </Typography>
          </a>
        </Box>
      </Container>
    </footer>
  );
}
const useStyles = makeStyles((theme) => ({
  link: {
    fontFamily: "Lato, sans-serif",
    color: "#fff",
    fontSize: "32px",
    textShadow: "1px 1px 0 #aaaaaa",
    textDecoration: "none",
    opacity: 0.6,
    "&:hover": {
      opacity: 1,
    },
  },
}));

export default Footer;
