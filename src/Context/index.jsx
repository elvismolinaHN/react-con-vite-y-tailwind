import PropTypes from 'prop-types'
import { createContext } from 'react' // createContext define un estado global

const ShoppingCartContext = createContext()

// Provider encapsula los componentes que tengamos en App.
export const ShoppingCartProvider = ({children}) => {
    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    return (
        <ShoppingCartContext.Provider> 
            {children}
        </ShoppingCartContext.Provider>
    )
}
