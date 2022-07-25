import React, { useState } from "react";
import { theme } from "../theme/theme";
import CoreDiv from "./coreDiv";

const CoreCheckBox = (props) => {
  const { prim, sec, size, title } = props;
  const [Checked, setChecked] = useState(false)

  const color = (prim && theme.pallette.primaryColor) || (sec && theme.pallette.secondaryColor) || "black";

  return (
    <CoreDiv pes isRow style={{
      display: "flex",
      alignItems: "center",
      cursor: "pointer"
    }}


    >
      <div style={{
        borderWidth: 1, borderColor: Checked ? null : color,
        borderStyle: "solid", cursor: "pointer",
        minWidth: size,
        minHeight: size,
        width: size,
        height: size,
        textAlign: 'center',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Checked && color,
        borderRadius: 2,
        fontSize: size * 0.70,
        color: Checked ? theme.pallette.contrastPrimaryColor : color,
      }}
        onClick={() => setChecked(!Checked)}
      >
        {Checked && "✔"}
      </div>
      <span style={{ marginLeft: 8 }}>{title}</span>
    </CoreDiv>
  )
}

export default CoreCheckBox;  