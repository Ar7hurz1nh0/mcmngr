import Profile from './profile'

export default function Component(props: React.HTMLAttributes<HTMLDivElement>) {

  return <nav
    {...props}
  >
    <Profile />
  </nav>
}