"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Brain,
  MessageSquare,
  TrendingUp,
  TrendingDown,
  Search,
  Filter,
  Bell,
  Settings,
  ChevronDown,
  Sparkles,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react"

const SENTIMENT_DATA = [
  { category: "Product Quality", positive: 78, negative: 22, volume: 1247, trend: "up" },
  { category: "Customer Service", positive: 85, negative: 15, volume: 892, trend: "up" },
  { category: "Delivery Experience", positive: 45, negative: 55, volume: 634, trend: "down" },
  { category: "Website Usability", positive: 67, negative: 33, volume: 423, trend: "up" },
]

const RECENT_INSIGHTS = [
  {
    id: 1,
    type: "critical",
    title: "Delivery delays spike in Northeast region",
    description: "67% increase in negative delivery feedback over past 3 days",
    time: "2 hours ago",
    impact: "High",
    affected: "2,341 customers",
  },
  {
    id: 2,
    type: "positive",
    title: "New checkout flow receiving praise",
    description: "Positive sentiment up 34% since last week's update",
    time: "5 hours ago",
    impact: "Medium",
    affected: "1,892 customers",
  },
  {
    id: 3,
    type: "warning",
    title: "Support response time concerns emerging",
    description: "Mentions of 'slow response' increased 23%",
    time: "1 day ago",
    impact: "Medium",
    affected: "756 customers",
  },
]

export function DashboardView() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">SentiSum</h1>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Ask AI about your customer feedback..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-96 bg-slate-50 border-slate-200"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* AI Insights Banner */}
        <Card className="mb-6 border-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">AI Detected: Critical Issue Emerging</h3>
                  <p className="text-blue-100">
                    Delivery complaints increased 67% in the last 3 days. Immediate action recommended.
                  </p>
                </div>
              </div>
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Overall Sentiment</p>
                  <p className="text-2xl font-bold text-slate-900">73.2%</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3 text-green-500" />
                    <span className="text-xs text-green-600">+2.4% vs last week</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Feedback Volume</p>
                  <p className="text-2xl font-bold text-slate-900">3,196</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3 text-blue-500" />
                    <span className="text-xs text-blue-600">+12% vs last week</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Critical Issues</p>
                  <p className="text-2xl font-bold text-slate-900">7</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingDown className="w-3 h-3 text-red-500" />
                    <span className="text-xs text-red-600">+3 new today</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Response Rate</p>
                  <p className="text-2xl font-bold text-slate-900">94.7%</p>
                  <div className="flex items-center gap-1 mt-1">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span className="text-xs text-green-600">On target</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sentiment Breakdown */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Sentiment by Category
                  <Button variant="ghost" size="sm">
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {SENTIMENT_DATA.map((item, index) => (
                    <div key={index} className="p-4 rounded-lg bg-slate-50">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <h4 className="font-medium text-slate-900">{item.category}</h4>
                          <Badge variant="outline" className="text-xs">
                            {item.volume} mentions
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1">
                          {item.trend === "up" ? (
                            <TrendingUp className="w-4 h-4 text-green-500" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-red-500" />
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="flex justify-between text-xs text-slate-600 mb-1">
                            <span>Positive: {item.positive}%</span>
                            <span>Negative: {item.negative}%</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full"
                              style={{ width: `${item.positive}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent AI Insights */}
          <Card>
            <CardHeader>
              <CardTitle>AI Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {RECENT_INSIGHTS.map((insight) => (
                  <div key={insight.id} className="p-3 rounded-lg border border-slate-200">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${
                          insight.type === "critical"
                            ? "bg-red-500"
                            : insight.type === "positive"
                              ? "bg-green-500"
                              : "bg-yellow-500"
                        }`}
                      ></div>
                      <div className="flex-1">
                        <h5 className="font-medium text-sm text-slate-900 mb-1">{insight.title}</h5>
                        <p className="text-xs text-slate-600 mb-2">{insight.description}</p>
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {insight.time}
                          </div>
                          <Badge variant={insight.impact === "High" ? "destructive" : "secondary"} className="text-xs">
                            {insight.impact}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
