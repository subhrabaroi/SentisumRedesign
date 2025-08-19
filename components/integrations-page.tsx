"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, Plus, Key, LinkIcon } from "lucide-react"
import { useState } from "react"
import data from "@/data/data.json"

export function IntegrationsPage() {
  const { integrations } = data
  const [selectedIntegration, setSelectedIntegration] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [apiKey, setApiKey] = useState("")
  const [apiToken, setApiToken] = useState("")
  const [webhookUrl, setWebhookUrl] = useState("")

  const handleConnect = (integration: any) => {
    setSelectedIntegration(integration)
    setIsModalOpen(true)
    setApiKey("")
    setApiToken("")
    setWebhookUrl("")
  }

  const handleSubmit = () => {
  // Removed console.log for production
    setIsModalOpen(false)
    // In a real app, you would make an API call to connect the integration
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <div className="p-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Integrations</h1>
          <p className="text-gray-600">Connect to your apps so that SentiSum can access and analyse your data</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {integrations.map((integration) => (
            <Card key={integration.name} className="relative hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded"></div>
                </div>
                <CardTitle className="text-lg">{integration.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {integration.connected ? (
                  <div className="flex items-center justify-center gap-2 text-green-600">
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-medium">Integrated</span>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleConnect(integration)}
                    className="hover:bg-blue-50 hover:border-blue-300"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                )}
              </CardContent>
              {integration.connected && (
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Connected
                  </Badge>
                </div>
              )}
            </Card>
          ))}
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded"></div>
                Connect {selectedIntegration?.name}
              </DialogTitle>
              <DialogDescription>
                Enter your API credentials to connect {selectedIntegration?.name} with SentiSum.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="apiKey" className="flex items-center gap-2">
                  <Key className="w-4 h-4" />
                  API Key
                </Label>
                <Input
                  id="apiKey"
                  type="password"
                  placeholder="Enter your API key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="apiToken" className="flex items-center gap-2">
                  <Key className="w-4 h-4" />
                  API Token
                </Label>
                <Input
                  id="apiToken"
                  type="password"
                  placeholder="Enter your API token"
                  value={apiToken}
                  onChange={(e) => setApiToken(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="webhookUrl" className="flex items-center gap-2">
                  <LinkIcon className="w-4 h-4" />
                  Webhook URL (Optional)
                </Label>
                <Input
                  id="webhookUrl"
                  type="url"
                  placeholder="https://your-webhook-url.com"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                />
              </div>
            </div>

            <DialogFooter className="gap-2">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!apiKey || !apiToken}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                Connect Integration
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
