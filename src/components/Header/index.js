import React from 'react'
import { SidebarContainer, ImgHeader, TopoContainer, ContainerHeader } from './styles';
import LogoMenu from '../../images/buenologo.png'


const Header = ({acao}) => {
    return (
        <ContainerHeader>
            <TopoContainer acao={acao}>
                <ImgHeader src={LogoMenu} width="80px" height="50px"/>
                SUPERMERCADO BUENO
                <div>
                    Pagina inicial
                </div>
            </TopoContainer>
            <SidebarContainer>
                
            </SidebarContainer>
        </ContainerHeader>
        
    )
}

export default Header;