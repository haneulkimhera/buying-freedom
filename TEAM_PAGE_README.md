# Team Page Implementation

This project now includes a new Team page that showcases the company's team members and leadership.

## What's been added:

### New Pages

- **Team Page** (`src/pages/Team.jsx`) - Complete team introduction page with CEO section and team member grid

### New Components

- **TeamMember** (`src/components/TeamMember.jsx`) - Reusable component for individual team member cards

### Navigation

- Added React Router DOM for page navigation
- Updated Header component to navigate to Team page via "구성원 소개" menu item
- Updated Footer component to include Team page link in quick links

### Responsive Design

- Team page is fully responsive with mobile-first design
- Breakpoints at 991px and 640px for tablet and mobile views
- Team grid adapts from 3 columns to 2 columns to single column on smaller screens

## How to access the Team page:

### Method 1: Direct URL

Navigate to `/team` in your browser (e.g., `http://localhost:3000/team`)

### Method 2: Navigation Menu

Click on "구성원 소개" in the header navigation

### Method 3: Footer Link

Click on "구성원 소개" in the footer quick links section

## Page Structure:

1. **Header** - Shared navigation component
2. **Page Header** - Title and description section with gradient background
3. **CEO Section** - Features CEO profile with photo, details, and experience list
4. **Team Section** - Grid layout showcasing team members (2 rows of 3 members each)
5. **Footer** - Shared footer component with contact information

## Styling:

- Uses Inter font family for consistency
- Maintains the same color scheme as the rest of the application
- Professional blue (#1e3a8a) and neutral gray color palette
- Clean, modern design with proper spacing and typography

## Future Enhancements:

- Add real photos for CEO and team members
- Connect to a data source for dynamic team member information
- Add individual team member detail pages
- Include social media links for team members
