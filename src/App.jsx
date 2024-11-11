import { useState } from 'react'
import RoutesLayout from './LayoutRoutes/RoutesLayout'
import { CartProvider } from './Context/CartContex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CartProvider>
     <RoutesLayout/>
    </CartProvider>
    </>
  )
}

export default App
