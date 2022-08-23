import { Text, Image } from "react-native";
import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.png";

export function Header() {
  return(
    <HeaderContainer>
      <Image source={logo} />
    </HeaderContainer>
  )
}