import { Link } from 'react-router-dom'
import {
    FooterContainer,
    FooterLogoDiv,
    FooterProductDiv,
    FooterInfosDiv
} from './style'

export function FooterSection() {
    const Products = [
        {
            "itemProducts": "Galeria",
            "itemLink": "/galeria",
        },
    ]

    const Infos = [
        {
            "itemInfos": "Contato",
            "itemLink": "/contato",
        },
        {
            "itemInfos": "Sobre Nós",
            "itemLink": "/sobrenos"
        }
    ]

    return (
        <>
            <FooterContainer>
                <FooterLogoDiv>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.56738 19.4595L10.21 16.8168M10.21 16.8168L19.4593 7.56757L28.7085 16.8168M10.21 16.8168V30.03C10.21 30.7598 10.8016 31.3514 11.5313 31.3514H15.4953M28.7085 16.8168L31.3512 19.4595M28.7085 16.8168V30.03C28.7085 30.7598 28.1169 31.3514 27.3872 31.3514H23.4232M15.4953 31.3514C16.2251 31.3514 16.8166 30.7598 16.8166 30.03V24.7447C16.8166 24.015 17.4082 23.4234 18.138 23.4234H20.7806C21.5103 23.4234 22.1019 24.015 22.1019 24.7447V30.03C22.1019 30.7598 22.6935 31.3514 23.4232 31.3514M15.4953 31.3514H23.4232" stroke="#F9F9F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </FooterLogoDiv>
                <FooterProductDiv>
                    <ul>
                        <li>
                            <h4>Produtos</h4>
                        </li>
                        {Products.map((item) => {
                            return (
                                <>
                                    <li><Link to={item.itemLink}>{item.itemProducts}</Link></li>
                                </>
                            )
                        })}
                    </ul>
                </FooterProductDiv>
                <FooterInfosDiv>
                    <ul>
                        <li>
                            <h4>Mais Informações</h4>
                        </li>
                        {Infos.map((item) => {
                            return (
                                <>
                                    <li><Link to={item.itemLink}>{item.itemInfos}</Link></li>
                                </>
                            )
                        })}
                    </ul>
                </FooterInfosDiv>
            </FooterContainer>
        </>
    )
}