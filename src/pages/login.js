import { useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import { useContext, useEffect, useState } from "react";
import React from "react";

export default function Login() {
  // eslint-disable-next-line no-unused-vars
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const { firebase } = useContext(FirebaseContext);

  // eslint-disable-next-line no-unused-vars
  const [emailAddress, setEmailAddress] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [password, setPassword] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  // eslint-disable-next-line no-unused-vars
  const isInvalid = password === "" || emailAddress === "";

  // eslint-disable-next-line no-unused-vars
  const handleLogin = () => {};

  useEffect(() => {
    document.title = "Login -Instagram";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img
          className="max-w-full"
          src="/images/iphone-with-profile.jpg"
          alt="iPhone with Instagram"
        ></img>
      </div>
      <div className="flex flex-col w-2/5">
        <p>I will be the form</p>
      </div>
    </div>
  );
}
