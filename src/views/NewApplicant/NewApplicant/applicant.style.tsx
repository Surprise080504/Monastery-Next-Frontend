import styled from "styled-components";

export const MainOut = styled.div`
    width: 100vw;
    background-color: #F8F9FB;
    height: 100%;
    position: relative;
`;
export const MainRight = styled.div`
    width: 100%;
    height:100%;
`;
export const MainRightOut = styled.div`
    /* width: calc(100vw - 324px); */
    min-height: 100vh;
    padding: 40px 70px 30px 40px;
    margin-left: 324px;
    display: flex;
    justify-content: center;
    transition: all .3s ease-in-out;
    /* align-items: center; */
    @media screen and (max-width:1280px){
        margin-left: 0 !important;
        /* width: 100% !important; */
        padding: 40px 40px 30px 40px;
    }
    @media screen and (max-width:600px){
        padding: 40px 20px 30px 20px;
    }
`;
export const TitlePart = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width:530px){
        flex-direction: column;
    }
`;
export const Title = styled.div`
    color: #000;
    font-family: SansBold;
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 34px;
`;
export const TiitleRight = styled.div`
    @media screen and (max-width:530px){
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }
`;
export const NewAppBtn = styled.div`
    width: 181px;
    min-width: 181px;
    height: 46px;
    border-radius: 10px;
    display: flex;
    cursor: pointer;
    background-color: #0085FF;
    color: #fff;
    font-family: Sans;
    font-size: 18px;
    font-weight: 600;
    justify-content: center;
    align-items: center;
`;
export const ResBack = styled.div<{ opa?: boolean }>`
    background-color: rgba(0,0,0,0.5);
    z-index: 2;
    position: fixed;
    top: 0;
    opacity: ${(props) => props.opa ? 1 : 0};
    transition: all .3s;
    left: 0;
    width: 100vw;
    height: 100vh;
    @media screen and (min-width:1280px){
        display: none;
    }
`;
export const Btns = styled.div`
    display: flex;
    gap: 20px;
    @media screen and (max-width:660px){
        justify-content: center;
    }
    @media screen and (max-width:430px){
        flex-direction: column;
        align-items: center;
    }
`;
export const ContentPart = styled.div`
    background-color: #fff;
    border-radius: 20px;
    margin-top: 40px;
    padding: 40px;
`;
export const CtitleLeft = styled.div`
    @media screen and (max-width:790px){
        text-align: center;
    }
`;
export const Ctitle = styled.div`
    font-style: normal;
    font-size: 24px;
    font-family: SansBold;
    color: #000000;
    @media screen and (max-width:500px){
        text-align: center;
    }
`;
export const Csub = styled.div`
    color: #656464;
    font-weight: 400;
    font-size: 16px;
    margin-top: 15px;
    font-family: Inter;
    @media screen and (max-width:790px){
        margin-top: 5px;
    }
`;
export const CtitleRight = styled.div`
    background: #F8F9FB;
    border-radius: 10px;
    width: 208px;
    height: 46px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:790px){
        margin-top: 15px;
    }

`;
export const CEmail = styled.div<{ sel?: number }>`
    /* background: #0085FF; */
    background: ${(props) => props.sel === 1 && "#0085FF"};
    color: ${(props) => props.sel === 1 ? "#fff" : "#0085ff"};
    border-radius: 8px;
    width: 100px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    font-family: Sans;
`;
export const CMobile = styled.div<{ sel?: number }>`
    background: ${(props) => props.sel === 2 && "#0085FF"};
    color: ${(props) => props.sel === 2 ? "#fff" : "#0085ff"};
    border-radius: 8px;
    width: 100px;
    height: 32px;
    font-weight: 600;
    font-size: 14px;
    font-family: Sans;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const TopPart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:790px){
        flex-direction: column;
    }
`;
export const BorderLine = styled.div`
    border: 1px solid #DEDEDE;
    margin-top: 40px;
    margin-bottom: 30px;
`;
export const InputPart = styled.div`
    margin-top: 30px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3,1fr);
    @media screen and (max-width:800px){
        grid-template-columns: repeat(2,1fr);
    }
    @media screen and (max-width:590px){
        grid-template-columns: 1fr;
    }
`;
export const ApplicantPart = styled.div`
    margin-top: 20px;
    margin-bottom: 40px;
`;
export const InputLabel = styled.div`
    color: #000000;
    font-weight: 500;
    font-size: 16px;   
    font-family: SansBold;
`;
export const InputItem = styled.input`
    border: 1.5px solid #EBEFF2;
    border-radius: 10px;
    font-family: Sans;
    margin-top: 10px;
    height: 46px;
    font-size: 16px;
    padding: 0 10px;
    width: -webkit-fill-available;
    :focus,:active{
        outline: none;
    }
`;
export const InputOne = styled.div`
    width: 100%;
`;
export const SelectItem = styled.select`
    border: 1.5px solid #EBEFF2;
    border-radius: 10px;
    margin-top: 10px;
    height: 46px;
    font-size: 16px;
    font-family: SansBold;
    padding-left: 10px;
    width: -webkit-fill-available;
    :focus,:active{
        outline: none;
    }
`;
export const ContactPart = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    margin-top: 30px;
    @media screen and (max-width:590px){
        grid-template-columns: 1fr;
    }
`;
export const LongText = styled.div`
    color: #000000;
    font-size: 16px;
    font-weight: 400;
    font-family: Sans;
    margin: 30px 0;
    @media screen and (max-width:500px){
        text-align: center;
    }
`;
export const IncomePart = styled.div`
    font-style: normal;
    font-size: 24px;
    font-family: SansBold;
    color: #000000;
    margin: 40px 0 30px;
    @media screen and (max-width:500px){
        text-align: center;
    }
`;
export const CheckPart = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    height: 49px;
    margin-top: 10px;
    @media screen and (max-width:580px){
        grid-template-columns: 1fr;
    }
`;
export const CheckItem = styled.div`
    display: flex;
    align-items: center;
    color: #000;
    font-weight: 500;
    font-size: 16px;
    font-family: SansBold;
`;
export const CusCheckbox = styled.input`
    appearance: none;
    min-width: 18px;
    min-height: 18px;
    border: 2px solid #D5D5D5;
    box-sizing: border-box;
    margin-right: 10px;
    border-radius: 4px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    ::after {
        content: "";
        width: 16px;
        height: 16px;
        position: absolute;
        background-color: #0085ff;
        border-radius: 4px;
        transform: scale(0);
        font-size: 11px;
        color: #fff;
        font-weight: bolder;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.1s;
    }

    :checked::after {
        transform: scale(1);

    }

    :checked {
        /* border: 1px solid black; */
    }
`;
export const ConsentPart = styled.div`
    display: flex;
    margin-bottom: 40px;
    align-items: center;
    color: #000;
    font-weight: 500;
    font-size: 16px;
    font-family: SansBold;
`;
export const ContinumBtn = styled.div`
    height: 46px;
    background-color: #0085ff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    color: #fff;
    font-family: SansBold;
    font-size: 18px;
`;
export const IComePart = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    margin-top: 30px;
    @media screen and (max-width:1400px){
        grid-template-columns: 1fr;
    }
`;