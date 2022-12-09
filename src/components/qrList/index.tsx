import React, { Fragment, useState } from 'react'
import Content from '../../components/content/content.tsx'
import { uniqueId, isEmpty } from 'lodash'
import { Col, Row } from 'antd'

export default function QrList(props) {
  const { data } = props

  return (
    <Fragment>
      <Row gutter={24}>
        {!isEmpty(data) &&
          data.map((item) => {
            return (
              <Col className="gutter-row" span={6} key={uniqueId('qr_')}>
                <Content data={item}>{item.description}</Content>
              </Col>
            )
          })}
      </Row>
    </Fragment>
  )
}
