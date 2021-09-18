import { useTransactions } from '../../hooks/useTransactions';

import entradasImg from '../../assets/svg/entradas.svg';
import saidasImg from '../../assets/svg/saidas.svg';
import totalImg from '../../assets/svg/total.svg';

import { Container } from './styles';

export function Summary() {

  const { transactions } = useTransactions();

  const Summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposit += transaction.amount;
      acc.total += transaction.amount;
    } else{
      acc.withdraw += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, 
  {
    deposit: 0,
    withdraw: 0,
    total: 0
  });

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradasImg} alt="Entradas" />
        </header>
        <strong>
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(Summary.deposit)
          }
          </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={saidasImg} alt="Saidas" />
        </header>
        <strong> -
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(Summary.withdraw)
          }
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(Summary.total)
          }
        </strong>
      </div>
    </Container>
  )
}