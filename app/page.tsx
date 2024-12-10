import { promises as fs } from 'fs'
import path from 'path'
import Link from 'next/link'

export default async function BlogIndex() {
  const postsDirectory = path.join(process.cwd(), 'docs')
  const files = await fs.readdir(postsDirectory)

  const posts = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => ({
      slug: file.replace(/\.mdx$/, '')
    }))

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.slug.replace(/-/g, ' ')}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}