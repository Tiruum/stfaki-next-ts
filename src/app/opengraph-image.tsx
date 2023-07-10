import { ImageResponse } from 'next/server'
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'Студенческие сервисы ФАКТ'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div style={{background: "#294eff"}} tw='w-full h-full bg-gray-50 text-5xl flex justify-center items-center'>
        <DasrIcon />
        <h1 tw='h1 text-white'>Студенческие сервисы ФАКТ</h1>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size
    }
  )
}

function DasrIcon() {
    return (
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 419.5 419.5">
        <g fill="#ffffff">
            <path fillRule='evenodd' d="M205.3,78.1c8-4.8,10.5-15.1,5.7-23.1c-4.8-8-15.1-10.5-23.1-5.7c-8,4.8-10.5,15.1-5.7,23.1
                S197.4,82.9,205.3,78.1z"/>
            <path fillRule='evenodd' d="M159.2,85.2c5.6-3.4,7.4-10.7,4.1-16.3c-3.4-5.6-10.7-7.4-16.3-4.1c-5.6,3.4-7.4,10.7-4.1,16.3
                C146.3,86.7,153.6,88.6,159.2,85.2z"/>
            <path fillRule='evenodd' d="M268.9,77.9c11.5-6.9,15.2-21.8,8.3-33.3c-6.9-11.5-21.8-15.2-33.3-8.3c-11.5,6.9-15.2,21.8-8.3,33.3
                C242.6,81.1,257.5,84.8,268.9,77.9z"/>
            <path fillRule='evenodd' d="M157.2,231.6l11.6-15.2c-43.9-18.4-81.9-39.5-88-63.1c-2.7-10.4,1.1-21.3,11.6-33.4
                c8.6-9.9,21.1-18.7,37.1-26.2l-7.4-16.9c-17.5,8.1-32.7,18.3-43.7,31c-14.5,16.8-19.8,33.6-15.5,50
                C70.7,188.3,109.4,211.3,157.2,231.6z"/>
            <path fillRule='evenodd' d="M292.9,418.5L363.8,0L34,419.1l0.4,0C81.7,366,159,345.6,228.8,373.7C254.1,383.9,275.7,399.5,292.9,418.5z
                M229.9,301.5c-23-9.3-34.1-35.4-24.8-58.4c9.3-23,35.4-34.1,58.4-24.8c23,9.3,34.1,35.4,24.8,58.4
                C279,299.6,252.9,310.7,229.9,301.5z"/>
            <path fillRule='evenodd' d="M370.6,313.9c-9.7-11.2-23-20.1-38.4-27.3l-2.8,16.8c12.3,6.2,22,13.3,28.9,21.2c9.3,10.7,12.6,20.3,10.3,29.5
                c-4.3,16.8-26.8,32-55.6,45.9l-3.3,19.6c38.2-17.1,68.2-36.4,74.7-61.4C388.1,343.6,383.4,328.7,370.6,313.9z"/>
        </g>
        </svg>
    )
}