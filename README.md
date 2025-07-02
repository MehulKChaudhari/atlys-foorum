# foo-rum

A minimal forum style frontend built with React, and TypeScript.

---

## Features

- Feed page with post input and posts
- Sign In page
- Auth modal triggered by UI interaction
- Dummy credential validation
- Custom styling using TailwindCSS and minimal CSS

---

## Test accounts

- demo@example.com / password123
- test@user.com / testpass

---

## Tech Stack

- React + TypeScript
- TailwindCSS
- Lucide Icons
- Vite

## Setup

```bash
git clone https://github.com/MehulKChaudhari/atlys-foorum.git
```

```bash
cd atlys-foorum
```

```bash
pnpm install
```

```bash
pnpm dev
```
---

## Screenshots

<details>
<summary>Click to expand</summary>

### Authentication Modal
![Auth Modal](https://github.com/user-attachments/assets/3132594a-2cea-46af-97b5-a67affd746d0)


### Post Editor
![Editor](https://github.com/user-attachments/assets/9ae5e36c-89dd-460d-ac9c-497531a54890)

</details>

## Folder Structure

```
src/
├── components/         # Reusable UI components
│   ├── AuthModal.tsx      # Authentication modal
│   ├── Editor.tsx         # Post editor with emoji picker
│   ├── Navbar.tsx         # Navigation header
│   └── PostCard.tsx       # Post display component
├── features/           # Feature-based modules
│   ├── auth/           # Authentication logic
│   └── feed/           # Feed functionality
├── pages/              # Page components
│   ├── Feed.tsx
│   ├── SignIn.tsx
│   └── SignUp.tsx
└── utils/
    └── time.ts         # Time formatting util
```



