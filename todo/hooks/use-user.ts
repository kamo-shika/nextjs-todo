"use client"

import { useEffect, useState } from "react"
import { auth } from "@/auth"
import { Session } from "next-auth"

export function useUser() {
  const [user, setUser] = useState<Session["user"] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const session = await auth()
        setUser(session?.user ?? null)
      } catch (error) {
        console.error("Failed to fetch user:", error)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  return {
    user,
    loading,
    isAuthenticated: !!user,
  }
}
