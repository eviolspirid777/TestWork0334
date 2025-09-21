import '@/shared/styles/reset.scss';

import { Toaster } from 'react-hot-toast';
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
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'white',
                color: 'black',
                border: '1px solid black',
              },
            }}
          />
          <Header />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
