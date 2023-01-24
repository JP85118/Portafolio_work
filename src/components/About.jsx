import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magni labore officiis exercitationem accusamus, vel error maiores architecto reprehenderit sunt laborum pariatur mollitia, quas dolores iusto sapiente quae! Eveniet, tempora!
        </p>
        <br />
        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aliquam eius voluptate ipsam repellendus ea nihil cupiditate. Ut est laboriosam voluptates fugiat natus aperiam, ipsum eum. Quia neque repellendus repudiandae.
        </p>
      </div>
    </div>
  )
}

export default About