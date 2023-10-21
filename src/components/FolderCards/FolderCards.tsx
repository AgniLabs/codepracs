import RoundedCard from "../RoundedCard/RoundedCard";

type FolderCardsProps = {
    slug: string;
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
            <p>No topic folders published.</p>
        )
    }</>)
}