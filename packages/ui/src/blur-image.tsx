'use client'

import { cn } from '@sdnsdev/utils'
import NextImage from 'next/image'
import { forwardRef, useState } from 'react'

type ImageProps = {
	imageClassName?: string
	lazy?: boolean
} & React.ComponentPropsWithoutRef<typeof NextImage>

export const BlurImage = forwardRef<HTMLDivElement, ImageProps>(
	(props, ref) => {
		const { alt, src, className, imageClassName, lazy = true, ...rest } = props
		const [isLoading, setIsLoading] = useState(true)

		return (
			<div
				className={cn(
					'overflow-hidden',
					isLoading && 'animate-pulse',
					className
				)}
				ref={ref}
			>
				<NextImage
					className={cn(
						isLoading && 'scale-[1.02] blur-xl grayscale',
						imageClassName
					)}
					style={{
						transition: 'filter 700ms ease, transform 150ms ease'
					}}
					src={src}
					alt={alt}
					loading={lazy ? 'lazy' : undefined}
					priority={!lazy}
					quality={100}
					onLoadingComplete={() => {
						setIsLoading(false)
					}}
					{...rest}
				/>
			</div>
		)
	}
)

BlurImage.displayName = 'Image'
