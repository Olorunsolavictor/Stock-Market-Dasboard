import React from "react";
import arrowBack from "../../assets/arrowBack.svg";

interface TermsProps {
  handleView: (view: number) => void;
}
const Terms: React.FC<TermsProps> = ({ handleView }) => {
  return (
    <div className=" md:h-screen flex flex-col w-full gap-2">
      <header className="p-4 flex justify-start gap-4 items-center w-full ">
        <button onClick={() => handleView(1)}>
          <img src={arrowBack} alt="arrowBack" />
        </button>
        <p className="font-bold">Terms and conditions</p>
      </header>
      <div className="md:h-[80vh] md:overflow-auto justify-start items-start text-justify w-fullflex flex-col gap-2 text-xs">
        <p>
          These Terms and Conditions ("Terms") govern your use of the crypto
          exchange application ("Application") provided by [Company Name]
          ("Company"). By accessing or using the Application, you agree to be
          bound by these Terms. If you do not agree to these Terms, please do
          not use the Application.
        </p>
        <p className="flex gap-2">
          1.{" "}
          <span>
            Acceptance of Terms: By accessing and using the Application, you
            agree to comply with these Terms and any additional terms that we
            may provide to you.
          </span>
        </p>
        <p className="flex gap-2">
          2.{" "}
          <span>
            Eligibility: You must be of legal age and capable of forming a
            binding contract to use this Application. If you are under the legal
            age, you may only use the Application with the involvement of a
            parent or guardian.
          </span>
        </p>
        <p className="flex gap-2">
          3.{" "}
          <span>
            Registration: To use certain features of the Application, you may be
            required to register and create an account. You agree to provide
            accurate, current, and complete information during the registration
            process and to update such information as needed to keep it
            accurate, current, and complete.
          </span>
        </p>
        <p className="flex gap-2">
          4.{" "}
          <span>
            Security: You are solely responsible for maintaining the
            confidentiality and security of your account credentials (username
            and password). You agree to notify us immediately of any
            unauthorized access to or use of your account
          </span>
        </p>
        <p className="flex gap-2">
          5.{" "}
          <span>
            User Conduct: You agree not to: a. Use the Application for any
            illegal or unauthorized purpose. b. Transmit or post any harmful,
            unlawful, defamatory, obscene, or otherwise objectionable content.
            c. Interfere with or disrupt the Application or servers. d. Attempt
            to gain unauthorized access to any part of the Application.
          </span>
        </p>
        <p className="flex gap-2">
          6.{" "}
          <span>
            Intellectual Property: All content, logos, trademarks, and other
            intellectual property on the Application are owned or licensed by
            the Company. You agree not to copy, modify, distribute, transmit,
            display, perform, or create derivative works from any content
            without prior written consent from the Company.
          </span>
        </p>

        <p className="flex gap-2">
          7.{" "}
          <span>
            Privacy: Your use of the Application is subject to our Privacy
            Policy, which outlines how we collect, use, and disclose your
            information. By using the Application, you consent to the practices
            described in the Privacy Policy.
          </span>
        </p>
        <p className="flex gap-2">
          8.{" "}
          <span>
            Disclaimer of Warranty: The Application is provided "as is" without
            any warranty of any kind. We do not warrant that the Application
            will be error-free, secure, or uninterrupted. Your use of the
            Application is at your own risk
          </span>
        </p>
      </div>
    </div>
  );
};

export default Terms;
