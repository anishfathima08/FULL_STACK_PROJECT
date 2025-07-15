import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { all_products } from '../assets/asset'
import axios from 'axios'

export const myContext = createContext()

const MyContextProvider = ( { children } ) => {

    const navigate = useNavigate()

    var [ input, setInput ] = useState('')
    
    var [ filteredData, setFilteredData ] = useState([])
    
    const SearchFun = () => {
        setFilteredData(all_products.filter(a => a.type.toLowerCase().includes(input.toLowerCase())))
    }

    var [ productData, setProductData ] = useState([])

    var url = 'http://localhost:8080'

    const fetchData = async () => {
        try{
            var response = await axios.get(`${url}/api/products`)
            setProductData(response.data)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const myContextValue = {
        navigate,
        input, setInput,
        filteredData, SearchFun,

        productData
    }

    return (
        <myContext.Provider value={myContextValue}>
            {children}
        </myContext.Provider>
    )
}

export default MyContextProvider