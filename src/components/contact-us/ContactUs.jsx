import React, { useEffect, useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa'
import Snackbar from '@mui/material/Snackbar'

import Alert from '@mui/material/Alert'

import Maps from '../maps/Maps'
import { CardPlacehoderSkeleton } from '../../utils/skeleton/CardPlacehoderSkeleton'

export default function ContactUs() {
  const form = useRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSnackbar, setIsSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarSeverity, setSnackbarSeverity] = useState('success')

  const sendEmail = (e) => {
    e.preventDefault()
    setName(e.target.name.value)
    setEmail(e.target.email.value)
    setMessage(e.target.message.value)
    // console.log(e)
    // console.log(e.target.name.value,e.target.email,e.target.message)
    if (e.target.name.value === '') {
      // alert('Lütfen isminizi giriniz')
      setSnackbarMessage('Lütfen isminizi giriniz')
      setSnackbarSeverity('error')
      setIsSnackbar(true)
    } else if (e.target.email.value === '') {
      // alert('Lütfen e-postanızı giriniz')
      setSnackbarMessage('Lütfen e-postanızı giriniz')
      setSnackbarSeverity('error')
      setIsSnackbar(true)
    } else if (e.target.message.value === '') {
      // alert('Lütfen mesajınızı giriniz')
      setSnackbarMessage('Lütfen mesajınızı giriniz')
      setSnackbarSeverity('error')
      setIsSnackbar(true)
    } else {
      emailjs
        .sendForm(
          'service_42891ip',
          'template_wrvbani',
          form.current,
          'tC1TW-Wv2iQYsTp_j'
        )
        .then(
          (result) => {
            console.log(result.text)
            // alert('E-posta başarıyla gönderildi!')
            setSnackbarMessage('E-posta başarıyla gönderildi!')
            setSnackbarSeverity('success')
            setIsSnackbar(true)
            // Form alanlarını temizle
            setName('')
            setEmail('')
            setMessage('')
            // Form elemanlarını sıfırla
            e.target.reset()
          },
          (error) => {
            console.log(error.text)
            // alert('E-posta gönderilirken bir hata oluştu.')
            setSnackbarMessage('E-posta gönderilirken bir hata oluştu.')
            setSnackbarSeverity('error')
            setIsSnackbar(true)
          }
        )
    }
  }

  const [isSkeleton, setIsSkeleton] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSkeleton(false)
    }, 3000)
  }, [])

  return (
    <div className="relative min-h-[72.7vh] bg-gray-100 flex flex-col items-center justify-center lg:flex-row">
      {isSnackbar && (
        <Snackbar
          open={isSnackbar}
          autoHideDuration={2000}
          onClose={() => setIsSnackbar(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Burası konumlandırmayı sağlar
        >
          <Alert
            severity={snackbarSeverity}
            variant="filled"
            sx={{ width: '100%' }}
            
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      )}
      <div className="absolute text-center top-2">
        <h3 className="text-4xl font-bold">İLETİŞİM</h3>
        <div className="w-[22rem] h-2 bg-red-500 rounded-md"></div>
      </div>

      <div className="sm:w-[300px] md:w-[400px] lg:w-[500px] my-16">
        {isSkeleton ? <CardPlacehoderSkeleton /> : <Maps />}
      </div>

      <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">İletişim</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          {/* <div>
            <label htmlFor="name" className="block text-gray-700">
              Adınız
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div> */}
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              className="peer h-full w-full border-x-0 border-t-0 border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
              placeholder=" "
              name="user_name"
              type="text"
              id="name"
            />
            <label
              htmlFor="name"
              className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Adınız
            </label>
          </div>

          {/* <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div> */}
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              className="peer h-full w-full border-x-0 border-t-0 border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
              placeholder=" "
              type="email"
              id="email"
              name="user_email"
            />
            <label
              htmlFor="email"
              className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Email
            </label>
          </div>
          {/* <div>
            <label htmlFor="message" className="block text-gray-700">
              Mesajınız
            </label>
            <textarea
              id="message"
              name="message"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="4"
            ></textarea>
          </div> */}
          <div className="relative  w-full min-w-[200px]">
            <textarea
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
              id="message"
              name="message"
              rows="4"
            ></textarea>
            <label
              htmlFor="message"
              className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Mesajınız
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#58E2EB] text-white p-2 rounded hover:bg-indigo-700 transition duration-200"
          >
            Gönder
          </button>
        </form>
        <div className="mt-6 space-y-2">
          <h3 className="text-xl text-center font-semibold text-gray-800">
            Diğer İletişim Kanallarımız
          </h3>

          <div className="flex justify-between">
            <a
              href="https://wa.me/905519614009"
              aria-label="WhatsApp ile iletişime geç"
              className="bg-[#B756A0] rounded-full p-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <FaWhatsapp className="text-white text-4xl" />
            </a>

            <a
              href="mailto:mehmetakarsu55@yandex.com"
              aria-label="E-posta gönder"
              className="bg-[#B756A0] rounded-full p-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <FaEnvelope className="text-white text-4xl" />
            </a>
          </div>
          {/* <p className="text-gray-600 mt-2">
            <a
              href="https://wa.me/05510141450"
              className="text-blue-500"
              target="_blank"
            >
              WhatsApp
            </a>
          </p>
          <p className="text-gray-600 mt-2">
            <a
              href="https://instagram.com/numeroloji_gonca"
              className="text-blue-500"
              target="_blank"
            >
              Instagram
            </a>
          </p>
          <p className="text-gray-600 mt-2">
            <a
              href="mailto:goncaakarsu35@gmail.com"
              className="text-blue-500"
              target="_blank"
            >
              E-mail
            </a>
          </p> */}
        </div>
      </div>
    </div>
  )
}
