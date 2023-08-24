import { FooterSection } from "../../SectionsGlobals/FooterSection";
import { NavBarSection } from "../../SectionsGlobals/NavBarSection";
import { SectionsContainers } from "../../Style/styledGlobal";
import { FooterSectionContainer, NavBarSectionContainer } from "../HomePage/style";

import {
    AboutUsContainerSectionDiv
} from './style'

export function AboutUsPage() {
    return (
        <>
            <NavBarSectionContainer>
                <SectionsContainers>
                    <NavBarSection />
                </SectionsContainers>
            </NavBarSectionContainer>

            <AboutUsContainerSectionDiv>
                <div></div>
            </AboutUsContainerSectionDiv>

            <FooterSectionContainer>
                <SectionsContainers>
                    <FooterSection />
                </SectionsContainers>
            </FooterSectionContainer>
        </>
    )
}