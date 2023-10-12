import React from 'react'
import Spiner from '../images/loading/loading.gif'

export default function Spinner() {
  return (
    <div className='load'>
        <img src={Spiner} alt={"load"}/>
    </div>
  )
}
