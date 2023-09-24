import { TrpcProvider } from "~/modules/Shared/components/trpc-provider"

import "../styles/globals.css"

export const metadata = {
  title: "Pet card",
  description: "Hello from Petcard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TrpcProvider>
      <html lang="en">
        <head></head>
        <body>{children}</body>
      </html>
    </TrpcProvider>
  )
}
