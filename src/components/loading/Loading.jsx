'use client';
import React from 'react'
import { Spinner } from 'flowbite-react';

const Loading = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="text-center">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
  </div>
  )
}

export default Loading