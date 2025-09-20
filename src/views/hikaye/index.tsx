'use client'
import { HikayeDetay } from "@/common/types"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Gallery from "./gallery"
import { FullScreen, FullScreenHandle, useFullScreenHandle } from "react-full-screen"

interface HikayeViewProps {
  hikaye: HikayeDetay
}

export default function HikayeView({ hikaye }: HikayeViewProps) {

  const [fullscreen, setFullscreen] = useState(false)
  const handle = useFullScreenHandle()

  function handleFullScreen() {
    console.log('handleFullScreen >>>>>>>>>>>>>>', handle)
    setFullscreen(true)
    requestAnimationFrame(() => {
      console.log('handleFullScreen 1. >>>>>>>>>>>>>>', handle)
      // document.body.classList.add('fullscreen', 'overflow-hidden')
      requestAnimationFrame(() => {
        console.log('handleFullScreen 2. >>>>>>>>>>>>>>', handle)
        // galleryRef.current?.requestFullscreen()
        handle.enter()
      })
    })
  }

  function handleExitFullScreen() {
    console.log('handleExitFullScreen >>>>>>>>>>>>>>')
    setFullscreen(false)
    // document.body.classList.remove('fullscreen', 'overflow-hidden')
    if (document.fullscreenElement) {
      // document.exitFullscreen()
      handle.exit()
    }
  }

  function reportChange(state: boolean, handle: FullScreenHandle) {
    console.log('reportChange >>>>>>>>>>>>>>', state, handle)
    setFullscreen(state)
    // if (!state) {
    //   document.body.classList.remove('fullscreen', 'overflow-hidden')
    // }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="relative text-gray-800">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text">
                {hikaye.adi}
              </h1>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="w-full flex justify-center mb-16 px-0 md:px-4">
          <div className="relative max-w-4xl w-full">
            <Image
              width={840}
              height={560}
              src={`/assets/tumhikayeler/${hikaye.galeri[0].big}`}
              alt={hikaye.adi}
              className="w-full h-auto object-cover sm:rounded-lg shadow-lg"
            />
            <div onClick={handleFullScreen} className="group absolute bottom-0 left-0 right-0 px-4 h-full rounded-lg cursor-pointer transition-colors text-gray-400 bg-black/0 hover:bg-black/40 /*bg-gradient-to-b from-black/0 to-black/80*/ flex items-center justify-center">
              {/* <button className="text-white" onClick={handleFullScreen}>Tam ekran</button> */}
              <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 24 24" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <path fill="currentColor" d="M5 19h2q.425 0 .713.288T8 20t-.288.713T7 21H4q-.425 0-.712-.288T3 20v-3q0-.425.288-.712T4 16t.713.288T5 17zm14 0v-2q0-.425.288-.712T20 16t.713.288T21 17v3q0 .425-.288.713T20 21h-3q-.425 0-.712-.288T16 20t.288-.712T17 19zM5 5v2q0 .425-.288.713T4 8t-.712-.288T3 7V4q0-.425.288-.712T4 3h3q.425 0 .713.288T8 4t-.288.713T7 5zm14 0h-2q-.425 0-.712-.288T16 4t.288-.712T17 3h3q.425 0 .713.288T21 4v3q0 .425-.288.713T20 8t-.712-.288T19 7z"></path>
              </svg>
              <span className="ml-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity">Full Screen</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto px-4 pb-8">
          <div className="[&>p]:pb-4 text-gray-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: hikaye.metin }} />
        </div>

        {/* Photographer Info */}
        {(hikaye.ozgecmisfoto || (hikaye.ozgecmis && hikaye.ozgecmis.length > 0)) && (
          <div className="max-w-4xl mx-auto px-4 pb-16">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fotoğrafçı</h2>
              <div className="flex items-start space-x-4">
                <div className="flex-1">
                  {hikaye.ozgecmis && hikaye.ozgecmis.length > 0 && (
                    <>
                      <h3 className="text-xl font-medium text-gray-900">{hikaye.ozgecmis[0].adi}</h3>
                      <p className="text-gray-600 mt-1 leading-relaxed" dangerouslySetInnerHTML={{ __html: hikaye.ozgecmis[0].metin }}/>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* {fullscreen && (
        <div ref={galleryRef}>
          <Gallery hikayeDetay={hikaye} onClose={handleExitFullScreen} />
        </div>
      )} */}

      <FullScreen
        onChange={reportChange}
        handle={handle}
        className={`transition-opacity ${fullscreen ? 'opacity-100' : 'hidden opacity-0 pointer-events-none'}`}
      >
        <div
          // ref={galleryRef}
          className="[&:fullscreen>div]:bg-amber-400"
        // className={`transition-opacity ${fullscreen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <Gallery hikayeDetay={hikaye} onClose={handleExitFullScreen} />
        </div>
      </FullScreen>
    </>
  )
}