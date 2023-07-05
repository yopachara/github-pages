import Image from 'next/image'
import Link from 'next/link';
'use client';
 
import { useRouter } from 'next/navigation';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}


function MyButton() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      I'm a button</button>
  );
}