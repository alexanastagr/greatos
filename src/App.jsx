import { useAtom } from "jotai";

// Components
import LoginScreen from "./components/screens/LoginScreen";
import DesktopScreen from "./components/screens/DesktopScreen";

import { session } from "./atoms/session";

function App() {

  const [mySession,setMySession] = useAtom(session)

   return (
    <>
      {mySession == 'login' && <LoginScreen />}
      {mySession == 'desktop' && <DesktopScreen />}
    </>
  );
}

export default App;
