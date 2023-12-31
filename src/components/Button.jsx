import React from "react";

export default function Button({
    children,
    type = "button",
    className = "",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    ...props
}) {
    const buttonClasses = `px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`;

    return (
        <button className={buttonClasses} type={type} {...props}>
            {children}
        </button>
    );
}
