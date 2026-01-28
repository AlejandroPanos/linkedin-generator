import {
  WandSparkles,
  ScrollText,
  Settings,
  CircleQuestionMark,
  Wallet,
  LogOut,
  Menu,
  X,
  ArrowLeftFromLine,
  ArrowRightFromLine,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";

import "./Aside.css";
import logo from "../../../images/Logo.svg";
import avatar from "../../../images/Avatar.jpg";
import { logout } from "../../../helpers/helpers";
import { useAuth } from "../../../hooks/useAuth";

interface AsideDesktop {
  close: boolean;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const Aside = ({ close, setClose }: AsideDesktop): React.JSX.Element => {
  const navigate = useNavigate();
  const { user, dispatch } = useAuth();

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      dispatch({ type: "LOGOUT" });
      navigate("/");
    },
  });

  const handleClick = () => {
    logoutMutation.mutate();
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setClose(!close)}
        className="mobile-menu-btn"
        aria-label={close ? "Open menu" : "Close menu"}
      >
        {close ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
      </button>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay ${close ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        onClick={() => setClose(true)}
      />

      {/* Sidebar */}
      <aside
        className={`aside ${
          close ? "w-0 md:w-16 -translate-x-full md:translate-x-0" : "w-56 translate-x-0"
        } `}
      >
        {/* Top */}
        <div className="top-aside">
          <div className={`logo-holder ${close ? "justify-center" : "justify-between"}`}>
            <img
              className={`${close ? "w-0 opacity-0" : "w-36 opacity-100"} overflow-hidden`}
              src={logo}
              alt="Scribble AI logo"
            />
            <button
              onClick={() => setClose(!close)}
              type="button"
              aria-label={close ? "Expand sidebar" : "Collapse sidebar"}
            >
              {close ? (
                <ArrowRightFromLine className="h-4 w-4" />
              ) : (
                <ArrowLeftFromLine className="h-4 w-4" />
              )}
            </button>
          </div>

          <hr className="hr" />

          <div className="aside-content-holder">
            <h3 className={`${close ? "hidden" : "block"} transition-opacity duration-200`}>
              Home
            </h3>
            <nav className="nav">
              <NavLink
                to="dashboard"
                className={({ isActive }) =>
                  isActive
                    ? `nav-link ${close ? "justify-center" : ""}`
                    : `nav-link-inactive ${close ? "justify-center" : ""}`
                }
                // className={`nav-link ${close ? "justify-center" : ""}`}
                title={close ? "Generate Post" : ""}
              >
                <WandSparkles className="h-4 w-4 shrink-0" />
                <p className={`${close ? "hidden" : "block"} whitespace-nowrap`}>Generate Post</p>
              </NavLink>
              <NavLink
                to="posts"
                className={({ isActive }) =>
                  isActive
                    ? `nav-link ${close ? "justify-center" : ""}`
                    : `nav-link-inactive ${close ? "justify-center" : ""}`
                }
                title={close ? "My Posts" : ""}
              >
                <ScrollText className="h-4 w-4 shrink-0" />
                <p className={`${close ? "hidden" : "block"} whitespace-nowrap`}>My Posts</p>
              </NavLink>
              <NavLink
                to="settings"
                className={({ isActive }) =>
                  isActive
                    ? `nav-link ${close ? "justify-center" : ""}`
                    : `nav-link-inactive ${close ? "justify-center" : ""}`
                }
                title={close ? "Settings" : ""}
              >
                <Settings className="h-4 w-4 shrink-0" />
                <p className={`${close ? "hidden" : "block"} whitespace-nowrap`}>Settings</p>
              </NavLink>
              <NavLink
                to="support"
                className={({ isActive }) =>
                  isActive
                    ? `nav-link ${close ? "justify-center" : ""}`
                    : `nav-link-inactive ${close ? "justify-center" : ""}`
                }
                title={close ? "Support" : ""}
              >
                <CircleQuestionMark className="h-4 w-4 shrink-0" />
                <p className={`${close ? "hidden" : "block"} whitespace-nowrap`}>Support</p>
              </NavLink>
            </nav>
          </div>

          <hr className="hr" />

          <div className="aside-content-holder">
            <h3 className={`${close ? "hidden" : "block"} transition-opacity duration-200`}>
              Credits
            </h3>
            {close ? (
              <button className={`nav-link justify-center`} title="12/20 Credits Left">
                <Wallet className="h-4 w-4" />
              </button>
            ) : (
              <>
                {/* Mobile: Simple button */}
                <button className="md:hidden nav-link" title="Credits">
                  <Wallet className="h-4 w-4 shrink-0" />
                  <p className="whitespace-nowrap">Credits</p>
                </button>

                {/* Desktop: Full plan card */}
                <div className="hidden md:flex plan-holder">
                  <span className="plan-type">Free Plan</span>
                  <h3>
                    <span>12</span>/20 Credits Left
                  </h3>
                  <div
                    className="w-full bg-neutral-700 rounded-full h-2"
                    role="progressbar"
                    aria-label="Credits remaining"
                    aria-valuemin={0}
                    aria-valuemax={20}
                    aria-valuenow={12}
                    aria-valuetext="12 of 20 credits left"
                  >
                    <div
                      className="bg-linear-to-t from-orange-800 to-orange-700 h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                  <button className="credits-btn">Buy Credits</button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="bottom-aside">
          <div className={`user-content-holder ${close ? "hidden" : "flex"}`}>
            <div className="user-img-holder shrink-0">
              <img src={avatar} alt="User avatar profile photo" />
            </div>
            <div className="user-personal-info overflow-hidden">
              <h3 className="truncate">{user?.name}</h3>
              <p className="truncate">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleClick}
            className={`log-out-btn ${close ? "justify-center" : ""}`}
            title={close ? "Log Out" : ""}
          >
            <LogOut className="h-4 w-4 shrink-0" />
            <p className={`${close ? "hidden" : "block"}`}>Log Out</p>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Aside;
