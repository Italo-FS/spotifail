import Button from "@components/shared/Button";
import { useDefaultContext } from "@hooks/DefaultContext";
import { Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";

const Modal = () => {
    const { handleOpenModal, openModal, headerText, bodyText, showModal } = useDefaultContext()

    return (
        <Dialog open={openModal} handler={handleOpenModal}>
            <DialogHeader>{headerText}</DialogHeader>
            <DialogBody>{bodyText}</DialogBody>
            <DialogFooter>
                {/* <Button
                    variant="text"
                    color="red"
                    onClick={() => showModal(false)}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button> */}
                <Button variant="gradient" color="green" onClick={() => showModal(false)}>
                    <span>OK</span>
                </Button>
            </DialogFooter>
        </Dialog>
    )
}

export default Modal;