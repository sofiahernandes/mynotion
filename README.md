## UNFINISHED MY NOTION APP
### Notion Clone app built using:
- @blocknote/core + @blocknote/react
- @clerk/nextjs
- Next.js
- Tailwind CSS
- Zustand
- Zod

### Main features: 
- Real-time database
- Notion-style editor
- Infinite children documents
- Trash can & soft delete 🗑
- Authentication
- File upload
- File deletion
- Recovery of deleted files
- File replacement
- Icons for each document which respond to real-time changes
- Expandable and fully collapsible sidebar
- Full mobile and dasktop support
- Publish notes to the web
- Landing page
- Cover image of each document

## RUNNING THE APP LOCALLY
### Clone the repository:
```jsx
git clone https://github.com/sofiahernandes/mynotion.git
```

### Install all packages by running:
```jsx
cd MyNotion
pnpm i
```

### Set up the .env file:
```jsx
# Using convex deployment ("npx convex dev")
CONVEX_DEPLOYMENT=YOURKEY
NEXT_PUBLIC_CONVEX_URL=YOURKEY
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOURKEY
CLERK_SECRET_KEY=YOURKEY
EDGE_STORE_ACCESS_KEY=YOURKEY
EDGE_STORE_SECRET_KEY=YOURKEY
```

### Start the app by running:
```jsx
npm run dev
```