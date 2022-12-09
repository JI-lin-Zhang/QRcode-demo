import React, { useState } from 'react'
import classes from './index.module.css'
import { Button, Modal, Input } from 'antd'

export default function UpTextOrUrl(props) {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [inputValue, setInputValue] = useState(false)
  const showModal = () => {
    setIsUploadModalOpen(true)
  }

  const handleCancel = () => {
    setIsUploadModalOpen(false)
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
          setIsUploadModalOpen(false)
        }}
        onCancel={handleCancel}
      >
        <Input value={inputValue} />
      </Modal>
    </div>
  )
}
