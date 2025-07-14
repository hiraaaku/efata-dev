"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Database, BarChart3, Download, Users } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white mx-auto mb-6">
              <Database className="h-10 w-10" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Analytics Dashboard</h1>
            <p className="text-xl text-slate-600">
              Dashboard analytics dengan visualisasi data real-time, reporting system, dan insights bisnis yang mendalam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Real-time Analytics
                </CardTitle>
                <CardDescription>Data dan metrics yang update secara real-time</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Live Data Streaming</li>
                  <li>• Interactive Charts</li>
                  <li>• Custom Metrics</li>
                  <li>• Performance Monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Export & Reports
                </CardTitle>
                <CardDescription>Sistem export dan laporan yang komprehensif</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• PDF Reports</li>
                  <li>• Excel Export</li>
                  <li>• Scheduled Reports</li>
                  <li>• Custom Templates</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="mr-2 h-5 w-5" />
                  Data Visualization
                </CardTitle>
                <CardDescription>Visualisasi data yang interaktif dan informatif</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Multiple Chart Types</li>
                  <li>• Custom Dashboards</li>
                  <li>• Drill-down Analysis</li>
                  <li>• Data Filtering</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Multi-user Access
                </CardTitle>
                <CardDescription>Sistem akses multi-user dengan role management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Role-based Permissions</li>
                  <li>• Team Collaboration</li>
                  <li>• Access Control</li>
                  <li>• Activity Logging</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/login?project=dashboard" passHref legacyBehavior>
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
