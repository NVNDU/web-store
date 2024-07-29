import React from 'react'

function Footer() {
  return (
    <footer className='footer-container'>
        <div>
            <h2>MoreAndMore</h2>
        </div>
        <div className='social-icons'>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-twitter-x"></i>
            <i class="bi bi-twitch"></i>
            <i class="bi bi-whatsapp"></i>
            <i class="bi bi-linkedin"></i>
        </div>
        <div>
            <h4>Copyright &copy; 2024 All rights reserved</h4>
        </div>
        <div>
            <h4 style={{marginTop: '5px'}}>Powered by eurosoft<i class="bi bi-boxes"></i></h4>
        </div>
    </footer>
  )
}

export default Footer