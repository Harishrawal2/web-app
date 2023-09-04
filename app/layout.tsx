import Layout from '@/components/layout';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'University, Technology Services, Staffing and Consulting | Zafron Technology',
  description: 'University, Technology Services, Staffing and Consulting | Zafron Technology',
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
