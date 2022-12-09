import React from 'react'
import classes from './content.module.css'
import { toDataURL } from 'qrcode'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import html2canvas from 'html2canvas'

export default function Content(props) {
  const { data } = props
  const [qrBase64, setQrBase64] = useState('')
  const ref = useRef(null)

  const createQR = (content, options?) => {
    return new Promise((resolve, reject) => {
      toDataURL(content, options).then((url) => resolve(url))
    })
  }

  const init = async () => {
    if (data.isImg) {
      setQrBase64(data.content as string)
    } else {
      const base64 = await createQR(data.content)
      setQrBase64(base64 as string)
    }
  }

  // const createCanvas = () => {
  //   return new Promise((resolve, reject) => {
  //     html2canvas(ref.current).then((canvans) => {
  //       const base64 = canvans.toDataURL('img/png')
  //       resolve(base64)
  //     })
  //   })
  // }

  // const loadImg = async () => {
  //   const QrImg = await createCanvas()
  // console.log(QrImg)
  // setBase64([...zipBase64, QrImg])
  // }

  useEffect(() => {
    data && init()
  }, [data])

  return (
    <div className={classes.main} ref={ref}>
      <img
        src={qrBase64}
        alt="二维码图片"
        className={classes.img}
        title="二维码"
        // onLoad={loadImg}
      />
      {props.children}
    </div>
  )
}
