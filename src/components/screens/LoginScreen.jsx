import { useState } from "react";
import { useAtom } from "jotai";
// components
import GlassForm from "../forms/GlassForm";
import HelpButton from "../HelpButton";

import { session } from "../../atoms/session";

// popups
import LoginHelp from "../popups/LoginHelp";

import logo from "../../assets/svg/light.svg";

export default function LoginScreen() {
  const [mySession, setMySession] = useAtom(session);
  const [helpWindow, setHelpWindow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const loginHandler = () => {
    if (username == "guest" && password == "guest") {
      setMySession("desktop");
    } else {
      setError("Invalid Credentials");

      setTimeout(() => {
        setUsername("");
        setPassword("");
        setError(false);
      }, 2000);
    }
  };

  return (
    <>
      <div className="loginScreen">
        <HelpButton
          action={() => {
            setHelpWindow(true);
          }}
        />

        {helpWindow && (
          <LoginHelp
            c={() => {
              setHelpWindow(false);
            }}
          />
        )}
        <div className="container">
          <GlassForm hasError={error} error={error}>
            <img width={200} height={250} src={logo} alt="" />
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Username"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />

            <button onClick={loginHandler}>Login</button>

            {/* error message bar */}
          </GlassForm>
        </div>
      </div>
    </>
  );
}
