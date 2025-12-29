# TinaCMS Implementation Guide

## Overview

This project uses **TinaCMS** - a Git-backed headless CMS that allows you to edit content directly from your website. All content is stored as JSON files in the `content/` directory.

## 🚀 Getting Started

### 1. Start the Development Server

To run the project with TinaCMS:

```bash
npm run dev
```

This command will:
- Start the TinaCMS backend server on `http://localhost:4001`
- Start your Vite development server
- Auto-generate TypeScript types and GraphQL client

### 2. Access the Admin Interface

Once the server is running, you can access the TinaCMS admin interface at:

```
http://localhost:5173/admin/index.html
```

Or click on the TinaCMS edit icon that appears on your pages when running in development mode.

## 📁 Content Structure

### Menu Content

Menu data is stored in JSON files at:
- `content/menus/menu-new.json` - The default castle feast menu
- `content/menus/menu-original.json` - The original menu selection

Each menu file contains:
```json
{
  "title": "Menu Title",
  "slug": "menu-slug",
  "isDefault": true,
  "sections": [
    {
      "title": "Section Title",
      "subtitle": "Optional Subtitle",
      "items": [
        {
          "name": "Item Name",
          "description": "Item description with ingredients",
          "allergens": "Comma-separated allergens",
          "image": "/optional-image.jpg"
        }
      ]
    }
  ]
}
```

### Header Content

The menu header is stored at:
- `content/header/header.json`

Structure:
```json
{
  "title": "Bran Castle",
  "subtitle": "MENU",
  "description": "An exclusive culinary journey...",
  "heroImage": "/elegant-castle-hero.jpg"
}
```

## ✏️ Editing Content

### Using the TinaCMS Admin

1. Navigate to `/admin/index.html` in your browser
2. Select the collection you want to edit:
   - **Menus** - Edit menu sections and items
   - **Menu Header** - Edit the header title, subtitle, and description
3. Make your changes in the visual editor
4. Click **Save** - changes are immediately written to the JSON files
5. Refresh your main site to see the changes

### Editing Files Directly

You can also edit the JSON files directly in the `content/` directory. The changes will be reflected immediately when you save the file (hot module reloading is enabled).

## 🎨 Customizing the Schema

The TinaCMS schema is defined in `tina/config.ts`. You can modify:

- **Fields** - Add new fields to content types
- **Collections** - Add new content types
- **Validation** - Add required fields or validation rules
- **UI Options** - Customize the admin interface

After modifying the schema, the GraphQL client will be automatically regenerated when you restart the dev server.

### Example: Adding a Price Field

Edit `tina/config.ts` and add to the menu items fields:

```typescript
{
  type: "number",
  name: "price",
  label: "Price",
}
```

Then update your components to display the price.

## 📦 Building for Production

### Option 1: Local Development Only

If you only want to use TinaCMS in development:

```bash
npm run build:dev
```

This will build your site without TinaCMS functionality.

### Option 2: TinaCMS Cloud (Recommended for Production)

For production use with TinaCMS:

1. Sign up at [tina.io](https://tina.io)
2. Create a new project
3. Get your Client ID and Token
4. Add them to your environment variables:
   ```env
   VITE_TINA_CLIENT_ID=your_client_id
   VITE_TINA_TOKEN=your_token
   ```
5. Update `tina/config.ts` to use these variables:
   ```typescript
   clientId: import.meta.env.VITE_TINA_CLIENT_ID,
   token: import.meta.env.VITE_TINA_TOKEN,
   ```
6. Build and deploy:
   ```bash
   npm run build
   npm run deploy
   ```

With TinaCMS Cloud, you can:
- Edit content from the production site
- Have authentication for editors
- Use media management
- Collaborate with team members

## 🔧 Troubleshooting

### Admin interface not loading

- Make sure the dev server is running with `npm run dev`
- Check that port 4001 is not being used by another application
- Try clearing browser cache

### Changes not reflecting

- Make sure you saved the changes in the admin
- Check the browser console for errors
- Verify the JSON files in `content/` directory were updated

### TypeScript errors

- Run `npx tinacms dev -c "echo test"` to regenerate types
- Restart your IDE/editor
- Check `tina/__generated__/` directory exists

## 📚 Additional Resources

- [TinaCMS Documentation](https://tina.io/docs/)
- [TinaCMS GitHub](https://github.com/tinacms/tinacms)
- [Schema Customization](https://tina.io/docs/schema/)
- [Self-Hosted TinaCMS](https://tina.io/docs/self-hosted/overview/)

## 🎯 Next Steps

1. **Add More Content Types**: Create new collections for testimonials, gallery images, or special events
2. **Media Management**: Set up media library for uploading images
3. **Multi-language Support**: Add language variants for international audiences
4. **User Authentication**: Set up TinaCMS Cloud for secure content editing
5. **Preview Mode**: Add visual editing with inline controls

---

**Happy Editing! 🏰**

