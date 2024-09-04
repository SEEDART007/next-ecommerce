import SubmitBtn from '@/components/SubmitBtn'
import { prisma } from '@/lib/db/prisma'
import { redirect } from 'next/navigation'
import { title } from 'process'
import React from 'react'
export const metadata={
    title:'Add Product- FastKart',
}
async function addProduct(formData:FormData) {
    "use server"
    const name = formData.get('name')?.toString();
    const description = formData.get('description')?.toString();
    const imageUrl = formData.get('image')?.toString();
    const price = Number(formData.get('price') || 0);
    if(!name || !description || !imageUrl || !price) {
        throw new Error('All fields are required')
    }
    await prisma.product.create({
        data:{
name,description,imageUrl,price
        }
    })
    redirect('/')
    
}
function add() {
  return (
    <div>
        <h1 className='mb-3 text-lg font-bold'>addproducts</h1>
        <form action={addProduct}>
        <input name="name" type='text' className='input-bordered input mb-3 w-full' required  placeholder='Product Name' />
        <textarea name='description' className='textarea-bordered textarea mb-3 w-full' required  placeholder='Product Description' />
        <input type='url' name='image' className='input-bordered input mb-3 w-full' required  placeholder='Image URL' />
        <input name='price' type='number' className='input-bordered input mb-3 w-full' required  placeholder='Price' />
        <SubmitBtn  type='submit'>Add Product</SubmitBtn>
        </form>
    </div>
  )
}

export default add