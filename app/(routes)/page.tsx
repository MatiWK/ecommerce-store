import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true});
  const billboard = await getBillboard("ba2c0718-228e-4b8a-a92d-1b2165ed5c46");

  return (
    <div>
      <Container>
        <div className='space-y-10 pb-10'>
          <Billboard data={billboard} />
          <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
            <ProductList title="Featured Products" items={products}/>

          </div>
        </div>
      </Container>
    </div>
  )
}

export default HomePage