import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className='container flex min-h-[calc(100vh-4rem)] items-center justify-center py-16 md:py-24'>
      <div className='text-center'>
        <p className='text-5xl font-bold tracking-tight sm:text-6xl'>404</p>
        <h1 className='mt-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl'>
          Page not found
        </h1>
        <p className='mt-4 text-base text-muted-foreground'>
          Please check the URL in the address bar and try again.
        </p>
        <Link
          className='mt-8 inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80'
          href='/'
        >
          <ArrowLeftIcon className='h-4 w-4' />
          <span>Go back home</span>
        </Link>
      </div>
    </section>
  )
}
