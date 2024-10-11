import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const user = [
    {
        username: 'reinoso30',
        name: 'Daniel Reinoso',
        isfollowing: true
    },
    {
        username: 'barro30',
        name: 'Alejandro Barro',
        isfollowing: false
    },
    {
        username: 'dailin92',
        name: 'Dailin Reinoso',
        isfollowing: true
    }
]

export function App() {
    
return (
    <section className='App'>
   {
    user.map(({username, name, isfollowing})=>(
        <TwitterFollowCard
        username={username}
        initialIsFollowing={isfollowing}
        key={username}
        >
            {name}
        </TwitterFollowCard>
    )
)
   }
    
    </section>
)
}