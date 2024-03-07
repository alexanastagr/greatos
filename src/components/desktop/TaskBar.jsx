import { PiPowerLight } from "react-icons/pi";
import { VscCalendar } from "react-icons/vsc";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";

import { session } from "../../atoms/session";
import { skin } from "../../atoms/theme";

import { logoutAtom } from "../../atoms/modals";
import { calendarAtom } from "../../atoms/widgets";

export default function TaskBar() {
  const [calendar,setCalendar] = useAtom(calendarAtom)
  const [mySession, setMySession] = useAtom(session);
  const [logout, setLogout] = useAtom(logoutAtom);
  const [theme] = useAtom(skin);

  const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds(),
  });

  // update local time
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  //  display by country type
  const timeLocale = (number) => {
    return number.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });
  };

  // load actual time
  const timeSerializer = () => {
    return (
      timeLocale(time.hours) +
      ":" +
      timeLocale(time.minutes) +
      ":" +
      timeLocale(time.seconds)
    );
  };

  return (
    <div data-skin={theme} className="taskbar">
      {/* btn start */}
      <div
        className="start"
        onClick={() => {
          setLogout(true);
        }}
      >
        <div className="icon">
          <PiPowerLight size={32} />
        </div>
        <div className="text">MENU</div>
      </div>

      {/* date & time */}
      <div className="calendar" onClick={()=>{setCalendar(!calendar)}}>
        <div className="timedate">
          <div className="time">{timeSerializer()}</div>
        </div>
        <div className="icon">📅</div>
      </div>
    </div>
  );
}
