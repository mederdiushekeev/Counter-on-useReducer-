import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Post({ name, status, species, image }) {
  return (
    <Card sx={{ maxWidth: 345, width: "15%", margin: "1%" }}>
      <CardMedia sx={{ height: 140 }} image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight="800"
          fontSize="20px"
          // color="pink"
        >
          {species}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight="800"
          fontSize="20px"
        >
          {status}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Like</Button>
        <Button size="small">Dislike</Button>
      </CardActions>
    </Card>
  );
}
