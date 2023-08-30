import { FooterSection } from "../../SectionsGlobals/FooterSection";
import { NavBarSection } from "../../SectionsGlobals/NavBarSection";
import { SectionsContainers } from "../../Style/styledGlobal";
import { FooterSectionContainer, NavBarSectionContainer } from "../HomePage/style";

import {
    AboutUsContainerSectionDiv,
    AboutUsTextsSectionDiv
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
                <AboutUsTextsSectionDiv>
                    <div>
                        <h3>Bem-Vindo à Home You: Onde Lares Se Tornam Arte Interior</h3>
                    </div>
                    <div>
                        <p>A Home You vai além do design de interiores, criando histórias
                            encantadoras através de espaços cativantes. Mais do que designers,
                            somos contadores de histórias que utilizam cores, texturas e formas
                            como palavras para dar vida aos ambientes. Nossos projetos oferecem
                            um lugar onde cada detalhe de design possui uma história única,
                            onde a escolha dos móveis expressa personalidade e a funcionalidade
                            se une à elegância de maneira harmoniosa. Bem-vindo à Home You,
                            onde transformamos esses sonhos em realidade.
                        </p>
                    </div>
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