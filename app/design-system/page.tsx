"use client";

import React from "react";
import {
  Typography,
  ColorPalette,
  Button,
  Container,
  Flex,
  Grid,
} from "../../components/design-system";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Container>
        <div className="py-12">
          <Typography variant="header1" className="mb-8">
            Дизайн система
          </Typography>

          <section className="mb-12">
            <Typography variant="header2" className="mb-6">
              Типографика
            </Typography>

            <div className="mb-8">
              <Typography variant="blockName" uppercase className="mb-4">
                Desktop
              </Typography>

              <Flex direction="column" gap={8}>
                <div className="mb-6">
                  <Typography variant="header1" className="text-brand-primary">
                    Header 1
                  </Typography>
                  <Typography variant="body" className="opacity-70">
                    Family: Spectral SC | Weight: Medium | Size: 48px | Line
                    height: 80%
                  </Typography>
                </div>

                <div className="mb-6">
                  <Typography variant="header2" className="text-brand-primary">
                    Header 2
                  </Typography>
                  <Typography variant="body" className="opacity-70">
                    Family: Nevduplenysh | Size: 64px | Line height: 80%
                  </Typography>
                </div>

                <div className="mb-6">
                  <Typography variant="header3" className="text-brand-primary">
                    Header 3
                  </Typography>
                  <Typography variant="body" className="opacity-70">
                    Family: Spectral SC | Size: 32px | Weight: Regular | Line
                    height: 115%
                  </Typography>
                </div>

                <div className="mb-6">
                  <Typography variant="header4" className="text-brand-primary">
                    Header 4
                  </Typography>
                  <Typography variant="body" className="opacity-70">
                    Family: Spectral SC | Size: 24px | Weight: Regular | Line
                    height: 110%
                  </Typography>
                </div>

                <div className="mb-6">
                  <Typography
                    variant="blockName"
                    className="text-brand-primary"
                    uppercase
                  >
                    BLOK NAME
                  </Typography>
                  <Typography variant="body" className="opacity-70">
                    Family: Spectral SC | Weight: medium | Size: 20px | Letter
                    space: 10%
                  </Typography>
                </div>

                <div className="mb-6">
                  <Typography
                    variant="menuBottoms"
                    className="text-brand-primary"
                  >
                    menu-bottoms
                  </Typography>
                  <Typography variant="body" className="opacity-70">
                    Family: Manrope | Weight: semibold | Size: 20px | Line
                    height: 100%
                  </Typography>
                </div>

                <div className="mb-6">
                  <Typography variant="body">
                    Body text example. This is a paragraph with sample content
                    to demonstrate the body text style used throughout the
                    application.
                  </Typography>
                  <Typography variant="body" className="opacity-70">
                    Family: Manrope | Weight: regular | Size: 20px | Line
                    Height: 125%
                  </Typography>
                </div>
              </Flex>
            </div>

            <div>
              <Typography variant="blockName" uppercase className="mb-4">
                Mobile
              </Typography>

              <Typography variant="body" className="mb-4">
                View on mobile device to see responsive typography styles
              </Typography>
            </div>
          </section>

          <section className="mb-12">
            <Typography variant="header2" className="mb-6">
              Цвета
            </Typography>

            <ColorPalette />
          </section>

          <section className="mb-12">
            <Typography variant="header2" className="mb-6">
              Кнопки
            </Typography>

            <Flex direction="column" gap={8}>
              <div className="mb-8">
                <Typography variant="blockName" uppercase className="mb-4">
                  Варианты
                </Typography>

                <Flex gap={4}>
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="contact">Contact Button</Button>
                  <Button variant="secondary" className="uppercase">
                    связаться
                  </Button>
                </Flex>
              </div>
            </Flex>
          </section>

          <section className="mb-12">
            <Typography variant="header2" className="mb-6">
              Сетка
            </Typography>

            <div className="mb-8">
              <Typography variant="blockName" uppercase className="mb-4">
                Flex Layout
              </Typography>

              <div className="mb-4">
                <Flex gap={4} className="mb-4">
                  <div className="bg-non-accent-1 p-5 flex-1">Flex 1</div>
                  <div className="bg-non-accent-1 p-5 flex-1">Flex 2</div>
                  <div className="bg-non-accent-1 p-5 flex-1">Flex 3</div>
                </Flex>

                <Flex direction="column" gap={4}>
                  <div className="bg-non-accent-2 p-5">Column 1</div>
                  <div className="bg-non-accent-2 p-5">Column 2</div>
                  <div className="bg-non-accent-2 p-5">Column 3</div>
                </Flex>
              </div>
            </div>

            <div>
              <Typography variant="blockName" uppercase className="mb-4">
                Grid Layout
              </Typography>

              <Grid columns={3} gap={4}>
                <div className="bg-non-accent-1 p-5">Grid 1</div>
                <div className="bg-non-accent-1 p-5">Grid 2</div>
                <div className="bg-non-accent-1 p-5">Grid 3</div>
                <div className="bg-non-accent-1 p-5">Grid 4</div>
                <div className="bg-non-accent-1 p-5">Grid 5</div>
                <div className="bg-non-accent-1 p-5">Grid 6</div>
              </Grid>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
