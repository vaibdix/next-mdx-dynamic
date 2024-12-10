// import Image from 'next/image'
// import Link from 'next/link'
// import type { ImageProps } from 'next/image'
// import type { ComponentProps, ReactNode } from 'react'

// interface MDXComponents {
//   [key: string]: React.ComponentType<any>
// }

// interface ChildrenProps {
//   children: ReactNode
// }

// export function useMDXComponents(components: MDXComponents): MDXComponents {
//   return {

//     h1: ({ children }: ChildrenProps) => (
//       <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
//         {children}
//       </h1>
//     ),
//     h2: ({ children }: ChildrenProps) => (
//       <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
//         {children}
//       </h2>
//     ),
//     h3: ({ children }: ChildrenProps) => (
//       <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
//         {children}
//       </h3>
//     ),
//     p: ({ children }: ChildrenProps) => (
//       <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
//         {children}
//       </p>
//     ),
//     a: ({ href = '', children, ...props }: { href?: string; children: ReactNode; [key: string]: any }) => {
//       if (href.startsWith('/')) {
//         return (
//           <Link
//             href={href}
//             style={{ color: '#0070f3', textDecoration: 'underline' }}
//             {...props}
//           >
//             {children}
//           </Link>
//         )
//       }
//       return (
//         <a
//           href={href}
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ color: '#0070f3', textDecoration: 'underline' }}
//           {...props}
//         >
//           {children}
//         </a>
//       )
//     },
//     img: (props: ComponentProps<'img'>) => (
//       <Image
//         {...(props as ImageProps)}
//         alt={props.alt || ''}
//         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         style={{
//           width: '100%',
//           height: 'auto',
//           borderRadius: '0.5rem',
//         }}
//       />
//     ),
//     ul: ({ children }: ChildrenProps) => (
//       <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
//         {children}
//       </ul>
//     ),
//     ol: ({ children }: ChildrenProps) => (
//       <ol style={{ marginBottom: '1rem', paddingLeft: '1.5rem', listStyle: 'decimal' }}>
//         {children}
//       </ol>
//     ),
//     li: ({ children }: ChildrenProps) => (
//       <li style={{ marginBottom: '0.5rem' }}>
//         {children}
//       </li>
//     ),
//     blockquote: ({ children }: ChildrenProps) => (
//       <blockquote style={{
//         borderLeft: '4px solid #0070f3',
//         paddingLeft: '1rem',
//         marginLeft: '0',
//         marginRight: '0',
//         marginBottom: '1rem',
//         fontStyle: 'italic'
//       }}>
//         {children}
//       </blockquote>
//     ),
//     pre: ({ children, ...props }: ComponentProps<'pre'>) => (
//       <pre {...props}>{children}</pre>
//     ),
//     code: ({ children, ...props }: ComponentProps<'code'>) => (
//       <code {...props}>{children}</code>
//     ),

//     ...components,
//   }
// }



import React, { ComponentPropsWithoutRef } from 'react';
import { Link } from 'next-view-transitions';
import { highlight } from 'sugar-high';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;
type CodeProps = ComponentPropsWithoutRef<'code'> & { className?: string };


const components = {
  h1: (props: HeadingProps) => (
    <h1
      className="font-medium text-3xl pt-12 mb-4 text-gray-900 dark:text-gray-100"
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="text-2xl font-medium mt-8 mb-3 text-gray-800 dark:text-gray-200"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="text-xl font-medium mt-8 mb-3 text-gray-800 dark:text-gray-200"
      {...props}
    />
  ),
  p: (props: ParagraphProps) => (
    <p
      className="text-gray-800 dark:text-gray-300 leading-relaxed mb-4"
      {...props}
    />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = 'text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300';
    // ... rest of the anchor logic
  },
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="p-4 rounded-lg bg-gray-900 dark:bg-gray-800 overflow-x-auto my-4">
      {children}
    </pre>
  ),
  ol: (props: ListProps) => (
    <ol className="text-gray-800 list-decimal pl-5 space-y-2" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="text-gray-800 list-disc pl-5 space-y-1" {...props} />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<'em'>) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-medium" {...props} />
  ),


  code: ({ children, className, ...props }: CodeProps) => {
    if (!className) {
      return (
        <code
          className="bg-gray-100 dark:bg-gray-800 rounded-md px-1.5 py-0.5 font-mono text-sm"
          {...props}
        >
          {children}
        </code>
      );
    }

    // For code blocks with language
    const language = className.replace('language-', '');
    const highlightedCode = highlight(children as string);

    return (
      <code
        className={`language-${language} font-mono text-sm`}
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
        {...props}
      />
    );
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table className="min-w-full divide-y divide-gray-200 my-4">
      <thead className="bg-gray-50">
        <tr>
          {data.headers.map((header, index) => (
            <th
              key={index}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700"
      {...props}
    />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}