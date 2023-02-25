import React from 'react'
import { RodapeContainer, RodapeColumns, Columns} from './styles';


const Rodape = () => {
    return (
        <RodapeContainer>
            <RodapeColumns>
                <Columns>
                    <h1> Horario de Funcionamento </h1>
                    <div> SEG : 8:00 - 19:30 </div> 
                    <div> TER : 8:00 - 19:30 </div> 
                    <div> QUA : 8:00 - 19:30 </div> 
                    <div> QUI : 8:00 - 19:30 </div> 
                    <div> SEX : 8:00 - 19:30 </div> 
                    <div> SAB : 8:00 - 19:30 </div> 
                </Columns>
                <Columns>
                    <h1> REDES SOCIAS </h1>
                    <div> Linkedin </div>
                    <div> Instagram </div>
                    <div> Facebook </div>
                    <div> Twitter </div>

                </Columns>
                <Columns>
                    <h1> COMO CHEGAR </h1>
                    <div> Bueno - Santa Maria </div>
                    <div> Bueno - São Geraldo </div>
                    <div> Bueno - Sion </div>
                    <div> Bueno - Mont Serrat </div>
                    <div> Bueno - Centenário </div>
                </Columns>
            </RodapeColumns>
        </RodapeContainer>
    )
}

export default Rodape;