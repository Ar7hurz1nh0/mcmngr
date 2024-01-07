"use client";
import { Fragment, useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Backward, Forward } from '@components/svg'
import { type State } from '@components/header'
import Link from 'next/link';

export interface HistoryItem {
  name: string,
  slug: string,
  url: string
}

export function AddressBar({ state: { history, index: activeIndex } }: { state: State }) {
  const [lastLength, setLastLength] = useState(0);
  const [execute, setExecute] = useState(false);
  const length = history.length;
  console.log(history)

  useLayoutEffect(() => {
    setLastLength(() => length);
    setExecute(lastLength < length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length])

  return (
    <div className="flex items-center gap-x-2 p-3.5 lg:px-5 lg:py-3">
      <div className="flex gap-x-1 text-sm font-medium">
        {!!length && (
          <>
            {history
              .map((segment, index) => {
                const isLast = length - 1 === index;
                return (
                  <Fragment key={segment.url}>
                    {!!index &&
                      <span className={'font-extrabold text-xl z-10' + ((isLast && execute) ? " motion-safe:animate-[highlight-slash_0.8s_ease-in-out_1]" : "")}>/</span>}
                    <span className={`motion-safe:transition-all duration-500 ease-in-out motion-safe:hover:-translate-y-0.5 z-50 font-extrabold my-1${(isLast && execute) ? " motion-safe:animate-[highlight_0.8s_ease-in-out_1]" : ""}`}>
                      <Link
                        key={segment.url}
                        className={`-translate-y-4 rounded-full px-4 py-1.5 ${index <= activeIndex ? "bg-black hover:bg-slate-900" : "bg-slate-500 hover:bg-slate-400 text-slate-300"}`}
                        href={segment.url}
                        aria-label='Go to page'
                      >
                        {segment.name}
                      </Link>
                    </span>
                  </Fragment>
                );
              })}
          </>
        )}
      </div>
    </div>
  );
}

export function GoBackward({ enabled, goBack }: { enabled: boolean, goBack: () => void }) {
  const router = useRouter();
  return <button
    onClick={goBack}
    className="ml-4 my-1 rounded-full"
    aria-label='Go Back one page'
    disabled={!enabled}
  >
    <div
      className={"hover:bg-slate-600 motion-safe:transition-all duration-500 ease-in-out rounded-xl hover:rounded-3xl"}
    >
      <Backward
        className="fill-white motion-safe:hover:animate-[bounce-back_1s_2] p-2.5 motion-reduce:animate-none transition-colors duration-500 hover:fill-slate-300 transform-none"
        aria-label='Backward symbol'
      />
    </div>
  </button>
}

export function GoForward({ enabled, goForward }: { enabled: boolean, goForward: () => void }) {
  return <button
    onClick={goForward}
    className="ml-2 rounded-full my-1"
    aria-label='Go Forward one page'
    disabled={!enabled}
  >
    <div
      className={"hover:bg-slate-600 motion-safe:transition-all duration-500 ease-in-out rounded-xl hover:rounded-3xl"}
    >
      <Forward
        className="fill-white motion-safe:hover:animate-[bounce-forward_1s_2] p-2.5 motion-reduce:animate-none transition-colors duration-500 hover:fill-slate-300"
        aria-label='Forward symbol'
      />
    </div>
  </button>
}
