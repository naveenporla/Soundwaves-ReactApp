import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {FooterContainer, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink,SocialMedia, SocialMediaWrap,SocialLogo ,SocialIcon , WebsiteRights, SocialIcons,SocialIconLinkF,SocialIconLinkI,SocialIconLinkT} from "./footerElements";

const FooterBar = () => {
    return (
        <FooterContainer>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Company</FooterLinkTitle>
                        <FooterLink to="/sign-up">About Us</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Developers</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/sign-up">Contacts</FooterLink>
                        <FooterLink to="/">Support</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/sign-up">Facebook</FooterLink>
                        <FooterLink to="/">Instagram</FooterLink>
                        <FooterLink to="/">Twitter</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="">
                        <SocialIcon />
                        Soundwaves
                    </SocialLogo>
                    <WebsiteRights>Soundwaves © 2021</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLinkF href="/" target="_blank" arial lanel="Facebook" >
                            <FaFacebook />
                        </SocialIconLinkF>
                        <SocialIconLinkI href="/" target="_blank" arial lanel="Instagram" >
                            <FaInstagram />
                        </SocialIconLinkI>
                        <SocialIconLinkT href="/" target="_blank" arial lanel="Twitter" >
                            <FaTwitter />
                        </SocialIconLinkT>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );

};

export default FooterBar;