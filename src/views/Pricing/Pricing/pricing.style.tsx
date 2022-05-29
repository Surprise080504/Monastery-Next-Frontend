import styled from "styled-components";

export const MainOut = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`;

export const Top = styled.div`
    width: 100vw;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    position: relative;
    background: linear-gradient(98.28deg, #002140 0%, #24517C 100.25%, #FFFFFF 100.25%);
    flex-direction: column;
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
    right: 50px;
    z-index: 1;
    top: 0;
`;
export const Card = styled.div`
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(4px);
    width: 335px;
    height:fit-content;
    height: 510px;
    /* padding: 40px; */
    
`;
export const CardWrapper = styled.div`
    padding: 40px;
    text-align: center;
    display: flex;
    height: -webkit-fill-available;
    flex-direction: column;
    justify-content: space-between;
`;
export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 35px;
    justify-content: center;
    max-width: 1220px;
    z-index: 2;
    width: 95%;
    margin-bottom: 50px;
`;
export const CardTitle = styled.div`
    color: #fff;
    font-family: Roboto;
    font-weight: 700;
    font-size: 22px;
    font-style: normal;
    letter-spacing: 0.1px;
`;
export const CardSub = styled.div`
    font-family: Sans;
    font-style: normal;
    margin-top: 20px;
    font-weight: 400;
    font-size: 16px;
    color: rgba(255,255,255,.65);
`;
export const Cardmoney = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 30px;
`;
export const CardMleft = styled.div`
    font-family: Inter;
    font-weight: 900;
    font-size: 55px;
    color: #fff;
    letter-spacing: 0.2px;
`;
export const CardMRight = styled.div`
        margin-left: 10px;
`;
export const CardItem = styled.div`
    color: #fff;
    font-family: Sans;
    margin-bottom: 25px;
    font-size: 16px;
    font-weight: 400;
`;
export const CRTop = styled.div`
    font-family: Inter;
    font-weight: 700;
    font-size: 20px;
    text-align: left;
    letter-spacing: 0.1px;
    color: #fff;
`;
export const CRbottom = styled.div`
    font-family: Inter;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.1px;
    margin-top: 5px;
    color: rgba(255,255,255,0.65);
`;
export const CardBtn = styled.div`
    background: #0085FF;
    border-radius: 10px;
    width: 100%;
    cursor: pointer;
    height: 46px;
    display: flex;
    margin-top: 27px;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: Sans;
    font-weight: 600;
`;