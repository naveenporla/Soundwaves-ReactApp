import React from "react";
import { CloseIcon, Icon, MobileNavbarContainer,MobilebarWrapper, MobilebarMenu,MobilebarLink,MobileBtnWrap,MobilebarRoute } from "./MobileNavbarElements";

const MobileNavbar = ({isOpen, toggle}) => {
    return (
        <MobileNavbarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <MobilebarWrapper>
                <MobilebarMenu>
                    <MobilebarLink to="/home">
                        Store 
                    </MobilebarLink>
                    <MobilebarLink to="/plans">
                        Plans
                    </MobilebarLink>
                    <MobilebarLink to="/contact-us">
                        Contact us
                    </MobilebarLink>
                </MobilebarMenu>
                <MobileBtnWrap>
                    <MobilebarRoute to="/sign-in">Sign-In</MobilebarRoute>
                </MobileBtnWrap>
            </MobilebarWrapper>
        </MobileNavbarContainer>
    )

}

export default MobileNavbar;