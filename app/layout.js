import './globals.css'
import './home.css'
import './SetTask.css'
import './VeiwTask.css'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='page'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
