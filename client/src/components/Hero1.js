import React from 'react'

export default function Hero1({children,hero}) {
    return (
        <header className={hero1}>
            {children}
        </header>
    )
}

Hero1.defaultProps={
    hero1:"defaultHero"
};