import React from "react";
import CwitoButton from "components/CwitoButton";
import close from "../../assets/close.svg";
interface DeleteModalProps {
  handleDeleteModal: () => void;
}
const DeleteModal: React.FC<DeleteModalProps> = ({ handleDeleteModal }) => {
  return (
    <div className="fixed bg-black/50 z-50 flex justify-center items-center top-0 left-0 right-0 bottom-0 ">
      <div className="flex md:m-0 m-6 md:w-[407px] gap-2 flex-col px-3 py-2 md:px-5 md:py-4 rounded-2xl bg-white ">
        <header className="flex py-2 justify-between items-center">
          <p className="font-bold">Delete account</p>
          <button className=" font-bold" onClick={() => handleDeleteModal()}>
            <img src={close} alt="" />
          </button>
        </header>
        <p className=" text-xs text-justify ">
          Deleting your account means you will not have account your Cwito
          account anymore. Are you sure you want to delete your account?
        </p>
        <div className="flex-col flex gap-2 justify-center items-center">
          <CwitoButton
            onClick={() => handleDeleteModal()}
            title="Dont delete"
            color="bg-[#023436]"
            width="[90%]"
          />
          <button
            className=" py-3 w-[90%] rounded text-red-500 text-sm font-semibold"
            onClick={() => handleDeleteModal}
          >
            Continue to delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
