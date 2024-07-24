import {Input} from "@nextui-org/react";
import React from "react";

interface UrlInputProps {
    loading: boolean;
    setInputValue: (url: string) => void;
    inputValue: string;
    inputPlaceholder: string;
    inputLabel?: string;
    buttons?: JSX.Element[];
}

export default function UrlInput({inputValue, setInputValue, inputPlaceholder, inputLabel, loading, buttons}: UrlInputProps) {
    return (
        <>
            <div className="mt-1.5 relative">
                <Input
                    className="w-full"
                    type="text"
                    isClearable
                    value={inputValue}
                    onValueChange={setInputValue}
                    label={inputLabel}
                    placeholder={inputPlaceholder}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                {/*<div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex space-x-2">*/}
                {/*    {buttons ? buttons.map((button, index) => (*/}
                {/*        <React.Fragment key={index}>{button}</React.Fragment>*/}
                {/*    )) : null}*/}
                {/*</div>*/}
            </div>
        </>
    )
}