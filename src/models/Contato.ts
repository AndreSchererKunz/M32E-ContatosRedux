import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  prioridade: enums.Prioridade
  status: enums.Status
  numero: number
  email: string
  id: number

  constructor(
    nome: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    numero: number,
    email: string,
    id: number
  ) {
    this.nome = nome
    this.prioridade = prioridade
    this.status = status
    this.numero = numero
    this.email = email
    this.id = id
  }
}

export default Contato
