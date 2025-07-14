"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Palette, Smartphone, Mail, TrendingUp, Target } from "lucide-react"
import Link from "next/link"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mx-auto mb-6">
              <Palette className="h-10 w-10" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Nirmala</h1>
            <p className="text-xl text-slate-600">
              Opportunity Tracking Management dengan sistem pelacakan peluang bisnis yang komprehensif
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Responsive Design
                </CardTitle>
                <CardDescription>Tampilan optimal di semua perangkat</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Lead Capture Forms</li>
                  <li>• Mobile CRM Access</li>
                  <li>• Contact Management</li>
                  <li>• Activity Tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  Project Gallery
                </CardTitle>
                <CardDescription>Showcase karya dengan tampilan yang menarik</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Pipeline Visualization</li>
                  <li>• Deal Stages</li>
                  <li>• Progress Tracking</li>
                  <li>• Conversion Analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Smooth Animations
                </CardTitle>
                <CardDescription>Animasi halus yang meningkatkan user experience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Performance Analytics</li>
                  <li>• Sales Forecasting</li>
                  <li>• Revenue Tracking</li>
                  <li>• Custom Reports</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Integration
                </CardTitle>
                <CardDescription>Sistem kontak yang terintegrasi</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Email Integration</li>
                  <li>• Follow-up Reminders</li>
                  <li>• Communication Log</li>
                  <li>• Team Notifications</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/login?project=nirmala" passHref legacyBehavior>
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
