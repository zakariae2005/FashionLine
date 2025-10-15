/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Plus, Pencil, Trash2, X, Upload } from "lucide-react"
import type { Product } from "@/lib/products"
import Image from "next/image"

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")

  // Load products from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("products")
    if (stored) {
      setProducts(JSON.parse(stored))
    } else {
      // Initialize with default products
      const defaultProducts: Product[] = [
        {
          id: "1",
          name: "قميص رجالي كلاسيكي",
          description: "قميص رجالي أنيق من القطن الفاخر، مثالي للمناسبات الرسمية",
          price: 299,
          image: "/elegant-mens-dress-shirt.jpg",
          images: ["/elegant-mens-dress-shirt.jpg", "/mens-shirt-detail.jpg"],
          category: "men",
        },
        {
          id: "2",
          name: "فستان نسائي عصري",
          description: "فستان نسائي راقي بتصميم عصري، مناسب لجميع المناسبات",
          price: 499,
          image: "/elegant-womens-dress.jpg",
          images: ["/elegant-womens-dress.jpg", "/womens-dress-detail.jpg"],
          category: "women",
        },
      ]
      setProducts(defaultProducts)
      localStorage.setItem("products", JSON.stringify(defaultProducts))
    }

    // Check authentication
    const auth = localStorage.getItem("adminAuth")
    if (auth === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  // Save products to localStorage whenever they change
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("products", JSON.stringify(products))
    }
  }, [products])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check (in production, use proper authentication)
    if (password === "admin123") {
      setIsAuthenticated(true)
      localStorage.setItem("adminAuth", "true")
    } else {
      alert("كلمة المرور غير صحيحة")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem("adminAuth")
    setPassword("")
  }

  if (!isAuthenticated) {
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100"
        dir="rtl"
      >
        <Card className="w-full max-w-md p-8">
          <h1 className="text-3xl font-bold text-center mb-6">لوحة التحكم</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="password">كلمة المرور</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="أدخل كلمة المرور"
                className="mt-2"
              />
            </div>
            <Button type="submit" className="w-full">
              تسجيل الدخول
            </Button>
            <p className="text-sm text-muted-foreground text-center mt-4">كلمة المرور التجريبية: admin123</p>
          </form>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">لوحة التحكم</h1>
            <p className="text-muted-foreground">إدارة المنتجات</p>
          </div>
          <div className="flex gap-3">
            <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="h-5 w-5" />
                  إضافة منتج جديد
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" dir="rtl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">إضافة منتج جديد</DialogTitle>
                </DialogHeader>
                <ProductForm
                  onSubmit={(product) => {
                    const newProduct = {
                      ...product,
                      id: Date.now().toString(),
                    }
                    setProducts([...products, newProduct])
                    setIsCreateOpen(false)
                  }}
                  onCancel={() => setIsCreateOpen(false)}
                />
              </DialogContent>
            </Dialog>
            <Button variant="outline" onClick={handleLogout}>
              تسجيل الخروج
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-slate-100">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                {product.images && product.images.length > 1 && (
                  <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                    {product.images.length} صور
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{product.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-primary">{product.price} درهم</p>
                    <p className="text-xs text-muted-foreground">
                      {product.category === "men" ? "رجالي" : product.category === "women" ? "نسائي" : "أطفال"}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setEditingProduct(product)
                        setIsEditOpen(true)
                      }}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => {
                        if (confirm("هل أنت متأكد من حذف هذا المنتج؟")) {
                          setProducts(products.filter((p) => p.id !== product.id))
                        }
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-4">لا توجد منتجات حالياً</p>
            <Button onClick={() => setIsCreateOpen(true)}>
              <Plus className="h-5 w-5 ml-2" />
              إضافة منتج جديد
            </Button>
          </div>
        )}

        {/* Edit Dialog */}
        <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" dir="rtl">
            <DialogHeader>
              <DialogTitle className="text-2xl">تعديل المنتج</DialogTitle>
            </DialogHeader>
            {editingProduct && (
              <ProductForm
                product={editingProduct}
                onSubmit={(updatedProduct) => {
                  setProducts(products.map((p) => (p.id === editingProduct.id ? { ...updatedProduct, id: p.id } : p)))
                  setIsEditOpen(false)
                  setEditingProduct(null)
                }}
                onCancel={() => {
                  setIsEditOpen(false)
                  setEditingProduct(null)
                }}
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

interface ProductFormProps {
  product?: Product
  onSubmit: (product: Omit<Product, "id">) => void
  onCancel: () => void
}

function ProductForm({ product, onSubmit, onCancel }: ProductFormProps) {
  const [name, setName] = useState(product?.name || "")
  const [description, setDescription] = useState(product?.description || "")
  const [price, setPrice] = useState(product?.price.toString() || "")
  const [category, setCategory] = useState<"men" | "women" | "kids">(product?.category || "men")
  const [images, setImages] = useState<string[]>(product?.images || [product?.image || ""])
  const [imageInput, setImageInput] = useState("")

  const handleAddImage = () => {
    if (imageInput.trim()) {
      setImages([...images, imageInput.trim()])
      setImageInput("")
    }
  }

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader()
        reader.onloadend = () => {
          setImages((prev) => [...prev, reader.result as string])
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !description || !price || images.length === 0) {
      alert("يرجى ملء جميع الحقول وإضافة صورة واحدة على الأقل")
      return
    }

    onSubmit({
      name,
      description,
      price: Number.parseFloat(price),
      category,
      image: images[0],
      images,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">اسم المنتج</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="أدخل اسم المنتج"
          className="mt-2"
          required
        />
      </div>

      <div>
        <Label htmlFor="description">الوصف</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="أدخل وصف المنتج"
          className="mt-2 min-h-24"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="price">السعر (درهم)</Label>
          <Input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="299"
            className="mt-2"
            required
          />
        </div>

        <div>
          <Label htmlFor="category">الفئة</Label>
          <Select value={category} onValueChange={(value: any) => setCategory(value)}>
            <SelectTrigger className="mt-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="men">رجالي</SelectItem>
              <SelectItem value="women">نسائي</SelectItem>
              <SelectItem value="kids">أطفال</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label>صور المنتج</Label>
        <div className="mt-2 space-y-3">
          {/* File Upload */}
          <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">اضغط لرفع الصور أو اسحبها هنا</p>
              <p className="text-xs text-muted-foreground mt-1">يمكنك رفع عدة صور</p>
            </label>
          </div>

          {/* URL Input */}
          <div className="flex gap-2">
            <Input
              value={imageInput}
              onChange={(e) => setImageInput(e.target.value)}
              placeholder="أو أدخل رابط الصورة"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  handleAddImage()
                }
              }}
            />
            <Button type="button" onClick={handleAddImage} variant="outline">
              إضافة
            </Button>
          </div>

          {/* Image Previews */}
          {images.length > 0 && (
            <div className="grid grid-cols-3 gap-3">
              {images.map((img, index) => (
                <div key={index} className="relative group">
                  <div className="relative h-32 bg-slate-100 rounded-lg overflow-hidden">
                    <Image src={img || "/placeholder.svg"} alt={`صورة ${index + 1}`} fill className="object-cover" />
                    {index === 0 && (
                      <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs">
                        رئيسية
                      </div>
                    )}
                  </div>
                  <Button
                    type="button"
                    size="sm"
                    variant="destructive"
                    className="absolute -top-2 -left-2 h-6 w-6 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleRemoveImage(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <Button type="submit" className="flex-1">
          {product ? "تحديث المنتج" : "إضافة المنتج"}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel} className="flex-1 bg-transparent">
          إلغاء
        </Button>
      </div>
    </form>
  )
}
