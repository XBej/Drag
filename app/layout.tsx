import "@/styles/globals.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>DragX</title>
      </head>
      <body className={`${inter.className} bg-gray-100`}>
          {children}
      </body>
    </html>
  )
}



import './globals.css'