import React from "react";
import Photogrid from "../PhotoGrid";
import DetailReviews from "../DetailReviews";
import "./DetailPage.scss";
export default function index() {
  return (
    <div>
      <Photogrid />
      <DetailReviews />
    </div>
  );
}
