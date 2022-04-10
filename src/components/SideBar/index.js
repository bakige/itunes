import {
  BsPlus,
  BsFillLightningFill,
  BsGearFill,
  BsAlarm,
  BsAlarmFill,
} from "react-icons/bs";
import {
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
  FaHome,
} from "react-icons/fa";
import useDarkMode from "../../hooks/useDarkMode";

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
    >
      <ThemeIcon size="40" />
      <Divider />
      <SideBarIcon icon={<FaHome size="28" />} />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <div className="sidebar-icon group">
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun size="24" className="top-navigation-icon" />
        ) : (
          <FaMoon size="24" className="top-navigation-icon" />
        )}
      </span>
      <span className="sidebar-tooltip group-hover:scale-100">Change Theme</span>
    </div>
  );
};

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
