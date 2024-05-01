import { BtnProps } from '@/util/types/type'
import React from 'react'

function PrimaryBtn({ children, ...props }: BtnProps) {
  return (
    <button className='bg-[#3634A3] w-full rounded-lg flex items-center py-2 px-6 text-white justify-center gap-2 hover:shadow-xl hover:shadow-[#3634A3]/45 duration-300 ' {...props}>{children}</button>
  )
}

export default PrimaryBtn