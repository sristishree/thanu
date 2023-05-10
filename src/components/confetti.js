import React, { useRef, useState, useEffect } from 'react'
import ConfettiExplosion from 'confetti-explosion-react'

export default (props) => {
    return (
        <ConfettiExplosion
            particleCount={200}
            height={3000}
            width={800}
            force={1}
            duration={4000}
        />
    )
}