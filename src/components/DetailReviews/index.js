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
} from "@material-ui/core";
export default function index() {
  return (
    <div>
      <Container maxWidth="lg" spacing={1}>
        <Typography variant="h5">
          <StarRoundedIcon /> 4.64 (372 reviews)
        </Typography>
        <Grid container>
          <Grid item md={6} className="reviewsbar">
            <Grid item md={6} className="reviewsItem">
              <Typography variant="body1">Cleanliness</Typography>
            </Grid>
            <Grid item md={6}>
              <LinearProgress variant="determinate" />
            </Grid>
          </Grid>
          <Grid item md={6}></Grid>
        </Grid>
      </Container>
    </div>
  );
}
