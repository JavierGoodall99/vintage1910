import React from 'react'
import ShopDisplay from '../../components/shop/ShopDisplay'

export const metadata = {
  title: "Vintage Emporium | Shop",
  description: "Browse our curated selection of vintage-inspired goods"
}

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="journal-header">
        <h1>Vintage Emporium</h1>
        <div className="journal-subtitle">Browse our curated collection of unique artifacts and treasures, each presented in an elegant shadowbox frame.</div>
      </header>
      <ShopDisplay />
    </div>
  )
}