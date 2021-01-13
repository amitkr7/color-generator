import React, { useEffect, useState } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)

  let bgr = rgb.join(',')
  let hex = rgbToHex(...rgb)
  let hexValue = `#${hexColor}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [alert])
  return (
    <article
      className={`color ${index > 9 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bgr})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>Copied to Clipboard</p>}
    </article>
  )
}

export default SingleColor
