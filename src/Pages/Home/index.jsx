import { useState, useEffect } from 'react' // con useState nos permite guardar la informacion
// Con useEffect nos permite hacer consumo de API
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'

function Home() {
    const [items, setItems] = useState(null)// setItems nos ayuda a almacenar la informacion que se necesita y lo almacena en items.

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])
    return (
      <>
        <Layout>
          Home
          <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {
              items?.map(item => ( // Por cada elemento que esta en items se muestra una Card.
                <Card key={item.id} data={item} /> // data envia la informacion a la Card
              ))
            }
          </div>
          <ProductDetail />
        </Layout>
      </>
    )
  }
  
export default Home