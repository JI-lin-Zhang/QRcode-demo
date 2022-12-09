import React, { useState } from 'react'
import QrList from '../../components/qrList/index.tsx'
import UpLoadModal from '../../components/uploadModal/index.tsx'
import UpTextOrUrl from '../../components/upTextOrUrl/index.tsx'
interface QRList {
  content: string
  description: string
  isImg?: boolean
}

export default function CreateQRcodeImg() {
  const [qRcodeList, setQRcodeList] = useState<QRList[]>([])

  const onUpload = (text, img) => {
    setQRcodeList([
      ...qRcodeList,
      {
        content: img,
        description: text,
        isImg: !!img,
      },
    ])
  }

  return (
    <div>
      <QrList data={qRcodeList} />
      <div style={{ display: 'flex' }}>
        <UpLoadModal handleUpload={onUpload} />
        <UpTextOrUrl />
      </div>
    </div>
  )
}
