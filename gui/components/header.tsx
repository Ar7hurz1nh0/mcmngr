"use client";
import { AddressBar, GoBackward, GoForward } from '@components/route_path'
import StatusBar from '@components/status_bar'
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useReducer } from 'react';
import type { HistoryItem } from '@components/route_path'
import { match } from 'ts-pattern';

const enum Action {
  AddIndex = 'add_index',
  GoBack = 'go_back',
  GoForward = 'go_forward',
}

type AddIndex = {
  type: Action.AddIndex,
  payload: HistoryItem
};

type GoBack = {
  type: Action.GoBack,
  payload: null
};

type GoForward = {
  type: Action.GoForward,
  payload: null
};


export interface State {
  history: HistoryItem[],
  index: number
}

function reducer(state: State, action: GoForward | GoBack | AddIndex) {
  return match(action.type)
    .returnType<State>()
    .with(Action.AddIndex, () => {
      if (state.history[Math.max(0, state.index)]?.url !== action.payload?.url) {
        state.history.push(action.payload!);
        state.index++;
      }
      return state;
    })
    .with(Action.GoBack, () => {
      state.index--;
      return state
    })
    .with(Action.GoForward, () => {
      state.index++;
      return state
    })
    .exhaustive();
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const _document = typeof document !== 'undefined' ? document : { title: "Home" };
  const [state, dispatch] = useReducer(reducer, {
    history: [
      {
        name: _document.title.replace(" | mcmngr", ""),
        slug: pathname.split('/').slice(-1)[0]!,
        url: pathname,
      }
    ], index: 0
  });

  const goBack = () => {
    if (state.index > 0) {
      dispatch({ type: Action.GoBack, payload: null } satisfies GoBack);
      router.back();
    }
  }
  const goForward = () => {
    if (state.index < state.history.length - 1) {
      dispatch({ type: Action.GoForward, payload: null } satisfies GoForward);
      router.forward();
    }
  }

  useEffect(() => {
    const item: AddIndex = {
      type: Action.AddIndex,
      payload: {
        name: document.title.replace(" | mcmngr", ""),
        slug: pathname.split('/').slice(-1)[0]!,
        url: pathname,
      }
    };
    // console.log(item);
    dispatch(item)
  }, [pathname])

  return (
    <header className="sticky top-0 w-[calc(100%-5rem)] h-14 bg-slate-700 z-[900] ml-20 flex flex-row will-change-transform">
      <GoBackward enabled={state.index > 0} goBack={goBack} />
      <GoForward enabled={state.index < state.history.length - 1} goForward={goForward} />
      <AddressBar state={state} />
      <div className='absolute pl-auto right-0 pr-2'>
        <StatusBar className='right-0 h-14 flex flex-row items-center w-36 -space-x-8' />
      </div>
    </header>
  )
}