import { useState } from "react"

export function TwitterFollowCard ({ children, username, initialIsFollowing} ){
    
    const [isFollowing, setIsFollowing]= useState(initialIsFollowing)
    
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir' 
    const buttonClassName = isFollowing
    ? 'twitter-followCard-button isFollowing'
    : 'twitter-followCard-button'
    
    const handleClick= () => {
        setIsFollowing(!isFollowing)
    }
    
    return (
    <article className='twitter-followCard'>
    <header className='twitter-followCard-header'>
        <img className='twitter-followCard-img'
        alt="El avatar de Daniel" src={'https://unavatar.io/github/37t?fallback=https://avatars.githubusercontent.com/u/66378906?v=4/${username}'}/>
        <div className='twitter-followCard-info'>
            <strong>{children}</strong>
            <span className='twitter-followCard-infoUsareName'>
                @{username}
            </span>
           
        </div>
    
    </header>
    <aside>
        <button className= {buttonClassName} onClick={handleClick}>
            {text}
        </button>
    </aside>
</article>
    )
}