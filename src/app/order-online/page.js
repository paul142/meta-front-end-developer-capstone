//import styles from './page.module.css'

import PageHeader from "@/components/Header/PageHeader";
import Specials from "@/components/Specials";

export const metadata = {
  title: 'Little Lemon Menu page',
  description: 'Meta Front End Development Capstone Project',
  openGraph: {
    title: 'Little Lemon Menu page',
    description: 'Meta Front End Development Capstone Project',
    type: 'website',
    site_name: 'Meta Front End Development Capstone Project',
  },
}

export default function Home() {
  return (
    <>
      <PageHeader title={'Menu'}/>
      <main className={''}>
        <div className={'wrapper'}>
          <Specials/>
        </div>
      </main>
    </>
  )
}
