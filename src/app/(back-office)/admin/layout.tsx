import * as React from "react"
import type { Metadata } from "next"

import { env } from "@/env.mjs"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Panel Administratora",
  description: "Zaloguj się jako administrator aby zarządzać sklepem",
}

interface BackOfficeAdminLayoutProps {
  children: React.ReactNode
}

export default function BackOfficeAdminLayout({
  children,
}: BackOfficeAdminLayoutProps) {
  return (
    <div className="flex h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14"></div>
      <main className="sm:pl-6">{children}</main>
    </div>
  )
}
