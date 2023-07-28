import { finalizeEntrypoint } from "next/dist/build/entries";

export const getAllPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return response.json()
}