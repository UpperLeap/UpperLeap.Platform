"use client";

import { Switch } from "@/components/ui/switch";
import { gamesData } from "@/data/gamesData";
import useOrderDataStore from "@/stores/order";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import AgentsModal from "./AgentsModal";
import { useMemo } from "react";
import { Tooltip } from "@nextui-org/tooltip";

const Configurations = () => {
  const t = useTranslations();
  const { setOrderData, configuration } = useOrderDataStore();
  const { gameName } = useParams();
  const configurations =
    gamesData[gameName as keyof typeof gamesData].configurations;

  const filteredConfigurations = useMemo(() => {
    if (configuration.playWithBooster === true) {
      return Object.fromEntries(
        Object.entries(configurations).filter(([key]) => key !== "streamGames"),
      );
    }
    return configurations;
  }, [configurations, configuration.playWithBooster]);

  return (
    <div className="px-5 my-7 flex flex-col gap-5">
      {Object.entries(filteredConfigurations).map(([key, value]) => (
        <Tooltip
          classNames={{
            base: "bg-background-secondary rounded border-1 border-foreground-secondary/20",
            content: "p-0 rounded-md bg-background-secondary",
          }}
          content={
            <div>
              <div className="flex items-center border-b-1 border-foreground-secondary/20 p-3 gap-2">
                <h4 className="text-sm font-semibold text-foreground">
                  {t(value.label)}
                </h4>
                <span className="bg-primary/20 font-semibold border-1 border-primary/70 text-primary py-px px-1 rounded-sm text-[10px]">
                  +{value.percentage}%
                </span>
              </div>
              <p className="text-xs p-2">{t(value.tooltip)}</p>
            </div>
          }
          key={key}
          className="text-xs max-w-xs"
          radius="sm"
          placement="right"
        >
          <div className="flex items-center justify-between gap-2 select-none">
            <label
              htmlFor={key}
              className="text-foreground flex items-center gap-2 text-sm font-medium"
            >
              <span>{t(value.label)}</span>
              <span className=" bg-primary/20 font-semibold border-1 border-primary/70 text-primary py-px px-1.5 rounded-sm text-xs">
                +{value.percentage}%
              </span>
            </label>
            <Switch
              id={key}
              checked={configuration[key as keyof typeof configuration]}
              onCheckedChange={(checked) => {
                setOrderData({
                  configuration: {
                    ...configuration,
                    [key]: checked,
                  },
                });
              }}
            />
          </div>
        </Tooltip>
      ))}
      <AgentsModal />
    </div>
  );
};

export default Configurations;
