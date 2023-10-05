import { useEffect } from "react";
import { FooterSection } from "../../SectionsGlobals/FooterSection";
import { NavBarSection } from "../../SectionsGlobals/NavBarSection";
import { SectionsContainers } from "../../Style/styledGlobal";
import { FooterSectionContainer, NavBarSectionContainer } from "../HomePage/style";

import {
    AboutUsContainerSectionDiv,
    AboutUsTextsSectionDiv,
    AboutUsTitleDiv,
    AboutUsParagraphDiv,
} from './style'
import Aos from "aos";

export function AboutUsPage() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    })

    return (
        <>
            <NavBarSectionContainer>
                <SectionsContainers>
                    <NavBarSection />
                </SectionsContainers>
            </NavBarSectionContainer>

            <AboutUsContainerSectionDiv>
                <AboutUsTextsSectionDiv>
                    <AboutUsTitleDiv data-aos="zoom-in">
                        <h3>Bem-Vindo a Home You <br />Onde Lares Se Tornam Arte Interior</h3>
                    </AboutUsTitleDiv>
                    <AboutUsParagraphDiv data-aos="zoom-in" data-aos-delay="200">
                        <p>A Home You vai além do design, contando histórias através de espaços cativantes,
                            usando elementos visuais para criar ambientes significativos e transformar sonhos
                            em realidade. Somos contadores de histórias visuais que unem design e narrativa.
                        </p>
                    </AboutUsParagraphDiv>
                </AboutUsTextsSectionDiv>
            </AboutUsContainerSectionDiv>

            <FooterSectionContainer>
                <SectionsContainers>
                    <FooterSection />
                </SectionsContainers>
            </FooterSectionContainer>
        </>
    )
}