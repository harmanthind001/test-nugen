"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
  const router = useRouter()
  const navigateToBlog = () => {
    router.push("/Routing/1/2")  
  }

  return (
    <>
    <div> hiiii.. 4</div>
    <button className="border-4 border-black m-5 rounded-lg"  onClick={navigateToBlog}>Go to next</button>

  </>
)
}

export default page
