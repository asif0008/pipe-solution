import React, { useState } from 'react';
import { FacebookIcon } from '../components/icon/FacebookIcon';
import MailIcon from '../components/icon/MailIcon';
import MobileIcon from '../components/icon/MobileIcon';
import { LineIcon } from '../components/icon/LineIcon';


const SocialIcons = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: <MobileIcon />, url: '+66 02 234 5686' },
    { icon: <MailIcon />, url: 'info@pspipe.com' },
    { icon: <LineIcon />, url: 'https://line.me/en/' },
    { icon: <FacebookIcon />, url: 'https://www.facebook.com/' }
  ];

  const handleTabClick = (index) => {
    setActiveTab(activeTab === index ? -1 : index);
  };

  return (
    <div className="flex items-center">
      {tabs.map((tab, index) => (
        <div key={index} className={`tab flex-1 text-center ${activeTab === index ? 'active' : ''} ${index !== 0 ? 'border-l border-white' : ''}`}>
          <div className={`flex items-center gap-2 ${activeTab === index ? 'text-primary bg-white' : 'text-white bg-primary'}`} onClick={() => handleTabClick(index)}>
            <span className="cursor-pointer p-3 w-full flex justify-center">{tab.icon}</span>
            {activeTab === index && (
              <div className="p-3 border-l border-primary">
                <a className='text-nowrap' href={tab.url} target="_blank" rel="noopener noreferrer">{tab.url}</a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
