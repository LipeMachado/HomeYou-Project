import {
    ContactSectionDiv,
    ContactTitleParagraphDiv,
    ContactButtonDiv
} from './style'
import Aos from 'aos';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function ContactSection() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    })

    return (
        <>
            <ContactSectionDiv>
                <ContactTitleParagraphDiv>
                    <h2 data-aos="zoom-in">Orçamento</h2>
                    <p data-aos="zoom-in">Interessado em entrar em contato com um de nossos profissionais?</p>
                </ContactTitleParagraphDiv>
                <ContactButtonDiv data-aos="zoom-in-up">
                    <Link to="/">Entre em contato</Link>
                </ContactButtonDiv>
            </ContactSectionDiv>
        </>
    )
}