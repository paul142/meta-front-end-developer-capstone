//import styles from './page.module.css'

import PageHeader from "@/components/Header/PageHeader";

export const metadata = {
  title: 'About Little Lemon',
  description: 'About Little Lemon',
  openGraph: {
    title: 'About Little Lemon',
    description: 'About Little Lemon...',
    type: 'website',
    site_name: 'Little Lemon',
  },
}

export default function Home() {
  return (
    <>
      <PageHeader title={'About'}/>
      <main className={''}>
        <div className={'wrapper'}>
          About
        </div>
      </main>
    </>
  )
}
