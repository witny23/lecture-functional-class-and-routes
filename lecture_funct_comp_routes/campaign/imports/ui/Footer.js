import React, { useState } from "react";


export default Footer = (props) => {
  const [footer_state, setFooterState] = useState(props.footer_prop);
  
  return (
      <>
        <h1>{footer_state}</h1>
      </>
  );

};