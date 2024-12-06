"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { closeSideNavationActio } from "@/Store/Actions/OpenCloseSideNavigatiion/OpenCloseSideNavigatiion";
import CssStyle from './NavPage.module.css';

const NavPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // Define routes and labels
  const navItems = [
    { label: "ABOUT", path: "/about" },
    { label: "CONTACT", path: "/contact" },
    { label: "BLOG", path: "/blog" },
    { label: "PLAN", path: "/course" },
    { label: "PROJECT", path: "/test" },
  ];

  // Generic click handler
  const handleNavigation = (path) => {
    router.push(path);
    dispatch(closeSideNavationActio());
  };

  return (
    <div className={CssStyle.Con}>
      {navItems.map((item, index) => (
        <div key={index} className={CssStyle.MynoteCon}>
          <button
            onClick={() => handleNavigation(item.path)}
            className={CssStyle.Btn}
          >
            {item.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default NavPage;
