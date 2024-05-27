import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface IconProps {
    title: string;
    alt: string;
    href: string;
    src: string | StaticImageData;
    target?: string;
    rel?: string;
    open?: any;
    onClick?: () => void;
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
        <Link
            href={href}
            onClick={open}
            target={target}
            rel={rel}
            className='w-[30px] h-[30px]'
        >
            <div className={"icon"}>
                <Image src={src} width={30} height={30} alt={alt} priority />
                <span className="w-fit">{title}</span>
            </div>
        </Link>
    )
}