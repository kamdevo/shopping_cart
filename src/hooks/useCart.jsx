import { useContext } from "react";
import {CartContext} from '../context/cart'


export const useCart = () => {
    const context = useContext(CartContext)

    if ( context === null) {
        throw new Error('error')
    }

    return context
}