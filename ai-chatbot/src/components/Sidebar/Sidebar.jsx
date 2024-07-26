import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

function Sidebar() {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=>setExtended(prev => !prev)} className="menu" src={assets.menu_icon} alt="Menu Icon" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="Plus Icon" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? 
           <div className="recent">
           <p className="recent-title">Recent</p>
           <div className="recent-entry">
             <img src={assets.message_icon} alt="Message Icon" />
             <p>What is React ....</p>
           </div>
         </div> : null
        }
     
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="Question Icon" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="History Icon" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="Settings Icon" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;