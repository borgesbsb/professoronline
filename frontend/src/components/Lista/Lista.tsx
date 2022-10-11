import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import { Descricao, Foto, Informacoes, ItemLista, Listatyled, ListaVazia, Nome, Valor } from "./Lista.style";

interface ListaProps {
    professores: Professor[]
}

const Lista = (props: ListaProps ) => {
    return(
        <div>
           {props.professores.length > 0 ? (
             <Listatyled>
                {props.professores.map( professor => (
                    <ItemLista key={professor.id} >
                        <Foto src={professor.foto}></Foto>
                        <Informacoes>
                            <Nome>{professor.nome}</Nome>
                            <Valor>{professor.valor_hora.toLocaleString('pt-Br', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL'  } )}</Valor>
                            <Descricao>{professor.descricao}</Descricao>
                            <Button sx={{ width: '70%'}}>Marcar Aulas com Benjamin</Button>
                        </Informacoes>
                    </ItemLista>
                ))}
            </Listatyled>
           ) : (
                <ListaVazia>Nenhum item encontrado</ListaVazia > 
           ) }
        </div>
    )
}

export default Lista;