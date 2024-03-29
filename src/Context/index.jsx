import PropTypes from 'prop-types'
import { createContext } from 'react' // createContext define un estado global
import { useState } from 'react'

export const ShoppingCartContext = createContext()

// Provider encapsula los componentes que tengamos en App.
export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(true)

    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen
        }}> 
            {children}
        </ShoppingCartContext.Provider>
    )
}
