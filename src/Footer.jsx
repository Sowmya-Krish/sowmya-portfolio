import React from 'react'

function Footer() {
  return (
    <div className='mt-5'>
      <div className='text-center pb-3 mynav ' style={{ height: '5rem' }}>
        <div className="text-center pt-2 " id="social-cont">
          <a target="_blank" href="https://mail.google.com/mail/u/0/?hl=en-GB&tf=cm&fs=1&to=sowmikrish.crazy@gmail.com"><i class="fa-regular fa-envelope"></i></a>
          <a target="_blank" href="https://github.com/Sowmya-Krish"><i class="fa-brands fa-github"></i></a>
          <a target="_blank" href="https://www.linkedin.com/in/sowmya-krishnan-140105243?trk=contact-info"><i class="fa-brands fa-linkedin"></i></a>
          <a target="_blank" href="https://wa.me/+919790477769"><i class="fa-brands fa-whatsapp"></i></a>
          
        </div>

        <div className="text-center myname">
          @2023 Designed by Sowmya
        </div>
      </div>

    </div>
  )
}

export default Footer