import FolderCards from '~/components/FolderCards/FolderCards';
import fs from 'fs';
import path from 'path';
export const dynamic = 'force-dynamic';

export default function TopicsPage() {
    const folderPath = path.join(process.cwd(), 'topics');
    const files = fs.readdirSync(folderPath, { withFileTypes: true });
    const folders = files.filter(file => file.isDirectory()).map(dir => dir.name);

    return (
        <>
            <h1 className='mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl'>
                All code practices sub-topics
            </h1>
            <div className="mt-10 space-y-12 border-t border-gray-200 pt-10 dark:border-gray-700">
                <FolderCards slug={'/topics'} folders={folders} />
            </div>
        </>
    )
}