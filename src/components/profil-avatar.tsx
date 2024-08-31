import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface ProfileAvatarProps {
  className?: string;
  imageClassName?: string;
}

export default function ProfileAvatar({ className, imageClassName }: ProfileAvatarProps) {
  return (
    <Avatar className={className}>
      <AvatarImage
        src='profile-128.png'
        srcSet='profile-128.png 128w, profile-256.png 256w, profile-512.png 512w'
        sizes='(max-width: 128px) 128px, (max-width: 256px) 256px, 512px'
        alt='avatar'
        className={imageClassName}
      />
      <AvatarFallback>RFTB</AvatarFallback>
    </Avatar>
  )
}
