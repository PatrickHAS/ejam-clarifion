import { StyledFooter } from "./styles";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="copyright-email--container">
        <div className="copyright">
          <p>Copyright (c) 2023</p>
        </div>
        <div className="email">
          <p>clarifionsupport@clarifion.com</p>
        </div>
      </div>
      <div className="secure-footer">
        <img src={"lockwhite.png"} alt="" />
        <p>Secure 256-bit SSL encryption.</p>
      </div>
    </StyledFooter>
  );
};
export default Footer;
