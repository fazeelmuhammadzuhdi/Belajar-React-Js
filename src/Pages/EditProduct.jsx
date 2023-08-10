import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditProduct = () => {

    // const [title, setTitle] = useState('')
    // const [price, setPrice] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const [input, setInput] = useState({})

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setInput((prevData) => ({ ...prevData, [name]: value }))
    }

    useEffect(() => {
        getDataById()
    }, [])


    const getDataById = async () => {

        const response = await fetch(`http://localhost:8080/products/${id}`)
        const data = await response.json()

        setInput(data)

        // setTitle(data.title)
        // setPrice(data.price)

    }


    const editProduct = async (e) => {
        e.preventDefault()
        // console.log(product);
        await fetch(`http://localhost:8080/products/${id}`, {
            method: "PUT",
            body: JSON.stringify(input),
            headers: {
                'Content-Type': 'Application/json'
            }
        })
        navigate('/')

    }

    return (
        <div className='container my-5'>
            <form onSubmit={editProduct}>
                <div className="field">
                    <label htmlFor="label" className="label">Title</label>
                    <div className="control">
                        <input type="text" name='title' value={input.title || ''} onChange={handleChange} className='input' placeholder='Title' />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="label" className="label">Price</label>
                    <div className="control">
                        <input type="text" name='price' value={input.price || ''} onChange={handleChange} className='input' placeholder='Price' />
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="label" className="label">Category</label>
                    <div className="control">
                        <input type="text" name='category' value={input.category || ''} onChange={handleChange} className='input' placeholder='Price' />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <button className='button is-small is-primary mr-3'>Update</button>
                        <Link to={`/`} className='button is-small is-warning'>Kembali</Link>
                    </div>
                </div>
            </form>
        </div>


    )
}

export default EditProduct
