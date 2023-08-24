import {
    DesignContainer,
    DesignImageContainer,
    DesignContentContainer,
    DesignTextContainer,
    DesignLinkContainer
} from './style'
import Aos from 'aos';
import { useEffect } from 'react';

import DesignImage from '../../../../Assets/Images/DesignImage.png'
import { Link } from 'react-router-dom'

export function DesignSection() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    })

    return (
        <>
            <DesignContainer>
                <DesignImageContainer data-aos="fade-right">
                    <img src={DesignImage} />
                </DesignImageContainer>
                <DesignContentContainer>
                    <DesignTextContainer data-aos="zoom-in">
                        <h2>Design Minimalista</h2>
                        <p>Móveis apenas essenciais e com design moderno, além de revestimentos bonitos e em cores neutras para manter a casa sempre com um estilo clean e suave.</p>
                    </DesignTextContainer>
                    <DesignLinkContainer data-aos="zoom-in-down">
                        <Link to="/galeria">Quero ver mais designs</Link>
                    </DesignLinkContainer>
                </DesignContentContainer>
            </DesignContainer>
        </>
    )
}