import React from 'react'
import classes from "./HomeBtn.module.css"
import { Button } from 'react-bootstrap'

const HomeBtn = () => {
  return (
    <div className={classes.container}>
       <button className={classes.head}>Get our Latest Album</button>
        <button className={classes.playButton}><span>►</span></button>
    </div>
  )
}

export default HomeBtn
