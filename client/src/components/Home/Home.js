import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "../Input/Input";
import { Button } from "@material-ui/core";
import Board from "../Board/Board";
import Typography from "@material-ui/core/Typography";
import "./Home.css";

const Home = () => {
  const [add, setAdd] = useState(false);
  const [pendingDetails, setPendingDetails] = useState([]);
  const [onGoingDetails, setOnGoingDetails] = useState([]);
  const [doneDetails, setDoneDetails] = useState([]);
  const [update, setUpdate] = useState(1);
  let status1 = "To do";
  let status2 = "Doing";
  let status3 = "Done";
  useEffect(() => {
    getDetails(status1);
    getDetails(status2);
    getDetails(status3);
    return () => {
      setPendingDetails([]);
      setOnGoingDetails([]);
      setDoneDetails([]);
    };
  }, [status1, status2, status3, add, update]);
  const getDetails = async (status) => {
    try {
      // eslint-disable-next-line
      const res = await axios.get(`http://localhost:5000/api/v1/${status}`);
      if (status === "To do") {
        setPendingDetails(res.data.data);
      }
      if (status === "Doing") {
        setOnGoingDetails(res.data.data);
      }
      if (status === "Done") {
        setDoneDetails(res.data.data);
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      {!add ? (
        <div className="button">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setAdd(true);
            }}
          >
            Add To Do
          </Button>
        </div>
      ) : (
        ""
      )}
      {add ? <Input setAdd={setAdd} add={add} /> : ""}
      <div className="contents">
        <div className="rows">
          {pendingDetails.length > 0 ? (
            <div>
              <Typography
                variant="h4"
                color="textSecondary"
                className="title-text"
              >
                To Do Works
              </Typography>
              <Board details={pendingDetails} setUpdate={setUpdate} />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="rows">
          {onGoingDetails.length > 0 ? (
            <div>
              <Typography
                variant="h4"
                color="textSecondary"
                className="title-text"
              >
                On Going Works
              </Typography>
              <Board details={onGoingDetails} setUpdate={setUpdate} />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="rows">
          {doneDetails.length > 0 ? (
            <div>
              <Typography
                variant="h4"
                color="textSecondary"
                className="title-text"
              >
                Finshed Works
              </Typography>
              <Board details={doneDetails} setUpdate={setUpdate} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
