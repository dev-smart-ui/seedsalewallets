import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import mainBg from '/public/main.jpeg';
import { config } from '@/config';
import { cookieToInitialState } from 'wagmi';
import { headers } from 'next/headers';
import { WalletProvider } from "@/components/providers/WalletProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Seedsalewallets",
};

export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))

  const mainClassNames = `
    w-full max-w-[84%] sm:max-w-[var(--main-width)] min-h-[394px] bg-[var(--main-bg)] 
    relative z-10 rounded-[32px] p-4 mx-auto shadow-lg shadow-[var(--main-shadow)] 
    -translate-y-[17%] sm:-translate-y-2/4 text-center flex flex-col justify-center
  `;

  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletProvider initialState={initialState}>        
          <>
            <div>
              <Image className="object-cover object-top w-full h-[330px] sm:h-[693px] rounded-b-2xl sm:rounded-b-[44px]" src={mainBg} height="693" />
            </div>
            <main className={mainClassNames}>
              {children}
            </main>
          </>
        </WalletProvider>
      </body>
    </html>
  );
}
