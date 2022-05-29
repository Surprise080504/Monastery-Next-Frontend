import styled from "styled-components";


export const MainOut = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
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
    right: -80px;
    z-index: 1;
    top: 0;
`;
export const TextGrp = styled.div`
    margin-bottom: 100px;
    margin-top: 100px;
`;
export const TextTitle = styled.div`
    font-family: Inter;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #2f2c4a;
    margin-bottom: 40px;
    @media screen and (max-width:600px){
        text-align: center !important;
    }
`;
export const TextContent = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #656464;
`;
export const TextOne = styled.div`
    margin-bottom: 45px;
`;
export const Main = styled.div`
    max-width: 1220px;
    width: 95%;
`;
export const Answer = styled.div`
    max-width: 1220px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 95%;
    @media screen and (max-width:660px){
        flex-direction: column !important;
        text-align: center !important;
    }
`;
export const AnswerOut = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 0;
    background: #0085FF;
`;
export const AnswerLeft = styled.div`

`;
export const AnswerRight = styled.div`
    background: #000000;
    border-radius: 10px;
    width: 185px;
    min-width: 185px;
    height: 46px;
    margin-left: 30px;
    cursor: pointer;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    font-family: Sans;
    @media screen and (max-width:660px){
        margin-top: 30px !important;
        margin-left: 0 !important;
    }
`;
export const AnswerTitle = styled.div`
    letter-spacing: -0.436364px;
    color: #FFFFFF;
    font-size: 32px;
    font-weight: 400;
    font-family: Inter;
    line-height: 40px;

`;
export const AnswerText = styled.div`
    opacity: 0.5;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    margin-top: 25px;
    color: #FFFFFF;
    mix-blend-mode: normal;
    font-family: Inter;
`;
export const AnswerImg = styled.img`
    position: absolute;
    top: -35px;
`;