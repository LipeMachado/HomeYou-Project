import { ContactSection } from '../../Sections/ContactSection'
import { DesignSection } from '../../Sections/DesignSection'
import { FooterSection } from '../../Sections/FooterSection'
import { GalerySection } from '../../Sections/GalerySection'
import { HeroSection } from '../../Sections/HeroSection'
import { NavBarSection } from '../../Sections/NavBarSection'
import {
    SectionsContainers,
    NavBarSectionContainer,
    HeroSectionContainer,
    DesignSectionContainer,
    GalerySectionContainer,
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

            <GalerySectionContainer>
                <SectionsContainers>
                    <GalerySection />
                </SectionsContainers>
            </GalerySectionContainer>

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