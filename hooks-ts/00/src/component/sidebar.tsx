import * as React from "react";

interface Props {
    isVisible:boolean;
}

const divStyle= (props:Props):React.CSSProperties =>(
    {width:(props.isVisible)?'23rem':'0rem'}
)

const classNames = require("./sidebar.css");

export const SidebarComponent = (props:Props) => (
  <div id="mySidenav" className={classNames.sidenav}
   style={divStyle(props)} >
    <span>Basic side bar, first steps</span>
  </div>
);