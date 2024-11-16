import Image from 'next/image'
import Link from 'next/link'
import RecentPosts from '@/components/recent-activities'
import RecentProjects from '@/components/recent-projects'
import HeroTypingAnimation from '@/components/hero-typing-animation'
import { Button } from '@/components/ui/button'
import TechUsedSection from '@/components/tech-used-section'

export default function Home() {
  return (
    <section className='container max-w-6xl py-24'>
      <div className='flex min-h-[80vh] w-full flex-wrap items-center sm:flex-nowrap sm:pb-12 md:justify-between'>
        <div className='flex w-full flex-col lg:w-auto'>
          <h1 className='font-serif text-3xl font-bold md:text-5xl'>
            Francisco Trianto
          </h1>
          <div className='flex flex-wrap gap-1 text-muted-foreground'>
            <h2 className='text-lg font-semibold md:text-2xl lg:text-xl'>
              I am a
            </h2>
            <HeroTypingAnimation />
          </div>
          <Link href='/contacts'>
            <Button className='my-4 sm:w-1/2'>Let&apos;s Talk</Button>
          </Link>
        </div>
        <div className='overflow-hidden rounded-xl bg-zinc-300 p-1 dark:bg-zinc-700 sm:m-1'>
          <Image
            src='/images/hero.jpg'
            alt='Francisco Trianto'
            className='rounded-xl object-cover'
            width={540}
            height={900}
            priority
          />
        </div>
      </div>
      <div className='pb-12 text-center font-semibold text-muted-foreground'>
        <p>
          | Computational Science and Engineering Laboratory Assistant |
          Informatics Engineering Student @ Bandung Institute of Technology |
          Staff of Academic Division HMIF ITB 2024/2025 |
        </p>
      </div>
      <div className='mb-12 flex flex-col items-center justify-center text-center'>
        <div className='flex max-w-2xl flex-col gap-4'>
          <h2 className='font-serif text-2xl font-bold'>About Me</h2>
          <p>
            I am the person you can count on to have a good time without losing
            sight of what&apos;s important. I&apos;m a responsible, open-minded
            person who&apos;s always up for exploring new ideas and experiences.
            I believe in living life to the fullest while staying focused on my
            goals for the future.
          </p>
          <Link
            href='https://www.linkedin.com/in/francisco-trianto/'
            className='underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            Check out my LinkedIn profile!
          </Link>
        </div>
      </div>
      <div className='mb-24 flex w-full flex-wrap items-center justify-center gap-2'>
        <Link href='/projects'>
          <Button>Check out my Projects!</Button>
        </Link>
        <Link href='/activities'>
          <Button>Check out my Activities!</Button>
        </Link>
      </div>

      <hr className='my-4 h-1 w-full rounded-lg bg-zinc-500' />

      <div className='pb-12'>
        <h2 className='mb-4 font-serif text-2xl font-bold'>
          Technologies Used
        </h2>
        <Link href='/projects'>
          <TechUsedSection />
        </Link>
      </div>
      <div className='shadow-3xl shadow-zinc-400'>
        <RecentPosts />
        <RecentProjects />
      </div>
    </section>
  )
}
