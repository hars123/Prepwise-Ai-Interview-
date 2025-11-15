import { Outlet } from 'react-router-dom'

const AuthenticationLayout = () => {
  return (
   <div className='w-screen h-screen overflow-hidden flex items-center justify-center relative'>
  <img
    src="/assest/img/bg.png"
    className='absolute h-full w-full object-cover opacity-20 z-0'
    alt=""
  />

  <div className="z-10 w-full flex items-center justify-center">
    <Outlet />
  </div>
</div>

  )
}

export default AuthenticationLayout