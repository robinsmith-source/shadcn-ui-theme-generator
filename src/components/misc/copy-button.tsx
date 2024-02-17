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
import {useGeneratedTheme} from "@/lib/generatedThemeContext.ts";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import {useCopyToClipboard} from "usehooks-ts";


export default function CopyButton() {
    const {theme} = useGeneratedTheme()
    const cssCode = '@layer base ' + JSON.stringify({
        ':root': theme?.light,
        'dark': theme?.dark,
    }, null, '\t').replace(/"/g, '')

 const [copiedText, copyToClipboard] = useCopyToClipboard();


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Copy code</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] outline-none">
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
                            await copyToClipboard(cssCode)
                        }}
                        className="bg-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground"
                    >
                        {copiedText ? (
                            <CheckIcon className="mr-2 h-4 w-4"/>
                        ) : (
                            <CopyIcon className="mr-2 h-4 w-4"/>
                        )}
                        Copy
                    </Button>
                    <ScrollArea className="h-[28rem] rounded-md border p-4">
                    <div className="p-2 bg-muted rounded-md">
                        <pre className="text-sm">
                            <code>
                            {cssCode}
                            </code>
                        </pre>
                    </div>
                        </ScrollArea>
                </div>
            </DialogContent>
        </Dialog>)

}