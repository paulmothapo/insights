import AlertBanner from 'components/AlertBanner'
import { Analytics } from '@vercel/analytics/react';

export default function BlogLayout({
  preview,
  loading,
  children,
}: {
  preview: boolean
  loading?: boolean
  children: React.ReactNode
}) {
  return (
    <>
      <div className=" min-h-screen">
        <AlertBanner preview={preview} loading={loading} />
        <Analytics />
        <main>{children}</main>
      </div>
    </>
  )
}
