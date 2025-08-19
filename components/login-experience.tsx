"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, MessageSquare, TrendingUp, Zap, Globe, Shield, Users } from "lucide-react"

const DEMO_INSIGHTS = [
  { text: "Product delivery delays", sentiment: "negative", count: 847, trend: "↑ 23%" },
  { text: "Excellent customer service", sentiment: "positive", count: 1203, trend: "↑ 15%" },
  { text: "Website checkout issues", sentiment: "negative", count: 432, trend: "↑ 67%" },
  { text: "Love the new features", sentiment: "positive", count: 891, trend: "↑ 8%" },
]

const LIVE_METRICS = [
  { label: "Feedback Analyzed", value: "2.4M", icon: MessageSquare },
  { label: "Languages Supported", value: "100+", icon: Globe },
  { label: "Sentiment Accuracy", value: "94.7%", icon: Brain },
  { label: "Response Time", value: "<1s", icon: Zap },
]

export function LoginExperience() {
  const [currentInsight, setCurrentInsight] = useState(0)
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInsight((prev) => (prev + 1) % DEMO_INSIGHTS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleLogin = async () => {
    setIsLoading(true)
    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 1500))
    window.location.href = "/dashboard"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex">
      {/* Left Side - AI Demo */}
      <div className="hidden lg:flex lg:w-1/2 p-8 flex-col justify-center">
        <div className="max-w-lg mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">SentiSum AI</h1>
                <p className="text-slate-600 text-sm">Real-time Customer Intelligence</p>
              </div>
            </div>
          </div>

          {/* Live AI Analysis Demo */}
          <Card className="p-6 mb-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700">Live Analysis</span>
            </div>

            <div className="space-y-3">
              {DEMO_INSIGHTS.map((insight, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg transition-all duration-500 ${
                    index === currentInsight
                      ? "bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 scale-105"
                      : "bg-slate-50 opacity-60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant={insight.sentiment === "positive" ? "default" : "destructive"} className="text-xs">
                        {insight.sentiment}
                      </Badge>
                      <span className="text-sm font-medium">{insight.text}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold">{insight.count}</div>
                      <div className="text-xs text-slate-500">{insight.trend}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Live Metrics */}
          <div className="grid grid-cols-2 gap-4">
            {LIVE_METRICS.map((metric, index) => (
              <Card key={index} className="p-4 border-0 shadow-md bg-white/60 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <metric.icon className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-lg font-bold text-slate-900">{metric.value}</div>
                    <div className="text-xs text-slate-600">{metric.label}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Enhanced Login */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <Card className="w-full max-w-md p-8 border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Welcome Back</h2>
            <p className="text-slate-600">Access your customer intelligence dashboard</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">Email</label>
              <Input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <Button
              onClick={handleLogin}
              disabled={!email || isLoading}
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Analyzing your access...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  Continue to Dashboard
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </Button>

            <div className="text-center">
              <p className="text-sm text-slate-600">
                Don't have a SentiSum account?{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Start Free Trial
                </a>
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <div className="flex items-center justify-center gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3" />
                SOC 2 Compliant
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                500+ Companies
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                99.9% Uptime
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
