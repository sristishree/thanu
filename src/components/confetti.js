import React, { useRef, useState, useEffect } from 'react'
import ConfettiExplosion from 'confetti-explosion-react'

export default (props) => {
    return (
        <ConfettiExplosion
            particleCount={100}
            height={1000}
            width={1600}
            force={1}
            duration={4000}
        />
    )
}