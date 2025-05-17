"use client"

import { useSession } from "next-auth/react"

export function useUser() {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  const user = session?.user ?? null

  return {
    user,
    loading,
    isAuthenticated: !!user
  }
}
