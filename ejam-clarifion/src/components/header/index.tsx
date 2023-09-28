import { StyledHeader } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <img
        className="logo-clarifion"
        src={"Clarifion_Logo.png"}
        alt="Clarifion_Logo"
      />
      <img className="logo-segurity" src={"Segurity.png"} alt="Segurity_logo" />
    </StyledHeader>
  );
};
export default Header;
