import { memo } from 'react'
import ThemeToggle from './theme-toggle'
import Link from 'next/link'
import ProfileAvatar from './profil-avatar'
import { IoMenu } from 'react-icons/io5'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu'

const NAV_ITEMS = [
  { href: '/projects', label: 'Projects' },
  { href: '/activities', label: 'Activities' },
  { href: '/contacts', label: 'Contact' }
]

const NavItem = memo(({ href, label }: { href: string; label: string }) => (
  <li>
    <Link href={href} className='transition-colors hover:text-foreground'>
      {label}
    </Link>
  </li>
))
NavItem.displayName = 'NavItem'

const MobileNavMenu = memo(() => (
  <DropdownMenu>
    <DropdownMenuTrigger aria-label='Navigation menu'>
      <IoMenu className='size-6' />
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuGroup>
        {NAV_ITEMS.map(({ href, label }) => (
          <DropdownMenuItem key={href} asChild>
            <Link href={href} className='w-full'>
              {label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
))
MobileNavMenu.displayName = 'MobileNavMenu'

const DesktopNav = memo(() => (
  <ul className='hidden items-center gap-6 text-sm font-light text-muted-foreground sm:flex'>
    {NAV_ITEMS.map(({ href, label }) => (
      <NavItem key={href} href={href} label={label} />
    ))}
  </ul>
))
DesktopNav.displayName = 'DesktopNav'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-background/75 py-4 backdrop-blur-sm'>
      <nav className='container flex max-w-5xl items-center justify-between'>
        <Link
          href='/'
          className='flex items-center gap-2 font-serif text-2xl font-bold sm:gap-4'
        >
          <ProfileAvatar className='size-6 sm:size-8 md:size-10' />
          <span>Francisco</span>
        </Link>
        <div className='flex items-center gap-4'>
          <div className='sm:hidden'>
            <MobileNavMenu />
          </div>
          <DesktopNav />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
