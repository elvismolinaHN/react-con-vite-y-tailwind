import PropTypes from 'prop-types'
import { createContext } from 'react' // createContext define un estado global
import { useState } from 'react'

export const ShoppingCartContext = createContext()

// Provider encapsula los componentes que tengamos en App.
export const ShoppingCartProvider = ({children}) => {
    // Shopping Cart . Increment quanity
    const [count, setCount] = useState(0)

    // Product Detail . Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Product Detail . Show product
    const [productToShow, setProductToShow] = useState({})

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
            setProductToShow
        }}> 
            {children}
        </ShoppingCartContext.Provider>
    )
}
