import React, { FC, ReactElement, useEffect, useState } from "react";
import { StyledNavMenu } from "./styles";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const NavMenu: FC = (props) => {
  let childs = React.Children.map(props.children, function (child) {
    if (
      child != null &&
      typeof child === "object" &&
      "type" in child &&
      typeof child.type === "function" &&
      child.type.name == "NavLink"
    )
      return child;
    else throw new Error("NavMenu must contain only NavLink elements");
  });

  return (
    <BrowserRouter>
      <StyledNavMenu>
        {childs?.map((child, index) => (
          <Link
            key={index}
            to={child.props.path}
            onClick={() => console.log("click")}
          >
            <div>{child.props.label}</div>
          </Link>
        ))}
      </StyledNavMenu>
      <Routes>
        {childs?.map((child, index) => {
          return (
            <Route
              key={index}
              path={child.props.path}
              element={child.props.element}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default NavMenu;
