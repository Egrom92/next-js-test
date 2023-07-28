'use client'
import Link from "next/link";
import { useEffect, useState } from "react";


export function generateMetadata() {
  return {
    title: 'Blog page'
  }
}

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, swtLoading] = useState(true)
  
  useEffect() {
    
  }
  
  return <>
    <h1>Hello, Next.js! It is Blog page</h1>
    <ul>
      {posts.map(post => (
        <li>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </>
  return ;
}