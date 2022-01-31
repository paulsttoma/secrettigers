import { Container, Typography, Grid } from "@mui/material";
import React from "react";

import { founderData } from "../../constants/data";
import FounderCard from "./FounderCard";

function Founder() {
  return (
    <section>
      <Container sx={{ mt: 20 }}>
        <Typography
          textAlign={"center"}
          variant="subtitle1"
          sx={{ color: "white", opacity: 0.6, mb: 2 }}
        >
          YOUR MAGIC TIGERS THROUGH THE METAVERSE
        </Typography>
        <Typography
          textAlign={"center"}
          color="white"
          variant="h3"
          sx={{ mb: 5 }}
        >
          The Magic Tigers Founders
        </Typography>
        <Grid container spacing={10} sx={{ mt: 4 }}>
          {founderData.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FounderCard
                image={item.image}
                link={item.link}
                title={item.title}
                name={item.name}
                description={item.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default Founder;
