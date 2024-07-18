"use client"
import { Button } from "@/ui/button"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { GithubIcon, GoogleIcon, LoadingIcon } from "./icons"

export const OAuth = () => {
	const [loading, setLoading] = useState({
		google: false,
		github: false,
	})
	const onAuth = (provider: "github" | "google") => {
		setLoading((prev) => ({ ...prev, [provider]: true }))
		signIn(provider)
	}
	return (
		<div className="grid grid-cols-2 gap-4">
			<Button
				variant={"outline"}
				onClick={() => onAuth("github")}
				disabled={loading.google || loading.github}
			>
				{loading.github ? (
					<LoadingIcon className="fill-foreground ml-2 scale-75" />
				) : (
					<GithubIcon className="size-6 ml-2" />
				)}
				گیت هاب
			</Button>
			<Button
				variant={"outline"}
				onClick={() => onAuth("google")}
				disabled={loading.google || loading.github}
			>
				{loading.google && (
					<LoadingIcon className="fill-foreground ml-2 scale-75" />
				)}
				<GoogleIcon className="size-5 ml-2" />
				گوگل
			</Button>
		</div>
	)
}
