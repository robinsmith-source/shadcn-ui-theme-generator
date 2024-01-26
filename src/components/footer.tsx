import {Icons} from "@/components/misc/icons.tsx";

export default function Footer() {
    const SocialsContent = [
        {
            label: 'GitHub',
            href: 'https://github.com/robinsmith-source/shadcn-ui-theme-generator',
        }
    ];

    return (
        <footer className='z-50 flex w-full flex-col gap-2 md:flex-row md:justify-between'>
            <div>
                <p className='text-sm'>Copyright © 2024 - All right reserved</p>
            </div>
            <div className='flex flex-row gap-4'>
                {SocialsContent.map((social, index) => {
                    return (
                        <div key={index}>
                            <a
                                title={social.label}
                                href={social.href}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <Icons.gitHub className='h-4 w-4 text-secondary-foreground'/>
                            </a>
                        </div>
                    );
                })}
            </div>
        </footer>
    );
}
