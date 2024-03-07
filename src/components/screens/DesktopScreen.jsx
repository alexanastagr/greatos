import { useAtom } from "jotai";
import { useState } from "react";

// desktop components
import TaskBar from "../desktop/TaskBar";
import Icon from "../desktop/Icon";

import AboutWindow from "../windows/AboutWIndow";
import PhotosWindow from "../windows/PhotosWindow";
import SettingsWindow from "../windows/SettingsWindow";
import TasksWindow from "../windows/TasksWindow";

// atoms
import { logoutAtom } from "../../atoms/modals";
import { calendarAtom } from "../../atoms/widgets";

// widgets
import CalendarWidget from "../widgets/CalendarWidget";

import LogoutModal from "../modals/LogoutModal";
import { background, skin } from "../../atoms/theme";

export default function DesktopScreen() {
  // initialize windows states by Atom
  const [about, setAbout] = useState(false);
  const [calendar, setCalendar] = useAtom(calendarAtom);
  const [tasks, setTasks] = useState(false);
  const [settings, setSettings] = useState(false);
  const [photos, setPhotos] = useState(false);
  const [bg] = useAtom(background);

  const [logModal] = useAtom(logoutAtom);

  return (
    <>
      <div data-skin="skin1" className={`desktopScreen ${bg}`}>
        {calendar && <CalendarWidget />}
        {logModal && <LogoutModal />}

        {about && (
          <AboutWindow
            c={() => {
              setAbout(false);
            }}
          />
        )}
        {settings && (
          <SettingsWindow
            c={() => {
              setSettings(false);
            }}
          />
        )}
        {photos && (
          <PhotosWindow
            c={() => {
              setPhotos(false);
            }}
          />
        )}
        {tasks && (
          <TasksWindow
            c={() => {
              setTasks(false);
            }}
          />
        )}

        {/* all icons */}
        <div className="icons">
          <Icon
            ic="About"
            handler={() => {
              setAbout(true);
            }}
          />
          <Icon
            ic="Photos"
            handler={() => {
              setPhotos(true);
            }}
          />
          <Icon
            ic="Tasks"
            handler={() => {
              setTasks(true);
            }}
          />
          <Icon
            ic="Settings"
            handler={() => {
              setSettings(true);
            }}
          />
        </div>

        {/* taskbar */}
        <TaskBar />
      </div>
    </>
  );
}
