'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

interface HeaderProps {

}

export default function Header({ }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname()
  const router = useRouter()
  console.log('pathname: ', pathname)

  return (
    // <nav className="relative bg-gray-800 font-sans dark:bg-amber-400">
    <div className='h-16'>
      <nav className="bg-white font-sans  fixed w-full z-50 shadow-2xs">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between max-w-screen-2xl mx-auto">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className={`size-6 ${isOpen ? 'hidden' : 'block'}`}>
                  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className={`size-6 ${isOpen ? 'block' : 'hidden'}`}>
                  <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-between">
              <div className="flex shrink-0 items-center">
                <img src="https://mgh.tfsf.org.tr/img/logo.png" alt="MGHSF Logo" className="h-12 w-auto" />
                {/* <img src="/logo2.png" alt="MGHSF Logo" className="h-12 w-auto" /> */}
              </div>
              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" --> */}
                  {/* <a href="#" aria-current="page" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Anasayfa</a> */}
                  <MenuLink
                    href='/'
                    title="Anasayfa"
                    active={pathname == '/'} />
                  <MenuLink
                    href='/editor-seckisi'
                    title="Editör Seçkisi"
                    active={pathname.startsWith('/editor-seckisi')} />
                  <MenuLink
                    href='/hikayeler'
                    title="Hikayeler"
                    active={pathname.startsWith('/hikaye')} />
                  <MenuLink
                    href='/katilimci-dernekler'
                    title="Katılımcı Dernekler"
                    active={pathname.startsWith('/katilimci-dernekler')} />
                  <MenuLink
                    href='/editorler'
                    title="Editörler"
                    active={pathname.startsWith('/editorler')} />
                  <MenuLink
                    href='/proje-hakkinda'
                    title="Proje Hakkında"
                    active={pathname.startsWith('/proje-hakkinda')} />
                  <MenuLink
                    href=''
                    title="İletişim" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`fixed inset-0 z-50 bg-gray-800 sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex justify-end p-4">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close main menu</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
                <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="space-y-1 px-2 pt-2 pb-3">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" --> */}
            {/* <a href="#" aria-current="page" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" onClick={() => setIsOpen(false)}>Dashboard</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white" onClick={() => setIsOpen(false)}>Team</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white" onClick={() => setIsOpen(false)}>Calendar</a> */}

            <MobileMenuLink
              href='/'
              title="Anasayfa"
              active={pathname == '/'}
              onClick={() => setIsOpen(false)} />
            <MobileMenuLink
              href='/editor-seckisi'
              title="Editör Seçkisi"
              active={pathname.startsWith('/editor-seckisi')}
              onClick={() => setIsOpen(false)} />
            <MobileMenuLink
              href='/hikayeler'
              title="Hikayeler"
              active={pathname.startsWith('/hikaye')}
              onClick={() => setIsOpen(false)} />
            <MobileMenuLink
              href='/katilimci-dernekler'
              title="Katılımcı Dernekler"
              active={pathname.startsWith('/katilimci-dernekler')}
              onClick={() => setIsOpen(false)} />
            <MobileMenuLink
              href='/editorler'
              title="Editörler"
              active={pathname.startsWith('/editorler')}
              onClick={() => setIsOpen(false)} />
            <MobileMenuLink
              href='/proje-hakkinda'
              title="Proje Hakkında"
              active={pathname.startsWith('/proje-hakkinda')}
              onClick={() => setIsOpen(false)} />
            <MobileMenuLink
              href=''
              title="İletişim"
              onClick={() => setIsOpen(false)} />

          </div>
        </div>
      </nav>
    </div>
  )
}

type MenuLinkProps = {
  title: string
  href: string
  active?: boolean
  onClick?: () => void
}

function MenuLink({ title, href, active }: MenuLinkProps) {
  return (
    <Link href={href} className={`${active ? 'bg-gray-900 text-white' : 'hover:bg-black/5 text-gray-600 hover:text-gray-800'} rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap`}>{title}</Link>
  )


} function MobileMenuLink({ title, href, active, onClick }: MenuLinkProps) {
  return (
    // "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white
    <Link href={href} onNavigate={onClick} className={`${active ? 'bg-gray-900 text-white' : 'hover:bg-white/5 text-gray-300 hover:text-white'} block rounded-md px-3 py-2 text-base font-medium whitespace-nowrap`}>{title}</Link>
  )
}