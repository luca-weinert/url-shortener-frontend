import {Button} from "@nextui-org/react";
import {HTMLAttributes} from "react";

interface ActionButtonProps {
    label: string;
    color?: "primary" | "secondary" | "success" | "warning" | "danger";
    action: () => void;
    disabled?: boolean;
    icon?: JSX.Element;
    className?: string;
}

export default function ActionButton({label, color, disabled, action, icon, className}: ActionButtonProps) {
    return (
        <Button 
            className={className}
            color={color}
            disabled={disabled}
            onClick={action}
        >
            {icon ? icon : null}
            <span className="ml-1">{label}</span>
        </Button>
    )
}