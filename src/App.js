import Cards from './cards/cards';
import './App.css';
import Login from './Login/login';



function App() {



  const arrayInformation = [
      {
        name: 'Milanesa napolitana con fritas',
        description: 'Milanesa de ternera rebozada con papas rusticas o fritas',
        image: 'https://www.recetas360.com/wp-content/uploads/2022/09/como-hacer-milanesa-napolitana-receta-argentina.jpg',
        price: '$2100'
      },

      {
        name: 'Milanesa napolitana con fritas',
        description: 'Milanesa de ternera rebozada con papas rusticas o fritas',
        image: 'https://www.recetas360.com/wp-content/uploads/2022/09/como-hacer-milanesa-napolitana-receta-argentina.jpg',
        price: '$2100'
      },

      {name: 'Milanesa napolitana con fritas',
        description: 'Milanesa de ternera rebozada con papas rusticas o fritas',
        image: 'https://www.recetas360.com/wp-content/uploads/2022/09/como-hacer-milanesa-napolitana-receta-argentina.jpg',
        price: '$2100'},

       { name: 'Milanesa napolitana con fritas',
        description: 'Milanesa de ternera rebozada con papas rusticas o fritas',
        image: 'https://www.recetas360.com/wp-content/uploads/2022/09/como-hacer-milanesa-napolitana-receta-argentina.jpg',
        price: '$2100'},
  ]

  return (
      <>
        <Login />
      <div className='d-flex row g-0 grid gap-3 align-items-center justify-content-center'>
      {
      arrayInformation.map(comida => <Cards name={comida.name} description={comida.description} image={comida.image} price={comida.price}/>)
      }
      </div>
    </>
  
  
  );
}

export default App;
