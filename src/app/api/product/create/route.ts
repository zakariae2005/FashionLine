import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'


export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, description, price, image, images, category, type } = body

    if (!name || !price || !category || !type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        image,
        images,
        category,
        type,
      },
    })

    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 })
  }
}
