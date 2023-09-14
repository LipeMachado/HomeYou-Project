import { NavBarSection } from "../../SectionsGlobals/NavBarSection";
import { SectionsContainers } from "../../Style/styledGlobal";
import { NavBarSectionContainer } from "../HomePage/style";
import {
    ContactContainerSectionDiv,
} from "./style";

export function ContactPage() {
    return (
        <>
            <NavBarSectionContainer>
                <SectionsContainers>
                    <NavBarSection />
                </SectionsContainers>
            </NavBarSectionContainer>
            <ContactContainerSectionDiv>

            </ContactContainerSectionDiv>
        </>
    )
}