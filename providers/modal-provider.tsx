"use client"

import PreviewModal from '@/components/preview-modal'
import React, { useEffect, useState } from 'react'

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null;
    }

  return (
    <div>
      <PreviewModal />
    </div>
  )
}

export default ModalProvider
