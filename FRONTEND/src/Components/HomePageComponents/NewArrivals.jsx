import React, { useContext } from 'react'
import { myContext } from '../../Context/MyContextProvider'

const NewArrivals = () => {

    const { navigate, productData } = useContext(myContext)

    return (
        <>
            <div className="container my-5">
                <h1 className="text-center display-5 mb-5">New Arrivals</h1>

                <div className="row">
                    {productData.filter(value => value.category === 'New Arrival').map((value, index) => (
                        <div className='col-lg-3 col-md-6' key={index}>
                            <div className="card border-0">
                                <img src={value.img} alt="" onClick={() => navigate(`/product/${value._id}`)} height='250' />
                                <div className="card-body">
                                    <p className='text-secondary'>{value.name}</p>
                                    <p className='text-secondary'>{value.type}</p>
                                    <div className='d-flex justify-content-between'>
                                        <p>{value.desc}</p>
                                        <i className='fa fa-shopping-cart border rounded-circle p-3'></i>
                                    </div>
                                    <p>₹ {value.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NewArrivals

