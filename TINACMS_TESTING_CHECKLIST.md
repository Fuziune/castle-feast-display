# TinaCMS Testing Checklist ✅

Use this checklist to verify your TinaCMS implementation is working correctly.

## 🔍 Pre-Testing Setup

- [x] TinaCMS packages installed (`tinacms`, `@tinacms/cli`)
- [x] Configuration file created (`tina/config.ts`)
- [x] Content files created in `content/` directory
- [x] Components updated to use TinaCMS hooks
- [x] Development server running (`npm run dev`)

## 🧪 Test Scenarios

### Test 1: Development Server
**Goal:** Verify TinaCMS backend and Vite are running

1. Run `npm run dev`
2. Check terminal output for:
   - ✅ "🦙 TinaCMS Dev Server is active"
   - ✅ "VITE ready in [X] ms"
   - ✅ "Local: http://localhost:[PORT]"

**Expected Result:** Both servers start without errors

### Test 2: Access Main Application
**Goal:** Verify the menu application loads

1. Open browser to `http://localhost:8080/` (or your dev port)
2. Check that:
   - ✅ Page loads without errors
   - ✅ Menu header displays "Bran Castle"
   - ✅ Menu sections appear
   - ✅ Menu items display correctly
   - ✅ No console errors

**Expected Result:** Full menu displays with content from JSON files

### Test 3: Access TinaCMS Admin
**Goal:** Verify admin interface is accessible

1. Navigate to `http://localhost:8080/admin/index.html`
2. Check that:
   - ✅ TinaCMS interface loads
   - ✅ "Menus" collection appears
   - ✅ "Menu Header" collection appears
   - ✅ No errors in console

**Expected Result:** Admin interface loads successfully

### Test 4: View Menu Content
**Goal:** Verify content is readable in admin

1. In admin, click "Menus" collection
2. Click on "menu-new.json"
3. Verify:
   - ✅ Menu title displays
   - ✅ Sections are listed
   - ✅ Items within sections are editable
   - ✅ All fields are populated

**Expected Result:** Content loads and displays in admin form

### Test 5: Edit Menu Item
**Goal:** Test content editing and saving

1. In admin, edit "menu-new.json"
2. Expand first section
3. Change the name of the first menu item
4. Click "Save" button
5. Check:
   - ✅ Save success message appears
   - ✅ No errors in console
   - ✅ `content/menus/menu-new.json` file is updated

**Expected Result:** Changes save to JSON file

### Test 6: View Changes on Site
**Goal:** Verify changes reflect on main site

1. After editing (Test 5), go back to main site
2. Refresh page if needed
3. Verify:
   - ✅ Changed menu item name appears
   - ✅ Other content remains unchanged
   - ✅ Layout is correct

**Expected Result:** Changes from admin appear on main site

### Test 7: Edit Menu Header
**Goal:** Test header content editing

1. In admin, click "Menu Header"
2. Click "header.json"
3. Change the "Description" field
4. Save
5. Verify:
   - ✅ Changes save successfully
   - ✅ Description updates on main site

**Expected Result:** Header content is editable

### Test 8: Add New Menu Section
**Goal:** Test adding content

1. In admin, edit "menu-new.json"
2. Click "Add Item" under sections
3. Fill in:
   - Section title: "Wine Selection"
   - Add 2-3 wine items
4. Save
5. Check main site:
   - ✅ New section appears
   - ✅ Items display correctly

**Expected Result:** New section is created and displays

### Test 9: Delete Menu Item
**Goal:** Test removing content

1. In admin, edit any menu
2. Expand a section
3. Remove one menu item
4. Save
5. Verify:
   - ✅ Item is removed from JSON
   - ✅ Item no longer appears on site

**Expected Result:** Item is successfully removed

### Test 10: Direct JSON Edit
**Goal:** Verify manual editing works

1. Open `content/menus/menu-new.json` in editor
2. Manually change a menu item description
3. Save file
4. Check browser (should auto-refresh):
   - ✅ Changes appear on main site
   - ✅ Changes visible in admin

**Expected Result:** Manual edits work and sync with admin

### Test 11: Type Safety Check
**Goal:** Verify TypeScript types are working

1. Open `src/pages/MenuNew.tsx` in editor
2. Try accessing `data.menu.` and check:
   - ✅ IntelliSense suggests: title, slug, sections, etc.
   - ✅ Correct types are inferred
3. Try accessing invalid field:
   - ✅ TypeScript error appears

**Expected Result:** Full type safety and IntelliSense

### Test 12: GraphQL Schema
**Goal:** Verify GraphQL is working

1. Navigate to GraphQL playground
2. Run query:
   ```graphql
   query {
     menu(relativePath: "menu-new.json") {
       title
       sections {
         title
         items {
           name
           description
         }
       }
     }
   }
   ```
3. Verify:
   - ✅ Query executes successfully
   - ✅ Returns correct data

**Expected Result:** GraphQL API is functional

## 📊 Results Summary

### ✅ All Tests Passing
Everything is working! You can start using TinaCMS.

### ⚠️ Some Tests Failing
Check the specific test that failed and:
1. Review error messages in console
2. Check `tina/config.ts` for schema issues
3. Verify content file structure matches schema
4. Restart dev server
5. Clear browser cache

### ❌ Many Tests Failing
If multiple tests fail:
1. Stop dev server
2. Delete `tina/__generated__` folder
3. Delete `public/admin` folder
4. Run `npm install` again
5. Run `npm run dev`
6. Check for error messages

## 🐛 Common Issues

### Issue: "Module not found: tinacms"
**Solution:** Run `npm install`

### Issue: Admin page 404
**Solution:** Make sure `npm run dev` is running (not just `vite`)

### Issue: "Cannot read properties of undefined"
**Solution:** Check content JSON files match schema in `tina/config.ts`

### Issue: Changes not saving
**Solution:** 
- Check file permissions on `content/` directory
- Verify no syntax errors in JSON files
- Check browser console for errors

### Issue: Type errors in components
**Solution:**
- Delete `tina/__generated__` folder
- Restart dev server to regenerate types

### Issue: "401 Unauthorized" error
**Solution:**
- For local dev, this is normal without credentials
- TinaCMS should still work locally
- To fix, either:
  - Ignore (it doesn't affect local dev)
  - Or sign up for TinaCMS Cloud and add credentials

## 🎯 Success Criteria

Your TinaCMS implementation is successful if:

- ✅ Dev server starts without errors
- ✅ Main site displays content from JSON files
- ✅ Admin interface is accessible
- ✅ Content can be edited and saved
- ✅ Changes reflect on main site
- ✅ TypeScript types are working
- ✅ No console errors during normal use

## 📝 Notes

- Keep `npm run dev` running while testing
- Browser might need refresh after some changes
- JSON files should have valid syntax
- Some warnings in terminal are normal (browserslist, etc.)

## 🚀 Next Steps After Testing

Once all tests pass:
1. Customize schema for your needs
2. Add more content collections
3. Configure media management
4. Set up for production deployment
5. Consider TinaCMS Cloud for team editing

---

**Testing Complete? Move on to [TINACMS_GUIDE.md](./TINACMS_GUIDE.md) for usage tips!**

