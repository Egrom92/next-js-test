import Link from "next/link";

export const metadata = {
  title: 'About page'
}
export default function AboutLayout({children}) {
  return <div>
    <h2>About page</h2>
    <ul>
      <li><Link href='/about/contacts'>Contacts</Link></li>
      <li><Link href='/about/team'>Team</Link></li>
    </ul>
    {children}
  </div>
}