"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Brain,
  Zap,
  Users,
  MessageSquare,
  Star,
  ArrowRight,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import data from "@/data/data.json"

export function ModernDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const { metrics, alerts, issues, recommendations } = data

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* AI Alert Banner */}
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="mb-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Brain className="w-4 h-4 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-amber-900 mb-1">{alert.title}</h3>
                <p className="text-amber-800 text-sm mb-3">{alert.description}</p>
                <div className="flex gap-2">
                  <Link href="/actions/create">
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                      Create Action <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                  <Link href="/insights">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-bl-full"></div>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Total Conversations</CardTitle>
                <MessageSquare className="w-4 h-4 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metrics.totalConversations.toLocaleString()}</div>
              <div className="flex items-center gap-1 text-sm">
                <TrendingUp className="w-3 h-3 text-green-600" />
                <span className="text-green-600 font-medium">+{metrics.conversationsChange}%</span>
                <span className="text-gray-500">vs last week</span>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-green-600/20 rounded-bl-full"></div>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Sentiment Score</CardTitle>
                <Star className="w-4 h-4 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metrics.sentimentScore}%</div>
              <div className="flex items-center gap-1 text-sm">
                <TrendingUp className="w-3 h-3 text-green-600" />
                <span className="text-green-600 font-medium">+{metrics.sentimentChange}%</span>
                <span className="text-gray-500">positive</span>
              </div>
              <Progress value={metrics.sentimentScore} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-purple-600/20 rounded-bl-full"></div>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">CSAT Score</CardTitle>
                <Users className="w-4 h-4 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metrics.csatScore}%</div>
              <div className="flex items-center gap-1 text-sm">
                <TrendingDown className="w-3 h-3 text-red-600" />
                <span className="text-red-600 font-medium">{metrics.csatChange}%</span>
                <span className="text-gray-500">vs target</span>
              </div>
              <Progress value={metrics.csatScore} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/10 to-red-600/20 rounded-bl-full"></div>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Critical Issues</CardTitle>
                <AlertTriangle className="w-4 h-4 text-red-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metrics.criticalIssues}</div>
              <div className="flex items-center gap-1 text-sm">
                <TrendingUp className="w-3 h-3 text-red-600" />
                <span className="text-red-600 font-medium">+{metrics.criticalIssuesChange}</span>
                <span className="text-gray-500">need attention</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Issues */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-orange-600" />
                    Critical Issues Requiring Action
                  </CardTitle>
                  <CardDescription>AI-identified issues with high impact potential</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {issues.slice(0, 3).map((issue) => (
                    <div
                      key={issue.id}
                      className={`flex items-center justify-between p-3 rounded-lg border ${
                        issue.priority === "critical"
                          ? "bg-red-50 border-red-100"
                          : issue.priority === "high"
                            ? "bg-orange-50 border-orange-100"
                            : "bg-yellow-50 border-yellow-100"
                      }`}
                    >
                      <div className="flex-1">
                        <div
                          className={`font-medium ${
                            issue.priority === "critical"
                              ? "text-red-900"
                              : issue.priority === "high"
                                ? "text-orange-900"
                                : "text-yellow-900"
                          }`}
                        >
                          {issue.name}
                        </div>
                        <div
                          className={`text-sm ${
                            issue.priority === "critical"
                              ? "text-red-700"
                              : issue.priority === "high"
                                ? "text-orange-700"
                                : "text-yellow-700"
                          }`}
                        >
                          {issue.mentions.toLocaleString()} mentions • +{issue.change}% increase
                        </div>
                      </div>
                      <Badge
                        variant={
                          issue.priority === "critical"
                            ? "destructive"
                            : issue.priority === "high"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {issue.priority === "critical" ? "Critical" : issue.priority === "high" ? "High" : "Medium"}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* AI Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-blue-600" />
                    AI Recommendations
                  </CardTitle>
                  <CardDescription>Proactive suggestions based on your data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recommendations.map((rec) => (
                    <div
                      key={rec.id}
                      className={`p-4 rounded-lg border ${
                        rec.type === "urgent" ? "bg-blue-50 border-blue-100" : "bg-green-50 border-green-100"
                      }`}
                    >
                      <div className={`font-medium mb-2 ${rec.type === "urgent" ? "text-blue-900" : "text-green-900"}`}>
                        {rec.title}
                      </div>
                      <div className={`text-sm mb-3 ${rec.type === "urgent" ? "text-blue-800" : "text-green-800"}`}>
                        {rec.description}
                      </div>
                      <div className="flex gap-2">
                        <Link href="/actions/create">
                          <Button
                            size="sm"
                            className={rec.type === "urgent" ? "bg-blue-600 hover:bg-blue-700" : ""}
                            variant={rec.type === "urgent" ? "default" : "outline"}
                          >
                            Create Action
                          </Button>
                        </Link>
                        <Link href="/insights">
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Conversation Intelligence</CardTitle>
                <CardDescription>AI-powered analysis of your customer conversations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <Brain className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p>Advanced AI insights coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Trend Analysis</CardTitle>
                <CardDescription>Historical patterns and predictions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <BarChart3 className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p>Trend analysis dashboard coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
