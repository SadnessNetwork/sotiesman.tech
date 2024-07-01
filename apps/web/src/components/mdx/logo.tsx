import { Logo as SdnsdevLogo } from '@sdnsdev/ui'

const Logo = () => {
  return (
    <div className='flex flex-col gap-4 md:flex-row'>
      <div className='flex h-52 w-full items-center justify-center rounded-lg bg-white'>
        <SdnsdevLogo className='text-black' width={48} height={48} />
      </div>
      <div className='flex h-52 w-full items-center justify-center rounded-lg bg-black'>
        <SdnsdevLogo className='text-white' width={48} height={48} />
      </div>
    </div>
  )
}

export default Logo
