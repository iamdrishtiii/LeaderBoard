import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { onAddUser } from "../action"
import { Modal ,Box , Typography } from '@mui/material';

const Home = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [name, setName] = useState("")
  const [score, setscore] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const [error, setError] = useState({
    nameError: "",
    scoreError: "",
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

  const validatescore = (score) => {
    let cError = error.scoreError;
    let isValid = formValid;

    if (score.trim() === "") {
      cError = "This is required!";
      isValid = false
    } else {
      isValid = true
      cError = ""
    }
    setscore(score)
    setFormValid(isValid)
    setError({ ...error, scoreError: cError })

    return isValid
  }


  const handleChange = (e) => {

    if (e.target.id === "name") {
      validatename(e.target.value)
    } else if (e.target.id === "score") {
      validatescore(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatename(name) && validatescore(score)) {
      const userId = "USER" + Math.floor(Math.random() * 10 + 5451515);
      const user = { name, score, userId }
      // alert("Score added successfully")
      dispatch(onAddUser(user));
      setName("")
      setscore("")
      setOpenModal(true);
      setTimeout(() => setOpenModal(false), 2000);

    }
  }


  return (
    <div className='flex justify-center p-10 text-2xl transition duration-300 overflow-hidden'>
      <form onSubmit={handleSubmit} >
        <p className='font-bold text-4xl p-2'>The Leader Board</p>
        <label htmlFor="name">Name: </label>
        <input className='rounded-md h-10 mt-6 p-4 border-2 border-gray-200' type="text" id='name' name='name' placeholder='Enter Player Name' value={name} onChange={handleChange} />
        <p style={{ color: "yellow" }}>{error.nameError}</p>
        <label htmlFor="score">Score: </label>
        <input className='rounded-md h-10 mt-6 p-4  border-2 border-gray-200' type="number" id='score' name='score' placeholder='Enter Score' value={score} onChange={handleChange} />
        <p style={{ color: "yellow" }}>{error.scoreError}</p>
        <p className='text-center h-12 my-6 mx-10'><button className='border-2 py-2 px-4 rounded-lg'>Submit</button></p>
      </form>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Score Added Successfully
          </Typography>
        </Box>
      </Modal>

    </div>
  )
}

export default Home