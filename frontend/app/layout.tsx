import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mental Coach - AI-Powered Support',
  description: 'Your supportive AI mental coach for stress, motivation, habits, and confidence',
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
