import styled from "styled-components";
export const Main = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    h1,h2 {
        font-weight: bold;
        color:#333333
    }
    h1{
        text-transform: uppercase;
        font-size: 36px;
        letter-spacing: 2px;
        line-height: 45px;
    }
    .Reabertura{
        margin: 10px 0;
    }
    .horario{
        color: #a2a2a2;
        font-size: 14;
        margin: 30px 0;
    }
    .Reabertura::after{
        margin-top: 10px;
        content: '';
        display: block;
        width: 8%;
        height: 10px;
        background-color: #515151;
    }
    .horas{
        color:#acacac;
        border: solid 3px #ededed;
        border-radius:5px ;
        padding:12px 20px;
        .relogio{
            display: flex;
            align-items: center;
            justify-content: left;
            gap: 10px;
        }
        .periodo{
            padding:8px 10px;
            padding-top:20px ;
            font-size: 22px;
            border-bottom: 2px solid #ededed;
        }
        .inputFather{
            display: flex;
            flex-direction: column;
            align-items: start;
            label{
                padding: 10px 0;
                display: flex;
                justify-content:space-between;
                align-items: center;
                width: 100%;
                border-bottom: 2px solid #ededed;

            }
            label:first-child{
                padding-top:20px ;
            }
            input[type="checkbox"]{
                width: 16px;
                height: 16px;
                margin-right:8px;
            }
            .chooseOpen{
                width: 100%;
                color: #6b6b6b;
                label{
                    border: none;
                    display: flex;
                    justify-content: space-between;
                    span{
                        color: black;
                        font-weight: bold;
                    }
                }
            }
            .button{
                width: 100%;
                text-transform: uppercase;
                color: black;
                font-weight: bold;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 20px;
            & button{
                width: 200px;
                height: 40px;
                border-radius: 6px;
                font-size: 14px;
            }
                .yellow{
                    background-color:#feb735;
                }
                .white{
                    border: 2px solid #dadada;
                }
            }
        }
    }
    .divInfo{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 20px;
        .divChildren{
            padding: 10px 15px;
            background-color: #f5f5f5;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;;
        }
    }
`