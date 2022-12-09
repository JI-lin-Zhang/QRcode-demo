import React, { useState } from 'react'
import { Button, Modal, Upload, Input } from 'antd'
import classes from './index.module.css'
import { PlusOutlined } from '@ant-design/icons'
import type { UploadProps, RcFile } from 'antd/es/upload'
import type { UploadFile } from 'antd/es/upload/interface'

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

const { TextArea } = Input

export default function UploadModal(props) {
  const { handleUpload } = props
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [uploadImg, setUploadImg] = useState<UploadFile[]>([])
  const [text, setText] = useState('')
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')

  const handleImgListChange: UploadProps['onChange'] = ({
    fileList: newFileList,
  }) => {
    setUploadImg(newFileList)
  }

  const showModal = () => {
    setIsUploadModalOpen(true)
  }

  const handlePreview = async (file: UploadFile) => {
    console.log(file)
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile)
    }
    console.log(file)

    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1),
    )
  }

  const handleCancel = () => {
    setIsUploadModalOpen(false)
  }

  const handlePreviewCancel = () => {
    setPreviewOpen(false)
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  const handleTextAreaChange = (e) => {
    const value = e.target.value
    setText(value)
  }

  return (
    <div className={classes.Button}>
      <Button type="primary" onClick={showModal}>
        upload image
      </Button>
      <Modal
        title="upload image"
        open={isUploadModalOpen}
        onOk={() => {
          handleUpload(text, uploadImg[0].thumbUrl)
          setIsUploadModalOpen(false)
        }}
        onCancel={handleCancel}
      >
        <Upload
          action="null"
          listType="picture-card"
          fileList={uploadImg}
          onChange={handleImgListChange}
          onPreview={handlePreview}
        >
          {uploadImg.length >= 1 ? null : uploadButton}
        </Upload>
        <Modal
          open={previewOpen}
          title={previewTitle}
          footer={null}
          onCancel={handlePreviewCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
        <TextArea
          rows={4}
          placeholder="文字部分"
          onChange={handleTextAreaChange}
        />
      </Modal>
    </div>
  )
}
