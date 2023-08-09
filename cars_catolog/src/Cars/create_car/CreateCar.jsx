import React, { useState } from 'react'
import styles from './CrateCar.module.css'


const CreateCar = ({ setCarsData }) => {

const clearData = {
  name: '',
  price: '',
  image: '',
}

  const [data, setData] = useState(clearData)


  const createCar = (e) => {
    e.preventDefault()
    setCarsData(prev => [{
      id: prev.lenght + 1,
      ...data,
    },
    ...prev,])
    setData(clearData)
  }
  return (
    <form>
      <input className={styles.input} onChange={e => setData(prev => ({
        ...prev, name: e.target.value
      }))} value={data.name} placeholder='Provide a name for car' />
      <input className={styles.input} onChange={e => setData(prev => ({
        ...prev, price: e.target.value
      }))} value={data.price} placeholder='Provide a price for car' />
      <input className={styles.input} onChange={e => setData(prev => ({
        ...prev, image: e.target.value
      }))} value={data.image} placeholder='Provide a image for car' />
      <button onClick={e => createCar(e)} className={styles.btn}>Create a car</button>
    </form>
  )
}

export default CreateCar