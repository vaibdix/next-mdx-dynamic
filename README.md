# Next.js App Router + Dynamic MDX

This is an example of loading MDX files from a folder outside of `app/`.

For example, I have `app/blog/[slug]/page.tsx`, which uses a dynamic import:

```tsx
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post } = await import(`docs/${slug}.mdx`);

  return <Post />;
}

export function generateStaticParams() {
  return [{ slug: 'hello-world' }];
}

export const dynamicParams = false;
```

This reads an MDX file from the top-level `docs/` folder:

```md
# Hello

world
```
