import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface FolderProps {
    title: string;
    alt: string;
    href: string;
    src: StaticImageData;
}

export const Folder: React.FC<FolderProps> = ({
    title,
    alt,
    href,
    src
}) => {
    return (
        <Link href={href} className='folder'>
            <Image src={src} width={48} height={48} alt={alt} priority />
            <p>{title}</p>
        </Link>
    )
}