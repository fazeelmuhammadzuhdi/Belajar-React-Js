import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddProduct = () => {

    // const [title, setTitle] = useState('')
    // const [price, setPrice] = useState('')
    const navigate = useNavigate()

    const [input, setInput] = useState({})

    const handleChange = (e) => {
        e.preventDefault()

        const { name, value } = e.target
        setInput((prevData) => ({ ...prevData, [name]: value }))
    }


    const saveProduct = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:8080/products', {
            method: "POST",
            body: JSON.stringify(input),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        navigate('/')

    }

    return (
        <div className='container my-5'>
            <form onSubmit={saveProduct}>
                <div className="field">
                    <label htmlFor="label" className="label">Title</label>
                    <div className="control">
                        <input type="text" name='title' value={input.title || ''} onChange={handleChange} className='input' placeholder='Title' />

                    </div>
                </div>
                <div className="field">
                    <label htmlFor="label" className="label">Price</label>
                    <div className="control">
                        <input type="number" name='price' value={input.price || ''} onChange={handleChange} className='input' placeholder='Price' />
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="label" className="label">Category</label>
                    <div className="control">
                        <input type="text" name='category' value={input.category || ''} onChange={handleChange} className='input' placeholder='Category' />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <button className='button is-small is-primary mr-3'>Simpan</button>
                        <Link to={`/`} className='button is-small is-warning'>Kembali</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddProduct
