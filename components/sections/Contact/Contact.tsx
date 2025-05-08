"use client";

import { FormState, sendToTelegram } from "@/app/actions";
import { urlFor } from "@/app/lib/sanity-utils";
import { Contact as ContactData } from "@/app/lib/types";
import {
  Button,
  Container,
  Flex,
  Typography,
} from "@/components/design-system";
import { Input, Checkbox } from "@/components/design-system/Input";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";
import React, { useActionState, useCallback, useEffect, useState } from "react";
import { translationsMapByLanguage } from "../consts";
import { useLanguage } from "@/components/design-system/LanguageSwitcher";

export type ContactProps = {
  data: ContactData;
};

const successStatusTranslations = {
  ru: "Успешно отправлено!",
  en: "Successfully sent!",
  pl: "Pomyślnie wysłane!",
};

const initialState: FormState = {
  fieldErrors: {},
  globalError: "",
  success: false,
};

export const Contact: React.FC<ContactProps> = ({ data }) => {
  const { title, description, contactImage } = data;
  const { currentLanguage } = useLanguage();
  const sentToTelegramWithLang = useCallback(
    (prevState: FormState, formData: FormData) => {
      return sendToTelegram(prevState, formData, currentLanguage);
    },
    [currentLanguage],
  );

  const [formState, formAction] = useActionState(
    sentToTelegramWithLang,
    initialState,
  );

  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: "",
    acceptedPolicy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  useEffect(() => {
    if (formState.globalError) {
      toast({
        title: formState.globalError,
        variant: "destructive",
      });
    } else if (formState.fieldErrors) {
      const firstError = Object.values(formState.fieldErrors)[0];
      if (firstError) {
        toast({
          title: firstError,
          variant: "destructive",
        });
      }
    }

    if (formState.success) {
      toast({
        title: successStatusTranslations[currentLanguage.code],
      });
      setFields({
        name: "",
        email: "",
        message: "",
        acceptedPolicy: false,
      });
    }
  }, [
    formState.success,
    formState.globalError,
    formState.fieldErrors,
    currentLanguage,
  ]);

  return (
    <div id="contact" className="bg-white text-black py-8 md:py-16">
      <Container>
        <Flex className="gap-4 lg:gap-6 items-stretch lg:flex-row flex-col">
          <Flex className="relative w-full lg:w-1/2 h-[inherit] rounded-design overflow-hidden">
            <Image
              src={urlFor(contactImage).url()}
              alt={`Фото: ${title}`}
              width={0}
              height={0}
              sizes="100vw"
              className="block w-full h-full object-cover"
            />
            <Flex
              direction="column"
              className="absolute top-0 left-0 z-10 text-white p-6 gap-3 w-full"
            >
              <Typography variant="header1">{title}</Typography>
              <Typography variant="body">{description}</Typography>
            </Flex>
          </Flex>
          <form
            action={formAction}
            className="flex flex-col w-full lg:w-1/2 p-6 md:p-9 bg-brand-primary gap-5 rounded-design"
          >
            <Input
              name="name"
              value={fields.name}
              onChange={handleChange}
              state={formState.fieldErrors?.name ? "error" : "default"}
              placeholder={translationsMapByLanguage.name[currentLanguage.code]}
            />
            <Input
              name="email"
              value={fields.email}
              onChange={handleChange}
              state={formState.fieldErrors?.email ? "error" : "default"}
              placeholder={
                translationsMapByLanguage.email[currentLanguage.code]
              }
            />
            <Input
              name="message"
              value={fields.message}
              onChange={handleChange}
              state={formState.fieldErrors?.message ? "error" : "default"}
              placeholder={`${translationsMapByLanguage.message[currentLanguage.code]}...`}
              textarea
            />
            <Checkbox
              checked={fields.acceptedPolicy}
              state={
                formState.fieldErrors?.acceptedPolicy ? "error" : "default"
              }
              onCheckedChange={(checked) =>
                setFields((prev) => ({ ...prev, acceptedPolicy: checked }))
              }
              name="accepted-policy"
              label={
                translationsMapByLanguage.acceptConditions[currentLanguage.code]
              }
            />
            <Button
              variant="contact"
              className="uppercase mt-auto w-full md:w-auto"
            >
              {translationsMapByLanguage.callToAction[currentLanguage.code]}
            </Button>
          </form>
        </Flex>
      </Container>
    </div>
  );
};
