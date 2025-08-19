"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, TrendingUp, Clock, Star, ArrowRight, Brain, Zap } from "lucide-react"
import data from "@/data/data.json"

export function EnhancedInsights() {
  const [searchQuery, setSearchQuery] = useState("")
  const { conversations, issues, recommendations, metrics } = data

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Unified Insights</h1>
          <p className="text-gray-600">AI-powered analysis of customer conversations and feedback patterns</p>
        </div>

        {/* AI Summary Card */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-600" />
              AI Summary - Last 24 Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900 mb-1">
                  {metrics.totalConversations.toLocaleString()}
                </div>
                <div className="text-sm text-blue-700">Total Conversations</div>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  <span className="text-green-600 text-xs">+{metrics.conversationsChange}%</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900 mb-1">{metrics.criticalIssues}</div>
                <div className="text-sm text-blue-700">Critical Issues</div>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-red-600" />
                  <span className="text-red-600 text-xs">+{metrics.criticalIssuesChange} new</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900 mb-1">{metrics.sentimentScore}%</div>
                <div className="text-sm text-blue-700">Positive Sentiment</div>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  <span className="text-green-600 text-xs">+{metrics.sentimentChange}%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Themes & Analysis */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Top Issues</CardTitle>
                <CardDescription>AI-identified themes requiring attention</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {issues.slice(0, 3).map((issue) => (
                  <div
                    key={issue.id}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      issue.priority === "critical"
                        ? "bg-red-50"
                        : issue.priority === "high"
                          ? "bg-orange-50"
                          : "bg-yellow-50"
                    }`}
                  >
                    <div>
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
                        {issue.mentions.toLocaleString()} mentions
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={issue.priority === "critical" ? "destructive" : "default"} className="mb-1">
                        {issue.change > 0 ? "+" : ""}
                        {issue.change}%
                      </Badge>
                      <div
                        className={`text-xs ${
                          issue.priority === "critical"
                            ? "text-red-600"
                            : issue.priority === "high"
                              ? "text-orange-600"
                              : "text-yellow-600"
                        }`}
                      >
                        {issue.change > 0 ? "trending up" : "trending down"}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recommendations.map((rec) => (
                  <div
                    key={rec.id}
                    className={`p-3 rounded-lg border ${
                      rec.type === "urgent" ? "bg-blue-50 border-blue-200" : "bg-green-50 border-green-200"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <Zap className={`w-4 h-4 mt-0.5 ${rec.type === "urgent" ? "text-blue-600" : "text-green-600"}`} />
                      <div>
                        <div
                          className={`font-medium text-sm ${
                            rec.type === "urgent" ? "text-blue-900" : "text-green-900"
                          }`}
                        >
                          {rec.type === "urgent" ? "Urgent Action Needed" : "Opportunity"}
                        </div>
                        <div className={`text-xs mt-1 ${rec.type === "urgent" ? "text-blue-700" : "text-green-700"}`}>
                          {rec.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Conversations */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Conversations</CardTitle>
                    <CardDescription>Real-time customer feedback with AI analysis</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      Export
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search conversations or ask AI..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {conversations.map((conv) => (
                    <div
                      key={conv.id}
                      className="p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {conv.channel}
                            </Badge>
                            <span className="text-sm text-gray-500">ID: {conv.id}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Clock className="w-3 h-3" />
                            {conv.time}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {conv.starred && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                          <Badge variant={conv.priority === "high" ? "destructive" : "secondary"} className="text-xs">
                            {conv.priority}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-sm text-gray-700 mb-3 line-clamp-2">{conv.preview}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {conv.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              conv.sentiment === "negative"
                                ? "bg-red-500"
                                : conv.sentiment === "positive"
                                  ? "bg-green-500"
                                  : "bg-yellow-500"
                            }`}
                          ></div>
                          <Button variant="ghost" size="sm">
                            View <ArrowRight className="w-3 h-3 ml-1" />
                          </Button>
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
    </div>
  )
}
