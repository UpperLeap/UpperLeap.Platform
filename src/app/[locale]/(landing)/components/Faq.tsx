"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { IoChatbubblesOutline } from "react-icons/io5";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { SiStackblitz } from "react-icons/si";

const Faq = () => {
  const t = useTranslations();

  return (
    <section className="max-w-medium mx-auto my-52 flex px-5 gap-16">
      <div className="min-w-[400px]">
        <div className="relative w-24 h-24 rounded-full faq-blob">
          <span className="absolute left-1/2 -translate-x-1/2 -top-7 text-2xl text-foreground">
            <SiStackblitz />
          </span>
        </div>
        <h2 className="text-foreground text-5xl font-bold max-w-[25rem] my-5 leading-tight">
          {t("landing.faq")}
        </h2>
        <Link
          href="/contact-us"
          className="flex items-center gap-2 text-foreground text-lg font-semibold"
        >
          <span>
            <IoChatbubblesOutline className="text-2xl" />
          </span>
          <span>{t("landing.stillNeedHelp")}</span>
        </Link>
      </div>
      <div className="flex-grow">
        <Accordion className="w-full">
          {Array.from({ length: 5 }, (_, i) => (
            <AccordionItem key={i} title={t(`landing.accordion.${i}.question`)}>
              {t(`landing.accordion.${i}.answer`)}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
