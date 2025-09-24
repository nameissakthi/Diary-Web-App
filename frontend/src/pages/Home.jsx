import React from 'react'
import { SignedIn, UserButton } from '@clerk/clerk-react'

const Home = () => {
  return (
    <div>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  )
}

export default Home