import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const myContext = createContext()
 
const ContextProvider = ({children}) => {

    const [ name, setName ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ desc, setDesc ] = useState('')
    const [ img, setImg ] = useState('')
    const [ previewImg, setPreviewImg ] = useState('')

    const [ updateName, setUpdateName ] = useState('')
    const [ updateCategory, setUpdateCategory ] = useState('')
    const [ updatePrice, setUpdatePrice ] = useState('')
    const [ updateDesc, setUpdateDesc ] = useState('')
    const [ updateImg, setUpdateImg ] = useState('')
    const [ updatePreviewImg, setUpdatePreviewImg ] = useState('')

    const [ updateID, setUpdateID ] = useState('')

    const [ productData, setProductData ] = useState([])

    const url = 'http://localhost:8080'

    const submitFun = async (e) => {
        e.preventDefault()

        try{
            const formData = {
                name, 
                category, 
                price,
                desc,
                img
            }

            await axios.post(`${url}/api/add`, formData)

            alert('Product Added !')
        }
        catch(err){
            console.log(`Error Name : ${err.name} and Error Message : ${err.message}`)
        }
    }

    const imageFun = (e) => {
        const file = e.target.files[0]

        if(file){
            var reader = new FileReader()

            reader.onloadend = () => {
                setImg(reader.result)   
                setPreviewImg(reader.result)
            }
        }

        reader.readAsDataURL(file)
    }

    const fetchData = async () => {
        try{
            const productList = await axios.get(`${url}/api/products`)
            setProductData(productList.data);
        }
        catch(err){
            console.log(`Error Name : ${err.name} and Error Message : ${err.message}`)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const removeProduct = async (id) => {
        try{
            await axios.delete(`${url}/api/remove/${id}`)
            alert('Product Removed Successfully !')
        }
        catch(err){
            console.log(`Error Name : ${err.name} and Error Message : ${err.message}`)
        }
    }

    const updateImageFun = (e) => {
        const file = e.target.files[0]

        if(file){
            var reader = new FileReader()

            reader.onloadend = () => {
                setUpdateImg(reader.result)   
                setUpdatePreviewImg(reader.result)
            }
        }

        reader.readAsDataURL(file)
    }

    const updateFun = (id) => {
        var product = productData.find(a => a._id == id)
        if(product){
            setUpdateName(product.name)
            setUpdateDesc(product.desc)
            setUpdatePrice(product.price)
            setUpdateCategory(product.category)
            setUpdateImg(product.img)
            setUpdatePreviewImg(product.img)
            setUpdateID(product._id)
        }
    }

    const updateSubmitFun = async (e) => {
        e.preventDefault()
        try{
            const updateData = {
                name : updateName,
                category : updateCategory,
                desc : updateDesc,
                price : updatePrice,
                img : updateImg
            }
            await axios.put(`${url}/api/update/${updateID}`, updateData)
            alert('Product Updated !')
            fetchData()
        }
        catch(err){
            console.log(`Error Name : ${err.name} and Error Message : ${err.message}`)
        }
    }

    const myContextValue = {
        name, setName, 
        category, setCategory, 
        price, setPrice, 
        desc, setDesc, 

        submitFun, imageFun,
        previewImg, productData,
        removeProduct,

        updateName, setUpdateName,
        updateCategory, setUpdateCategory,
        updatePrice, setUpdatePrice,
        updateDesc, setUpdateDesc,

        updateFun, updateImageFun,
        updatePreviewImg,

        updateSubmitFun
    }

    return (
        <myContext.Provider value={myContextValue}>
            {children}
        </myContext.Provider>
    )
}

export default ContextProvider