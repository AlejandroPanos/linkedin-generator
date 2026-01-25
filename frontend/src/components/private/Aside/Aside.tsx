import {
  WandSparkles,
  ScrollText,
  Settings,
  CircleQuestionMark,
  LogOut,
  ArrowLeftFromLine,
  ArrowRightFromLine,
} from "lucide-react";

import "./Aside.css";
import logo from "../../../images/Logo.svg";
import avatar from "../../../images/Avatar.jpg";

const Aside = () => {
  return (
    <>
      <aside className="aside">
        {/* Top */}
        <div className="top-aside">
          <div className="w-full flex items-center justify-between gap-2">
            <img className="w-36" src={logo} alt="Scribble AI logo" />
            <button className="hidden md:block p-2 rounded-md hover:bg-neutral-800 text-neutral-300 hover:cursor-pointer">
              <ArrowLeftFromLine className="h-4 w-4" />
            </button>
          </div>

          <hr className="hr" />

          <div className="aside-content-holder">
            <h3>Home</h3>
            <nav className="nav">
              <button className="nav-link">
                <WandSparkles className="h-4 w-4" />
                <p>Generate Post</p>
              </button>
              <button className="nav-link">
                <ScrollText className="h-4 w-4" />
                <p>My Posts</p>
              </button>
              <button className="nav-link">
                <Settings className="h-4 w-4" />
                <p>Settings</p>
              </button>
              <button className="nav-link">
                <CircleQuestionMark className="h-4 w-4" />
                <p>Support</p>
              </button>
            </nav>
          </div>

          <hr className="hr" />

          <div className="aside-content-holder">
            <h3>Credits</h3>
            <div className="plan-holder">
              <span className="plan-type">Free Plan</span>
              <h3>
                <span>12</span>/20 Credits Left
              </h3>
              <button className="credits-btn">Buy Credits</button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="bottom-aside">
          <div className="user-content-holder">
            <div className="user-img-holder">
              <img src={avatar} alt="User avatar profile photo" />
            </div>
            <div className="user-personal-info">
              <h3>John Doe</h3>
              <p>john@gmail.com</p>
            </div>
          </div>
          <button className="log-out-btn">
            <LogOut className="h-4 w-4" />
            <p>Log Out</p>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Aside;
