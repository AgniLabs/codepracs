import Image from "next/image";

export default function NotFoundPage() {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-2xl font-semibold">
                <Image
                    src="/404-transformed.png"
                    alt="404 Not Found"
                    width={300} // initial width
                    height={300} // initial height
                // layout="responsive"
                />
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
            </div>
        </>
    );
}