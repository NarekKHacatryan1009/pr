import React from 'react'
import { BsTelephone,BsGlobe2 } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { FiMapPin } from 'react-icons/fi'
import { TfiTime } from 'react-icons/tfi'
import aboutimg from '../images/about_us/img111.jpg'
import qr from '../images/QR/MY_QR.jpg'
export default function AboutUs() {

  return (
    <div className='container aboutUs'>
      <div className='aboutUs_content'>
        <div className='content_title'>
          <h1 className='display-6'>FullClean մաքրման ծառայություն</h1>
        </div>
        <div className='content1'>
          <img src={aboutimg} alt={""}/>
        </div>
        <div className='content2'>
          <div className='icon_block'>
            <p><BsTelephone/></p>
            <p className='h1'><a href={qr} target={"_blank"} rel={"noreferer"}>+37477190202</a></p>
          </div>
          <div className='icon_block'>
            <p><GoMail/></p>
            <p className='h1'>fullclean@gmail.com</p>
          </div>
          <div className='icon_block'>
            <p className='h1'><FiMapPin/></p>
            <p className='h1'>Պարույր Սևակ 11</p>
          </div>
          <div className='icon_block'>
            <p><BsGlobe2/></p>
            <p className='h1'>fullclean.am</p>
          </div>
          <div className='icon_block'>
            <p><TfiTime/></p>
            <p className='shedule'>
              <p className='h1'>Երկ-ՈՒրբ <span>09։00-22։00</span></p>
              <p className='h1'>Շբթ-Կիր <span>09։00-18։00</span></p>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
