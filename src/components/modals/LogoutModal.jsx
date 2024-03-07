import React from "react";
import { useAtom } from "jotai";
import { LiaExclamationTriangleSolid } from "react-icons/lia";
import { skin } from "../../atoms/theme";


import { session } from "../../atoms/session";
import { logoutAtom } from "../../atoms/modals";

function LogoutModal() {
  const [logout,setLogout] = useAtom(logoutAtom)
  const [mySession, setSession] = useAtom(session);
  const [theme] = useAtom(skin);
  return (
    <div data-skin={theme} className="logoutModal">
      <div className="modalicon">
        <LiaExclamationTriangleSolid size={100} />
      </div>

      <div className="title">Are You Sure ?</div>

      <div className="buttons">
        <div
          className="btn yes"
          onClick={() => {
            setLogout(false)
            setSession("login");
          }}
        >
          YES
        </div>


        <div className="btn no" onClick={()=>{setLogout(false)}}>NO</div>
      </div>
    </div>
  );
}

export default LogoutModal;
