import styled from "styled-components";

export const Top = styled.div`
    width: 100vw;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    position: relative;
    background: linear-gradient(98.28deg, #002140 0%, #24517C 100.25%, #FFFFFF 100.25%);
`;
export const TopBody = styled.div`
    max-width: 1200px;
    width: 95%;
    padding: 83px 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`;

export const Toptitle = styled.div`
    font-family: SansBold;
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 60px;
    color: #FFFFFF;
    span{
        color: #0085FF;
    }
`;
export const TopText = styled.div`
    font-family: Sans;
    font-weight: 400;
    color: rgba(255,255,255,.3);
    font-size: 16px;
    line-height: 30px;
    width: 536px;
    margin-top: 30px;
    @media screen and (max-width:590px){
        width: 90% !important;
    }
`;
export const Toplines = styled.img`
    position: absolute;
    right: -80px;
    z-index: 1;
    top: 0;
`;
