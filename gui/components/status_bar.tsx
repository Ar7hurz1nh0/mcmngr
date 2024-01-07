"use client";
import { Exit, Maximize, Minimize, Unmaximize } from '@components/svg'
import { invoke } from '@tauri-apps/api/tauri';
import { useState } from 'react';

export default function Component(props: React.HTMLAttributes<HTMLDivElement>) {
  const [isMaximized, setIsMaximized] = useState(false);
  return <div {...props}>
    <button
      className='transition-all hover:bg-slate-600 duration-500 scale-50 rounded-full'
      onClick={() => invoke<void>('minimize_window')
        .catch(console.error)
      }
      aria-label='Minimize window'
    >
      <div
        className='delay-0 motion-reduce:animate-none motion-safe:hover:animate-[bounce-small_1s_2] p-3 hover:fill-green-500 fill-white'
      >
        <Minimize aria-label='Minimize symbol' />
      </div>
    </button>
    <button
      className={"scale-50 fill-white hover:fill-amber-500 transition-all hover:bg-slate-600 duration-500 hover:duration-500 hover:delay-75 rounded-full"}
      onClick={() => invoke<boolean>('maximize_window')
        .then(value => setIsMaximized(value))
        .catch(console.error)
      }
      aria-label='Maximize/unmaximize window'
    >{isMaximized ?
      <Unmaximize className='scale-75 m-3 maximize-icon z-[999]' />
      : <div className="motion-safe:hover:animate-[bounce-normal_1s_2] p-3 delay-150 motion-reduce:animate-none">
        <Maximize
          className='-translate-y-2'
          aria-label='Maximize symbol'
        />
      </div>
      }
    </button>
    <button
      className="fill-white hover:fill-red-500 motion-safe:transition-all hover:bg-slate-600 duration-500 rounded-full scale-50 motion-reduce:animate-none"
      onClick={() => invoke<void>('close_window')
        .catch(console.error)
      }
      aria-label='Close window'
    >
      <div
        className='delay-0 motion-safe:hover:animate-[rotate_1s_2] p-3'
      >
        <Exit aria-label='Exit symbol' />
      </div>
    </button>
  </div>
}