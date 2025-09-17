'use client'
import { Lang } from '@/common/types';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LogoPng from "@/layout/logo.png";

interface HeaderProps {
  lang: Lang
}

type MenuItems = {
  title: string
  href: string
  active: (lang: Lang, pathname: string) => boolean
}

const MENU_ITEMS: Record<Lang, MenuItems[]> = {
  tr: [
    {
      title: 'Anasayfa',
      href: '/anasayfa',
      active: (lang: Lang, pathname: string) => pathname.startsWith(`/${lang}/anasayfa`)
    },
    {
      title: 'Editör Seçkisi',
      href: '/editor-seckisi',
      active: (lang: Lang, pathname: string) => pathname.startsWith(`/${lang}/editor-seckisi`)
    },
    {
      title: 'Hikayeler',
      href: '/hikayeler',
      active: (lang: Lang, pathname: string) => pathname.startsWith(`/${lang}/hikaye`)
    },
    {
      title: 'Katılımcı Dernekler',
      href: '/katilimci-dernekler',
      active: (lang: Lang, pathname: string) => pathname.startsWith(`/${lang}/katilimci-dernekler`)
    },
    {
      title: 'Editörler',
      href: '/editorler',
      active: (lang: Lang, pathname: string) => pathname.startsWith(`/${lang}/editorler`)
    },
    {
      title: 'Proje Hakkında',
      href: '/proje-hakkinda',
      active: (lang: Lang, pathname: string) => pathname.startsWith(`/${lang}/proje-hakkinda`)
    },
    {
      title: 'İletişim',
      href: '/iletisim',
      active: (lang: Lang, pathname: string) => pathname.startsWith(`/${lang}/iletisim`)
    }
  ],
  en: [
    {
      title: 'Homepage',
      href: '/homepage',
      active: (lang: Lang, pathname: string) => pathname.startsWith(`/${lang}/homepage`)
    },
    {
      title: 'Editor Selection',
      href: '/editorselection',
      active: (lang: Lang, pathname: string) => pathname.startsWith(`/${lang}/editorselection`)
    },
    {
      title: 'Stories',
      href: '/stories',
      active: (lang: Lang, pathname: string) => pathname.startsWith(`/${lang}/stories`)
    },
    {
      title: 'Participant Associations',
      href: '/participant-associations',
      active: (lang: Lang, pathname: string) => pathname.startsWith(`/${lang}/participant-associations`)
    },
    {
      title: 'Editors',
      href: '/editors',
      active: (lang: Lang, pathname: string) => pathname == `/${lang}/editors`
    },
    {
      title: 'About Project',
      href: '/about-project',
      active: (lang: Lang, pathname: string) => pathname.startsWith(`/${lang}/about-project`)
    },
    {
      title: 'Contact',
      href: '/contact',
      active: (lang: Lang, pathname: string) => pathname.startsWith(`/${lang}/contact`)
    }
  ]
}





export default function Header({ lang }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

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
                <Link href={'/'} className='flex'>
                  <Image src={LogoPng} alt="MGHSF Logo" className="h-12 w-auto" />
                </Link>
              </div>
              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {MENU_ITEMS[lang].map(item => (
                    <MenuLink
                      key={item.href}
                      href={`/${lang}${item.href}`}
                      title={item.title}
                      active={item.active(lang, pathname)} />
                  ))}
                  <LangComp lang={lang} />
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
            {MENU_ITEMS[lang].map(item => (
              <MobileMenuLink
                key={item.href}
                href={`/${lang}${item.href}`}
                title={item.title}
                active={item.active(lang, pathname)}
                onClick={() => setIsOpen(false)} />
            ))}
            <LangComp lang={lang} />
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
}

function MobileMenuLink({ title, href, active, onClick }: MenuLinkProps) {
  return (
    // "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white
    <Link href={href} onNavigate={onClick} className={`${active ? 'bg-gray-900 text-white' : 'hover:bg-white/5 text-gray-300 hover:text-white'} block rounded-md px-3 py-2 text-base font-medium whitespace-nowrap`}>{title}</Link>
  )
}

