"use client";

import { useGet } from "@/hooks/api/useGet";
import useOrderDataStore from "@/stores/order";
import { cn } from "@/utils/utils";
import { Skeleton } from "@nextui-org/skeleton";
import { Tooltip } from "@nextui-org/tooltip";
// import { Select, SelectItem } from "@nextui-org/select";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";

type Agent = {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
};

type AgentsResponse = {
  status: number;
  data: Agent[];
};

const AgentSelect = () => {
  const t = useTranslations();
  const { gameName } = useParams();
  const { agents, setOrderData } = useOrderDataStore();
  const { data, isLoading, isError } = useGet<AgentsResponse>({
    endpoint: `https://valorant-api.com/v1/agents?isPlayableCharacter=true`,
    queryKey: [`${gameName}-agents`],
  });

  // const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const value = e.target.value;
  //   if (!value) {
  //     setOrderData({ agents: [] });

  //     return;
  //   }
  //   setOrderData({ agents: value.split(",") });
  // };

  const handleSelect = (agent: string) => {
    if (agents.includes(agent)) {
      setOrderData({ agents: agents.filter((a) => a !== agent) });
    } else {
      setOrderData({ agents: [...agents, agent] });
    }
  };

  return (
    <div>
      {data?.data?.length && (
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {data?.data.map((agent) => (
            <Tooltip
              placement="top"
              key={agent.uuid}
              content={agent.displayName}
              className="capitalize"
            >
              <button
                className={cn(
                  "p-2 rounded-lg bg-background/50 border border-foreground-secondary/10 hover:bg-foreground-secondary/20 duration-300",
                  agents.includes(agent.displayName) &&
                    "bg-foreground-secondary/20",
                )}
                onClick={() => handleSelect(agent.displayName)}
              >
                <Image
                  src={agent.displayIcon}
                  alt={agent.displayName}
                  width={50}
                  height={50}
                  className="object-cover"
                  loading="lazy"
                />
              </button>
            </Tooltip>
          ))}
        </div>
      )}
      {isLoading && (
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} className="w-14 h-14 rounded-lg" />
          ))}
        </div>
      )}
      {isError && (
        <p className="text-foreground-secondary text-lg text-center">
          {t("errors.default")}
        </p>
      )}
    </div>
  );
};

export default AgentSelect;
