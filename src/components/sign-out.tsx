"use client"
import { Button } from "@/ui/button"
import { LogOutIcon } from "lucide-react"
import { signOut } from "next-auth/react"
import { useState } from "react"
import { LoadingIcon } from "./icons"

export const SignOut = () => {
	const [loading, setLoading] = useState(false)
	const onSignOut = () => {
		setLoading(true)
		signOut()
	}
	return (
		<Button onClick={onSignOut} disabled={loading} variant={"secondary"}>
			{loading ? (
				<LoadingIcon className="fill-foreground ml-2 scale-75" />
			) : (
				<LogOutIcon className="ml-2 scale-75 text-destructive" />
			)}
			خروج از حساب
		</Button>
	)
}
