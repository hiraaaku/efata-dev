import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Target, TrendingUp, Users, Calendar } from "lucide-react"
import Link from "next/link"

export default function NirmalaDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link href="/projects/nirmala" className="inline-flex items-center text-purple-600 hover:text-purple-800">
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
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mx-auto mb-6">
              <Target className="h-10 w-10" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Nirmala - Live Demo</h1>
            <p className="text-xl text-slate-600">Demo interaktif sistem Opportunity Tracking Management</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <Target className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                <CardTitle className="text-lg">Opportunities</CardTitle>
                <CardDescription>Kelola peluang bisnis</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent" variant="outline">
                  Lihat Opportunities
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-500" />
                <CardTitle className="text-lg">Pipeline</CardTitle>
                <CardDescription>Tracking progress deals</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent" variant="outline">
                  Lihat Pipeline
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <CardTitle className="text-lg">Contacts</CardTitle>
                <CardDescription>Manajemen kontak</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent" variant="outline">
                  Lihat Contacts
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                <CardTitle className="text-lg">Activities</CardTitle>
                <CardDescription>Jadwal dan follow-up</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-transparent" variant="outline">
                  Lihat Activities
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Demo Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">🎯 Lead Management</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Lead Capture</li>
                  <li>• Lead Scoring</li>
                  <li>• Lead Assignment</li>
                  <li>• Lead Nurturing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📈 Pipeline Tracking</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Visual Pipeline</li>
                  <li>• Stage Management</li>
                  <li>• Progress Tracking</li>
                  <li>• Conversion Analytics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📊 Analytics & Reports</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Performance Metrics</li>
                  <li>• Sales Forecasting</li>
                  <li>• Team Performance</li>
                  <li>• Custom Reports</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
