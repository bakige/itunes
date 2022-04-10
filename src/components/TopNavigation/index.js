import {
    FaHashtag,
    FaRegBell,
    FaUserCircle
  } from 'react-icons/fa';

  import Search from "./search.component";

  const TopNavigation = () => {
    return (
      <div className='top-navigation'>
        <HashtagIcon />
        <Title />
        <Search />
        <BellIcon />
        <UserCircle />
      </div>
    );
  };
  
  const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />;
  const UserCircle = () => <FaUserCircle size='24' className='top-navigation-icon' />;
  const HashtagIcon = () => <FaHashtag size='20' className='title-hashtag' />;
  const Title = () => <h5 className='title-text'>Web application using React | Redux | Tailwind</h5>;
  
  export default TopNavigation;