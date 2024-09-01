import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import path from 'path'

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
        srcSet='/images/profile/profile-128.png 128w, /images/profile/profile-256.png 256w, /images/profile/profile-512.png 512w'
        sizes='(max-width: 128px) 128px, (max-width: 256px) 256px, 512px'
        alt='avatar'
        className={imageClassName}
      />
      <AvatarFallback></AvatarFallback>
    </Avatar>
  )
}
