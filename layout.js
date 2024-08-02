import './globals.css';
import { Chivo_Mono } from 'next/font/google';

const chivo = Chivo_Mono({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Letters of Thought',
  description: 'Student views. Global issues.',
  keywords: 'student blog, global issues', // add keywords for SEO
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={chivo.className}>{children}</body>
    </html>
  );
}
