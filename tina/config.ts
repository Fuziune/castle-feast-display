import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.VITE_TINA_CLIENT_ID || null,
  // Get this from tina.io
  token: process.env.VITE_TINA_TOKEN || null,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: { 
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "menuHeader",
        label: "Menu Header",
        path: "public/content/header",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
          },
        ],
      },
      {
        name: "menu",
        label: "Menus",
        path: "public/content/menus",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Menu Title",
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
          },
          {
            type: "boolean",
            name: "isDefault",
            label: "Set as Default Menu",
            description: "If enabled, this menu will be shown on the homepage",
          },
          {
            type: "object",
            name: "sections",
            label: "Menu Sections",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title || "Untitled Section" };
              },
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Section Title",
                required: true,
              },
              {
                type: "string",
                name: "subtitle",
                label: "Section Subtitle",
              },
              {
                type: "object",
                name: "items",
                label: "Menu Items",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.name || "Untitled Item" };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Item Name",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "allergens",
                    label: "Allergens",
                    description: "Comma-separated list of allergens",
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Item Image (Optional)",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});

