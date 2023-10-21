import { Icons } from "@/src/components/icons";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <Icons.spinner className="h-4 w-4 animate-spin items-center justify-center" />
}