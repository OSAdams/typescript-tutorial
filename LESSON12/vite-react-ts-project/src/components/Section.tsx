import { ReactNode } from "react";

// export const Section: React.FC<{ title: string }> = ({ children, title }) => {
//     return (
//         <section>
//             <h2>{ title }</h2>
//             <p>{ children }</p>
//         </section>
//     )
// }   !!! Old way

type SectionProps = {
    title?: string,
    children: ReactNode
};

export const Section = ({ children, title = 'My Subheading' }: SectionProps) => {
    return (
        <section>
            <h2>{ title }</h2>
            <p>{ children }</p>
        </section>
    )
}