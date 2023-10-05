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
import { useEffect } from "react";
import Aos from "aos";

export function ContactPage() {
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

            <ContactContainerSectionDiv>
                <ContactFilterDiv>
                    <ContactContentsSectionDiv>
                        <ContactTextsContentDiv>
                            <h1 data-aos="zoom-in">Do Conceito à Realidade: Seu Espaço, Nossa Paixão</h1>
                            <p data-aos="zoom-in" data-aos-delay="300">
                                Estamos ansiosos para ouvir de você.
                                Envie-nos uma mensagem e deixe-nos
                                transformar sua visão em realidade.
                            </p>
                        </ContactTextsContentDiv>
                        <ContactFormContainerDiv>
                            <input type="text" placeholder="Nome" data-aos="fade-left" />
                            <input type="text" placeholder="Email" data-aos="fade-left" data-aos-delay="300" />
                            <textarea placeholder="Mensagem" data-aos="fade-left" data-aos-delay="600" />
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