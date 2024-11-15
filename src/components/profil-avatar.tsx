import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

interface ProfileAvatarProps {
  className?: string
  imageClassName?: string
}

export default function ProfileAvatar({
  className,
  imageClassName
}: ProfileAvatarProps) {
  return (
    <Avatar className={className}>
      <AvatarImage
        src='/images/profile/profile-128.png'
        srcSet='/images/profile/profile-128.png 1x, /images/profile/profile-256.png 2x'
        alt='Profile avatar'
        className={cn('object-cover', imageClassName)}
      />
    </Avatar>
  )
}
