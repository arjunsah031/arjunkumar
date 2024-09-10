import Link from "next/link";
import Headercontainer from "./headerContainer/headerContainer";
import Logo from "./logo/logo";
import Navigation from "./navigation/navigation";
import LoginSignup from "./LoginSignup/LoginSignup";
import SideNavigation from "./SideNavigation/SideNavigation";
import Toggle from "./Toggle/Toggle";

export default function Header() {

  
     
    return<>
     <Headercontainer>

     <Toggle/>
      <Logo/>
      <Navigation/>
      
      
    </Headercontainer>

    <LoginSignup/>

      <SideNavigation/>
    </>  
}