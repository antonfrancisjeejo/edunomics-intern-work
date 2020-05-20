import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BasicTextFields({ setAdd, add }) {
  const [inputs, setInputs] = useState({
    _id: "",
    title: "",
    info: "",
    status: "",
  });
  const classes = useStyles();

  const addDetail = async (detail) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      await axios.post("http://localhost:5000/api/v1", detail, config);
      setInputs({
        _id: "",
        title: "",
        info: "",
        status: "",
      });
      alert("Added if don't see just refresh once");
    } catch (err) {
      alert(err);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevItems) => {
      return {
        ...prevItems,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    inputs._id = Math.floor(Math.random() * 100000000);
    inputs.status = "To do";
    setAdd(false);
    addDetail(inputs);
  };
  return (
    <form className={classes.root} autoComplete="off">
      <TextField
        id="standard-basic"
        label="Title"
        name="title"
        onChange={handleChange}
      />
      <TextField
        id="standard-basic"
        label="Info"
        name="info"
        onChange={handleChange}
      />
      <br />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleClick}
      >
        Add
      </Button>
    </form>
  );
}
