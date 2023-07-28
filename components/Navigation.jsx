'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'

const Navigation = ({navLinks}) => {
  const pathname = usePathname()
  
  return navLinks.map((navLink, key) => <Link key={key} href={navLink.path} style={{color: navLink.path === pathname ? 'red' : ''}}>{navLink.name}</Link>)
}

export {Navigation};