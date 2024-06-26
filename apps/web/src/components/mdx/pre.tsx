'use client'

import { SiJavascript, SiReact, SiTypescript } from '@icons-pack/react-simple-icons'
import { Button, ScrollArea, ScrollBar, type ButtonProps } from '@sdnsdev/ui'
import { cn } from '@sdnsdev/utils'
import { CheckIcon, CopyIcon, FileIcon, TerminalIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'

type PreProps = {
  'data-lang'?: string
} & React.ComponentPropsWithoutRef<'pre'>
type CopyButtonProps = {
  text: string
} & ButtonProps

const getLanguageIcon = (lang: string): React.ReactNode => {
  switch (lang) {
    case 'js': {
      return <SiJavascript className='size-3.5' />
    }

    case 'ts': {
      return <SiTypescript className='size-3.5' />
    }

    case 'jsx':
    case 'tsx': {
      return <SiReact className='size-3.5' />
    }

    case 'bash':
    case 'sh':
    case 'shell':
    case 'zsh': {
      return <TerminalIcon className='size-3.5' />
    }

    default: {
      return <FileIcon className='size-3.5' />
    }
  }
}

const Pre = (props: PreProps) => {
  const { children, className, title, 'data-lang': lang, ...rest } = props

  const textInput = useRef<HTMLPreElement>(null)
  const [text, setText] = useState<string>('')

  useEffect(() => {
    if (textInput.current) {
      setText(textInput.current.textContent ?? '')
    }
  }, [])

  return (
    <figure className='not-prose bg-secondary/50 group relative my-6 overflow-hidden rounded-lg border text-sm'>
      {title ? (
        <div className='bg-muted flex flex-row items-center gap-2 border-b px-4 py-1.5'>
          {lang ? <div className='text-muted-foreground'>{getLanguageIcon(lang)}</div> : null}
          <figcaption className='text-muted-foreground flex-1 truncate'>{title}</figcaption>
          <CopyButton text={text} />
        </div>
      ) : (
        <CopyButton className='absolute right-4 top-3 z-10' text={text} />
      )}

      <ScrollArea>
        <pre ref={textInput} className={cn('p-4', className)} {...rest}>
          {children}
        </pre>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </figure>
  )
}

const CopyButton = (props: CopyButtonProps) => {
  const { text, className, ...rest } = props
  const [copy, isCopied] = useCopyToClipboard()

  return (
    <Button
      className={cn('size-8 p-0 opacity-0 transition-opacity group-hover:opacity-100', className)}
      variant='outline'
      onClick={() => {
        void copy({ text })
      }}
      type='button'
      aria-label='Copy code to clipboard'
      {...rest}
    >
      {isCopied ? <CheckIcon className='size-4' /> : <CopyIcon className='size-4' />}
    </Button>
  )
}

export default Pre
