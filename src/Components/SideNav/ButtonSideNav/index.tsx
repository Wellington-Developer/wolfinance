import { ComponentProps } from "react"
import './style.css';

type IButtonSideNav = ComponentProps<"button">

function ButtonSideNav({children}: IButtonSideNav) {
  return (
    <button className="button-sidenav">{children}</button>
  )
}

export default ButtonSideNav;