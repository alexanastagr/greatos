import { IoMdClose } from "react-icons/io";
import { useAtom } from "jotai";

import { skin } from "../../atoms/theme";
// social icons
import {
  FaLinkedin,
  FaFacebookSquare,
  FaFlickr,
  FaInstagramSquare,
  FaCodepen,
  FaGithubSquare,
} from "react-icons/fa";

export default function AboutWindow({ c }) {
  const [theme] = useAtom(skin);
  return (
    <div data-skin={theme} className="aboutWindow">
      <div className="titlebar">
        <div className="title">ABOUT ME</div>

        {/* button close */}
        <div className="close" onClick={c}>
          <IoMdClose size={32} color="#fff" />
        </div>
      </div>

      {/* about window content */}

      <div className="content">
        <div className="avatar" />

        <div className="summary">
          Hi, my name is Alexander. I am Frontend Developer and Landcape
          Photographer based on Athens Greece.
        </div>

        {/* social icons */}
        <div className="socials">
          <ul>
            <a target="_blank" href="https://linkedin.com/in/alexanastagr">
              <li>
                <FaLinkedin size={30} />
              </li>
            </a>

            <a target="_blank" href="https://github.com/alexanastagr">
              <li>
                <FaGithubSquare size={30} />
              </li>
            </a>


            <a target="_blank" href="https://facebook.com/alexanastagr">
              <li>
                <FaFacebookSquare size={30} />
              </li>
            </a>

            <a target="_blank" href="https://instagram.com/alexanastagr">
              <li>
                <FaInstagramSquare size={30} />
              </li>
            </a>

         

            <a target="_blank" href="https://www.flickr.com/photos/alexanastgr">
              <li>
                <FaFlickr size={30} />
              </li>
            </a>
          </ul>
        </div>

        <div className="footer">
          Created &copy; 2024 by
          <a href="">alexanast.gr</a>
        </div>
      </div>
    </div>
  );
}
