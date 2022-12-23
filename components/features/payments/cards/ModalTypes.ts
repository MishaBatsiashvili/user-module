import { CardItemProps } from "../../../../pages/profile/payments";

export type ModalPropsType = {
   showModal: boolean;
   setShowModal: (arg: boolean) => void;
} & CardItemProps;