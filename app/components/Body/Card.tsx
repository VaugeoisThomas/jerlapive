import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
    title?: string,
    id?: string
}>

export default function Card({ title, children, id }: Props) {
    return (
        <div className="flex-col min-w-1/2">
            <h1 className="mb-5 text-center">{title}</h1>
            <div id={id} className="bg-foreground text-gray-background">
                {children}
            </div>
        </div>
    )
}