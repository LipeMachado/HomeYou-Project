import styled from "styled-components";

export const DesignContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 100px 30px 100px 30px;
`;

export const DesignImageContainer = styled.div`
    width: 500px;
    height: 500px;
    box-shadow: -40px -40px 0 0 #272727;

    @media only screen and (max-width: 1180px) {
        display: none;
    }

    img {
        width: 100%;
    }
`;

export const DesignContentContainer = styled.div`
    max-width: 500px;
`;

export const DesignTextContainer = styled.div`
    padding: 30px;
    background-color: #272727;
    color: #ffffff;

    h2 {
        font-family: 'MontserratSemiBold';
        font-size: 26px;
        margin-bottom: 20px;
    }

    p {
        font-size: 16px;
        font-family: 'MontserratMedium';
    }
`;

export const DesignLinkContainer = styled.div`
    font-size: 18px;
    font-weight: 500px;
    margin-top: 24px;
    text-decoration: underline;

    a {
        color: #272727;
    }

    @media only screen and (max-width: 1180px) {
        text-align: center;
    }
`;