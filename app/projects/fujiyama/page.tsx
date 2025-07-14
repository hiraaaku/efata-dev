"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Package, AlertTriangle, TruckIcon, BarChart } from "lucide-react"
import Link from "next/link"

export default function FujiyamaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white mx-auto mb-6">
              <Package className="h-10 w-10" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Fujiyama</h1>
            <p className="text-xl text-slate-600">
              Sistem manajemen inventory yang komprehensif untuk mengelola stok, supplier, dan operasional gudang
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="mr-2 h-5 w-5" />
                  Stock Management
                </CardTitle>
                <CardDescription>Kelola stok barang dengan sistem yang akurat</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Real-time Stock Tracking</li>
                  <li>• Batch & Serial Numbers</li>
                  <li>• Multi-location Inventory</li>
                  <li>• Stock Adjustment</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TruckIcon className="mr-2 h-5 w-5" />
                  Supplier Management
                </CardTitle>
                <CardDescription>Manajemen supplier dan purchase order</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Supplier Database</li>
                  <li>• Purchase Orders</li>
                  <li>• Delivery Tracking</li>
                  <li>• Vendor Performance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Automated Alerts
                </CardTitle>
                <CardDescription>Sistem peringatan otomatis untuk stok</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Low Stock Alerts</li>
                  <li>• Expiry Date Warnings</li>
                  <li>• Reorder Point Notifications</li>
                  <li>• Custom Alert Rules</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart className="mr-2 h-5 w-5" />
                  Reporting System
                </CardTitle>
                <CardDescription>Laporan dan analisis inventory yang detail</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Inventory Reports</li>
                  <li>• Movement Analysis</li>
                  <li>• Cost Analysis</li>
                  <li>• ABC Analysis</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/login?project=fujiyama" passHref legacyBehavior>
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
