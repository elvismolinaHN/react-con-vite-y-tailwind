import PropTypes from 'prop-types'
import { createContext, useState, useEffect } from 'react' // createContext define un estado global
// con useState nos permite guardar la informacion
// Con useEffect nos permite hacer consumo de API

export const ShoppingCartContext = createContext()

// Provider encapsula los componentes que tengamos en App.
export const ShoppingCartProvider = ({children}) => {
    // Shopping Cart . Increment quanity
    const [count, setCount] = useState(0)

    // Product Detail . Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // CheckoutSideMenu . Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Product Detail . Show product
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart . Add  products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart . Order
    const [order, setOrder] = useState([])

    // Get products
    const [items, setItems] = useState(null) 

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])

    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle
        }}> 
            {children}
        </ShoppingCartContext.Provider>
    )
}
