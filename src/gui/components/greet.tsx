'use client'

import { OptionHTMLAttributes, useEffect, useState } from 'react'
import { invoke } from '@tauri-apps/api/tauri'

function Component(props: OptionHTMLAttributes<HTMLParagraphElement>) {
  const [greeting, setGreeting] = useState('')
  useEffect(() => {
    setGreeting('Loading...')
    invoke<string>('greet', { name: 'Next.js' })
      .then(setGreeting)
      .catch(console.error)
  }, [])

  return <p {...props} >{greeting}</p>
}


export default Component;