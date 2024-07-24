import {Button} from "@nextui-org/react";
import {CopyIcon} from "@nextui-org/shared-icons";

interface CopyButtonProps {
    valueToCopy: string;
    color?: "primary" | "secondary" | "success" | "warning" | "danger";
    className?: string;
}

export default function CopyButton({ valueToCopy, color, className }: CopyButtonProps) {
    
    function handleCopyButtonClick() {
        if (valueToCopy) {
            navigator.clipboard.writeText(valueToCopy);
        }
    }
    
    return (
        <Button
            color={color}
            className={className} 
            onClick={handleCopyButtonClick}>
            <CopyIcon />
        </Button> 
    )
}