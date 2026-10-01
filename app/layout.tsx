import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kapilash | AI Software Engineer & AI Agent Developer',
  description: 'AI/software developer from Sri Lanka building research systems, automation tools, developer infrastructure, and full-stack applications.',
  openGraph: { title: 'Kapilash | AI Software Engineer', description: 'Research systems, automation tools, developer infrastructure, and full-stack applications by Kapilash.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
