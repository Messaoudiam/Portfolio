/* eslint-disable @next/next/no-img-element */
import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono border hover:bg-accent/50 transition-colors border-accent rounded-sm text-primary px-1 py-0.5",
        className
      )}
      {...props}
    />
  );
};

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[2] flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-primary">
          Zouggab Messaoud
        </h2>
        <h3 className="text-3xl font-caption"> web dev </h3>
        <p>
          I love coding things, currently learning at{" "}
          <Link href="https://www.wildcodeschool.com/fr-fr/campus/lyon">
            <Code>Wild Code School</Code>
          </Link>{" "}
          to become Concepteur Développeur d&apos;Applications. Living in{" "}
          <Code className="inline-flex items-center gap-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg/110px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg.png"
              style={{ width: 16, height: "auto" }}
              alt="french flag"
            />{" "}
            Lyon
          </Code>
        </p>
      </div>
      <div className="flex-1 max-md:m-auto ml-auto">
        <img
          src="https://avatars.githubusercontent.com/u/141563688?v=4"
          alt="messaoud's picture"
          className="w-full h-auto max-w-xs max-md:w-56"
        />
      </div>
    </Section>
  );
};
