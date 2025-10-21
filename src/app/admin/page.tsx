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
import { Plus, Pencil, Trash2, X, Upload, Loader2 } from "lucide-react"
import Image from "next/image"
import { useProduct } from "@/hooks/product/use-product"
import { useCreateProduct } from "@/hooks/product/use-create-product"
import { useUpdateProduct } from "@/hooks/product/use-update-product"
import { useDeleteProduct } from "@/hooks/product/use-delete-product"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  images: string[]
  category: "men" | "women" | "kids"
  type: "shirt" | "boots"
  createdAt?: Date
  updatedAt?: Date
}

export default function AdminPage() {
  const { products, loading: loadingProducts, refetch } = useProduct()
  const { createProduct, loading: creating } = useCreateProduct()
  const { updateProduct, loading: updating } = useUpdateProduct()
  const { deleteProduct, loading: deleting } = useDeleteProduct()

  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")

  // Check authentication
  useEffect(() => {
    const auth = sessionStorage.getItem("adminAuth")
    if (auth === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check (in production, use proper authentication)
    if (password === "ayoub123") {
      setIsAuthenticated(true)
      sessionStorage.setItem("adminAuth", "true")
    } else {
      alert("كلمة المرور غير صحيحة")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem("adminAuth")
    setPassword("")
  }

  const handleCreateProduct = async (product: Omit<Product, "id" | "createdAt" | "updatedAt">) => {
    try {
      await createProduct(product as any)
      setIsCreateOpen(false)
      refetch()
    } catch (error) {
      alert("فشل في إضافة المنتج")
    }
  }

  const handleUpdateProduct = async (product: Omit<Product, "id" | "createdAt" | "updatedAt">) => {
    if (!editingProduct) return
    try {
      await updateProduct(editingProduct.id, product as any)
      setIsEditOpen(false)
      setEditingProduct(null)
      refetch()
    } catch (error) {
      alert("فشل في تحديث المنتج")
    }
  }

  const handleDeleteProduct = async (id: string) => {
    if (confirm("هل أنت متأكد من حذف هذا المنتج؟")) {
      try {
        await deleteProduct(id)
        refetch()
      } catch (error) {
        alert("فشل في حذف المنتج")
      }
    }
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
                  onSubmit={handleCreateProduct}
                  onCancel={() => setIsCreateOpen(false)}
                  isLoading={creating}
                />
              </DialogContent>
            </Dialog>
            <Button variant="outline" onClick={handleLogout}>
              تسجيل الخروج
            </Button>
          </div>
        </div>

        {/* Loading State */}
        {loadingProducts ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <>
            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product: any) => (
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
                        <div className="flex gap-2 text-xs text-muted-foreground">
                          <span>
                            {product.category === "men" ? "رجالي" : product.category === "women" ? "نسائي" : "أطفال"}
                          </span>
                          <span>•</span>
                          <span>{product.type === "shirt" ? "قميص" : "حذاء"}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setEditingProduct(product)
                            setIsEditOpen(true)
                          }}
                          disabled={deleting}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDeleteProduct(product.id)}
                          disabled={deleting}
                        >
                          {deleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
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
          </>
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
                onSubmit={handleUpdateProduct}
                onCancel={() => {
                  setIsEditOpen(false)
                  setEditingProduct(null)
                }}
                isLoading={updating}
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
  onSubmit: (product: Omit<Product, "id" | "createdAt" | "updatedAt">) => void
  onCancel: () => void
  isLoading?: boolean
}

function ProductForm({ product, onSubmit, onCancel, isLoading }: ProductFormProps) {
  const [name, setName] = useState(product?.name || "")
  const [description, setDescription] = useState(product?.description || "")
  const [price, setPrice] = useState(product?.price.toString() || "")
  const [category, setCategory] = useState<"men" | "women" | "kids">(product?.category || "men")
  const [type, setType] = useState<"shirt" | "boots">(product?.type || "shirt")
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
      type,
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
          disabled={isLoading}
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
          disabled={isLoading}
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
            disabled={isLoading}
          />
        </div>

        <div>
          <Label htmlFor="category">الفئة</Label>
          <Select value={category} onValueChange={(value: any) => setCategory(value)} disabled={isLoading}>
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
        <Label htmlFor="type">نوع المنتج</Label>
        <Select value={type} onValueChange={(value: any) => setType(value)} disabled={isLoading}>
          <SelectTrigger className="mt-2">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="shirt">قميص</SelectItem>
            <SelectItem value="boots">حذاء</SelectItem>
          </SelectContent>
        </Select>
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
              disabled={isLoading}
            />
            <label htmlFor="file-upload" className={`cursor-pointer ${isLoading ? 'opacity-50' : ''}`}>
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
              disabled={isLoading}
            />
            <Button type="button" onClick={handleAddImage} variant="outline" disabled={isLoading}>
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
                    disabled={isLoading}
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
        <Button type="submit" className="flex-1" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin ml-2" />
              {product ? "جاري التحديث..." : "جاري الإضافة..."}
            </>
          ) : (
            product ? "تحديث المنتج" : "إضافة المنتج"
          )}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel} className="flex-1 bg-transparent" disabled={isLoading}>
          إلغاء
        </Button>
      </div>
    </form>
  )
}