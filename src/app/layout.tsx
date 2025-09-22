import '@/shared/styles/reset.scss';
import '@/shared/styles/styles.scss';

import { Header } from './(Header)/(ui)/Header';
import { Footer } from './(Footer)/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <>
          <Header />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
