Initialize Next.js in current directory:
```bash
mkdir temp; cd temp; npx create-next-app@latest . -y --typescript --tailwind --eslint --app --use-npm --src-dir --import-alias "@/*" -no --turbo
```

Now let's move back to the parent directory and move all files except prompt.md.

For Windows (PowerShell):
```powershell
cd ..; Move-Item -Path "temp*" -Destination . -Force; Remove-Item -Path "temp" -Recurse -Force
```

For Mac/Linux (bash):
```bash
cd .. && mv temp/* temp/.* . 2>/dev/null || true && rm -rf temp
```

Set up the frontend according to the following prompt:
<frontend-prompt>
Create detailed components with these requirements:
1. Use 'use client' directive for client-side components
2. Make sure to concatenate strings correctly using backslash
3. Style with Tailwind CSS utility classes for responsive design
4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
6. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
7. Create root layout.tsx page that wraps necessary navigation items to all pages
8. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
9. Accurately implement necessary grid layouts
10. Follow proper import practices:
   - Use @/ path aliases
   - Keep component imports organized
   - Update current src/app/page.tsx with new comprehensive code
   - Don't forget root route (page.tsx) handling
   - You MUST complete the entire prompt before stopping

<summary_title>
Transportation Booking Platform UI Design
</summary_title>

<image_analysis>

1. Navigation Elements:
- Top header with: Booking, About Us, Contact, FAQs, Blog
- Book Now button in header
- Breadcrumb navigation: Home / About
- Logo placement in top left


2. Layout Components:
- Main container width: 1200px max
- Form sections with 24px padding
- Collapsible sections with 16px internal spacing
- Responsive card layouts with 32px gaps


3. Content Sections:
- Pickup Details form
- Pickup Time selection
- Passengers & Extras configuration
- About/Mission statement section
- Payment review section


4. Interactive Controls:
- From/To address input fields
- One way/Roundtrip toggle
- Automated/Manual time selection radio buttons
- Passenger counter inputs
- Book Now primary action button
- Terms & Conditions checkbox


5. Colors:
- Primary: #000000 (Black)
- Secondary: #6B46C1 (Purple)
- Background: #FFFFFF (White)
- Text: #333333 (Dark Gray)
- Accent: #F3F4F6 (Light Gray)


6. Grid/Layout Structure:
- 12-column grid system
- 2-column layout for form sections
- Full-width containers for hero sections
- Responsive breakpoints at 768px, 1024px
</image_analysis>

<development_planning>

1. Project Structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Header
│   │   ├── Footer
│   │   └── BookingForm
│   ├── features/
│   │   ├── PickupDetails
│   │   ├── TimeSelection
│   │   └── PassengerConfig
│   └── shared/
├── assets/
├── styles/
├── hooks/
└── utils/
```


2. Key Features:
- Address input validation
- Date/time picker
- Passenger count management
- Price calculation
- Booking confirmation flow


3. State Management:
```typescript
interface BookingState {
├── pickup: {
│   ├── fromAddress: string
│   ├── toAddress: string
│   ├── date: Date
│   ├── isRoundtrip: boolean
├── }
├── time: {
│   ├── isAutomated: boolean
│   ├── selectedTime: string
├── }
├── passengers: {
│   ├── adults: number
│   ├── children: number
│   └── extras: string[]
├── }
}
```


4. Routes:
```typescript
const routes = [
├── '/',
├── '/booking/*',
├── '/about',
├── '/contact',
└── '/payment'
]
```


5. Component Architecture:
- BookingForm (Parent)
├── PickupDetails
├── TimeSelection
├── PassengerConfig
└── PaymentReview


6. Responsive Breakpoints:
```scss
$breakpoints: (
├── mobile: 320px,
├── tablet: 768px,
├── desktop: 1024px,
└── wide: 1200px
);
```
</development_planning>
</frontend-prompt>

IMPORTANT: Please ensure that (1) all KEY COMPONENTS and (2) the LAYOUT STRUCTURE are fully implemented as specified in the requirements. Ensure that the color hex code specified in image_analysis are fully implemented as specified in the requirements.