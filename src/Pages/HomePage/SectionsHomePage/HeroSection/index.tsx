import {
    HeroContainer,
    HeroContentContainer,
    HeroButtonsContainer,
    HeroButtonContact,
    HeroButtonAbout,
    HeroImageContainer
} from "./style";
import Aos from 'aos';
import { useEffect } from 'react';

import HeroImage from '../../../../Assets/Images/HeroImage.png'

export function HeroSection() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    })

    return (
        <>
            <HeroContainer>
                <HeroContentContainer>
                    <h1 data-aos="fade-right">Ajudar você a encontrar o melhor conforto, é nossa prioridade.</h1>
                    <p data-aos="fade-right">Encontre uma variedade de propriedades que combinam com você. Esqueça todas as dificuldades em encontrar uma residência</p>
                    <HeroButtonsContainer>
                        <HeroButtonContact data-aos="zoom-in">Entrar em contato</HeroButtonContact>
                        <HeroButtonAbout data-aos="zoom-in">Mais sobre nós</HeroButtonAbout>
                    </HeroButtonsContainer>
                </HeroContentContainer>
                <HeroImageContainer data-aos="fade-left">
                    <img src={HeroImage} />
                </HeroImageContainer>
            </HeroContainer>
        </>
    )
}