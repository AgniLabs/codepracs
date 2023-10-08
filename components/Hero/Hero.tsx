const Hero = () => {
    return (
        <div className="flex max-w-[980px] flex-col items-center gap-2">
            <h1 className="text-center text-3xl font-extrabold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                Code Like a Boss.
            </h1>
            {/* <p className="max-w-[700px] text-center text-base text-muted-foreground sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                <strong>CodePracs</strong> === <strong>coding practices</strong>
            </p> */}
            <p className="max-w-[700px] text-center text-sm text-muted-foreground sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                Get coding best practices - tips, tricks, and guides that&apos;ll have you hit the ground running
            </p>

        </div>
    );
}

export default Hero;
