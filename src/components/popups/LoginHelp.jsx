import { LiaHandsHelpingSolid } from "react-icons/lia";

export default function LoginHelp({ c }) {
  return (
    <div className="popup-help-login">
      <div className="container">
        {/* popup icon */}
        <div className="icon">
          <LiaHandsHelpingSolid size={100} />
        </div>

        {/* popup title */}
        <div className="title">Help</div>

        {/* popup content */}
        <div className="body">
          At this moment you can login as guest with the following credentials:
          <div className="creds">
            <p>
              Username: <strong>guest</strong>
            </p>
            <p>
              Password: <strong>guest</strong>
            </p>
          </div>
          {/* close help popup */}
          <div className="btnexit" onClick={c}>
            😎 GOT IT THANKS
          </div>
        </div>
      </div>
    </div>
  );
}
