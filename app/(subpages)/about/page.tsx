import Link from "next/link"

export const metadata = {
    title: 'About',
    description: 'About codepracs.',
    alternates: {
        canonical: 'https://codepracs.com/about',
    },
}

const About = () => {
    return (
        <article>
            <p>
                This site is the go-to place where all sorts of developers can get best practices with practical and proven tips, techniques, and guides to feel ready to jump right in
            </p>
        </article>
    )
}

export default About
