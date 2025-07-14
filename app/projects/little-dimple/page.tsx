"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ShoppingCart, CreditCard, Users, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white mx-auto mb-6">
              <ShoppingCart className="h-10 w-10" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Little Dimple</h1>
            <p className="text-xl text-slate-600">
              Platform jual beli online lengkap dengan sistem pembayaran, manajemen produk, dan dashboard admin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Payment Gateway
                </CardTitle>
                <CardDescription>Integrasi dengan berbagai metode pembayaran</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Credit Card & Debit Card</li>
                  <li>• E-Wallet (GoPay, OVO, DANA)</li>
                  <li>• Bank Transfer</li>
                  <li>• Installment Payment</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  User Management
                </CardTitle>
                <CardDescription>Sistem manajemen pengguna yang komprehensif</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Customer Registration</li>
                  <li>• Seller Dashboard</li>
                  <li>• Admin Panel</li>
                  <li>• Role-based Access</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Product Management
                </CardTitle>
                <CardDescription>Kelola produk dengan mudah dan efisien</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Product Catalog</li>
                  <li>• Inventory Management</li>
                  <li>• Category & Tags</li>
                  <li>• Bulk Operations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Analytics & Reports
                </CardTitle>
                <CardDescription>Laporan penjualan dan analisis bisnis</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Sales Reports</li>
                  <li>• Customer Analytics</li>
                  <li>• Product Performance</li>
                  <li>• Revenue Tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/login?project=little-dimple" passHref legacyBehavior>
              <a>
                <Button size="lg" className="mr-4">
                  Live Demo
                </Button>
              </a>
            </Link>
            <Button size="lg" variant="outline">
              View Source Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
