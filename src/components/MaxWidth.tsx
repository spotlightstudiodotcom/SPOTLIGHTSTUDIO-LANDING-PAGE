import { cn } from '@/app/lib/utils'
import { ReactNode } from 'react'

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div
      className={cn(
        'h-full mx-auto w-full max-w-screen-2xl px-4 lg:px-[1.5625vw]',
        className
      )}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper