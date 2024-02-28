import Image, { StaticImageData } from "next/image";
import { close } from '@images';

interface ModalProps {
    title: string;
    modalStyle?: string;
    containerStyle: string;
    src: StaticImageData;
    alt: string;
    children?: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
    title,
    modalStyle,
    containerStyle,
    src,
    alt,
    isOpen,
    onClose,
    children
}) => {
    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    }
    return (
        <dialog
            className={modalStyle}
            open={isOpen}
        >
            <div className="modalOverlay">
                <div className={containerStyle}>
                    <div className="modalBar">
                        <div className="modalBarLeft">
                            <Image src={src} alt={alt} />
                            <p>{title}</p>
                        </div>
                        <div
                            className="close-modal"
                            onClick={() => onChange(!isOpen)}
                        >
                            <Image src={close} width={12} height={12} alt="close-button" />
                        </div>
                    </div>
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
        </dialog>
    )
}
