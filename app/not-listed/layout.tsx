import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Listed ',
  description: 'Not ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
