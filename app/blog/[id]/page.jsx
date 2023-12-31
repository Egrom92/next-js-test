export async function generateMetadata({params: {id}}) {
  const post = await getData(id)
  return {
    title: post.title
  }
}

async function getData(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return response.json()
}

export default async function Page({params: { id }}) {
  const post = await getData(id)
  return <>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
  </>;
}