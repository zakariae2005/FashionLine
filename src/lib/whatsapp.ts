export function generateWhatsAppLink(productName: string, productPrice: number, productUrl: string): string {
  const phoneNumber = "212600000000" // Replace with actual phone number
  const message = `مرحباً، أود شراء هذا المنتج:

📦 المنتج: ${productName}
💰 السعر: ${productPrice} درهم
🔗 الرابط: ${productUrl}

أرجو التواصل معي لإتمام الطلب.`

  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}
