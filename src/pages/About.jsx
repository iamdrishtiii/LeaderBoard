import React from 'react'

const About = () => {
  return (
    <div className='pb-32 sm:pb-28 lg:pb-32'>
      <p className='text-center font-bold text-4xl '>About Us</p>
      <p className='text-center sm:mx-10 sm:mt-10 text-lg lg:text-xl'><h6 className='text-2xl m-4'>Leader Board</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Inventore officiis expedita saepe blanditiis, sunt repellendus sed itaque officia.
          Quam quas cupiditate perspiciatis vero quae nemo provident ut, dolorem nesciunt exercitationem?
          Blanditiis veniam totam ducimus, aspernatur fugiat expedita facilis unde ullam iste.
          Blanditiis temporibus soluta atque ab.
          Quas, iusto officia aliquam dolorum deserunt pariatur facilis dolore dolorem voluptate,
          porro quaerat? In sunt rerum labore maiores vitae,
          consequatur obcaecati dolores amet unde veritatis, quae voluptate adipisci ipsum voluptatum,
          sit omnis fugiat impedit laborum perferendis deserunt soluta eius dolorem autem?
          Praesentium magnam laborum doloremque eos commodi aut.
          Adipisci odio voluptatum ipsam esse ipsum.</p></p>
      <div >
        <div className='sm:flex sm:flex-row text-lg md:text-xl text-center mx-2 sm:mx-6 lg:mx-20'>
          <div className='sm:w-6/12 m-6 md:m-10 '>
            <img src="./images/arel-2.jpg" alt="" height="200px" />
          </div>
          <div className='sm:w-6/12 m-6 md:m-10'><p className='m-4 text-left'><h1>Founder</h1>
            Florian Otto</p>
            <p className='m-4 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatem at nulla consequatur. Neque sunt incidunt necessitatibus, rerum blanditiis dicta?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, architecto.
            </p>
          </div>
        </div>

        <div className='sm:flex sm:flex-row text-lg md:text-xl text-center mx-2 sm:mx-6 lg:mx-20'>
          <div className='sm:w-6/12 m-6 md:m-10'>
            <p className='m-4 text-left'><h1>Co-Founder</h1>
              Arel Lidow</p>
            <p className='m-4 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ea.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolorem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, earum?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, earum!</p></div>
          <div className='sm:w-6/12 m-6 md:m-10' >
            <img src="./images/cofounder.jpg" alt="" height="200px" />
          </div>
        </div>

      </div>



      <div className='sm:flex sm:flex-row text-xl text-center mx-6 sm:mx-16 xl:mx-40'>
        <div className='sm:w-4/12 m-10 sm:m-4 '>
          <img src="./images/manager.jpg" alt="" />
          <p><h1>Manager</h1>
            Scott Stockberger</p>
        </div>
        <div className='sm:w-4/12 m-10 sm:m-4 '>
          <img src="./images/president.jpg" alt="" />
          <p><h1>President</h1>Seth Cohen</p></div>
        <div className='sm:w-4/12 m-10 sm:m-4 '>
          <img src="./images/Finance.jpg" alt="" />
          <p><h1>Finance Manager</h1>Liz Ratto</p></div>
        <div className='sm:w-4/12 m-10 sm:m-4 '>
          <img src="./images/Techno.jpg" alt="" />
          <p><h1>Technology officer</h1>Kinshuk Mishra</p></div>
      </div>

    </div>
  )
}

export default About