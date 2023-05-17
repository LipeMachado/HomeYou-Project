import styled from "styled-components";

export const HeroContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 30px 0 30px;
    gap: 50px;

    @media only screen and (max-width: 1024px) {
        display: flex;
        justify-content: center;
        padding: 40px 30px 40px 30px;
    }
`;

export const HeroContentContainer = styled.div`
    width: 32rem;
    margin: auto;

    h1 {
        margin-bottom: 16px;
        font-family: 'MontserratSemiBold';
        font-size: 40px;
        color: #272727;

        @media only screen and (max-width: 1024px) {
            font-family: 'MontserratSemiBold';
            font-size: 24px;
            color: #272727;
        }
    }

    p {
        font-family: 'MontserratMedium';
        font-size: 18px;
        color: #797979;

        @media only screen and (max-width: 1024px) {
            font-family: 'MontserratMedium';
            font-size: 14px;
            color: #797979;
        }
    }
`;

export const HeroButtonsContainer = styled.div`
    display: flex;
    margin-top: 32px;
    gap: 20px;
`;

export const HeroButtonContact = styled.div`
    border: 1px solid #272727;
    background-color: #272727;
    color: #fff;
    padding: 12px 26px 12px 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: transparent;
        color: #272727;
    }

    @media only screen and (max-width: 1024px) {
        padding: 8px 15px 8px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
    }
`;

export const HeroButtonAbout = styled.div`
    padding: 12px 26px 12px 26px;
    text-decoration: underline;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: #7b7b7b;
    }

    @media only screen and (max-width: 1024px) {
        border: 1px solid transparent;
        padding: 8px 0 8px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;

        &:hover {
            background-color: transparent;
            color: #272727;
        }
    }
`;

export const HeroImageContainer = styled.div`
    width: min(100%,660px);
    height: 100%;

    @media only screen and (max-width: 1024px) {
        display: none;
    }

    img {
        min-width: 100%;
        max-width: 100%;
        min-height: 100%;
        max-height: 100%;
    }
`;