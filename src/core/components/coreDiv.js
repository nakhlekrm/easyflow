import React from "react";
import { Container } from "react-bootstrap";
import { theme } from "../theme/theme";

const CoreDiv = (props) => {

  const { pes, ps, pm, pl, pxl, bgPrim, bgCont, bgSec, prim, cont, sec, isRow, isColumn,
    isContainer, pves, pvs, pvm, pvl, pvxl, phes, phs, phm, phl, phxl, wrap, margin, red } = props;
  const { spacing, pallette } = theme;

  const padding = () => {
    let _padding = 0;
    if (pes) _padding = spacing.extraSmall;
    if (ps) _padding = spacing.small;
    if (pm) _padding = spacing.medium;
    if (pl) _padding = spacing.large;
    if (pxl) _padding = spacing.extraLarge;
    return _padding;
  }

  const color = () => {
    let _color;
    if (bgPrim) _color = pallette.primaryColor;
    if (bgCont) _color = pallette.contrastPrimaryColor;
    if (bgSec) _color = pallette.secondaryColor;
    return _color;
  }
  const colorText = () => {
    let _color;
    if (prim) _color = pallette.primaryColor;
    if (cont) _color = pallette.contrastPrimaryColor;
    if (sec) _color = pallette.secondaryColor;
    return _color;
  }
  const paddingH = () => {
    let _padding = 0;
    if (phes) _padding = spacing.extraSmall;
    if (phs) _padding = spacing.small;
    if (phm) _padding = spacing.medium;
    if (phl) _padding = spacing.large;
    if (phxl) _padding = spacing.extraLarge;
    return _padding;
  }
  const paddingV = () => {
    let _padding = 0;
    if (pves) _padding = spacing.extraSmall;
    if (pvs) _padding = spacing.small;
    if (pvm) _padding = spacing.medium;
    if (pvl) _padding = spacing.large;
    if (pvxl) _padding = spacing.extraLarge;
    return _padding;
  }


  const textSize = () => {

  }


  let style = {
    ...props.style,
    display: (isRow || isColumn) && 'flex',
    flexDirection: (isRow && 'row') || (isColumn && 'column'),
    flexWrap: wrap && 'wrap',
    paddingLeft: paddingH(),
    paddingRight: paddingH(),
    paddingTop: paddingV(),
    paddingBottom: paddingV(),
    backgroundColor: color(),
    padding: padding(),
    color: colorText(),
    // alignItem: 'center',
    // verticalAlign: 'Middle',
    // justifyContent: 'spaceBetween',
    margin: margin,
  }
  if (red) {
    style = {...style, backgroundColor: "red"}
  }
  if (isColumn) {
    return (
      <CoreDiv style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
      }}>
        {props.children}
      </CoreDiv >
    )
  }
  if (isContainer) {
    return (
      <Container style={style}>
        {props.children}
      </Container>
    )
  }
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}

export default CoreDiv;