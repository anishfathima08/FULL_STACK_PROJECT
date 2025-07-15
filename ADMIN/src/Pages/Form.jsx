import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Context/ContextProvider'
import { myAssets } from '../assets/asset'

const Form = () => {

    const { name, setName, category, setCategory, price, setPrice, desc, setDesc, submitFun, imageFun, previewImg } = useContext(myContext)

    return (
        <>
            <div className="container my-5">
                <div className="d-flex justify-content-between my-5">
                    <h3>Add Products</h3>
                    <Link to='/products'>
                        <button className='btn btn-primary'>View Products</button>
                    </Link>
                </div>

                <form onSubmit={submitFun}>

                    <label className='form-label'>Upload Product Image</label>
                    <input type="file" className='form-control mb-4' name='img' id='Imageinput' onChange={imageFun} hidden/>

                    <br />
                    <label htmlFor='Imageinput'>
                        <img src={previewImg ? previewImg : myAssets.uploadImg} alt="" height='150' width='150'/>
                    </label>
                    <br /><br />

                    <label className='form-label'>Enter Product Name</label>
                    <input type="text" className='form-control mb-4'name='name' value={name} onChange={(e) => setName(e.target.value)} />

                    <label className='form-label'>Enter Product Cetegory</label>
                    <select className='form-control mb-4' name='category' value={category} onChange={(e) => setCategory(e.target.value)} >
                        <option hidden >Choose</option>
                        <option>New Arrival</option>
                        <option>Shop</option>
                    </select>

                    <label className='form-label'>Enter Product Desc</label>
                    <input type="text" className='form-control mb-4' name='desc' value={desc} onChange={(e) => setDesc(e.target.value)}/>

                    <label className='form-label'>Enter Product Price</label>
                    <input type="number" className='form-control mb-4' name='price' value={price} onChange={(e) => setPrice(e.target.value)} />

                    <input type="submit" className='form-control btn btn-primary' />

                </form>
            </div>
        </>
    )
}

export default Form