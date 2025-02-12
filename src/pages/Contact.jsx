import React, { useState } from 'react'
import { emailRegex } from '../assets/regex';
const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const [error, setError] = useState({
    nameError: "",
    contactError: "",
    emailError: "",

  })
  const [formValid, setFormValid] = useState(false)
  const validatename = (name) => {
    let fError = error.nameError;
    let isValid = formValid;

    if (name.trim() === "") {
      fError = "This is required!";
      isValid = false
    } else if (name.trim().length < 3) {
      fError = "Enter atleast 3 character!";
      isValid = false
    } else {
      isValid = true;
      fError = ""
    }
    setName(name)
    setFormValid(isValid);
    setError({ ...error, nameError: fError })
    return isValid;
  }

  const validateContact = (contact) => {
    let cError = error.contactError;
    let isValid = formValid;

    if (contact.trim() === "") {
      cError = "This is required!";
      isValid = false
    } else if (contact.trim().length < 10) {
      cError = "Enter 10 digits"
    } else {
      isValid = true
      cError = ""
    }
    setContact(contact)
    setFormValid(isValid)
    setError({ ...error, contactError: cError })

    return isValid
  }

  const validateEmail = (email) => {
    let eError = error.emailError;
    let isValid = formValid;

    if (!emailRegex.test(email)) {
      eError = "This is invalid";
      isValid = false;
    } else {
      isValid = true;
      eError = "";
    }

    setEmail(email);
    setFormValid(isValid);
    setError({ ...error, emailError: eError });

    return isValid;
  };

  const handleChange = (e) => {

    if (e.target.id === "name") {
      validatename(e.target.value)
    } else if (e.target.id === "contact") {
      validateContact(e.target.value)
    } else if (e.target.id === "email") {
      validateEmail(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatename(name) && validateContact(contact) && validateEmail(email)) {
      alert("We will contact you soon!")
      setName("")
      setContact("")
      setEmail("")

    }
  }
  return (
    <div  className='pd-20 sm:pb-28 lg:pb-32'>

      <p className='text-center font-bold text-4xl'>Contact Us</p>
      <div className="max-w-screen-xl mx-auto p-8 md:p-16 md:flex md:flex-wrap">

        <div className="md:w-7/12 gap-10">
          <div
            className="hover:bg-blue-900 hover:text-white transition duration-300 max-w-xl rounded overflow-hidden shadow-lg">
            <div className="py-6 px-8">
              <p className='flex flex-wrap gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-geo-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411" />
              </svg></p><p className='text-3xl'>Location</p></p>

              <p className='mt-4 text-xl'>Airia mall : Sector – 68, Sohna Road, Gurugram 122103</p>
            </div>
          </div>

          <div
            className="hover:bg-blue-900 hover:text-white transition duration-300 max-w-xl rounded overflow-hidden shadow-lg">
            <div className="py-8 px-8">
              <p className='flex flex-wrap gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg></p><p className='text-3xl'>Contact Number</p></p>

              <p className='mt-4 text-xl'>9874563210</p>

            </div>
          </div>

          <div
            className="hover:bg-blue-900 hover:text-white transition duration-300 max-w-xl rounded overflow-hidden shadow-lg">
            <div className="py-8 px-8">
              <p className='flex flex-wrap gap-2'><p><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
              </svg> </p><p className='text-3xl'>Email</p></p>

              <p className='mt-4 text-xl'>admin@gmail.com</p>
            </div>
          </div>

        </div>

        <div className='w-5/12 border-black border-2 text-lg  rounded-xl hover:bg-black hover:text-white transition duration-300 max-w-xl rounded overflow-hidden shadow-lg'>
          <form onSubmit={handleSubmit}>
            <p className='font-bold text-xl text-center'>Contact us</p> <br /> <br />
            <label htmlFor="name" className='ml-10 my-2'>Name: </label>
            <input type="text" id='name' placeholder='Enter Your Name' name='name' className='h-10 border-black text-black border-2 w-60 p-2 rounded-md' onChange={handleChange} value={name} />
            <p style={{ color: "yellow" }}>{error.nameError}</p>
            <label htmlFor="contact"  className='ml-6 my-2'>Contact: </label>
            <input type="number" placeholder='Enter Your Contact' id='contact' name='contact' className='h-10 my-4 border-black text-black border-2 w-60 p-2 rounded-md' onChange={handleChange} value={contact} />
            <p style={{ color: "yellow" }}>{error.contactError}</p>
            <label htmlFor="email" className='ml-10 my-2'>Email: </label>
            <input type="email" placeholder='Enter Your Email' id='email' name='email' className='h-10 border-black border-2 w-60 p-2 text-black rounded-md' onChange={handleChange} value={email} />
            <p style={{ color: "yellow" }}>{error.emailError}</p><br />

            <button className=' btn btn-primary hover:btn-secondary border-2 p-2 border-blue-200 ml-10'>Contact Us</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact