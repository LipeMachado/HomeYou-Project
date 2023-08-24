import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    gap: 100px;
    padding: 40px;

    @media only screen and (max-width: 850px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 40px;
        text-align: center;
        padding: 30px 40px;
    }

    a {
        text-decoration: none;
        color: #4c4c4c;
        cursor: pointer;
    
        &:hover {
            color: #000000;
        }
    }

    li {
        list-style-type: none;
        font-family: 'MontserratMedium';
        font-size: 17px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    h4 {
        margin-bottom: 0.5rem;
        font-family: 'MontserratSemiBold';
        font-size: 18px;
        color: rgba(39, 39, 39, 1);
    }
`;

export const FooterLogoDiv = styled.div`
    svg {
        background-color: #000;

        @media only screen and (max-width: 850px) {
            display: none;
        }
    }
`;

export const FooterProductDiv = styled.div``;

export const FooterInfosDiv = styled.div``;

export const FooterSocialMediasDiv = styled.div``;