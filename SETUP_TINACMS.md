# TinaCMS Setup - Quick Reference

## ✅ What Has Been Implemented

### 1. TinaCMS Core Setup
- ✅ Installed TinaCMS and CLI packages
- ✅ Created `tina/config.ts` with schema definitions
- ✅ Generated GraphQL client and TypeScript types
- ✅ Updated npm scripts to run TinaCMS with Vite

### 2. Content Structure
Created the following content collections:

#### Menu Header (`content/header/header.json`)
- Title (e.g., "Bran Castle")
- Subtitle (e.g., "MENU")
- Description
- Hero Image

#### Menus (`content/menus/*.json`)
- Menu title and slug
- Multiple sections with titles and subtitles
- Menu items with:
  - Name
  - Description
  - Allergens
  - Optional images

### 3. Updated Components
- ✅ **MenuHeader.tsx** - Now loads content from TinaCMS
- ✅ **MenuNew.tsx** - Loads menu-new.json content
- ✅ **Index.tsx** - Loads menu-original.json content

### 4. Configuration Files
- ✅ `tina/config.ts` - TinaCMS schema and configuration
- ✅ `.gitignore` - Added TinaCMS generated files
- ✅ `package.json` - Updated scripts to use TinaCMS

## 🚀 How to Use

### Start Development Server
```bash
npm run dev
```

This will:
1. Start TinaCMS backend on port 4001
2. Start Vite dev server (usually port 5173)
3. Auto-generate GraphQL schema and types

### Access Admin Interface
Open your browser to:
```
http://localhost:5173/admin/index.html
```

### Edit Content
1. Go to the admin interface
2. Choose a collection (Menus or Menu Header)
3. Click on an entry to edit
4. Make changes in the form
5. Click "Save" - changes are written to JSON files immediately
6. View changes on your site (auto-refreshes)

## 📁 File Structure

```
castle-feast-display/
├── content/                    # Content files (editable via TinaCMS)
│   ├── header/
│   │   └── header.json        # Menu header content
│   └── menus/
│       ├── menu-new.json      # Default menu
│       └── menu-original.json # Original menu
│
├── tina/                      # TinaCMS configuration
│   ├── config.ts             # Schema definitions
│   └── __generated__/        # Auto-generated (gitignored)
│       ├── client.ts         # GraphQL client
│       └── types.ts          # TypeScript types
│
├── public/
│   └── admin/                # TinaCMS admin UI (auto-generated)
│
└── src/
    ├── components/
    │   └── MenuHeader.tsx    # Uses TinaCMS data
    └── pages/
        ├── MenuNew.tsx       # Uses TinaCMS data
        └── Index.tsx         # Uses TinaCMS data
```

## 🎯 Key Features

### Visual Content Editing
- Edit menu items directly in a user-friendly interface
- No need to touch code to update content
- Changes are saved as JSON (Git-friendly)

### Type Safety
- Auto-generated TypeScript types
- GraphQL queries with full IntelliSense
- Catch errors at build time

### Git-Based
- All content stored in JSON files
- Can be version controlled
- Can be edited manually or via TinaCMS

### Local First
- Works entirely offline
- No external dependencies for development
- Optional cloud hosting for production

## 🔧 Common Tasks

### Add a New Menu
1. Go to admin interface
2. Click "Menus" collection
3. Click "Create New" button
4. Fill in the form
5. Save - creates new JSON file in `content/menus/`

### Edit Menu Items
1. Admin → Menus collection
2. Select the menu to edit
3. Expand sections
4. Edit items inline
5. Save

### Change Header
1. Admin → Menu Header
2. Select header.json
3. Edit fields
4. Save

### Add New Fields
1. Edit `tina/config.ts`
2. Add field to schema
3. Restart dev server (regenerates types)
4. Update components to use new field

## 🚨 Important Notes

### Generated Files
These directories are auto-generated and should NOT be edited:
- `tina/__generated__/` (gitignored)
- `public/admin/` (gitignored)

### Content Files
These CAN be edited manually:
- `content/**/*.json`

### Schema Changes
After modifying `tina/config.ts`:
1. Restart the dev server
2. Types will be regenerated
3. Update components if needed

## 📊 TinaCMS URLs (Development)

| Service | URL |
|---------|-----|
| Main Site | http://localhost:5173 |
| TinaCMS Admin | http://localhost:5173/admin/index.html |
| GraphQL API | http://localhost:4001/graphql |
| GraphQL Playground | http://localhost:5173/admin/index.html#/graphql |

## 🎓 Next Steps

### For Local Use
You're all set! Just use `npm run dev` and edit content via the admin interface.

### For Production with TinaCMS Cloud
1. Sign up at [tina.io](https://tina.io)
2. Create a project
3. Get Client ID and Token
4. Add to environment variables:
   ```env
   VITE_TINA_CLIENT_ID=your_client_id
   VITE_TINA_TOKEN=your_read_only_token
   ```
5. Update `tina/config.ts`:
   ```typescript
   clientId: import.meta.env.VITE_TINA_CLIENT_ID,
   token: import.meta.env.VITE_TINA_TOKEN,
   ```
6. Deploy!

## 📚 Resources

- [Full TinaCMS Guide](./TINACMS_GUIDE.md)
- [TinaCMS Docs](https://tina.io/docs/)
- [Schema Reference](https://tina.io/docs/schema/)

---

**Everything is ready to go! Just run `npm run dev` and start editing! 🎉**

