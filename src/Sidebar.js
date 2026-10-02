import React from "react";
import { useGlobalContext } from "./Context";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
function Slidebar() {
  const { IsSideBarOpen, CloseSidebar } = useGlobalContext();
  return (
    <aside
      className={`${IsSideBarOpen ? `sidebar-wrapper show` : `sidebar-wrapper`}`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={CloseSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { page, links } = item;
            return (
              <article key={index}>
                <h4>{page} </h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { label, icon, url } = link;
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default Slidebar;
