import Image, { StaticImageData } from "next/image";
import useModalStore from "../hooks/useModalStore";
import { close } from '@assets/images/index';

interface ModalProps {
    title: string;
    modalStyle?: string;
    containerStyle: string;
    src: StaticImageData;
    alt: string;
    children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
    title,
    modalStyle,
    containerStyle,
    src,
    alt,
    children
}) => {
    return (
        <dialog
            className="modal"
            open={useModalStore.getState().isOpen}
        >
            <div className="modalOverlay">
                <div className="modalContainer folderContainer">
                    <div className="modalBar">
                        <div className="modalBarLeft">
                            <Image src={src} alt={alt} />
                            <p>{title}</p>
                        </div>
                        <div
                            className="close-modal"
                            // onClick={skillModal.toggleModal}
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
