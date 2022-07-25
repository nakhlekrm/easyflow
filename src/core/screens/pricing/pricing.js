import React from "react";
import Button from "../../components/button";
import { theme } from "../../theme/theme";


const Pricing = (props) => {
  const {pallette, spacing} = theme;
  return (
    <div>
               
      <h1 style={{padding: spacing.medium, color: pallette.primaryColor}}> Pricing</h1>
     <Button />
    </div>
  )
}

export default Pricing;