import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar, alteraStatus } from '../../store/reducers/Contato'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'

import * as enums from '../../utils/enums/Contato'

type Props = ContatoClass

const Contato = ({
  numero: numeroOriginal,
  email: emailOriginal,
  prioridade,
  status,
  nome,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [numero, setNumero] = useState<number>(0)
  const [email, setEmail] = useState('')
  const [favorito, setFavorito] = useState(status === enums.Status.FAVORITOS)

  useEffect(() => {
    if (numeroOriginal) {
      setNumero(Number(numeroOriginal))
    }
  }, [numeroOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNumero(numeroOriginal)
  }

  function alteraStatusContato() {
    const novoStatus = !favorito ? enums.Status.FAVORITOS : enums.Status.NORMAL
    setFavorito(!favorito)
    dispatch(
      alteraStatus({
        id,
        finalizado: novoStatus === enums.Status.FAVORITOS
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={nome}>
        <span
          onClick={alteraStatusContato}
          style={{ cursor: 'pointer', fontSize: '24px', userSelect: 'none' }}
        >
          {favorito ? '★' : '☆'}
        </span>
        <S.Nome>
          {estaEditando && <em>Editando: </em>}
          {nome}
        </S.Nome>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Dados
        disabled={!estaEditando}
        value={numero}
        onChange={(evento) => setNumero(Number(evento.target.value))}
      />
      <S.Acoes>
        <S.Dados
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
      </S.Acoes>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    numero: numeroOriginal,
                    email: emailOriginal,
                    prioridade,
                    status,
                    nome,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
