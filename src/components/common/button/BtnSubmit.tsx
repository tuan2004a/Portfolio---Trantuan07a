import { ReactNode } from "react";

type BtnSubmitProps = {
    children: ReactNode;
    className: string;
    type: "submit" | "reset" | "button";
};

const BtnSubmit = ({ children, className, type }: BtnSubmitProps) => {
    return <button type={type} className={`text-center font-medium rounded-lg cursor-pointer ${className}`}>{children}</button>;
};

export default BtnSubmit;
