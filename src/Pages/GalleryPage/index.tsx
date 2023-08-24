import { NavBarSection } from "../../SectionsGlobals/NavBarSection";
import { SectionsContainers } from "../../Style/styledGlobal";
import { NavBarSectionContainer } from "../HomePage/style";

export function GalleryPage() {
    return (
        <>
            <NavBarSectionContainer>
                <SectionsContainers>
                    <NavBarSection />
                </SectionsContainers>
            </NavBarSectionContainer>
        </>
    )
}