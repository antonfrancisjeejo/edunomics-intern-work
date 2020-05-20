import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    width: 300,
    height: "100%",
  },
});

export default function ImgMediaCard({ title, info, status, id, setUpdate }) {
  const classes = useStyles();
  const handleClick = (event) => {
    event.preventDefault();
    const status = event.target.innerHTML;
    if (status !== "Finished") updateDetailStatus(id, status);
  };
  const updateDetailStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/v1/${id}/${status}`);
      setUpdate((prevValue) => {
        return prevValue + 1;
      });
    } catch (err) {
      alert(err);
    }
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {info}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{
              marginTop: "10px",
            }}
          >
            {status}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick}>
          {status === "To do"
            ? "Doing"
            : status === "Doing"
            ? "Done"
            : "Finished"}
        </Button>
      </CardActions>
    </Card>
  );
}
