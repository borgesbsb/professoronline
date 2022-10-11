import { Button } from "@mui/material";
import { Descricao, Foto, Informacoes, ItemLista, Listatyled, Nome, Valor } from "./Lista.style";

const Lista = (props) => {
    return(
        <div>
            <Listatyled>
                <ItemLista>
                     <Foto src="https://github.com/borgesbsb.png" ></Foto>
                     <Informacoes>
                        <Nome>Benjamin Borges</Nome>
                        <Valor>R$ 200,00 por hora</Valor>
                        <Descricao>Sistemas Empresariais</Descricao>
                        <Button sx={{ width: '70%'}}>Marcar Aulas com Benjamin</Button>
                     </Informacoes>
                </ItemLista>
                <ItemLista>
                     <Foto src="https://github.com/borgesbsb.png" ></Foto>
                     <Informacoes>
                        <Nome>Benjamin Borges</Nome>
                        <Valor>R$ 200,00 por hora</Valor>
                        <Descricao>Sistemas Empresariais</Descricao>
                        <Button sx={{ width: '70%'}}>Marcar Aulas com Benjamin</Button>
                     </Informacoes>
                </ItemLista>
                <ItemLista>
                     <Foto src="https://github.com/borgesbsb.png" ></Foto>
                     <Informacoes>
                        <Nome>Benjamin Borges</Nome>
                        <Valor>R$ 200,00 por hora</Valor>
                        <Descricao>Sistemas Empresariais</Descricao>
                        <Button sx={{ width: '70%'}}>Marcar Aulas com Benjamin</Button>
                     </Informacoes>
                </ItemLista>               
                <ItemLista>
                     <Foto src="https://github.com/borgesbsb.png" ></Foto>
                     <Informacoes>
                        <Nome>Benjamin Borges</Nome>
                        <Valor>R$ 200,00 por hora</Valor>
                        <Descricao>Sistemas Empresariais</Descricao>
                        <Button sx={{ width: '70%'}}>Marcar Aulas com Benjamin</Button>
                     </Informacoes>
                </ItemLista>
            </Listatyled>
        </div>
    )
}

export default Lista;