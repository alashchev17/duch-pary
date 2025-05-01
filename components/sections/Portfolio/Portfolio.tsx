"use client";

import React, { useMemo } from "react";

import { Portfolio as PortfolioData } from "@/app/lib/types";

import {
  Button,
  Container,
  Flex,
  Typography,
} from "@/components/design-system";
import { SectionImage } from "../SectionImage";
import { SectionVideo } from "../SectionVideo";

import { useIsMobile } from "@/hooks/useIsMobile";
import Link from "next/link";
import { smoothScrollToAnchor } from "@/utils/smoothScroll";

export type PortfolioProps = {
  data: PortfolioData;
};

// Вспомогательная функция для группировки массива по N элементов
function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

export const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  const { title, description, mediaItems } = data;
  const { isMobile, isLarge } = useIsMobile();

  const heightOfRow = useMemo(() => {
    if (isMobile) return 410;
    if (isLarge) return 550;
    return 725;
  }, [isLarge, isMobile]);

  const gapBetweenRows = useMemo(() => {
    if (isMobile) return 8;
    if (isLarge) return 12;
    return 24;
  }, [isMobile, isLarge]);

  // Группируем картинки по 3 в строке
  const rows = chunkArray(mediaItems, 3);

  return (
    <div
      id="portfolio"
      className="bg-white pt-9 pb-9 md:pt-[110px] md:pb-[85px]"
    >
      <Container>
        <Flex className="md:pb-[45px] items-start flex-col lg:flex-row lg:items-end gap-9 lg:gap-[190px]">
          <Flex direction="column" className="gap-5 lg:gap-2">
            <Typography variant="header2" className="text-brand-bg">
              {title}
            </Typography>
            <Typography variant="body" className="text-brand-bg">
              {description}
            </Typography>
          </Flex>
          <Link
            href="#contact"
            onClick={(e) => smoothScrollToAnchor(e, "#contact")}
          >
            <Button
              variant="primary"
              className="border-none text-nowrap uppercase w-full md:w-auto"
            >
              Записаться на консультацию
            </Button>
          </Link>
        </Flex>
        <div
          className="flex flex-col mt-8"
          style={{
            gap: gapBetweenRows,
          }}
        >
          {rows.map((row, rowIdx) => {
            const firstTwo = row.slice(0, 2);
            const last = row[2];

            const isEven = rowIdx % 2 === 0;

            const rowDirection = isMobile
              ? isEven
                ? "column"
                : "column-reverse"
              : isEven
                ? "row"
                : "row-reverse";

            return (
              <Flex
                direction={rowDirection}
                key={rowIdx}
                style={{
                  gap: gapBetweenRows,
                }}
              >
                {/* Flex-контейнер для первых двух элементов */}
                <Flex
                  direction={isMobile ? "row" : "column"}
                  className="w-full md:w-auto md:flex-1"
                  style={{
                    height: `${isMobile ? heightOfRow / 4 : heightOfRow}px`,
                    maxHeight: `${isMobile ? heightOfRow / 4 : heightOfRow}px`,
                    gap: gapBetweenRows,
                  }}
                >
                  {firstTwo.map((item, idx) => (
                    <div
                      key={idx}
                      className="min-w-[calc(50%-8px)] md:min-w-[unset] md:w-full h-full max-h-full flex-1 rounded-design overflow-hidden shadow-lg bg-gray-100"
                    >
                      {item.type === "image" ? (
                        <SectionImage
                          className="object-cover w-full h-full"
                          src={item.image.url}
                          alt={item.alt}
                        />
                      ) : (
                        <div
                          className="relative w-full h-full overflow-hidden"
                          style={{
                            minHeight: heightOfRow / 2 - gapBetweenRows,
                            minWidth: isMobile ? "100%" : "auto",
                          }}
                        >
                          <SectionVideo
                            url={item.video.url}
                            className="w-full [&>video]:object-cover [&>video]:w-full [&>video]:h-full"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                  {/* Если только один элемент в firstTwo, добавим пустой блок для выравнивания */}
                  {firstTwo.length < 2 && <div className="flex-1" />}
                </Flex>
                {/* Последний элемент строки (если есть) */}
                {last ? (
                  <div
                    className="flex-1 rounded-design overflow-hidden shadow-lg bg-gray-100 min-w-[65%]"
                    style={{
                      height: `${isMobile ? (heightOfRow / 4) * 3 : heightOfRow}px`,
                      maxHeight: `${isMobile ? (heightOfRow / 4) * 3 : heightOfRow}px`,
                      width: isMobile ? "100%" : "auto",
                    }}
                  >
                    {last.type === "image" ? (
                      <SectionImage
                        className="object-cover w-full h-full"
                        src={last.image.url}
                        alt={last.alt}
                      />
                    ) : (
                      <div
                        className="relative w-full h-full overflow-hidden"
                        style={{
                          height: `${isMobile ? (heightOfRow / 4) * 3 : heightOfRow}px`,
                          maxHeight: `${isMobile ? (heightOfRow / 4) * 3 : heightOfRow}px`,
                        }}
                      >
                        <SectionVideo
                          url={last.video.url}
                          className="w-full [&>video]:object-cover"
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  // Если в строке только 1 или 2 элемента, добавим пустой блок для выравнивания
                  <div className="flex-1" />
                )}
              </Flex>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
