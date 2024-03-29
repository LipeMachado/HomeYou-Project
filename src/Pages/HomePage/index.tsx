import { ContactSection } from './SectionsHomePage/ContactSection'
import { FooterSection } from '../../SectionsGlobals/FooterSection'
import { HeroSection } from './SectionsHomePage/HeroSection'
import { NavBarSection } from '../../SectionsGlobals/NavBarSection'
import { SectionsContainers } from '../../Style/styledGlobal'
import { DesignSection } from './SectionsHomePage/DesignSection'
import { GallerySection } from './SectionsHomePage/GallerySection'

import {
    NavBarSectionContainer,
    HeroSectionContainer,
    DesignSectionContainer,
    GallerySectionContainer,
    ContactSectionContainer,
    FooterSectionContainer
} from './style'
import { ButtonScrollTop } from '../../Components/ButtonScrollTop'

export function HomePage() {
    return (
        <>
            <ButtonScrollTop />

            <NavBarSectionContainer>
                <SectionsContainers>
                    <NavBarSection />
                </SectionsContainers>
            </NavBarSectionContainer>

            <HeroSectionContainer>
                <SectionsContainers>
                    <HeroSection />
                </SectionsContainers>
            </HeroSectionContainer>

            <DesignSectionContainer>
                <SectionsContainers>
                    <DesignSection />
                </SectionsContainers>
            </DesignSectionContainer>

            <GallerySectionContainer>
                <SectionsContainers>
                    <GallerySection />
                </SectionsContainers>
            </GallerySectionContainer>

            <ContactSectionContainer>
                <SectionsContainers>
                    <ContactSection />
                </SectionsContainers>
            </ContactSectionContainer>

            <FooterSectionContainer>
                <SectionsContainers>
                    <FooterSection />
                </SectionsContainers>
            </FooterSectionContainer>
        </>
    )
}