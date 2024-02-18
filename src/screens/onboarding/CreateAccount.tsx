import React, { useEffect, useState } from "react";
import OnboardingLeftSide from "../../components/onboarding/OnboardingLeftSide";
import CwitoInput from "components/CwitoInput";
import CwitoButton from "components/CwitoButton";
import { useNavigate } from "react-router-dom";
import arrowBack from "../../assets/arrowBack.svg";
import Notification from "../../components/Notification";

const CreateAccount: React.FC = () => {
  // const [userIP, setUserIP] = useState("");
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [successNotification, setSuccessNotification] =
    useState<boolean>(false);
  const [errorNotification, setErrorNotification] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const closeNotification = () => {
    setSuccessNotification(false);
    setErrorNotification(false);
  };

  const handleEmailChange = (newValue: string) => {
    setUserEmail(newValue);
    setEmailError(
      validateEmail(newValue) ? null : "Please enter a valid email address"
    );
  };


  const handleJoinNewsletter = async (userEmail: string) => {};

  return (
    <div className=" w-[100vw] h-screen   flex  overflow-auto ">
      {successNotification && (
        <Notification
          message={message}
          color={"bg-green-400"}
          textColor={"text-white"}
          handleCloseNotification={closeNotification}
        />
      )}
      {errorNotification && (
        <Notification
          message={message}
          color={"bg-red-400"}
          textColor={"text-white"}
          handleCloseNotification={closeNotification}
        />
      )}
      {/* LEFT SIDE  */}
      <div className="hidden  md:block w-[43%]">
        <OnboardingLeftSide />
      </div>

      {/* RIGHT SIDE */}
      <section className=" w-full bg-white   md:w-[60%]  h-[100%]">
        <div className="flex flex-col   justify-start items-start px-5 py-11 md:p-[20%] w-full h-full">
          <div className="w-full bg-white md:w-[480px] h-full md:h-auto gap-6 md:gap-8   flex flex-col justify-start items-center">
            <header className="w-full py-4 flex md:block justify-start items-center gap-2 ">
              <img
                src={arrowBack}
                className="block md:hidden"
                alt="arrow back"
              />
              <h3 className="font-bold text-[#002255] text-base sm:text-2xl">
                Welcome, Join our newsletters
              </h3>
            </header>

            <CwitoInput
              type="email"
              label="Email"
              value={userEmail}
              width="md:w-[335px] w-full"
              placeholder="Please, Enter your email"
              onChange={handleEmailChange}
              error={emailError}
            />
            <CwitoButton
              onClick={() => navigate("/dashboard")}
              title="Join"
              color="bg-[#002255]"
              width="md:w-[335px] w-full"
              isLoading={isLoading}
              disabled={emailError || !userEmail ? true : false}
            />
            <p className="text-center text-[#002255] text-[10px] ">
              By continuing, you agree to our Privacy Policy and Terms & <br />
              Conditions too
            </p>
            <div className="flex text-sm mt-[60%] md:mt-6 justify-center gap-6 items-center ">
              {/* <p className="text-sm font-medium">Join Now</p> */}
              <button
                onClick={() => navigate("/dashboard")}
                className="py-[6px] px-3 rounded-lg border border-black font-semibold"
              >
                Cobntinue
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateAccount;
