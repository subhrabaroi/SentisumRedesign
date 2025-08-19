"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Bell, Settings } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Dashboard" },
    { href: "/insights", label: "Insights" },
    { href: "/actions", label: "Actions" },
    { href: "/integrations", label: "Integrations" },
  ]

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-semibold text-xl">Sentisum</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button variant="ghost" className={pathname === item.href ? "text-blue-600 bg-blue-50" : ""}>
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              placeholder="Ask AI about your feedback..."
              className="pl-10 pr-4 py-2 bg-gray-50 border-0 rounded-lg w-80 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>
          <Button size="sm" variant="outline">
            <Bell className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="outline">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
