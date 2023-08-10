import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetch('http://localhost:8080/products')
        const data = await response.json()
        setProducts(data)
    }

    const deleteProduct = async (id) => {
        await fetch(`http://localhost:8080/products/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'Application/json'
            }
        })
        fetchData()
    }

    return (
        <div className='container my-5'>
            <Link to={`/add`} className='button is-primary mb-3'>Tambah Data</Link>

            <table className='table is-striped is-bordered is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td >
                                <Link to={`/edit/${product.id}`} className='button is-info mr-2'>Edit</Link>
                                <button onClick={() => deleteProduct(product.id)} className='button is-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default ProductList
