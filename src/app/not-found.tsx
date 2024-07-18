"use client"

import { Button } from "@/ui/button"
import { useRouter } from "next/navigation"

export default function NotFoundPage() {
	const router = useRouter()
	return (
		<div>
			<div className="my-32 space-y-4 text-center">
				<h1 className="text-center text-4xl font-extrabold">
					متاسفانه صفحه مورد نظر یافت نشد!
				</h1>
				<Button variant={"secondary"} onClick={() => router.back()}>
					برگشت به صفحه قبلی
				</Button>
			</div>
		</div>
	)
}
