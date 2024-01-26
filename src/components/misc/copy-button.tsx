import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {CheckIcon, CopyIcon} from "lucide-react";
import {useState} from "react";

export default function CopyButton() {
    const [hasCopied, setHasCopied] = useState(false)
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="hidden md:flex">Copy code</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl outline-none">
                <DialogHeader>
                    <DialogTitle>Theme</DialogTitle>
                    <DialogDescription>
                        Copy and paste the following code into your CSS file.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-2">
                    <Button
                        size="sm"
                        onClick={async () => {

                            setHasCopied(true)
                        }}
                        className="bg-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground"
                    >
                        {hasCopied ? (
                            <CheckIcon className="mr-2 h-4 w-4"/>
                        ) : (
                            <CopyIcon className="mr-2 h-4 w-4"/>
                        )}
                        Copy
                    </Button>
                    {/*<code className="text-sm p-4 leading-normal">{themeCode}</code>*/}
                </div>
            </DialogContent>
        </Dialog>)

}