import styled from 'styled-components';

export const ScrollTopContainerDiv = styled.div`
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 99999;
`;

export const ScrollTopDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const TrianguloDiv = styled.div`
    width: 0; 
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid #fff;
`;