import { Header } from '@/components/nav'
import { Footer } from '@/components/nav/footer'
import { auth } from 'auth'

export default async function Template({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  return (
    <>
      <Header />
      <section className="pt-28">
        <div className="container mx-auto max-w-[800px] rounded-[20px] border border-[#0E464F] bg-[#041E23] px-4 py-12 md:p-[12px] lg:rounded-[40px] lg:p-[48px]">
          {children}
        </div>
      </section>
      {!session?.user && <Footer />}
    </>
  )
}
