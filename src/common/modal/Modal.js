import React from 'react'
import ReactDom from 'react-dom'
import BasicTabs from '../forms/Forms'
// import Icon from '@mui/material/Icon'
// import Box from '@mui/material/Box'

import HighlightOffIcon from '@mui/icons-material/HighlightOff'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <div>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>Close Modal</button>
        <HighlightOffIcon />
        
        <BasicTabs />
      </div>
    </div>,
    document.getElementById('portal')
  )
}
