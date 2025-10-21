import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

interface Params {
  params: Promise<{ id: string }>
}

export async function GET(req: Request, { params }: Params) {
  try {
    const { id } = await params
    const product = await prisma.product.findUnique({
      where: { id },
    })

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 })
  }
}

export async function PUT(req: Request, { params }: Params) {
  try {
    const { id } = await params
    const body = await req.json()
    const { name, description, price, image, images, category, type } = body

    const product = await prisma.product.update({
      where: { id },
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

    return NextResponse.json(product)
  } catch (error) {
    console.error('Error updating product:', error)
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 })
  }
}