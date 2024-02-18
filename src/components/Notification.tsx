import React from "react";
// import cancel from "../assets/cancel.svg";
interface NotificationProps {
  message: string;
  color: string;
  textColor: string;
  //   closeIcon: string;
  handleCloseNotification?: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  color,
  textColor,
  //   closeIcon,
  handleCloseNotification,
}) => {
  return (
    <div className="fixed flex justify-center items-center z-[100000]  bg-black/50 top-0 bottom-0 left-0 right-0">
      <div
        className={`${color} gap-10 flex items-center justify-between px-6 py-3 font-nunito text-xs md:text-base ${textColor}    rounded-md `}
      >
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Notification;
