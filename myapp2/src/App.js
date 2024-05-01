import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { userFetch } from "./Redux/Action/userActions";

const App = () => {
  const userData = useSelector((state) => state.userinfo.users) || [];
  const loading = useSelector((state) => state.userinfo.loading);
  console.log(userData);
  console.log(loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userFetch());
  }, [dispatch]);

  const deleteuser = async (id) => {
    try {
      // const deleteduser = await axios.delete(`http://localhost:8000/deleteuser`, { data: { id } })
      const deleteduser = await axios.delete(
        `http://localhost:8000/deleteuser/${id}`
      );
      console.log(deleteduser);
      console.log(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <Toaster richColors /> */}
      <h1>Frontend and Backend Connection</h1>
      {userData.map((e) => {
        return (
          <div key={e._id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{e.username}</h5>
                <p className="card-text">{e.email}</p>
                <a href="#" className="btn btn-primary">
                  {e.password}
                </a>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteuser(e._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default App;
