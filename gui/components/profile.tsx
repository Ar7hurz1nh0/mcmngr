"use client"
import { Fragment, useReducer, useState } from "react";
import { NoAccount, UnhideField, HideField } from "@components/svg"
import { match } from "ts-pattern";

const enum Popup {
  Login = "login",
  CreateAccount = "create_account",
  AccountList = "account_list",
}

const enum PopupActions {
  Open = "open",
  OpenLogin = "open_login",
  Close = "close"
}

interface UserProps {
  popup: null | Popup
  isLoggedIn: boolean
  userData?: unknown
}

function userReducer(state: UserProps, action: { type: string, payload: boolean }) {
  return state;
}

export default function Component() {
  const [popupWindow, dispatchUser] = useReducer(userReducer, { popup: null, isLoggedIn: false, userData: {} } satisfies UserProps);
  const [visibility, setVisibility] = useState<boolean>(false);

  return <div>
    <div className="relative z-0">
      <div className="absolute top-0 left-0">
        {match(Popup.Login as Popup)
          .returnType<React.ReactNode | null>()
          .with(Popup.AccountList, () => <div className="bg-slate-800 p-4 rounded-2xl">
          </div>)
          .with(Popup.CreateAccount, () => <div className="bg-slate-800 p-4 rounded-2xl"></div>)
          .with(Popup.Login, () => <form className="bg-slate-800 p-4 rounded-2xl flex flex-col items-start z-50">
            <div>
              <label className="font-extrabold pl-2" htmlFor="popup_login_input">Email or username</label>
              <input type="text" placeholder="Email or username" id="popup_login_input" className="peer bg-slate-900 text-slate-200 border-2 rounded-xl font-bold mt-0.5 invalid:border-2 invalid:border-rose-600 transition-all duration-300 h-12 border-slate-700" />
              <span className="hidden text-rose-600 font-semibold peer-invalid:block pl-3">Invalid username</span>
            </div>
            <div className="mt-2">
              <label className="font-extrabold pl-2" htmlFor="popup_login_pwd">Password</label>
              <div className="flex flex-row peer bg-slate-900 text-slate-200 border-2 rounded-xl font-bold mt-0.5 invalid:border-2 invalid:border-rose-600 transition-all duration-300 grow h-12 border-slate-700 items-center">
                <input type={visibility ? "text" : "password"} placeholder="Password" id="popup_login_pwd" className="bg-transparent border-0 -mr-14 h-full" />
                <button
                  type="button"
                  className="mr-2 h-full -translate-y-0.5 fill-slate-500 rounded-full"
                  onClick={() => setVisibility(v => !v)}
                >{visibility ? <UnhideField className="p-2.5" /> : <HideField className="p-2.5" />}</button>
              </div>
              <span className="hidden text-rose-600 font-semibold peer-invalid:block pl-3 flex-none">Wrong password</span>
            </div>
            <div className="flex flex-row justify-between items-end w-full">
              <a className="font-semibold underline hover:underline-offset-2 pl-4 cursor-pointer">Create account</a>
              <button type="button" className="mt-4 px-3 py-0.5 bg-lime-600 saturate-200 hover:saturate-100 transition-all duration-300 rounded-lg font-extrabold self-end">Login</button>
            </div>
          </form>)
          .otherwise(_ => null)
        }
      </div>
    </div>
    <div
      className="flex flex-row gap-2 rounded-2xl"
    >
      <div
        className="bg-slate-700 rounded-2xl transition-all duration-300 ease-in-out"
        onClick={() => console.count("profile")}
      >
        <NoAccount
          className="fill-white m-1 p-1"
          aria-label='No account symbol'
          role='button'
        />
      </div>
      <div className="pl-2 group-hover:visible group-hover:delay-1000 group-hover:opacity-100 transition-all ease-in flex flex-col items-center h-8 invisible opacity-0">
        <p className="font-bold">Not logged in</p>
        <button
          className="px-3 pt-0.5 pb-1 text-sm font-bold bg-slate-600 rounded-lg"
          type="button"
          onClick={() => console.count("sign in")}
        >Sign in</button>
      </div>
    </div>
  </div>
}

export function ProfilePopover() {

  return <Fragment>

  </Fragment>
}