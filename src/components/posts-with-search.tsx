'use client'

import { useState } from 'react'
import { PostMetadata } from '@/lib/posts'

import Posts from './posts'
import { Button } from './ui/button'
import { Cross2Icon } from '@radix-ui/react-icons'
import { Input } from './ui/input'

export default function PostsWithSearch({ posts }: { posts: PostMetadata[] }) {
  const [query, setQuery] = useState('')
  const filtered = posts.filter(post =>
    post.title?.toLowerCase().includes(query.toLowerCase())
  )

  const isFiltered = query.length > 0
  function resetFilter() {
    setQuery('')
  }

  return (
    <div className=''>
      <div className='mb-8 flex items-center gap-3'>
        <Input
          type='text'
          placeholder='search posts'
          className='h-9 w-full sm:w-2/3'
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {isFiltered && (
          <Button
            size='sm'
            variant='secondary'
            onClick={resetFilter}
            className='h-8 px-2 lg:px-3'
          >
            Reset
            <Cross2Icon className='ml-2 size-4' />
          </Button>
        )}
      </div>
      <Posts posts={filtered} />
    </div>
  )
}
