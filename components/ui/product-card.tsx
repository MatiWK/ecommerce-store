"use client"

import { Product } from '@/types'
import Image from 'next/image'
import React, { MouseEventHandler } from 'react'
import IconButton from '@/components/ui/icon-button'
import { Expand, ShoppingCart } from 'lucide-react'
import Currency from './currency'
import { useRouter } from 'next/navigation'
import { usePreviewModal } from '@/hooks/use-preview-modal'
import { useCart } from '@/hooks/use-cart'

interface Productcard {
    data: Product
}

const ProductCard: React.FC<Productcard> = ({
    data
}) => {
  const cart = useCart();
  const previewModal = usePreviewModal();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`)
  }

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    
    previewModal.onOpen(data)
  }

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    
    cart.addItem(data)
  }

  return (
    <div 
    className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'
    onClick={handleClick}
    >
      {/* images and actions */}
      <div className='aspect-square rounded-xl bg-gray-100 relative'>
        <Image 
            alt="Image"
            src={data?.images?.[0]?.url}
            fill
            className='aspect-square object-cover rounded-md'
        />
        <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
            <div className='flex gap-x-6 justify-center'>
                <IconButton 
                onClick={onPreview}
                icon={<Expand size={20} className='text-gray-600' />}
                />
                <IconButton 
                onClick={onAddToCart}
                icon={<ShoppingCart size={20} className='text-gray-600' />}
                />
            </div>
        </div>
      </div>
      {/* Descriptin */}
      <div>
        <p className='font-semibold text-lg'>
          {data.name}
        </p>
        <p className='text-sm text-gray-500'>
          {data.category?.name}
          </p>
      </div>
      {/* Price */}
      <div className='flex items-center justify-between'>
        <Currency value={data?.price} />
      </div>
    </div>
  )
}

export default ProductCard
