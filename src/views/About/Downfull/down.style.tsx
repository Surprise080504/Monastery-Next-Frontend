import styled from "styled-components";

export const AboutPartOut = styled.div`
    width: 100vw;
    display: flex;
    margin-top: 113px;
    justify-content: center;
    @media screen and (max-width:560px){
        margin-top: 50px !important;
    }
`;
export const AboutPart = styled.div`
    display: flex;
    max-width: 1200px;
    justify-content: space-between;
    width: 95%;
    align-items: center;
    @media screen and (max-width:1200px){
        flex-direction: column !important;
    }
`;
export const ALLeft = styled.div`
    gap: 32px;
    display: flex;
    flex-direction: column;
`;
export const AImg = styled.img``;
export const ALRight = styled.div``;
export const ARTitle = styled.div`
    color: #0085FF;
    letter-spacing: 0.15em;
    font-family: Sans;
    font-weight: 400;
    font-size: 20px;
    line-height: 50px;
    @media screen and (max-width:1180px){
        text-align: center !important;
    }
`;
export const ARSubTitle = styled.div`
    font-family: SansBold;
    font-weight: 700;
    color: #000;
    font-size: 40px;
    line-height: 50px;
    span{
        color: #0085FF;
    }
`;
export const ARText = styled.div`
    font-family: Sans;
    color: #676767;
    font-weight: 400;
    font-size: 16px;
    margin-top: 40px;
    line-height: 30px;
`;
export const ARRRight = styled.div`
    width: 600px;
    @media screen and (max-width:1200px){
        margin-top: 20px !important;
        width: 100% !important;
        text-align: center !important;
        order:2 !important;
    }

`;
export const ARRLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    @media screen and (max-width:1200px){
        order: 1 !important;
    }
    @media screen and (max-width:560px){
        flex-direction: column !important;
    }
`;
export const AboutImg = styled.img`
    max-width: 1220px;
    width: 95%;
`;
export const AboutOut = styled.div`
    width: 100vw;
    display: flex;
    margin-top: 150px;
    margin-bottom: 110px;
    justify-content: center;
    @media screen and (max-width:670px){
        margin-top: 50px !important;
        margin-bottom: 50px !important;
    }
`;