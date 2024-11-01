"use client"

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal"
import { Tooltip } from "@nextui-org/tooltip"
import { useTranslations } from "next-intl"
import { RiEdit2Line } from "react-icons/ri"
import CountrySelect from "./CountrySelect"
import { Button } from "@nextui-org/button"
import { useAction } from "@/hooks/api/useAction"
import { useParams } from "next/navigation"
import { useState, useCallback } from "react"
import toast from "react-hot-toast"

export default function EditOrder({ orderVpn }: { orderVpn: string | null }) {
  const t = useTranslations()
  const { orderId } = useParams()
  const [country, setCountry] = useState<string>(orderVpn || "")
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure()

  const { mutate, isPending } = useAction({
    method: "PUT",
    endpoint: `/orders/${orderId}/vpn`,
    mutationOptions: {
      onSuccess: () => {
        toast.success(t("orders.vpnAddedSuccessfully"))
        onClose()
      },
    },
  })

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (country) {
      mutate({ orderId, vpnCountry: country })
    } else {
      toast.error(t("orders.selectCountryError"))
    }
  }, [country, mutate, orderId, t])

  return (
    <>
      <Tooltip
        content={t("orders.editOrder")}
        className="text-xs max-w-xs"
        radius="sm"
        placement="top"
      >
        <Button
          isIconOnly
          radius="sm"
          className="text-lg"
          size="md"
          variant="flat"
          onPress={onOpen}
        >
          <RiEdit2Line />
        </Button>
      </Tooltip>
      <Modal
        radius="sm"
        shouldBlockScroll
        motionProps={{
          variants: {
            initial: { opacity: 0, scale: 1.1 },
            enter: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
            exit: { opacity: 0, scale: 0.9, transition: { duration: 0.1 } },
          },
        }}
        placement="center"
        size="md"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-background-secondary card-shadow"
      >
        <ModalContent className="duration-300 ease-in-out overflow-hidden">
          <ModalHeader className="text-foreground font-medium">
            {t("orders.editOrder")}
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit} id="edit-order-form">
              <CountrySelect country={country} setCountry={setCountry} />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              className="text-white"
              radius="sm"
              color="primary"
              type="submit"
              isLoading={isPending}
              isDisabled={isPending || !country}
              form="edit-order-form"
            >
              {t("common.save")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}