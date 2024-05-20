import { PropsWithChildren } from "react"

export type SectionProps = PropsWithChildren

export const Section = (props: SectionProps) => {
    return (
        <section className="max-w-3xl px-4 m-auto">
            {props.children}
        </section>
    )
}