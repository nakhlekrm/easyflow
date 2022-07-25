import React from "react";
import { theme } from "../theme/theme";

const Button = (props) => {
  const { pallette, spacing } = theme;
  const { label, includeMargin, color, ps, pm } = props;
  return (
    <div style={{
      borderRadius: 100,
      backgroundColor: color || pallette.secondaryColor,
      color: pallette.contrastPrimaryColor,
      padding: ps ? spacing.small : (pm ? spacing.medium : spacing.large),
      alignSelf: "flex-start",
      margin: includeMargin && spacing.extraLarge,
     
    }}>
      {label}
    </div>
  )
}

export default Button;