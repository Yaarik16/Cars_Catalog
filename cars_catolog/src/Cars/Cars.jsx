// import React, { useMemo } from 'react'
import styles from './cars.module.css'
import CarItem from './CarItem'
import { carsData as cars } from './cars_data'
import CreateCar from './create_car/CreateCar'
import { useState } from 'react'

const Cars = () => {

  // const filtredCars = useMemo(
  //   () => carsData.filter(car => car.price > 40000), [])

const [carsData, setCarsData] = useState(cars)
console.log(carsData)

  return (
    <div className={styles.cars_wrap}>
      <div>
        <h1>Cars Catalog</h1>
        <CreateCar setCarsData={setCarsData} />
      </div>
      <div >
        {carsData.length ? carsData.map((car => {
          return (
            <CarItem key={car.id} car={car} />
          )
        })) : 'There are no cars'}
      </div>
    </div>
  )
}

export default Cars