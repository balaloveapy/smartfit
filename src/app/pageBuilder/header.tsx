'use client'
import Image from 'next/image'
import * as style from './header.styled'
export const Header=()=>{
    return(
        <style.Headerr>
            <div>
            <Image width={150} height={150} src={'/logo.svg'} alt='logo'/>
            </div>
        </style.Headerr>
    )
} 