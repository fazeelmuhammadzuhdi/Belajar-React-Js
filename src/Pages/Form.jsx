import { useState } from "react";

function MyForm() {
    // const [formData, setFormData] = useState({ name: '', nobp: '' })

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     alert(`Halo Nama Saya Adalah : ${formData.name} & No Bp Adalah : ${formData.nobp}`)
    // }

    // const handleChange = (event) => {
    //     const { name, value } = event.target;

    //     setFormData((prevData) => ({ ...prevData, [name]: value }))
    // }


    // return (
    //     <form onSubmit={handleSubmit}>
    //         <label htmlFor="">Entery Your Name </label>
    //         <input type="text" name="name" onChange={handleChange} value={formData.name} />
    //         <label htmlFor="">Entery Your Nobp</label>
    //         <input type="text" name="nobp" onChange={handleChange} value={formData.nobp} />
    //         <input type="submit" value="Simpan" />
    //     </form>
    // )

    // const [name, setName] = useState('');
    // const [nobp, setNoBp] = useState('')

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     alert(`Halo Nama Saya Adalah : ${name} & No Bp Adalah : ${nobp}`)

    // }


    // return (
    //     <form onSubmit={handleSubmit}>
    //         <label htmlFor="name">Enter Your Name : </label>
    //         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    //         <br /><br />
    //         <label htmlFor="nobp">Enter Your No Bp : </label>
    //         <input type="text" value={nobp} onChange={(e) => setNoBp(e.target.value)} />
    //         <br />
    //         <input type="submit" value="Simpan" />
    //     </form>
    // )

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target

        // const name = event.target.name
        // const value = event.target.value

        setInputs((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(inputs);

    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Username</label>
            <input type="text" name="username" value={inputs.username || ''} onChange={handleChange} />
            <br /><br />
            <label htmlFor="">Umur</label>
            <input type="number" name="age" value={inputs.age || ''} onChange={handleChange} />
            <br /><br />
            <textarea name="jurusan" value={inputs.jurusan} onChange={handleChange}></textarea>
            <br /><br />

            <select name="prodi" value={inputs.prodi} onChange={handleChange}>
                <option value="SI">Sistem Informasi</option>
                <option value="SK">Sistem Komputer</option>
                <option value="MI">Manajemen Informatik</option>

            </select>
            <br />
            <input type="submit" value="Simpan" />

        </form>
    )


}

export default MyForm;