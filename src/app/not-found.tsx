'use client';

import { useRedirect } from '@//i18n/Redirect';
import Link from 'next/link';

export default function NotFound() {
  useRedirect();
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
