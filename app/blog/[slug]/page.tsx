import Image from 'next/image'
import { notFound } from 'next/navigation'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>  // Note the Promise type
}) {
  const slug = (await params).slug  // Await the params

  try {
    const { default: Post } = await import(`../../../docs/${slug}.mdx`)
    return (
      <div>
        <Post components={{ Image }} />
      </div>
    )
  } catch (error) {
    return notFound()
  }
}

export async function generateStaticParams() {
  return [{ slug: 'hello-world' }]
}

export const dynamicParams = true