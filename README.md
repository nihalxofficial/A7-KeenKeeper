# 🤝 KeenKeeper

> **My personal shelf of meaningful connections.**
> Browse, tend and nurture the relationships that matter most.

---

## 📖 Description

**KeenKeeper** is a personal relationship management app that helps me stay intentional about the friendships and connections that matter most in my life. Track interactions, spot who needs attention, visualize social habits, and never let an important relationship drift away unnoticed.

---

## ✨ Key Features

### 1. 🧑‍🤝‍🧑 Smart Friend Dashboard
A clean, card-based home view showing all my friends at a glance — with real-time status indicators revealing who is *on track* and who *needs attention* based on the last interaction.

### 2. 📅 Interaction Timeline
A chronological log of every interaction (text, call, video) with filtering controls to quickly find past conversations and stay on top of relationship history.

### 3. 📊 Friendship Analytics (Stats Page)
Visual charts breaking down interactions by type (text, call, video) — giving a data-driven view of how I invest time in my relationships.

---

## 🛠️ Technologies Used

| Category | Technology |
|---|---|
| **Framework** | [Next.js](https://nextjs.org/) (App Router) |
| **UI Library** | [React](https://react.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Component Library** | [DaisyUI](https://daisyui.com/) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) |
| **Charts** | [Recharts](https://recharts.org/) |
| **Notifications** | [React Toastify](https://fkhadra.github.io/react-toastify/) |
| **Images** | Next.js `<Image>` with remote image support |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 🚀 All Features & Functionality

### 🏠 Home Page
- **Summary Stats Bar** — Total friends count, On Track count, Need Attention count, and Interactions This Month, all shown as live stat cards
- **Friend Cards Grid** — Responsive card layout showing each friend with their photo, name, and relationship status
- **Loading Spinner** — Elegant loading state shown while friend data is being fetched
- **Status Badges** — Visual indicators on each card showing relationship health (On Track / Needs Attention)

### 🔍 Search & Filter
- **Search Bar** — Filter friends by name in real time
- **Filter Controls** — Narrow down the list by interaction type or relationship status

### 📅 Timeline Page
- **Chronological Interaction Log** — Full history of all recorded interactions across all friends
- **Filter by Type** — Toggle filters for Text, Call and Video interactions
- **Empty State** — Friendly "No Interactions Yet..." message when the timeline is empty

### 📊 Stats Page
- **Recharts Visualizations** — Interactive charts displaying friendship data
- **Interaction Breakdown** — Pie/bar chart segmenting interactions by type (Text, Call, Video)
- **Friendship Analytics** — Insight into social patterns over time

### 🔔 Notifications
- **React Toastify** — Toast notifications for user actions (e.g., friend added, interaction logged, errors)

### 📱 Responsive Design
- **Mobile-first layout** — Fully responsive across phones, tablets and desktops
- **DaisyUI components** — Pre-styled, accessible UI components (cards, badges, buttons, modals, navbars)
- **Tailwind utility classes** — Fine-grained responsive breakpoints (`sm:`, `md:`, `lg:`)

### 🧭 Navigation
- **Navbar** — Persistent top navigation with links to Home, Timeline, and Stats
- **Footer** — Branded footer with Privacy Policy, Terms of Service and Cookies links
- **Social Links** — Footer social link section

---

## 🌐 Deployment

This project is deployed on **Vercel**. Push to the `main` branch to trigger an automatic deployment.

👉 **Live site:** [https://a7-keen-keeper-one.vercel.app/](https://a7-keen-keeper-one.vercel.app/)

---

## 📸 Pages Overview

| Page | Route | Description |
|---|---|---|
| Home | `/` | Friend cards, stats summary, add friend |
| Timeline | `/timeline` | Interaction log with type filters |
| Stats | `/stats` | Recharts analytics by interaction type |
