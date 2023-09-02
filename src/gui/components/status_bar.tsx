"use client";
import { Exit, Maximize, Minimize, Unmaximize } from '@components/svg'
import { useState } from 'react';

export default function Component(props: React.HTMLAttributes<HTMLDivElement>) {
  const [isMaximized, setIsMaximized] = useState(false);
  return <div {...props}>
    <button className="fill-white scale-50 p-4"><Minimize /></button>
    <button className="fill-white scale-50 p-4" onClick={() => setIsMaximized(!isMaximized)}>{isMaximized ? <Unmaximize className='scale-75' /> : <Maximize className='-translate-y-2' />}</button>
    <button className="fill-white scale-50 p-4"><Exit /></button>
  </div>
}