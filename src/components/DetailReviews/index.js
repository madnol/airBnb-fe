import React from "react";
import "./DetailReviews.scss";
import AppsIcon from "@material-ui/icons/Apps";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import {
  Container,
  Typography,
  Paper,
  GridList,
  GridListTile,
  Grid,
  Button,
  LinearProgress,
  ThemeProvider,
  Box,
} from "@material-ui/core";

import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

export default function index() {
  return (
    <div>
      <Container maxWidth="lg">
        <Typography variant="h5">
          <StarRoundedIcon /> 4.64 (372 reviews)
        </Typography>
        <Grid container>
          <Grid item md={6}>
            <Box component="div" display="flex" flexDirection="row">
              <Grid item md={6}>
                <Typography variant="body1" className="reviewsItem">
                  Cleanliness
                </Typography>
              </Grid>
              {/* <Grid item md={6} className="reviewsbar"> */}
              <ThemeProvider theme={theme}>
                <LinearProgress
                  style={{ color: "red !mportant" }}
                  variant="determinate"
                  color="primary"
                  className="whatever"
                />
              </ThemeProvider>
              {/* </Grid> */}
            </Box>
          </Grid>
          <Grid item md={6}></Grid>
        </Grid>
      </Container>
    </div>
  );
}
