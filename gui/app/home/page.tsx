import Link from "next/link";

export default function Home() {
  return <>
    <p>This is a home</p>
    <Link href="/home/subpage_test">Test</Link><br />
    <Link href="/home/subpage_second">Test 2</Link>
  </>
}