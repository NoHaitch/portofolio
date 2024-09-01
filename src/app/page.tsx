import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default function Home() {
  const content = `
  # This is a markdown heading
  This is a test

  ### HELP

  ## ME ?
  `

  return (
    <section className='py-24'>
      <MDXRemote source={content} />
    </section>
  )
}
