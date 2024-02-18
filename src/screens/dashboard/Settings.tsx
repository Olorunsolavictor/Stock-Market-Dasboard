import React, { useState } from "react";
import notification from "../../assets/notificationIcon.svg";
import Terms from "components/settings/Terms";
import Privacy from "components/settings/Privacy";
import DeleteModal from "components/settings/DeleteModal";

const Settings: React.FC = () => {
  const [view, setView] = useState<number>(1);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };

  const handleView = (view: number) => {
    setView(view);
  };
  return (
    <div className="md:py-16 pt-4 md:px-6  px-4">
      {view === 1 && (
        <div className="flex flex-col gap-6  border-black w-full md:h-screen">
          <header className=" w-full  flex justify-between ">
            <p className="font-bold text-[#1E194E] text-[20px]">News</p>
            <img src={notification} alt="notification icon" />
          </header>
      
        </div>
      )}

      {view === 5 && <Terms handleView={handleView} />}
      {view === 6 && <Privacy handleView={handleView} />}
      {deleteModal && <DeleteModal handleDeleteModal={handleDeleteModal} />}
    </div>
  );
};

export default Settings;
