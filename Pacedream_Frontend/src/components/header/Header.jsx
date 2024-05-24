import Navbar from './Navbar'
import Login from './Login'
import Logo from './Logo'
import Profile from './Profile'

function Header() {
  return (
    <div className='flex justify-center fixed top-0 z-10 bg-white w-full h-20'>
      <div className="flex flex-row justify-between items-center w-[80%] ">
        <div className='flex flex-row'>
          <Logo/>
          <Navbar/>
        </div>
        <div className='flex flex-row gap-2'>
            <Login/>
            <Profile/>
        </div>
      </div>

    </div>
  )
}

export default Header