import RoundedCard from "../RoundedCard/RoundedCard";

type FolderCardsProps = {
    slug?: string;
    folders: string[];
};

export default function FolderCards({ slug, folders }: FolderCardsProps) {
    return (<>{
        folders?.length ? (
            <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                {folders.map((folder) => (
                    <RoundedCard key={folder} _id={folder} title={folder} slug={`${slug}/${folder}`} />
                ))}
            </div>
        ) : (
            <h1 className='mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl'>
                No sub-topic folders published
            </h1>
        )
    }</>)
}