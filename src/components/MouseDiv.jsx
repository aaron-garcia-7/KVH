import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function MouseDiv({cardHover, cardHoverLast}) {
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);

    const locateMouse = e => {
        setPosX(e.clientX - window.innerWidth / 2);
        setPosY(e.clientY - window.innerHeight / 2);
    }

    useEffect(() => {
        window.addEventListener('mousemove', locateMouse);

        return () => window.removeEventListener('mousemove', locateMouse);
    }, [])

  const mouseStyle = {
    position: 'fixed',
    top: 'calc(50% - calc(4rem + 2vw) / 2)',
    left: 'calc(50% - calc(4rem + 2vw) / 2)',
    translate: `${posX}px ${posY}px`,
    opacity: cardHover ? '1' : '0',
    scale: cardHover ? '1' : '0',
  }

  return (
    <ScMouseDiv style={mouseStyle}>
        <p>{cardHoverLast ? "See Work" : "View Case"}</p>
    </ScMouseDiv>
  )
}

const ScMouseDiv = styled('div')`
    background: var(--light);
    width: calc(4rem + 2vw);
    height: calc(4rem + 2vw);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    /* transition: 0.8s cubic-bezier(.21,.89,.57,.99), opacity 0.3s; */
    transition: 1s cubic-bezier(.15,1.1,.54,1.08), opacity 0.3s;
    p {
        color: var(--red);
        text-transform: uppercase;
        font-size: calc(0.4rem + 0.4vw);
        letter-spacing: 0.08rem;
    }

`

export default MouseDiv