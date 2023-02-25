import styled from 'styled-components'
import FundoHeader from '../../images/supfundo.jpg'

export const ContainerHeader = styled.div`
    width: 100%;
    height: 400px;
    align-items: center;
`

export const TopoContainer = styled.div`
    width: 100%;
    height: 60px;
    background: ${({ acao }) => (acao ? 'black' : 'rgb(0,0,0, 0.3)')} ;
    position: fixed;
    display: flex;
    transition: all ease 0.3s;
    align-items: center;
    padding-left: 50px;
    color: white;
    justify-content: space-around;
`

export const SidebarContainer = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-image: url(${FundoHeader}) ;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    border-bottom: solid 3px;
    opacity: 100%;
`

export const ImgHeader = styled.img`

`





