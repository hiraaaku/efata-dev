import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ShoppingCart, Users, BarChart3, Settings } from "lucide-react"
import Link from "next/link"

export default function LittleDimpleDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link href="/projects/little-dimple" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Project
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-600">Demo Mode</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white mx-auto mb-6">
              <ShoppingCart className="h-10 w-10" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Little Dimple - Live Demo</h1>
            <p className="text-xl text-slate-600">
              Selamat datang di demo interaktif platform e-commerce Little Dimple
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <ShoppingCart className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <CardTitle className="text-lg">Products</CardTitle>
                <CardDescription>Kelola produk dan katalog</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent" variant="outline">
                  Lihat Products
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-green-500" />
                <CardTitle className="text-lg">Customers</CardTitle>
                <CardDescription>Manajemen pelanggan</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent" variant="outline">
                  Lihat Customers
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <BarChart3 className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                <CardTitle className="text-lg">Analytics</CardTitle>
                <CardDescription>Laporan dan statistik</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent" variant="outline">
                  Lihat Analytics
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <Settings className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                <CardTitle className="text-lg">Settings</CardTitle>
                <CardDescription>Konfigurasi sistem</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent" variant="outline">
                  Lihat Settings
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Demo Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">🛒 E-commerce Core</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Product Management</li>
                  <li>• Shopping Cart</li>
                  <li>• Order Processing</li>
                  <li>• Inventory Tracking</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">💳 Payment System</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Multiple Payment Methods</li>
                  <li>• Secure Transactions</li>
                  <li>• Payment History</li>
                  <li>• Refund Management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📊 Admin Dashboard</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Sales Analytics</li>
                  <li>• User Management</li>
                  <li>• Report Generation</li>
                  <li>• System Configuration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
