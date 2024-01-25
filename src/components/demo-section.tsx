import CalendarDemo from "@/components/example/calendar-demo.tsx";
import {CardDemo} from "@/components/example/card-demo.tsx";
import TabsDemo from "@/components/example/tabs-demo.tsx";
import TableDemo from "@/components/example/table-demo.tsx";
import {CommandDemo} from "@/components/example/command-demo.tsx";

export default function DemoSection() {
    return (
        <section className="grid grid-cols-3">
            <CardDemo/>
            <CalendarDemo/>
            <TabsDemo/>
            <TableDemo/>
            <CommandDemo/>
        </section>
    )
}
