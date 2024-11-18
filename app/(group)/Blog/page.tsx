"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux';

function page() {
  const userDataa = useSelector((state: any) => state.users);
  console.log(userDataa,"userDataa")

  const router = useRouter()
  const navigateToBlog = () => {  
    router.push("/Blog-2")  
  }
  return (
    <>
    <div> hiiii.. Blog</div>
    <button  className="border-4 border-black m-5 rounded-lg" onClick={navigateToBlog}>Go to next</button>

  </>
)
}

export default page
