import { ContactSection } from '../../Sections/ContactSection'
import { DesignSection } from '../../Sections/DesignSection'
import { FooterSection } from '../../Sections/FooterSection'
import { GallerySection } from '../../Sections/GallerySection'
import { HeroSection } from '../../Sections/HeroSection'
import { NavBarSection } from '../../Sections/NavBarSection'
import { SectionsContainers } from '../../Style/styledGlobal'
import {
    NavBarSectionContainer,
    HeroSectionContainer,
    DesignSectionContainer,
    GallerySectionContainer,
    ContactSectionContainer,
    FooterSectionContainer
} from './style'

export function HomePage() {
    return (
        <>
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