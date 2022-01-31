/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container, Grid, Stack, Typography, Box } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";

import image from "../../assets/GIF-12.gif";
import discord from "../../assets/discord.svg";

function Social() {
  return (
    <section>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 10,
              }}
            >
              <img src={image} width={"100%"} height={"auto"} alt="gif image" />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" color={"white"} sx={{ mb: 4 }}>
              A collection of 2,022 Magic Tigers
            </Typography>
            <Stack direction={"column"} spacing={3}>
              {textData.map((item, index) => (
                <Typography
                  key={index}
                  color="white"
                  sx={{
                    opacity: 0.6,
                    fontSize: "20px",
                    lineHeight: "28px",
                    fontWeight: 400,
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={10}
              sx={{ mt: 2 }}
            >
              <a href="#">
                <img src={discord} />
              </a>
              <a href="#">
                <TwitterIcon sx={{ color: "white", fontSize: 70 }} />
              </a>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

const textData = [
  "Magic Tigers is a community-driven collectibles NFT project. Magic Tigers NFTs are made up with over a hundred exciting traits of faces, hair, hats, body and backgrounds. Each Magic Tiger is a unique, non-fungible token (NFT) on the Ethereum blockchain.",
  "Holding a  Magic Tiger allows you to participate in coordinating the Magic Tiger Community Treasury. This Treasury will be seeded with 690 ETH after the public sale ends! Holders can vote for experiences, activations and campaigns that benefit the Magic Tigers.",
  "The road map for Magic Tigers is collaborative and will be decided by Magic Tiger holders. With imaginative ideas, adequate resources and coordination, we believe we can bring Magic Tigers to every vertical of popular culture!",
  "The Magic Tigers public sales opens on Tuesday, January 24th around 7pm PDT.",
  "Join the Magic Tigers community on Twitter or Discord!",
];

export default Social;
