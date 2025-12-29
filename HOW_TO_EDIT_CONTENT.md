# 🎨 How to Edit Your Menu Content

## ✅ Quick Start (Real-Time Editing)

### Step 1: Access the Admin Interface
Open your browser and go to:
```
http://localhost:8080/admin/index.html
```

### Step 2: Choose What to Edit

You'll see two collections:

#### 📋 **Menus**
Edit your menu items, sections, and dishes
- `menu-new.json` - Your default castle feast menu
- `menu-original.json` - The original menu selection

#### 📰 **Menu Header**
Edit the header that appears at the top
- Title (e.g., "Bran Castle")
- Subtitle (e.g., "MENU")
- Description
- Hero image

### Step 3: Make Your Changes

1. **Click on a menu** (e.g., "menu-new")
2. **Expand sections** to see menu items
3. **Edit any field:**
   - Menu item names
   - Descriptions/ingredients
   - Allergen information
   - Section titles
4. **Add new items** by clicking the "+" button
5. **Remove items** by clicking the trash icon

### Step 4: Save & See Changes

1. Click the **"Save"** button (top right)
2. Wait for confirmation message
3. **Go back to your main site:** `http://localhost:8080/`
4. **Refresh the page** (F5 or Ctrl+R)
5. **See your changes instantly!** ✨

## 🎯 Real-Time Workflow

```
Edit in Admin → Save → Refresh Main Site → Changes Appear!
```

**No restart needed!** Changes are immediate.

## 📝 Common Edits

### Change a Menu Item Name
1. Admin → Menus → menu-new
2. Expand the section
3. Find the item
4. Change the "Item Name" field
5. Save

### Add a New Dish
1. Admin → Menus → menu-new
2. Expand a section
3. Click **"Add Item"** under "Menu Items"
4. Fill in:
   - Name
   - Description
   - Allergens (optional)
5. Save

### Create a New Section
1. Admin → Menus → menu-new
2. Scroll to "Menu Sections"
3. Click **"Add Item"**
4. Enter section title
5. Add items to the section
6. Save

### Change the Header
1. Admin → Menu Header → header
2. Edit any field
3. Save
4. Refresh main site

## 🔄 Behind the Scenes

When you save in the admin:
1. TinaCMS writes to `public/content/menus/` or `public/content/header/`
2. Your website reads from these JSON files
3. Vite detects changes and updates the page

## 💡 Pro Tips

### Tip 1: Keep Admin Open
Keep the admin in one browser tab and your site in another. Edit → Save → Switch tabs → Refresh → See changes!

### Tip 2: Direct File Editing
You can also edit JSON files directly:
- `public/content/menus/menu-new.json`
- `public/content/header/header.json`

Save the file and refresh your site - changes appear instantly!

### Tip 3: Duplicate Sections
To create similar sections quickly:
1. Copy an existing section's content
2. Add a new section
3. Paste and modify

## 🐛 Troubleshooting

### Changes Not Showing?
1. **Did you save?** Check for the save confirmation
2. **Did you refresh?** Press F5 on the main site
3. **Check the files** - Open `public/content/menus/menu-new.json` and verify changes are there

### Admin Not Loading?
1. **Is dev server running?** Check terminal for `npm run dev`
2. **Correct URL?** Use `/admin/index.html` not just `/admin`
3. **Clear cache** - Hard refresh with Ctrl+Shift+R

### Lost Changes?
- Changes are saved to JSON files immediately
- Check `public/content/` directory
- Your content is safe in Git (if you're using version control)

## 🎓 Next Steps

Once you're comfortable:
- Add new menu collections for drinks, wines, desserts
- Customize the schema in `tina/config.ts`
- Add images to menu items
- Create seasonal menus

## 📚 Need Help?

- **TinaCMS Docs:** https://tina.io/docs/
- **See all guides:** Check other TINACMS_*.md files in this project

---

**Happy Editing! 🏰**

