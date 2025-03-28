import React from "react";
import Link from "next/link";

export default function Button({
    link,
    hideIcon = false,
    children,
    disabled = false,
    className
}: { link: string, disabled?: boolean, children?: React.ReactNode | string, className?: string | null, hideIcon?: boolean | null }) {
    return (
        <div>
            <button disabled={disabled}>
                <Link href={link}
                    className={`inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg ${className ? className : "bg-red-700 hover:bg-[#1a1212] focus:ring-4 focus:ring-red-300 no-underline dark:focus:ring-red-900"}`}>
                    {children}

                    {!hideIcon &&
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    }
                </Link>
            </button>
        </div>
    )
}