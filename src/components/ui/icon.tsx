import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface IconProps {
    title: string;
    alt: string;
    href: string;
    src: string | StaticImageData;
    target?: string;
    rel?: string;
    open?: () => void;
}

export const Icon: React.FC<IconProps> = ({
    title,
    alt,
    href,
    src,
    target,
    rel,
    open
}) => {
    return (
        <Link href={href} onClick={open} className="icon" target={target} rel={rel}>
            <Image src={src} width={48} height={48} alt={alt} priority />
            <p>{title}</p>
        </Link>
    )
}