# ByteSpace

A modern e-learning platform built with React, Vite, and Tailwind CSS.

## Live Demo

[ByteSpace Live](https://bytespace-antur.vercel.app/)


## Overview

ByteSpace is a fully responsive e-learning web application featuring a landing page, course discovery, detailed course pages, creator profiles, and authentication flows. The UI was implemented pixel-for-pixel from Figma designs, with consistent design tokens for color, typography, and spacing across breakpoints.

## Features

- **Landing page** — hero section, logo strip, featured courses, learning paths, stats section, creator call-to-action, and testimonials
- **Courses listing** — search, filters, category tabs, and pagination
- **Course details** — About, Lessons, and Reviews tabs, with an enroll sidebar
- **Creator profile** — bio, follow button, and course grid
- **Authentication** — Sign In and Sign Up pages
- **Custom 404 page**

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 (Vite) |
| Styling | Tailwind CSS v4 |
| Routing | React Router v6 |
| Animation | Framer Motion |
| Icons | React Icons |

## Project Structure

```
src/
├── components/
│   ├── common/     # Shared atoms — Container, Button, Badge
│   ├── layout/     # Navbar, Footer, Logo
│   ├── home/       # Hero, LogoStrip, FeaturedCourses, LearningPaths,
│   │               # StatsSection, CreatorCTA, Testimonials
│   ├── course/     # CourseCard, CourseTabs, CourseSidebar,
│   │               # About / Lesson / Reviews tabs
│   ├── creator/    # ProfileHeader, ProfileFilters
│   └── auth/       # AuthLayout
├── pages/          # Home, Courses, CourseDetails, CreatorProfile,
│                   # SignIn, SignUp, NotFound
├── data/           # courses.js, courseDetails.js, creators.js
└── index.css       # Tailwind setup and design tokens
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm (or your preferred package manager)

### Installation

```bash
npm install
```

### Development

Start the local dev server:

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Design

All pages were implemented from Figma with exact color tokens, typography scale, and spacing, and are fully responsive across mobile, tablet, and desktop breakpoints.

