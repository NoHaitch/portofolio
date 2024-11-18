'use client'

import { z } from 'zod'
import Link from 'next/link'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormSchema } from '@/lib/schemas'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { sendEmail } from '@/lib/actions'

type Inputs = z.infer<typeof ContactFormSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema)
  })

  const processForm = async (data: Inputs) => {
    try {
      await sendEmail(data)
      toast.success('Message sent successfully!')
      reset()
    } catch (error) {
      toast.error('An error occurred! Please try again.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(processForm)}
      className='mt-8 space-y-6'
      noValidate
    >
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
        <div>
          <Input
            id='name'
            placeholder='Name'
            autoComplete='name'
            {...register('name')}
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          {errors.name && (
            <p className='mt-1 text-sm text-red-500' role='alert'>
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <Input
            id='email'
            type='email'
            placeholder='Email'
            autoComplete='email'
            {...register('email')}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && (
            <p className='mt-1 text-sm text-red-500' role='alert'>
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <Textarea
          rows={6}
          placeholder='Message'
          {...register('message')}
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && (
          <p className='mt-1 text-sm text-red-500' role='alert'>
            {errors.message.message}
          </p>
        )}
      </div>

      <Button className='w-full' type='submit' disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Contact Us'}
      </Button>

      <p className='text-xs text-muted-foreground'>
        By submitting this form, I agree to the{' '}
        <Link href='/privacy' className='font-semibold hover:underline'>
          privacy policy
        </Link>
        .
      </p>
    </form>
  )
}
