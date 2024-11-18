"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'

function Page() {
  const router = useRouter()

  const navigateToBlog = () => {
    router.push("/Routing/1/2")  
  }

  const userDataa = useSelector((state: any) => state.users);
  console.log(userDataa,"userDataa")

  return (
    <>
      <div> hiiii.. 1</div>
      <button className="border-4 border-black m-5 rounded-lg"  onClick={navigateToBlog}>Go to Blog-2</button>
    </>
  )
}

export default Page
