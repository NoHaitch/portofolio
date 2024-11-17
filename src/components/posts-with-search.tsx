'use client'

import { useState, useMemo } from 'react'
import { PostMetadata } from '@/lib/posts'
import Posts from './posts'
import { Button } from './ui/button'
import { Cross2Icon } from '@radix-ui/react-icons'
import { Input } from './ui/input'

interface PostsWithSearchProps {
  posts: PostMetadata[]
}

export default function PostsWithSearch({ posts }: PostsWithSearchProps) {
  const [query, setQuery] = useState('')

  const filteredPosts = useMemo(
    () =>
      posts.filter(post =>
        post.title?.toLowerCase().includes(query.toLowerCase())
      ),
    [posts, query]
  )

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const resetFilter = () => {
    setQuery('')
  }

  return (
    <div>
      <div className='mb-8 flex items-center gap-3'>
        <Input
          type='text'
          placeholder='Search posts'
          className='h-9 w-full border-2 sm:w-2/3'
          value={query}
          onChange={handleQueryChange}
        />
        {query && (
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
      <Posts posts={filteredPosts} />
    </div>
  )
}
