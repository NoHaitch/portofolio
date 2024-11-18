'use client'

import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'

export default function PrivacyPolicy() {
  return (
    <section className='p-12'>
      <Link
        href='/'
        className='mb-8 inline-flex items-center gap-2 text-sm font-light'
      >
        <ArrowLeftIcon className='size-5' />
        <span>Back to home</span>
      </Link>

      <h1 className='mb-8 font-serif text-3xl font-bold md:text-4xl'>
        Privacy Policy
      </h1>

      <div className='space-y-6 text-muted-foreground'>
        <p>
          This Privacy Policy describes how we collect, use, and handle your
          personal information when you use our website and contact form.
        </p>

        <h2 className='text-xl font-semibold text-foreground'>
          Information We Collect
        </h2>
        <p>
          When you use our contact form, we collect the following information:
        </p>
        <ul className='list-inside list-disc'>
          <li>Your name</li>
          <li>Your email address</li>
          <li>The content of your message</li>
        </ul>

        <h2 className='text-xl font-semibold text-foreground'>
          How We Use Your Information
        </h2>
        <p>
          We use the information you provide via the contact form solely for the
          purpose of responding to your inquiry or request. We do not use this
          information for marketing purposes or share it with third parties.
        </p>

        <h2 className='text-xl font-semibold text-foreground'>
          Data Storage and Security
        </h2>
        <p>
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. However, please be aware that
          no method of transmission over the internet or electronic storage is
          100% secure.
        </p>

        <h2 className='text-xl font-semibold text-foreground'>Your Rights</h2>
        <p>
          You have the right to request access to the personal information we
          hold about you and to request its correction or deletion. To exercise
          these rights, please contact us using the information provided below.
        </p>

        <h2 className='text-xl font-semibold text-foreground'>
          Changes to This Policy
        </h2>
        <p>
          We may update this privacy policy from time to time. We will notify
          you of any changes by posting the new privacy policy on this page.
        </p>

        <h2 className='text-xl font-semibold text-foreground'>Contact Me</h2>
        <p>
          If you have any questions about this privacy policy, please contact me
          at:
        </p>
        <p className='font-medium text-foreground'>
          franciscotrianto@gmail.com
        </p>

        <div className='pt-6'>
          <Button asChild>
            <Link href='/contacts'>Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
