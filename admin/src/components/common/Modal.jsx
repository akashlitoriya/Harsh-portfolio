import React from "react";
import CTAButton from "./CTAButton";

const Modal = ({
  title,
  description,
  onCancel,
  onSubmit,
  children,
  childrenClass,
  label1,
  label2,
  buttonClass,
}) => {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 backdrop-blur-sm bg-black bg-opacity-20 flex justify-center items-center">
      <div className="w-[700px] bg-cream_primary rounded-lg px-7 py-5 flex-col justify-center items-center space-y-5">
        <div className={"text-4xl text-center w-fit mx-auto " + childrenClass}>
          {children}
        </div>
        <h1 className="text-center text-3xl text-text_secondary tracking-wider font-semibold">
          {title}
        </h1>
        <p>{description}</p>

        <CTAButton
          label={label2}
          onClickHandler={onSubmit}
          isPrimary={true}
          className={buttonClass}
        />
        <CTAButton
          label={label1}
          onClickHandler={onCancel}
          isPrimary={false}
          className={buttonClass}
        />
      </div>
    </div>
  );
};

export default Modal;
