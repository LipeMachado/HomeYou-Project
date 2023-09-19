import { ArrowRight } from "phosphor-react";
import { FooterSection } from "../../SectionsGlobals/FooterSection";
import { NavBarSection } from "../../SectionsGlobals/NavBarSection";
import { SectionsContainers } from "../../Style/styledGlobal";
import { FooterSectionContainer, NavBarSectionContainer } from "../HomePage/style";

import {
    ContactContainerSectionDiv,
    ContactFilterDiv,
    ContactContentsSectionDiv,
    ContactTextsContentDiv,
    ContactFormContainerDiv
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
                <ContactFilterDiv>
                    <ContactContentsSectionDiv>
                        <ContactTextsContentDiv>
                            <h1>Do Conceito à Realidade: Seu Espaço, Nossa Paixão</h1>
                            <p>
                                Estamos ansiosos para ouvir de você.
                                Envie-nos uma mensagem e deixe-nos
                                transformar sua visão em realidade.
                            </p>
                        </ContactTextsContentDiv>
                        <ContactFormContainerDiv>
                            <input type="text" placeholder="Nome" />
                            <input type="text" placeholder="Email" />
                            <textarea placeholder="Mensagem" />
                            <button>Enviar mensagem <ArrowRight size={22} weight="bold" /></button>
                        </ContactFormContainerDiv>
                    </ContactContentsSectionDiv>
                </ContactFilterDiv>
            </ContactContainerSectionDiv>

            <FooterSectionContainer>
                <SectionsContainers>
                    <FooterSection />
                </SectionsContainers>
            </FooterSectionContainer>
        </>
    )
}