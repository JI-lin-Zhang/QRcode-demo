import React, { useState } from 'react'
import QrList from '../../components/qrList/index.tsx'
import UpLoadModal from '../../components/uploadModal/index.tsx'
import UpTextOrUrl from '../../components/upTextOrUrl/index.tsx'
import { isEmpty } from 'lodash'
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
        content: img || text,
        description: text,
        isImg: !!img,
      },
    ])
  }

  return (
    <div
      style={{
        width: '100%',
        border: '1px solid #ccc',
        textAlign: 'center',
      }}
    >
      <div style={{ lineHeight: '255px' }}>
        {isEmpty(qRcodeList) ? <h1>NO DATA</h1> : <QrList data={qRcodeList} />}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <UpLoadModal handleUpload={onUpload} />
        <UpTextOrUrl handleUpload={onUpload} />
      </div>
    </div>
  )
}
