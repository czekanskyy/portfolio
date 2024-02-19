import type { Metadata } from 'next';
import { Fira_Mono } from 'next/font/google';
import './globals.scss';

const firaMono = Fira_Mono({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Dominik Czekański 👨🏻‍💻',
  description:
    'As a passionate Frontend Developer, I blend creativity with code to build captivating digital landscapes. With a keen eye for design and a knack for user-centric interfaces, I transform ideas into pixel-perfect reality.',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body className={firaMono.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
