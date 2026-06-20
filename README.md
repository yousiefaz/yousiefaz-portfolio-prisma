# Developer Portfolio (Next.js + Prisma)

This is a modern developer portfolio built using Next.js, TypeScript, Prisma ORM, and Neon PostgreSQL. It is designed to showcase projects, skills, and professional experience in a clean and responsive interface.

---

## Overview

The portfolio is fully dynamic and data-driven, with content stored in a PostgreSQL database managed through Prisma. It focuses on performance, maintainability, and clean architecture using Next.js App Router.

---

## Features

- Built with Next.js App Router and React Server Components
- Prisma ORM integrated with Neon PostgreSQL
- Fully responsive and mobile-friendly design
- Dynamic projects system powered by database
- Categorized skills section (frontend, backend, tools)
- Project modal with image carousel and details view
- Clean UI with reusable components
- Optimized structure for scalability

---

## Tech Stack

- Next.js
- TypeScript
- Prisma ORM
- PostgreSQL (Neon)
- Tailwind CSS
- Radix UI
- Lucide Icons

---

## Database Structure

The database includes two main models:

### Projects

- title
- description
- images
- tags
- demoLink
- githubLink
- publishedAt
- isResponsive

### Skills

- label
- value
- category (frontend, backend, tools)

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/portfolio.git
```
