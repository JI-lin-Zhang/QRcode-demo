import React, { useState } from 'react'
import classes from './index.module.css'
import { Button, Modal, Input } from 'antd'

export default function UpTextOrUrl(props) {
  const { handleUpload } = props
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const showModal = () => {
    setIsUploadModalOpen(true)
  }

  const handleCancel = () => {
    setIsUploadModalOpen(false)
    setInputValue('')
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <div className={classes.Button}>
      <Button type="primary" onClick={showModal}>
        upload text or url
      </Button>
      <Modal
        title="upload text or url"
        open={isUploadModalOpen}
        onOk={() => {
          handleUpload(inputValue)
          setIsUploadModalOpen(false)
          setInputValue('')
        }}
        onCancel={handleCancel}
      >
        <Input onChange={handleChange} value={inputValue} />
      </Modal>
    </div>
  )
}
