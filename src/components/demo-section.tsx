
import {CardDemo} from "@/components/example/card-demo";
import TabsDemo from "@/components/example/tabs-demo";
import TableDemo from "@/components/example/table-demo";
import {CommandDemo} from "@/components/example/command-demo";
import {ChatDemo} from "@/components/example/chat-demo";

import {CalendarDemo} from "@/components/example/calendar-demo.tsx";
import {DataTableDemo} from "@/components/example/dataTable-demo.tsx";

export default function DemoSection() {
    return (
        <section className="grid place-items-center
         grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CardDemo/>
            <CalendarDemo/>
            <TabsDemo/>
            <TableDemo/>
            <CommandDemo/>
            <ChatDemo/>
            <DataTableDemo/>
        </section>
    )
}
