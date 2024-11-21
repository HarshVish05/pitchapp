"use client"

import Link from 'next/link'
import React from 'react'
import { ImCross } from "react-icons/im";

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form')
    
        if(form) form.reset()
      }
  return (
    <div>
        <button type="reset" onClick={reset}>
            <Link href={'/'} className='search-btn text-white'>
            <ImCross className='size-4'/>
          </Link></button>
    </div>
  )
}

export default SearchFormReset