import React from "react";
import { Card } from "../index";
import "bootstrap/dist/css/bootstrap.min.css"; 

export const BaseStory = () => {
  return(
    <Card
      title="Card"
      content="Card Content"
      footer="Card Footer"
      cardImage="https://placehold.co/184x180"
    />
  )
};

export default { 
  title: "Components core/Card",
  component: Card,
};

