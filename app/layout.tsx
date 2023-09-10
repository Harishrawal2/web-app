import Layout from '@/components/layout';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Revise Study | IT Courses | Full Stack Development course | Interview Preparation ',
  description: 'Revise Study | IT Courses | Full Stack Development course | Freelancing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
