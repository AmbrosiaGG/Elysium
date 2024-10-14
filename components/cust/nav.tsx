"use client"

import {
  SquareTerminal,
  Files,
  Database,
  Clock,
  DatabaseBackup,
  Globe,
  Users,
  Settings,
} from "lucide-react"
import { motion } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import Link from "next/link"

const tabs = [
  { name: "Console", href: "/dashboard/servers/69696A", icon: SquareTerminal },
  { name: "Files", href: "/dashboard/servers/69696A/files", icon: Files },
  { name: "Databases", href: "/dashboard/servers/69696A/databases", icon: Database },
  { name: "Schedules", href: "/dashboard/servers/69696A/schedules", icon: Clock },
  { name: "Users", href: "/dashboard/servers/69696A/users", icon: Users },
  { name: "Backups", href: "/dashboard/servers/69696A/backups", icon: DatabaseBackup },
  { name: "Network", href: "/dashboard/servers/69696A/network", icon: Globe },
  { name: "Settings", href: "/dashboard/servers/69696A/settings", icon: Settings },
]

export default function Navigation() {
  const router = useRouter()
  const currentPath = usePathname()
  const [activeTab, setActiveTab] = useState(currentPath)
  const [prevTab, setPrevTab] = useState(currentPath)
  const [underlineStyles, setUnderlineStyles] = useState({ left: 0, width: 0 })
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (activeTab !== currentPath) {
      setPrevTab(activeTab)
      setActiveTab(currentPath)
    }
  }, [currentPath, activeTab])

  useEffect(() => {
    const updateUnderline = () => {
      if (navRef.current) {
        const activeElement = navRef.current.querySelector(`a[href="${activeTab}"]`) as HTMLElement | null
        if (activeElement) {
          const { offsetLeft, offsetWidth } = activeElement
          setUnderlineStyles({
            left: offsetLeft,
            width: offsetWidth,
          })
        }
      }
    }

    updateUnderline()
    window.addEventListener("resize", updateUnderline)
    return () => window.removeEventListener("resize", updateUnderline)
  }, [activeTab])

  const handleTabClick = (href: string) => {
    setPrevTab(activeTab)
    setActiveTab(href)
    router.push(href)
  }

  return (
    <div className="sticky top-0 md:py-4 md:border-b bg-card border-accent">
      <div className="relative overflow-hidden mx-5">
        <nav ref={navRef} className="navigation flex items-center overflow-auto left-1 relative md:container md:mx-auto md:px-0 md:-left-3">
          {tabs.map((tab, index) => (
            <Link
              key={index}
              href={tab.href}
              onClick={(e) => {
                e.preventDefault()
                handleTabClick(tab.href)
              }}
              className={`whitespace-nowrap group relative !outline-none px-3 py-2 flex items-center rounded-md hover:text-neutral-300 transition-all ${activeTab === tab.href ? 'text-neutral-300' : 'text-neutral-400 '}`}
            >
              <tab.icon width="1.125em" height="1.125em" className="mr-2 hidden sm:inline-block" />
              <span className="navigation-link">
                {tab.name}
              </span>
            </Link>
          ))}
          <motion.div
            className="absolute bottom-0 h-0.5 bg-purple-300/45 text-neutral-300"
            initial={{ left: underlineStyles.left, width: underlineStyles.width }}
            animate={{ left: underlineStyles.left, width: underlineStyles.width }}
            transition={{
              type: 'spring',
              stiffness: 600,
              damping: 50,
            }}
          />
        </nav>
      </div>
    </div>
  )
}