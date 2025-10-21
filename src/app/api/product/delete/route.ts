import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'


export async function DELETE(req: Request) {
  try {
    const body = await req.json()
    const { id } = await body

    if (!id) {
      return NextResponse.json({ error: 'Missing product ID' }, { status: 400 })
    }

    const product = await prisma.product.delete({
      where: { id },
    })

    return NextResponse.json({ message: 'Product deleted', product })
  } catch (error) {
    console.error('Error deleting product:', error)
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 })
  }
}
