import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userCreate } from "../Redux/Action/userActions";

const Createuser = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
  });
  const submitData = async () => {
    dispatch(userCreate(user));
  };
  return (
    <>
      <h1>Create a New User</h1>
      <form>
        <label htmlFor="Username">Username:</label>
        <input
          type="text"
          name="username"
          id="Username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <br />
        <br />
        <label htmlFor="Phone">Phone:</label>
        <input
          type="number"
          name="phone"
          id="Phone"
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <br />
        <br />
        <label htmlFor="Password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <br />
        <br />
        <button onClick={submitData}>Submit Data</button>
      </form>
    </>
  );
};

export default Createuser;
