"use client";

import { Fragment } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Backward, Forward } from '../components/svg'
import Link from 'next/link';

export function AddressBar() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-x-2 p-3.5 lg:px-5 lg:py-3">
      <div className="flex gap-x-1 text-sm font-medium">

        {pathname ? (
          <>
            {pathname
              .split('/')
              .slice(1)
              .map((segment, index, arr) => {
                return (
                  <Fragment key={segment}>
                    {!!index ?
                      <strong className='font-extrabold text-xl'>/</strong> : null}
                    <strong className={arr.length > 1 ? 'translate-y-1' : undefined}>
                      <Link
                        key={segment}
                        className="rounded-full px-4 py-1.5 bg-black"
                        href={"/" + pathname.split('/').slice(1, index + 2).join('/')}
                      >
                        {segment.charAt(0).toUpperCase() + segment.slice(1).replaceAll('-', ' ').replaceAll('_', ' ')}
                      </Link>
                    </strong>
                  </Fragment>
                );
              })}
          </>
        ) : null}
      </div>
    </div>
  );
}

export function GoBackward() {
  const router = useRouter();
  return <button onClick={() => router.back()}><Backward className="p-2.5 ml-4 fill-white" /></button>
}

export function GoForward() {
  const router = useRouter();
  return <button onClick={() => router.forward()}><Forward className="p-2.5 fill-white" /></button>
}
