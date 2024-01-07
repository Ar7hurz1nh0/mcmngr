"use client"
import { useRouter } from 'next/navigation'
import { invoke } from '@tauri-apps/api/tauri'
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();

  const [errorMsg, setError] = useState<{ msg: string, id: number } | null>(null);
  useEffect(() => {
    console.log(window.history.length)
    if (window.history.length > 1)
      return router.forward();
    invoke<void>('start_app')
      .then(() => router.push("/home"))
      .catch(e => {
        let error = { msg: "Unknown Error", id: -1 };
        try {
          error = JSON.parse(e?.msg ?? '{"message":"Unknown Error","id":-1}')
        }
        catch { }
        setError(error)
      });
  }, [router]);

  return <main>
    <a href='http://localhost:3000/' target='_blank'>This is the loading screen</a>
    {errorMsg && <p>
      {errorMsg.msg}
    </p>
    }
  </main>
}
