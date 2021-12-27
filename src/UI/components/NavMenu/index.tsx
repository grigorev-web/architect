import React, { FC, ReactElement, useEffect, useState } from "react";
import { StyledNavMenu } from "./styles";

type Route = {
  path: string;
  element: React.ReactElement;
  children: Route[] | null;
  item: string;
  current:boolean;
};

const NavMenu: FC = (props) => {
  const [routes, setRoutes] = useState<Route[]>([]);

  useEffect(() => {
      let tempRoutes = findRoutes(props.children, routes)
      tempRoutes[0].current = true;
      
    setRoutes(()=>[...tempRoutes]);
    console.log("useEffect")
  }, []);

  function findRoutes(childs: any, routes: Route[]): Route[] {
    React.Children.forEach(childs, (child) => {
      if (child?.type?.name && child.type.name === "NavLink") {
        routes.push({
            path: child.props.path,
            element: child.props.element,
            children: child.props.children
              ? findRoutes(child.props.children, [])
              : null,
            item: child.props.item,
            current:false
          });
      } else {
        throw new Error("NavMenu can contain only NavLinks in childrens");
      }
      
    });
    
    return routes;
  }

  console.log("RoutesArray", routes);
  let Items = findItems(routes);

  function findItems(arr: Route[] | null) {
    if (!arr) return;
    return (
      <ul>
        {arr.map((route, index) => {
          const hasChild = route.children && route.children.length;
          return (
            <li key={index} onClick={(e) => setCurrentPathHandler(e,route.path,routes)}>
              {route.item}
              {hasChild ? findItems(route.children) : ""}
            </li>
          );
        })}
      </ul>
    );
  }

  function setCurrentPathHandler(e:React.MouseEvent,path:string,arr:Route[]){
      e.stopPropagation();
     let newRoutes = setPath(arr);
     function setPath(arr:Route[]):Route[]{
        return arr.map(route=>({
               ...route,
               children: route.children ? setPath(route.children) : null,
               current: route.path === path ? true: false
             })
             )
     }
     setRoutes(newRoutes);
  }


  function findElement(routes:Route[]):ReactElement{
      let page:any;
      routes.every((route) => {
        if (route.current) {
            page = route.element
            return false;
        };
        if (route.children) {
            let tempPage = findElement(route.children)
            console.log("tempPage",tempPage)
            return tempPage
        }
      });
      return page;
  }
  

  return (
    <>
      <StyledNavMenu>{Items}</StyledNavMenu>
      {findElement(routes)}
    </>
  );
};

export default NavMenu;
