import styled from "styled-components";

export const ContactSectionDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 78px 0;
`;

export const ContactTitleParagraphDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        font-family: 'MontserratSemiBold';
        font-weight: 600;
        font-size: 32px;
        margin-bottom: 17px;
    }

    p {
        font-family: 'MontserratMedium';
        font-size: 18px;
        font-weight: 500;
        text-align: center;
    }
`;

export const ContactButtonDiv = styled.div`
    margin-top: 36px;

    a {
        border: 1px solid rgba(39, 39, 39, 1);
        padding: 12px 32px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        text-decoration: none;
        color: #000000;

        &:hover {
            background-color: rgba(39, 39, 39, 1);
            color: #ffffff;
    }
    }
`;