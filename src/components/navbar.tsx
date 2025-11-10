"use client"

import { useCurrentUser } from "@/lib/services/supabase/hooks/useCurrentUser"
import Brand from "./brand"
import { Button } from "./ui/button"
import Link from "next/link"
import { LogoutButton } from "@/lib/services/supabase/components/logout-button"

export default function Navbar() {
    const { user, isLoading } = useCurrentUser()

    return (
        <div className="border-b bg-background h-header">
            <nav className="container mx-auto px-4 py-2 flex justify-between items-center h-full gap-4">
                <Brand/>
                {isLoading || user == null  ? (
                    <Button asChild>
                        <Link href='/auth/login'>Sign In</Link>
                    </Button>
                ) : (
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-muted-foreground">{user.user_metadata?.preferred_username || user.email}</span>
                        <LogoutButton/>
                    </div>
                )}
            </nav>
        </div>
    )
}