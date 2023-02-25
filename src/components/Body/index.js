import React from 'react'
import { ServicesContainer , Container, ImgLink, ContainerBody, AreaContainer, ContainerText, ContatoImg , ContatoImgContainer, ContatoText, RedesDiskText, ContainerLoja3, RedesDiskImage, RedesLoc, RedesDiskEntrega, SubRedesContainer, RedesText ,HistoriaText, ContatoRedesText,  ContatoRedes ,ContatoOficial, Text1, BuenoImage, Historia, ContainerLoja, ContainerRedesOfc,  ContainerImageRedes , ContainerLoja2, AreaContainerMini, AreaContainerMini2 , Text, Titulo, Info, InfoFuncionamento, InfoRedes, TituloContato, RedesContato, ImgRedes, SubRedes, TituloFuncionamento , Horarios, ContainerHistoria , HistoriaTitle, ContainerImage, ContainerImg, Container2, Container3, Container4, Container5 } from './styles';
import { Gi3DHammer } from "react-icons/gi";
import Insta from '../../images/Ins.png'
import Face from '../../images/face1.png'
import Wpp from '../../images/wpp1.png'
import Tel from '../../images/Tel.png'
import BuenoOficial from '../../images/BuenoLogo.jpg'
 
const Body = () => {
    return (
        <ContainerBody>
            <Historia>             
                <HistoriaTitle>
                    <HistoriaText>
                    Duis a aliquam sapien, et rhoncus orci. Mauris a vulputate lorem. Nunc vestibulum mi eget ex fringilla, 
                    vel eleifend mi mollis. Nulla euismod felis at eros fermentum, ut commodo tellus consectetur.
                    </HistoriaText>
                </HistoriaTitle>
                <ContainerImageRedes>
                    <ContainerImage>
                        <BuenoImage src={BuenoOficial} width="250px" height="250px"/>
                    </ContainerImage>
                    <ContainerRedesOfc>
                        <ContatoOficial>Contato Oficial</ContatoOficial>
                        <ContatoRedes>
                            <ContatoRedesText>
                                <ImgRedes href="https://www.instagram.com/redebuenosupermercados/"><ImgLink src={Insta} width="30px" height="20px"/></ImgRedes>
                            </ContatoRedesText>
                            <ContatoRedesText>
                                <ImgRedes href="https://www.facebook.com/supermercadobueno"><ImgLink src={Face} width="35px" height="35px"/></ImgRedes>
                            </ContatoRedesText>   
                        </ContatoRedes>
                    </ContainerRedesOfc>
                </ContainerImageRedes>     
            </Historia>
        
            <ServicesContainer>   
                <AreaContainer>  
                    <AreaContainerMini>
                        <ContainerLoja>
                            <ContainerImg>
                            <Container/>
                            </ContainerImg>
                            <Text>
                                <ContainerText>
                                    <Titulo>
                                        <Text1>Supermercado Bueno - Santa Maria</Text1>
                                        <h2>Avenida Zoroastro franco de caravalho, 580 - Santa Maria</h2> 
                                    </Titulo>
                                    <Info>
                                        <InfoRedes>
                                            <TituloContato>Contato</TituloContato>
                                            <RedesContato>
                                                <SubRedesContainer>
                                                    <SubRedes>
                                                        <ContatoImgContainer>
                                                        <ContatoImg src={Insta} width="40px" height="30px"></ContatoImg>
                                                        </ContatoImgContainer>
                                                        <ContatoText>Instagram</ContatoText>
                                                    </SubRedes>
                                                    <SubRedes>
                                                        <ContatoImgContainer>
                                                        <ContatoImg src={Tel} width="40px" height="35px"></ContatoImg>
                                                        </ContatoImgContainer>
                                                        <ContatoText>3222-6737</ContatoText>
                                                    </SubRedes>
                                                    <SubRedes/>                                
                                                    <SubRedes/>                                                                                                                                          
                                                </SubRedesContainer>     
                                                <RedesDiskEntrega>
                                                    <RedesDiskImage>
                                                        <ImgLink src={Wpp} width="40px" height="40px"/>
                                                    </RedesDiskImage>
                                                    <RedesDiskText>Faça seu pedido aqui</RedesDiskText>
                                                </RedesDiskEntrega>
                                                <RedesLoc>COMO CHEGAR</RedesLoc>
                                            </RedesContato>
                                        </InfoRedes>
                                        <InfoFuncionamento>
                                            <TituloFuncionamento>Horario de Funcionamento</TituloFuncionamento>
                                            <Horarios>
                                                <div>SEG 08:00 - 20:00</div> 
                                                <div>SEG 08:00 - 20:00</div>
                                                <div>SEG 08:00 - 20:00</div>
                                                <div>SEG 08:00 - 20:00</div>
                                                <div>SEG 08:00 - 20:00</div>
                                                <div>SEG 08:00 - 20:00</div>  
                                            </Horarios>              
                                        </InfoFuncionamento>
                                    </Info> 
                                                
                                </ContainerText>  
                            </Text>
                        </ContainerLoja>
                    </AreaContainerMini>

                    <AreaContainerMini>
                        <ContainerLoja2>
                            <ContainerImg>
                            <Container2/>
                            </ContainerImg>
                            <Text>
                                <ContainerText>
                                    <Titulo>
                                        <Text1>Supermercado Bueno - São Geraldo</Text1>
                                        <h2>Rua Jaime Venturato, 145 - Vila São Geraldo</h2> 
                                    </Titulo>
                                    <Info>
                                    <InfoRedes>
                                            <TituloContato>Contato</TituloContato>
                                            <RedesContato>
                                                <SubRedesContainer>
                                                    <SubRedes>
                                                        <ContatoImgContainer>
                                                        <ContatoImg src={Insta} width="40px" height="30px"></ContatoImg>
                                                        </ContatoImgContainer>
                                                        <ContatoText>Instagram</ContatoText>
                                                        
                                                    </SubRedes>
                                                    <SubRedes>
                                                        <ContatoImgContainer>
                                                        <ContatoImg src={Tel} width="40px" height="35px"></ContatoImg>
                                                        </ContatoImgContainer>
                                                        <ContatoText>3222-6737</ContatoText>
                                                        
                                                    </SubRedes>
                                                    <SubRedes/>                                
                                                    <SubRedes/>                                                                                                                                          
                                                </SubRedesContainer>     
                                                <RedesDiskEntrega>
                                                    <RedesDiskImage>
                                                        <ImgLink src={Wpp} width="40px" height="40px"/>
                                                    </RedesDiskImage>
                                                    <RedesDiskText>Faça seu pedido aqui</RedesDiskText>
                                                </RedesDiskEntrega>
                                                <RedesLoc>COMO CHEGAR</RedesLoc>
                                            </RedesContato>
                                        </InfoRedes>
                                        <InfoFuncionamento>
                                            <TituloFuncionamento>Horario de Funcionamento</TituloFuncionamento>
                                            <Horarios>
                                                <div>SEG - 08:00 ás 20:00</div> 
                                                <div>SEG - 08:00 ás 20:00</div> 
                                                <div>SEG - 08:00 ás 20:00</div> 
                                                <div>SEG - 08:00 ás 20:00</div> 
                                                <div>SEG - 08:00 ás 20:00</div> 
                                                <div>SEG - 08:00 ás 20:00</div>     
                                            </Horarios>              
                                        </InfoFuncionamento>
                                    </Info> 
                                                
                                </ContainerText>  
                            </Text>
                        </ContainerLoja2>
                    </AreaContainerMini>

                    <AreaContainerMini>
                        <ContainerLoja2>
                            <ContainerImg>
                            <Container3/>
                            </ContainerImg>
                            <Text>
                                <ContainerText>
                                    <Titulo>
                                        <Text1>Supermercado Bueno - Sion</Text1>
                                        <h2>Avenida Dr.José Justiniano dos Reis, 2135 - Jardim Sion</h2> 
                                    </Titulo>
                                    <Info>
                                    <InfoRedes>
                                            <TituloContato>Contato</TituloContato>
                                            <RedesContato>
                                                <SubRedesContainer>
                                                    <SubRedes>
                                                        <ContatoImgContainer>
                                                        <ContatoImg src={Insta} width="40px" height="30px"></ContatoImg>
                                                        </ContatoImgContainer>
                                                        <ContatoText>Instagram</ContatoText>
                                                    </SubRedes>
                                                    <SubRedes>
                                                        <ContatoImgContainer>
                                                        <ContatoImg src={Tel} width="40px" height="35px"></ContatoImg>
                                                        </ContatoImgContainer>
                                                        <ContatoText>3222-6737</ContatoText>
                                                    </SubRedes>
                                                    <SubRedes/>                                
                                                    <SubRedes/>                                                                                                                                          
                                                </SubRedesContainer>     
                                                <RedesDiskEntrega>
                                                    <RedesDiskImage>
                                                        <ImgLink src={Wpp} width="40px" height="40px"/>
                                                    </RedesDiskImage>
                                                    <RedesDiskText>Faça seu pedido aqui</RedesDiskText>
                                                </RedesDiskEntrega>
                                                <RedesLoc>COMO CHEGAR</RedesLoc>
                                            </RedesContato>
                                        </InfoRedes>
                                        <InfoFuncionamento>
                                            <TituloFuncionamento>Horario de Funcionamento</TituloFuncionamento>
                                            <Horarios>
                                                <div>SEG - 08:00 ás 20:00</div> 
                                                <div>SEG - 08:00 ás 20:00</div> 
                                                <div>SEG - 08:00 ás 20:00</div> 
                                                <div>SEG - 08:00 ás 20:00</div> 
                                                <div>SEG - 08:00 ás 20:00</div> 
                                                <div>SEG - 08:00 ás 20:00</div>     
                                            </Horarios>              
                                        </InfoFuncionamento>
                                    </Info> 
                                                
                                </ContainerText>  
                            </Text>
                        </ContainerLoja2>
                    </AreaContainerMini>

                    <AreaContainerMini>
                        <ContainerLoja2>
                            <ContainerImg>
                            <Container4/>
                            </ContainerImg>
                            <Text>
                                <ContainerText>
                                    <Titulo>
                                        <Text1>Supermercado Bueno - Centenário</Text1>
                                        <h2>Rua Cinquenta e Sete, 75 - Centenário</h2> 
                                    </Titulo>
                                    <Info>
                                    <InfoRedes>
                                            <TituloContato>Contato</TituloContato>
                                            <RedesContato>
                                                <SubRedesContainer>
                                                    <SubRedes>
                                                        <ContatoImgContainer>
                                                        <ContatoImg src={Insta} width="40px" height="30px"></ContatoImg>
                                                        </ContatoImgContainer>
                                                        <ContatoText>Instagram</ContatoText>
                                                    </SubRedes>
                                                    <SubRedes>
                                                        <ContatoImgContainer>
                                                        <ContatoImg src={Tel} width="40px" height="35px"></ContatoImg>
                                                        </ContatoImgContainer>
                                                        <ContatoText>3222-6737</ContatoText>
                                                    </SubRedes>
                                                    <SubRedes/>                                
                                                    <SubRedes/>                                                                                                                                          
                                                </SubRedesContainer>     
                                                <RedesDiskEntrega>
                                                    <RedesDiskImage>
                                                        <ImgLink src={Wpp} width="40px" height="40px"/>
                                                    </RedesDiskImage>
                                                    <RedesDiskText>Faça seu pedido aqui</RedesDiskText>
                                                </RedesDiskEntrega>
                                                <RedesLoc>COMO CHEGAR</RedesLoc>
                                            </RedesContato>
                                        </InfoRedes>
                                        <InfoFuncionamento>
                                            <TituloFuncionamento>Horario de Funcionamento</TituloFuncionamento>
                                            <Horarios>
                                                <div>SEG - 08:00 ás 20:00</div> 
                                                <div>SEG - 08:00 ás 20:00</div> 
                                                <div>SEG - 08:00 ás 20:00</div> 
                                                <div>SEG - 08:00 ás 20:00</div> 
                                                <div>SEG - 08:00 ás 20:00</div> 
                                                <div>SEG - 08:00 ás 20:00</div>     
                                            </Horarios>              
                                        </InfoFuncionamento>
                                    </Info> 
                                                
                                </ContainerText>  
                            </Text>
                        </ContainerLoja2>
                    </AreaContainerMini>

                    <AreaContainerMini>
                        <ContainerLoja3>
                            <ContainerImg>
                            <Container5/>
                            </ContainerImg>
                            <Text>
                                <ContainerText>
                                    <Titulo>
                                        <Text1>Supermercado Bueno - Mont Serrat</Text1>
                                        <h2>Avenida Leocrácio Paulino da Silva, 221A - Jardim Mont Serrat</h2> 
                                    </Titulo>
                                    <Info>
                                    <InfoRedes>
                                            <TituloContato>Contato</TituloContato>
                                            <RedesContato>
                                                <SubRedesContainer>
                                                    <SubRedes>
                                                        <ContatoImgContainer>
                                                        <ContatoImg src={Insta} width="40px" height="30px"></ContatoImg>
                                                        </ContatoImgContainer>
                                                        <ContatoText>Instagram</ContatoText>
                                                    </SubRedes>
                                                    <SubRedes>
                                                        <ContatoImgContainer>
                                                        <ContatoImg src={Tel} width="40px" height="35px"></ContatoImg>
                                                        </ContatoImgContainer>
                                                        <ContatoText>3222-6737</ContatoText>
                                                    </SubRedes>
                                                    <SubRedes/>                                
                                                    <SubRedes/>                                                                                                                                          
                                                </SubRedesContainer>     
                                                <RedesDiskEntrega>
                                                    <RedesDiskImage>
                                                        <ImgLink src={Wpp} width="40px" height="40px"/>
                                                    </RedesDiskImage>
                                                    <RedesDiskText>Faça seu pedido aqui</RedesDiskText>
                                                </RedesDiskEntrega>
                                                <RedesLoc>COMO CHEGAR</RedesLoc>
                                            </RedesContato>
                                        </InfoRedes>
                                        <InfoFuncionamento>
                                            <TituloFuncionamento>Horario de Funcionamento</TituloFuncionamento>
                                            <Horarios>
                                                <div>SEG - 08:00 ás 20:00</div> 
                                                <div>SEG - 08:00 ás 20:00</div> 
                                                <div>SEG - 08:00 ás 20:00</div> 
                                                <div>SEG - 08:00 ás 20:00</div> 
                                                <div>SEG - 08:00 ás 20:00</div> 
                                                <div>SEG - 08:00 ás 20:00</div>     
                                            </Horarios>              
                                        </InfoFuncionamento>
                                    </Info> 
                                                
                                </ContainerText>  
                            </Text>
                        </ContainerLoja3>
                    </AreaContainerMini>
                </AreaContainer>
            </ServicesContainer>
        </ContainerBody>
    )
}

export default Body;