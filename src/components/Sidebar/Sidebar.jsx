// /* eslint-disable no-unused-vars */
// import React, { useContext, useState } from "react";
// import "./Sidebar.css";
// import { assets } from "../../assets/assets";
// import { Context } from "../../context/Context";

// const Sidebar = () => {
//   const [extended, setExtended] = useState(false);
//   const {onSent,prevPrompts,setRecentPrompt} = useContext(Context);

//   return (
//     <div className="sidebar">
//       <div className="top">
//         <img onClick={()=>setExtended(prev=>!prev)}className="menu" src={assets.menu_icon} alt="" />
//         <div className="new-chat">
//           <img src={assets.plus_icon} alt="" />
//           {extended ? <p>New Chat</p> : null}
//         </div>
//         {extended ? (
//           <div className="recent">
//             <p className="recent-title">Recent</p>
//             {prevPrompts.map((item,index)=>){
//               return(
//                 <div className="recent-entry">
//                   <img src={assets.message_icon} alt="" />
//                   <p>What is React ...</p>
//                 </div>
//               )
//             }}}
            
//           </div>
//         ) : null}
//       </div>
//       <div className="bottom">
//         <div className="bottom-item recent-entry">
//           <img src={assets.question_icon} alt="" />
//           {extended?<p>Help</p>:null}
//         </div>
//         <div className="bottom-item recent-entry">
//           <img src={assets.history_icon} alt="" />
//           {extended?<p>Activity</p>:null}
//         </div>
//         <div className="bottom-item recent-entry">
//           <img src={assets.setting_icon} alt="" />
//           {extended?<p>Settings</p>:null}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [isExtended, setIsExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt } = useContext(Context);

  const toggleExtension = () => {
    setIsExtended(prev => !prev);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img 
          onClick={toggleExtension}
          className="menu" 
          src={assets.menu_icon} 
          alt="Menu Icon" 
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="New Chat Icon" />
          {isExtended && <p>New Chat</p>}
        </div>
        {isExtended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((prompt, index) => (
              <div className="recent-entry" key={index}>
                <img src={assets.message_icon} alt="Message Icon" />
                <p>{prompt}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="bottom">
        {["Help", "Activity", "Settings"].map((item, index) => (
          <div className="bottom-item recent-entry" key={index}>
            <img src={assets[`${item.toLowerCase()}_icon`]} alt={`${item} Icon`} />
            {isExtended && <p>{item}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
