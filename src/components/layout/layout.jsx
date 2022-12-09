import React from 'react'
import classes from './layout.module.css'

export default function Layout (props) {
  return (
    <div className={classes.main}>
      {props.children}
    </div>
  )
}