function LangComp({ lang }: { lang: Lang }) {
  return (
    <Link className="px-3 py-1 flex items-center md:hover:scale-110 transition-transform" href={`/${lang == 'tr' ? 'en' : 'tr'}/${lang == 'tr' ? 'homepage' : 'anasayfa'}`}>
      {lang == 'en' && (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 64 64">
          <circle cx={32} cy={32} r={30} fill="#ed4c5c"></circle>
          <g fill="#fff">
            <path d="m41.3 39l.1-5.4L36 32l5.4-1.6l-.1-5.4l3.3 4.3l5.4-1.6l-3.3 4.3l3.3 4.3l-5.4-1.6z"></path>
            <path d="M33.2 44c-6.6 0-11.9-5.4-11.9-12s5.3-12 11.9-12c2.5 0 4.8.8 6.8 2.1C37.3 19 33.3 17 28.8 17C20.6 17 14 23.7 14 32s6.6 15 14.8 15c4.5 0 8.5-2 11.2-5.1c-1.9 1.3-4.2 2.1-6.8 2.1"></path>
          </g>
        </svg>
      )}
      {lang == 'tr' && (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 64 64">
          <path fill="#2a5f9e" d="M22 60.3V46.5l-10.3 7.6c2.9 2.7 6.4 4.8 10.3 6.2m20 0c3.9-1.4 7.4-3.5 10.3-6.2L42 46.4zM3.7 42c.3 1 .7 1.9 1.2 2.9L8.8 42zm51.5 0l3.9 2.9c.4-.9.8-1.9 1.2-2.9z"></path>
          <path fill="#fff" d="M23.5 38H2.6c.3 1.4.7 2.7 1.1 4h5.1l-3.9 2.9c.8 1.7 1.7 3.2 2.8 4.7L18 42h4v2l-11.7 8.6l1.4 1.4L22 46.5v13.8c1.3.5 2.6.8 4 1.1V38zm37.9 0H38v23.4c1.4-.3 2.7-.7 4-1.1V46.5L52.3 54c1.4-1.3 2.6-2.7 3.8-4.2L45.4 42h6.8l6.1 4.5c.3-.5.6-1.1.8-1.6L55.2 42h5.1c.4-1.3.8-2.6 1.1-4"></path>
          <path fill="#ed4c5c" d="M7.7 49.6c.8 1.1 1.6 2.1 2.5 3.1L22 44.1v-2h-4zM45.5 42l10.7 7.8c.4-.5.7-1 1.1-1.5c.1-.1.1-.2.2-.2c.3-.5.7-1.1 1-1.6L52.2 42z"></path>
          <path fill="#2a5f9e" d="M42 3.7v13.8l10.3-7.6C49.4 7.2 45.9 5.1 42 3.7m-20 0c-3.9 1.4-7.4 3.5-10.3 6.2L22 17.6zM60.3 22c-.3-1-.7-1.9-1.2-2.9L55.2 22zM8.8 22l-3.9-2.9c-.4 1-.8 1.9-1.2 2.9z"></path>
          <path fill="#fff" d="M40.5 26h20.8c-.3-1.4-.7-2.7-1.1-4h-5.1l3.9-2.9c-.8-1.7-1.7-3.2-2.8-4.7L46 22h-4v-2l11.7-8.6l-1.4-1.4L42 17.5V3.7c-1.3-.5-2.6-.8-4-1.1V26zM2.6 26H26V2.6c-1.4.3-2.7.7-4 1.1v13.8L11.7 10c-1.4 1.3-2.6 2.7-3.8 4.2L18.6 22h-6.8l-6.1-4.5c-.3.5-.6 1.1-.8 1.6L8.8 22H3.7c-.4 1.3-.8 2.6-1.1 4"></path>
          <g fill="#ed4c5c">
            <path d="M56.3 14.4c-.8-1.1-1.6-2.1-2.5-3.1L42 19.9v2h4zM18.5 22L7.9 14.2c-.4.5-.7 1-1.1 1.5c-.1.1-.1.2-.2.2c-.3.5-.7 1.1-1 1.6l6.1 4.5z"></path>
            <path d="M61.4 26H38V2.6Q35.15 2 32 2c-3.15 0-4.1.2-6 .6V26H2.6Q2 28.85 2 32c0 3.15.2 4.1.6 6H26v23.4q2.85.6 6 .6c3.15 0 4.1-.2 6-.6V38h23.4q.6-2.85.6-6c0-3.15-.2-4.1-.6-6"></path>
          </g>
        </svg>
      )}
    </Link>
  )
}