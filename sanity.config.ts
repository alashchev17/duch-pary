"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\dashboard\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { documentInternationalization } from "@sanity/document-internationalization";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "@/app/sanity/env";
import { CUSTOM_STRUCTURED_SCHEMAS, schema } from "@/app/sanity/schemaTypes";
import { structure } from "@/app/sanity/structure";

export default defineConfig({
  basePath: "/dashboard",
  projectId,
  dataset,
  title: "Steam Spirit Website",
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    documentInternationalization({
      supportedLanguages: [
        { id: "en", title: "English" },
        { id: "pl", title: "Polish" },
        { id: "ru", title: "Russian" },
      ],
      schemaTypes: CUSTOM_STRUCTURED_SCHEMAS,
      languageField: "language",
      weakReferences: true,
      apiVersion,
    }),
  ],
});
