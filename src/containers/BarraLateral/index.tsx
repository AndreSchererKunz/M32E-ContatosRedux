import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/Contato'
import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Logo>
          <img src="https://cdn-icons-png.flaticon.com/512/88/88271.png" />
          <h1>Contatos</h1>
        </S.Logo>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.FAVORITOS}
                criterio="status"
                legenda="Favoritos"
              />
              <FiltroCard
                valor={enums.Status.NORMAL}
                criterio="status"
                legenda="Normal"
              />
              <FiltroCard
                valor={enums.Prioridade.FAMILIA}
                criterio="prioridade"
                legenda="Família"
              />
              <FiltroCard
                valor={enums.Prioridade.AMIGO}
                criterio="prioridade"
                legenda="Amigo"
              />
              <FiltroCard
                valor={enums.Prioridade.TRABALHO}
                criterio="prioridade"
                legenda="Trabalho"
              />
              <FiltroCard
                valor={enums.Prioridade.EMERGENCIA}
                criterio="prioridade"
                legenda="Emergência"
              />
              <FiltroCard
                valor={enums.Prioridade.CONHECIDO}
                criterio="prioridade"
                legenda="Conhecido"
              />
              <FiltroCard criterio="todos" legenda="Todos" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            Voltar a lista de contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
