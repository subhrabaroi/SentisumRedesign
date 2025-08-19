"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  MoreHorizontal,
  Filter,
  ChevronDown,
  Circle,
  CheckCircle2,
  Clock,
  XCircle,
  ArrowUp,
  ArrowRight,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

export function ActionsPage() {
  const enhancedActions = [
    {
      id: "TASK-8782",
      type: "Documentation",
      title: "You can't compress the program without quantifying the open-source SSD matrix!",
      status: "In Progress",
      priority: "Medium",
    },
    {
      id: "TASK-7878",
      type: "Documentation",
      title: "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
      status: "Backlog",
      priority: "Medium",
    },
    {
      id: "TASK-7839",
      type: "Bug",
      title: "We need to bypass the neural TCP card!",
      status: "Todo",
      priority: "High",
    },
    {
      id: "TASK-5562",
      type: "Feature",
      title: "The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",
      status: "Backlog",
      priority: "Medium",
    },
    {
      id: "TASK-8686",
      type: "Feature",
      title: "I'll parse the wireless SSL protocol, that should driver the API panel!",
      status: "Canceled",
      priority: "Medium",
    },
    {
      id: "TASK-1280",
      type: "Bug",
      title: "Use the digital TLS panel, then you can transmit the haptic system!",
      status: "Done",
      priority: "High",
    },
    {
      id: "TASK-7262",
      type: "Feature",
      title: "The UTF8 application is down, parse the neural bandwidth so we can back up the quantified matrix!",
      status: "Done",
      priority: "High",
    },
    {
      id: "TASK-1138",
      type: "Feature",
      title: "Generating the driver won't do anything, we need to quantify the 1080p SMTP capacitor!",
      status: "In Progress",
      priority: "Medium",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Done":
        return <CheckCircle2 className="w-4 h-4 text-green-600" />
      case "In Progress":
        return <Clock className="w-4 h-4 text-blue-600" />
      case "Canceled":
        return <XCircle className="w-4 h-4 text-red-600" />
      case "Todo":
        return <Circle className="w-4 h-4 text-gray-400" />
      case "Backlog":
        return <Clock className="w-4 h-4 text-orange-500" />
      default:
        return <Circle className="w-4 h-4 text-gray-400" />
    }
  }

  const getPriorityIcon = (priority: string) => {
    return priority === "High" ? (
      <ArrowUp className="w-4 h-4 text-red-500" />
    ) : (
      <ArrowRight className="w-4 h-4 text-gray-500" />
    )
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Bug":
        return "bg-red-100 text-red-800 border-red-200"
      case "Feature":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Documentation":
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <div className="p-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
          <p className="text-gray-600">Here's a list of your tasks for this month.</p>
        </div>

        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Input placeholder="Filter tasks..." className="pl-4 w-64 bg-white border-gray-200" />
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="bg-white">
                      <Circle className="w-4 h-4 mr-2" />
                      Status
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    sideOffset={4}
                    className="animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
                  >
                    <DropdownMenuItem>All Statuses</DropdownMenuItem>
                    <DropdownMenuItem>Todo</DropdownMenuItem>
                    <DropdownMenuItem>In Progress</DropdownMenuItem>
                    <DropdownMenuItem>Done</DropdownMenuItem>
                    <DropdownMenuItem>Canceled</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="bg-white">
                      <ArrowUp className="w-4 h-4 mr-2" />
                      Priority
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    sideOffset={4}
                    className="animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
                  >
                    <DropdownMenuItem>All Priorities</DropdownMenuItem>
                    <DropdownMenuItem>High</DropdownMenuItem>
                    <DropdownMenuItem>Medium</DropdownMenuItem>
                    <DropdownMenuItem>Low</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="flex items-center gap-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="bg-white">
                      <Filter className="w-4 h-4 mr-2" />
                      View
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    sideOffset={4}
                    className="animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
                  >
                    <DropdownMenuItem>Table View</DropdownMenuItem>
                    <DropdownMenuItem>Board View</DropdownMenuItem>
                    <DropdownMenuItem>List View</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link href="/actions/create">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    Create Action
                  </Button>
                </Link>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Task</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Title</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 text-sm">Priority</th>
                    <th className="w-12"></th>
                  </tr>
                </thead>
                <tbody>
                  {enhancedActions.map((action, index) => (
                    <tr key={action.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span className="font-mono text-sm text-gray-700">{action.id}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className={`text-xs px-2 py-1 ${getTypeColor(action.type)}`}>
                            {action.type}
                          </Badge>
                          <span className="text-sm text-gray-900 max-w-md truncate">{action.title}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(action.status)}
                          <span className="text-sm text-gray-700">{action.status}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          {getPriorityIcon(action.priority)}
                          <span className="text-sm text-gray-700">{action.priority}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            sideOffset={4}
                            className="animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
                          >
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem>Archive</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
