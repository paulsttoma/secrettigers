/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import { Container, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Button from "../ui-components/Mintbutton";


import cards from "../../assets/cards-01.png";

function Hero(mmAccount, setMmAccount) {
  const classes = useStyles();
 
  return (
    <section>
      <Container
        disableGutters
        component="main"
        sx={{ pt: 16, pb: 6 }}
        maxWidth="sm"
      >
        <img
          src={cards}
          loading="lazy"
          width="100%"
          height={300}
          alt="hero image"/>
        <Typography
          align="center"
          variant="h2"
          color="white"
          sx={{ fontWeight: "400" }}
        >
          Mint a Magic Tiger
        </Typography>
        <Typography align="center" color="gray" variant="h6">
          Mint Magic Tigers at 0.3 ETH each
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            mt: 10,
          }}
        >
          <Box>
          <Button className={classes.button} mmAccount={mmAccount} setMmAccount={setMmAccount} >Mint Me</Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const useStyles = makeStyles((theme) => ({
  select: {
    width: "240px",
    height: "60px",
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: "30px",
    fontSize: "32px",
    textAlign: "center",
    backgroundColor: "f3f3f3",
    padding: " 8px 12px",
    marginBttom: 10,
  },
  linkontainer: {
    width: "240px",
    height: "60px",
    borderRadius: "30px",
    backgroundColor: "#d6d6d6",
    boxShadow: "0 6px 0 0 #aaaaaa",
    padding: "10px 35px",
    marginTop: "10px",
    textAlign: "center",
  },
  link: {
    fontFamily: "Lato, sans-serif",
    color: "#fff",
    fontSize: "32px",
    textShadow: "1px 1px 0 #aaaaaa",
    textDecoration: "none",
  },
}));

// eslint-disable-next-line no-unused-vars
const selectItem = ["1", "2", "3", "4", "5"];

export default Hero;
