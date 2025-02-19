Set up the page structure according to the following prompt:
   
<page-structure-prompt>
Next.js route structure based on navigation menu items (excluding main route). Make sure to wrap all routes with the component:

Routes:
- /booking
- /about-us
- /contact
- /faqs
- /blog

Page Implementations:
/booking:
Core Purpose: Enable users to schedule and manage service appointments
Key Components
- Calendar date picker
- Service selection dropdown
- Time slot selector
- Customer information form
- Booking confirmation modal
Layout Structure
- Two-column layout on desktop
- Single column on mobile
- Sticky booking summary

/about-us:
Core Purpose: Share company history, mission, and team information
Key Components
- Company timeline
- Team member cards
- Mission statement banner
- Image gallery
- Customer testimonials
Layout Structure
- Full-width hero section
- Grid-based team section
- Alternating content blocks

/contact:
Core Purpose: Provide multiple channels for customer communication
Key Components
- Contact form
- Office locations map
- Contact information cards
- Social media links
- Live chat widget
Layout Structure
- Split screen desktop layout
- Stacked mobile layout
- Floating contact options

/faqs:
Core Purpose: Answer common customer questions and provide support
Key Components
- Searchable FAQ categories
- Expandable accordion questions
- Quick links sidebar
- Contact support CTA
Layout Structure
- Sidebar + main content layout
- Full-width mobile view
- Sticky category navigation

/blog:
Core Purpose: Share industry insights and company updates
Key Components
- Featured post carousel
- Post grid with filters
- Category tags
- Search functionality
- Newsletter signup
Layout Structure
- Three-column grid desktop
- Two-column tablet
- Single column mobile

Layouts:
MainLayout:
- Applicable routes: All routes
- Core components
  - Header with navigation
  - Footer with site map
  - Mobile menu
  - Newsletter popup
- Responsive behavior
  - Collapsible navigation on mobile
  - Adaptive padding and margins
  - Flexible content width

ContentLayout
- Applicable routes: /about-us, /blog, /faqs
- Core components
  - Breadcrumb navigation
  - Side navigation (where applicable)
  - Related content section
- Responsive behavior
  - Sidebar transforms to top navigation on mobile
  - Adjustable content columns
  - Dynamic spacing

FormLayout
- Applicable routes: /booking, /contact
- Core components
  - Progress indicator
  - Form sections
  - Validation messages
  - Success/error states
- Responsive behavior
  - Vertical form steps on mobile
  - Floating labels
  - Adaptive input sizes
</page-structure-prompt>