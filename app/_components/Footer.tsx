import { Section } from "../_landing/Section";

export const Footer = () => {
  return (
    <footer>
      <Section className="md:my-20 lg:my-32 m-auto lg:px-6 px-4 max-w-none w-full border-t mt-32 py-8 gap-4 border-t-accent">
        <div className="max-w-2xl flex flex-col gap-2 m-auto font-mono">
          <p className="text-center text-2xl"> Made by Yours Truly </p>
          <p className="text-center text-xs"> Inspired by Melvlynx </p>
          <p className="text-muted-foreground text-center">
            2024 Messaoud Zouggab
          </p>
        </div>
      </Section>
    </footer>
  );
};
