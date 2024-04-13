"use client"

import React from 'react'
import { GridLoader } from "react-spinners"
import ErrorMessage from '@/components/ErrorMessage'
const error = () => {
  return (
    <div>
      <ErrorMessage/>
    </div>
  )
}

export default error