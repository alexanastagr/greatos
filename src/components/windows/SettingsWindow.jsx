import { IoMdClose } from "react-icons/io";
import { useAtom } from "jotai";
import { background,skin,language } from "../../atoms/theme";


export default function SettingsWindow({ c }) {
  const [bg, setBg] = useAtom(background);
  const [theme, setTheme] = useAtom(skin);
  const [locale, setLocale] = useAtom(language);

  return (
    <div className="settingsWindow">
      <div className="titlebar">
        <div className="title">SETTINGS</div>

        {/* button close */}
        <div className="close" onClick={c}>
          <IoMdClose size={32} color="#fff" />
        </div>
      </div>
      {/**  settigns content */}
      <div className="content">
        <div className="language">
          <div className="title">LANGUAGE</div>

          <div className="options">
            <div className="option en"></div>
            <div className="option gr"></div>
            <div className="option de"></div>
          </div>
        </div>

        <div className="skincolor">
          <div className="title">SKIN COLOR</div>

          <div className="options">
            <div className="option color1" onClick={()=>{setTheme('skin1')}}></div>
            <div className="option color2" onClick={()=>{setTheme('skin2')}}></div>
            <div className="option color3" onClick={()=>{setTheme('skin3')}}></div>
          </div>
        </div>

        <div className="wallpapers">
          <div className="title">WALLPAPERS</div>
          <div className="options">
            <div
              className="option bg1"
              onClick={() => {
                setBg("bg1");
              }}
            ></div>
            <div
              className="option bg2"
              onClick={() => {
                setBg("bg2");
              }}
            ></div>
            <div
              className="option bg3"
              onClick={() => {
                setBg("bg3");
              }}
            ></div>
          </div>
        </div>

        {/** end settigns content */}
      </div>
    </div>
  );
}
