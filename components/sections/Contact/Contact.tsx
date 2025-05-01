"use client";

import { urlFor } from "@/app/lib/sanity-utils";
import { Contact as ContactData } from "@/app/lib/types";
import {
  Button,
  Container,
  Flex,
  Typography,
} from "@/components/design-system";
import { Input, Checkbox } from "@/components/design-system/Input";
import Image from "next/image";
import React from "react";

export type ContactProps = {
  data: ContactData;
};

export const Contact: React.FC<ContactProps> = ({ data }) => {
  const { title, description, contactImage } = data;
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
          <Flex
            direction="column"
            className="w-full lg:w-1/2 p-6 md:p-9 bg-brand-primary gap-5 rounded-design"
          >
            <Input placeholder="Имя" />
            <Input placeholder="Почта" />
            <Input placeholder="Сообщение..." textarea />
            <Checkbox label="Принять условия пользования" />
            <Button
              variant="contact"
              className="uppercase mt-auto w-full md:w-auto"
            >
              Записаться на консультацию
            </Button>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};
