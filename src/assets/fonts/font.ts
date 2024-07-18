import localFont from "next/font/local"

const dana = localFont({
	src: [
		{
			path: "./woff2/Dana-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "./woff2/Dana-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./woff2/Dana-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "./woff2/Dana-DemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "./woff2/Dana-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "./woff2/Dana-Black.woff2",
			weight: "800",
			style: "normal",
		},
		{
			path: "./woff2/Dana-fat.woff2",
			weight: "900",
			style: "normal",
		},
	],
})

const irsans = localFont({
	src: [
		{
			path: "./irsans/IRANSansX-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "./irsans/IRANSansX-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./irsans/IRANSansX-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "./irsans/IRANSansX-DemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "./irsans/IRANSansX-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "./irsans/IRANSansX-Black.woff2",
			weight: "800",
			style: "normal",
		},
		{
			path: "./irsans/IRANSansX-ExtraBlack.woff2",
			weight: "900",
			style: "normal",
		},
		{
			path: "./irsans/IRANSansX-Heavy.woff2",
			weight: "1000",
			style: "normal",
		},
	],
})

export { dana, irsans }
