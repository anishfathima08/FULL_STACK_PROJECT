import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../Context/ContextProvider'

const Products = () => {

  const { productData, removeProduct, updateName, setUpdateName, updateCategory, setUpdateCategory, updatePrice, setUpdatePrice, updateDesc, setUpdateDesc, updateFun, updateImageFun, updatePreviewImg, updateSubmitFun } = useContext(myContext)

  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-between my-5">
          <h3>Products List</h3>
          <Link to='/'>
            <button className='btn btn-primary'>Add Products</button>
          </Link>
        </div>

        <table className='table border border-primary text-center align-middle'>
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Product Desc</th>
              <th>Product Price</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((value, index) => (
              <tr key={index}>
                <td>
                  <img src={value.img} alt="" height='100' width='100' />
                </td>
                <td>{value.name}</td>
                <td>{value.category}</td>
                <td>{value.desc}</td>
                <td>{value.price}</td>
                <td>
                  <button className='btn btn-outline-primary' data-bs-toggle='modal' data-bs-target='#updateModal' onClick={() => updateFun(value._id)}>Update</button>
                </td>
                <td>
                  <button className='btn btn-outline-primary' onClick={() => removeProduct(value._id)}>&times;</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="modal" id='updateModal'>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h3>Update Product</h3>
                <button className='btn btn-close' data-bs-dismiss='modal'></button>
              </div>
              <div className="modal-body">
                <form onSubmit={updateSubmitFun}>
                  <label>Update Product Image</label>
                  <br />
                  
                  <input className='form-control' type="file" id='updateImg' hidden onChange={updateImageFun} />
                  
                  <label htmlFor='updateImg'>
                    <img src={updatePreviewImg} className='mb-3' height='100' width='100' />
                  </label>
                  <br /> 
                 
                  <label>Update Product Name</label>
                  <input className='mb-3 form-control' type="text"  value={updateName} onChange={e => setUpdateName(e.target.value)} />
                 
                  <label>Update Product Category</label>

                  <select value={updateCategory} onChange={e => setUpdateCategory(e.target.value)} className='form-control mb-3'>
                    <option hidden>Choose</option>
                    <option>New Arrival</option>
                    <option>Shop</option>
                  </select>
                 
                  <label>Update Product Desc</label>
                  <input className='mb-3 form-control' type="text" value={updateDesc} onChange={e => setUpdateDesc(e.target.value)} />
                  
                  <label>Update Product Price</label>
                  <input className='mb-3 form-control' type="number" value={updatePrice} onChange={e => setUpdatePrice(e.target.value)} />
                 
                  <input type="submit" className='btn btn-primary' />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products