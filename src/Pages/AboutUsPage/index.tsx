import { FooterSection } from "../../SectionsGlobals/FooterSection";
import { NavBarSection } from "../../SectionsGlobals/NavBarSection";
import { SectionsContainers } from "../../Style/styledGlobal";
import { FooterSectionContainer, NavBarSectionContainer } from "../HomePage/style";

import {
    AboutUsContainerSectionDiv,
    AboutUsTextsSectionDiv,
    AboutUsTitleDiv,
    AboutUsParagraphDiv,
    AboutUsFilterDiv
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
                <AboutUsFilterDiv>
                    <AboutUsTextsSectionDiv>

                        <AboutUsTitleDiv>
                            <h3>Bem-Vindo a Home You <br />Onde Lares Se Tornam Arte Interior</h3>
                        </AboutUsTitleDiv>
                        <AboutUsParagraphDiv>
                            <p>A Home You vai além do design, contando histórias através de espaços cativantes,
                                usando elementos visuais para criar ambientes significativos e transformar sonhos
                                em realidade. Somos contadores de histórias visuais que unem design e narrativa.
                            </p>
                        </AboutUsParagraphDiv>
                    </AboutUsTextsSectionDiv>
                </AboutUsFilterDiv>
            </AboutUsContainerSectionDiv>

            <FooterSectionContainer>
                <SectionsContainers>
                    <FooterSection />
                </SectionsContainers>
            </FooterSectionContainer>
        </>
    )
}