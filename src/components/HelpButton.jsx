import { IoIosHelpBuoy } from "react-icons/io";

export default function HelpButton({action}) {
  return (
    <div className="float" onClick={action}>
      <IoIosHelpBuoy size={32} color="#000" />
    </div>
  );
}
