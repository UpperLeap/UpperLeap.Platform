"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { IoChatbubblesOutline } from "react-icons/io5";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { SiStackblitz } from "react-icons/si";

const Faq = () => {
  const t = useTranslations();

  return (
    <section className="max-w-medium mx-auto my-52 flex px-5 gap-16 medium:flex-col">
      <div className="min-w-[400px] mobile:min-w-full">
        <div className="relative w-24 h-24">
          <div className="w-full h-full rounded-full faq-blob" />
          <div className="absolute w-full h-full blitz-rotate left-0 top-0">
            <span className="absolute left-1/2 -translate-x-1/2 top-2 text-2xl text-white">
              <SiStackblitz />
            </span>
          </div>
        </div>

        <h2 className="text-foreground text-5xl font-bold max-w-[25rem] my-5 leading-tight mobile:text-4xl">
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
