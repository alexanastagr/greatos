import React from 'react'
import Draggable from 'react-draggable'
function ClockWidget() {
  return (
   <Draggable>
    <div className="clockWidget">
        <div className="close"></div>
    </div>
   </Draggable>
  )
}

export default ClockWidget