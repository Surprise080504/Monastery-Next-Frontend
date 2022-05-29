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
`;
export const TitlePart = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width:980px){
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
    display: flex;
    gap: 20px;
    @media screen and (max-width:980px){
        width:100%;
        margin-top: 10px;
    }
    @media screen and (max-width:660px){
        flex-direction: column;
    }
`;
export const SearchBtn = styled.div`
    width: 32px;
    height: 32px;
    margin: 6px 9px 7px 0;
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #0085ff;
    box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.1);
`;
export const SearchInput = styled.input`
    /* width: 100%; */
    height: 100%;
    border-radius: 10px;
    border-style: none;
    padding: 0 50px 0 20px;
    background-color: #fff;
    :active, :focus{
        outline: none;
    }
`;
export const SearchPart = styled.div`
    width: 265px;
    height: 46px;
    border-radius: 10px;
    position: relative;
    background-color: #fff;
    border: 1px solid #e1e8ee;
    box-sizing: border-box;
    @media screen and (max-width:980px){
        width: 100%;
    }
`;
export const ContactBtn = styled.div`
    min-width: 143px;
    width: 143px;
    height: 46px;
    border-radius: 10px;
    cursor: pointer;
    background: #E5F2FF;
    color: #0085FF;
    font-family: Sans;
    font-size: 18px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:430px){
        width: 181px !important;
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
export const TblPart = styled.div`
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-top: 40px;
    min-width:1000px;
    width: 100%;
    border-radius: 10px;
    background-color: #fff;
`;
export const Thead = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    padding: 0 30px 0 24px;
`;
export const TCheck = styled.input`
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid #D5D5D5;
    box-sizing: border-box;
    margin-right: 24px;
    border-radius: 4px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    ::after {
        content: "√";
        width: 14px;
        height: 14px;
        position: absolute;
        background-color: #0085ff;
        border-radius: 4px;
        transform: scale(0);
        font-size: 8px;
        color: #fff;
        font-weight: bolder;
        padding-left: 3px;
        padding-top: 1px;
        transition: all 0.1s;
    }

    :checked::after {
        transform: scale(1);

    }

    :checked {
        /* border: 1px solid black; */
    }
`;
export const TheadName = styled.div<{ width?: string }>`
    color: rgba(0,0,0,.5);
    letter-spacing: 0.01em;
    font-size: 15px;
    font-weight: 700;
    width: ${(props) => props.width};
    font-family: Inter;
    font-style: normal;
`;
export const TheadGrp = styled.div`
    display: flex;
    align-items: center;
`;
export const TRow = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    cursor: pointer;
    align-items: center;
    transition: all .3s ease-in-out;
    border-top: 2px solid #EBEFF2;
    padding: 0 30px 0 24px;
    :hover{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
`;
export const TNameImg = styled.img`
    border-radius: 50%;
    margin-right: 10px;
`;
export const TRowName = styled.div<{ width?: string }>`
    color: #676767;
    letter-spacing: 0.01em;
    display: flex;
    align-items: center;
    font-size: 13px;
    width: ${(props) => props.width};
    font-family: Inter;
    font-style: normal;
`;
export const TNameOut = styled.div`
    color: #000000;
    letter-spacing: 0.01em;
    font-style: normal;
    font-size: 15px;
    font-family: InterBold;
`;
export const StatusItem = styled.div<{ bg?: string }>`
    width: 114px;
    height: 30px;
    background: ${(props) => props.bg ? "rgba(0, 194, 113, 0.08)" : "rgba(255, 0, 0, 0.08)"};
    border-radius: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.01em;
    color: ${(props) => props.bg ? "#00C271" : "#FF0000"};
    font-family: PoppinsBold;
    font-size: 12px;
    font-weight: normal;
`;
export const MarkPart = styled.div`
    display: grid;
    margin-top: 50px;
    grid-template-columns: repeat(3,1fr);
    gap: 45px;
    @media screen and (max-width:980px){
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;
export const MarkItem = styled.div`
    width: 100%;
    background-color: #fff;
`;
export const MarkTop = styled.div<{ bg?: string }>`
    height: 14px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-top: 2px solid ${(props) => props.bg};
`;
export const MarkMiddle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 0;
`;
export const MarkBottom = styled.div<{ bg?: string }>`
    height: 14px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom: 2px solid ${(props) => props.bg};
`;
export const MarkSub = styled.div`
    color: #718096;
    font-size: 18px;
    font-family: Roboto;
    font-weight: 500;
    letter-spacing: 0.1px;
    margin-top: 30px;
`;
export const MarkTitle = styled.div`
    color: #000;
    font-weight: 700;
    font-family: Sans;
    font-size: 50px;
    line-height: 35px;
`;
export const TblOut = styled.div`
    overflow-x: auto;
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