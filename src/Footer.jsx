import React from 'react'

function Footer() {
  return (
    <footer className='footer-container'>
        <div>
            <h2>MoreAndMore</h2>
        </div>
        <div className='social-icons'>
            <a href='http://www.facebook.com/morandmore0.lk?mibextid=LQQJ4d'><i class="bi bi-facebook"></i></a>
            <a href='https://www.instagram.com/invites/contact/?i=uy9l6deakg5j&utm_content=rlncl4w'><i class="bi bi-instagram"></i></a>
            <a href='https://maps.app.goo.gl/g1LkgKVdkQy6ZjyWA'><i class="bi bi-geo"></i></a>
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