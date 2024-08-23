import Table from './components/table/Table';
import './App.css'

const netIncomes =
  [{ brand: "McDonalds", income: 1291283 }, 
  { brand: "Burger King", income: 1927361 }, 
  { brand: "KFC", income: 1098463 }]; 

function App() {


  return (
    <>
      <h2 className='tableTitle'>Ejercicio 3</h2>
      <h4 className='tableSubtitle'>Castelli Mariano</h4>
      <table className='tableBorder'>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Net Income</th>
          </tr>
        </thead>
        <tbody>
          <Table
            brand={netIncomes[0].brand}
            income={netIncomes[0].income}
          />

          <Table
            brand={netIncomes[1].brand}
            income={netIncomes[1].income}
          />

          <Table
            brand={netIncomes[2].brand}
            income={netIncomes[2].income}
          />
        </tbody>
      </table>
      <p>Promedio de Ingresos Netos: <br></br>${(netIncomes.map((x)=>(x.income))
      .reduce((accumulator, current) => (accumulator + current)) / netIncomes.length)
      .toFixed(2)}
      </p>
      

    </>
  )
}
export default App
