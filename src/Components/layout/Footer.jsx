import React from 'react'

function Footer() {

    const yearsa = new Date().getFullYear()

  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
       <div>
        <p>CopyRights &copy; {yearsa}. All rights Reserved</p>
       </div>
    </footer>
  )
}

export default Footer
