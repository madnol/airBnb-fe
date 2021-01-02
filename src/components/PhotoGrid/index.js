import React from "react";
import "./index.scss";
import DrawerPhotoGrid from "../DrawerPhotoGrid";
import {
  Container,
  Typography,
  Paper,
  GridList,
  GridListTile,
  Grid,
} from "@material-ui/core";

const Photo_grid = () => {
  const i = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <Container maxWidth="lg" style={{ padding: "40px" }}>
        <Grid container spacing={1}>
          <Grid item md={6}>
            <GridList cellHeight={392} cols={1}>
              {i.slice(0, 1).map(photo => (
                <GridListTile key={1} cols={1}>
                  <img
                    style={{ objectFit: "cover" }}
                    src="https://source.unsplash.com/1600x900/?inner house"
                    alt="nature"
                  />
                </GridListTile>
              ))}
            </GridList>
          </Grid>
          <Grid item md={6}>
            <GridList cellHeight={192} cols={2} spacing={8}>
              {i.slice(1, 5).map(photo => (
                <GridListTile key={1} cols={1}>
                  <img
                    src="https://source.unsplash.com/1600x900/?inner house"
                    alt="nature"
                  />
                </GridListTile>
              ))}
            </GridList>
          </Grid>
        </Grid>
        <DrawerPhotoGrid />
      </Container>
    </div>
  );
};

export default Photo_grid;
