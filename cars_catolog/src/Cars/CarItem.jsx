import React from 'react'
import styles from './cars.module.css'


const CarItem = ({ car }) => {
    return (
        <div className={styles.car_item}>
            <img src={car.image} className={styles.img} alt="" />
            <div className={styles.info}>
                <p className={styles.name}>{car.name}</p>
                <p>{new Intl.NumberFormat('en-US', {
                    style: 'currency', currency: 'USD',
                }).format
                    (car.price)}</p>
                <button className={styles.btn}>Read more</button>
            </div>
        </div>
    )
}

export default CarItem