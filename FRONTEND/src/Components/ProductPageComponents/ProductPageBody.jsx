import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { all_products } from '../../assets/asset'
import { myContext } from '../../Context/MyContextProvider'

const ProductPageBody = () => {

    const { id } = useParams()

    const { productData } = useContext(myContext)

    const selectedProduct = productData.find(a => a._id === id) 

    return (
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-6">
                        <img src={selectedProduct.img} alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg-6">
                        <p className="display-5">{selectedProduct.desc}</p>
                        <p>{selectedProduct.type}</p>
                        <p>₹ {selectedProduct.price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPageBody