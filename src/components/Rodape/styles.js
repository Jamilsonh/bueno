import styled from "styled-components"

export const RodapeContainer = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    background-color: rgb(180, 180, 180);
    align-items: center;
    justify-content: center;
`

export const RodapeColumns = styled.div`
    margin-top: 20px;
    width: 1300px;
    height: 250px;
    display: flex;
    flex-direction : column;
    background-color: #dcdcdc;
    flex-wrap: wrap;
    align-items: center;
`

export const Columns = styled.div`
    display: flex;
    width: 350px;
    flex-direction: column;
    height: 100%;
    background: #dcdcdc;
    align-items: center;
    text-align: justify;

    h1 {
        font-size: 30px;
        margin-bottom: 20px;
    }

    div{ 
        font-size : 20px;
        letter-spacing: 2px;
        margin: 2px;

    }
`
