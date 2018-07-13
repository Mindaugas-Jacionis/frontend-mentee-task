import React from 'react';
import ReactSVG from 'react-svg';
import { icoUser, icoPass, icoLogout, icoBack } from '../../../assets';

const SvgIcon = (props) => (
  <div>
    {
      props.iconType === "userIcon"
      ? <ReactSVG path={icoUser} svgClassName="input-ico" />
      : props.iconType === "passIcon"
      ? <ReactSVG path={icoPass} svgClassName="input-ico" />
      : props.iconType === "logIcon"
      ? <ReactSVG path={icoLogout} />
      : props.iconType === "backIcon"
      ? <ReactSVG path={icoBack} svgClassName="ico-back" />
      : "Icon type was not selected."
    }
  </div>
);

export default SvgIcon;
