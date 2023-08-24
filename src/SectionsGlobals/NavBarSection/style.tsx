import styled from "styled-components";

export const NavBarContainerComponent = styled.nav`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`;

export const NavBarLogoContainer = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
        background-color: #000;
    }

    a {
        text-decoration: none;
        color: rgba(39, 39, 39, 1);

        &:hover {
            color: #7b7b7b;
        }
    }
`;

export const NavBarLinksContainer = styled.div`
    ul {
        display: flex;
        list-style-type: none;
        gap: 48px;

        a {
            text-decoration: none;
            font-weight: 500;
            font-size: 18px;
            transition: all 0.2s ease-in-out;
            color: rgba(39, 39, 39, 1);

            &:hover {
                color: #7b7b7b;
            }
        }
    }

    @media only screen and (max-width: 1024px) {
        display: none;
    }
`;

export const NavBarLinksSVGContainer = styled.div`
    display: flex;
    gap: 48px;
    margin-left: 20px;
`;

export const NavBarMenuHamburguerContainer = styled.div`
    display: none;

    @media only screen and (max-width: 1024px) {
        display: flex;
        item-align: center;
        justify-content: center;
    }
`;