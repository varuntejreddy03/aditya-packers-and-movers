# Aditya Move

Build a polished, conversion-focused, genuinely multi-page website for a local relocation company.

PROJECT
Business name: Aditya Packers and Movers
Tagline: Safe • Secure • On Time
Location: Rajahmundry, Andhra Pradesh, India
Experience: 10 years
Industry: Packers, movers, transport, relocation
Primary goal: generate phone calls and WhatsApp quote enquiries
Secondary goal: establish trust and rank for local Rajahmundry moving searches

ATTACHED BRAND ASSET
Use the attached "aditya-packers-movers-logo.jpg" as the official logo in the header, footer, contact page and favicon/brand reference where practical. Do not redraw, rename or distort it. Crop/pad it cleanly inside a white logo container so it remains readable. Derive the design system from it:
- deep navy #062E5E (or visually sampled equivalent)
- vivid moving orange #F47A0A
- off-white #F8FAFC
- slate text #334155
- success/WhatsApp green only for WhatsApp actions
Use navy as the premium trust color, orange for primary CTAs and moving accents, and generous white space. Avoid a generic template look.

CONTACT DATA — USE EXACTLY
Phone 1: +91 85000 83803
Phone 2: +91 89855 98006
WhatsApp: +91 85000 83803
WhatsApp URL base: https://wa.me/918500083803
Email: adityapakersandmovers@gmail.com
Address: Lalitha Nagar 1st Street, near Krishna Temple, Paper Mill Road, Rajahmundry, Andhra Pradesh
Instagram: https://www.instagram.com/aditya_packers_and_movers_rjy/
Hours: Monday to Sunday, 7:00 AM–9:00 PM
Display “Open every day” wherever hours are shown.
All phone links must use tel:+918500083803 or tel:+918985598006.
Email links must use mailto:adityapakersandmovers@gmail.com.
Instagram must open safely in a new tab.

BUSINESS COPY
About:
“Aditya Packers and Movers is a trusted moving and relocation service provider in Rajahmundry, with 10 years of experience in the packing and moving industry. Our experienced and professional team provides safe, reliable, and affordable shifting solutions for homes, offices, and other relocation needs. We focus on careful handling, secure packing, timely delivery, and customer satisfaction to make every move smooth and stress-free.”
You may polish supporting microcopy, but do not invent accreditations, awards, prices, customer counts, star ratings, insurance claims, branches, nationwide offices, or unverifiable testimonials.

SERVICES
1. Household Shifting
2. Office & Commercial Shifting
3. Packing & Unpacking
4. Local Shifting
5. Domestic Relocation
6. Loading & Unloading
7. Safe & Secure Transportation
8. Vehicle Transportation
9. Shop & Business Relocation

TECHNICAL DIRECTION
- React + TypeScript + Vite.
- Tailwind CSS and shadcn/ui components.
- React Router with real separate routes; do not make this a one-page anchor site.
- Use Lucide icons; no emoji icons.
- Fully responsive at 320px, tablet, laptop and wide screens.
- Excellent accessible color contrast, semantic headings, alt text, keyboard focus states, skip-to-content link, reduced-motion fallback.
- Smooth route transitions, reveal-on-scroll animations and micro-interactions. Keep animations refined and performant; never impair reading.
- Sticky desktop header; polished mobile drawer; bottom mobile action bar with Call and WhatsApp.
- Reusable header, footer, CTA, breadcrumb, service-card, section-heading, trust-strip and quote-form components.
- Every route must load at the top.
- No database or authentication is needed.
- Contact/quote forms must have friendly validation. On submit, open WhatsApp to +918500083803 with a pre-filled, URL-encoded message containing name, phone, moving-from, moving-to, service and preferred date. Provide a direct call fallback. Do not fake a successful server submission or pretend data is stored.
- Avoid broken blank pages, placeholder lorem ipsum, dead buttons, # links or unsupported claims.
- Add a floating WhatsApp button on desktop and mobile (without overlapping the mobile action bar).
- Add SEO title/description per page, Open Graph basics, canonical-ready structure, LocalBusiness/MovingCompany JSON-LD with exact contact/address/hours, sitemap-ready route list, and natural phrases such as “packers and movers in Rajahmundry,” “house shifting Rajahmundry,” and “office relocation Rajahmundry.” No keyword stuffing.

ROUTES AND CONTENT
1. / — Home
   - Top utility strip: “Open Every Day · 7 AM–9 PM” plus phone.
   - Hero: cinematic two-column composition. Copy:
     Eyebrow: “Rajahmundry’s trusted moving team”
     H1: “Moving made safe, simple and on time.”
     Supporting: “Professional packing and relocation for homes, offices, vehicles and businesses—handled carefully from pickup to delivery.”
     Buttons: “Get a Free Quote” (scroll/open quote flow) and “Call 85000 83803.”
     Include visible badges: “10 Years of Experience,” “Careful Handling,” “Local & Domestic Moves.”
   - Hero visual should feel custom: moving truck with packed boxes outside a clean Indian home, with subtle orange route-line animation and navy shape framing.
   - Quick quote card.
   - Services preview grid with all 9 services.
   - “Why choose us” with Careful Packing, Trained Team, Timely Delivery, Transparent Communication.
   - 4-step process: Request Quote → Plan & Pack → Load & Move → Deliver & Unpack.
   - Split-section about preview.
   - Service area/location section focused on Rajahmundry and domestic relocation without inventing a list of branches.
   - FAQ accordion (6 useful questions; phrase answers cautiously—users should call to confirm availability, pricing and scope).
   - Strong final CTA.

2. /about — About Us
   - Story using approved about copy.
   - 10-year experience visual.
   - Values: Safety, Reliability, Affordability, Customer Care.
   - What clients can expect; packing workflow; CTA.
   - No fake staff portraits or names.

3. /services — Services index
   - Intro, all 9 well-written service cards, filtering not necessary.
   - Each card links to its actual service-detail route.
   - Quote CTA after the grid.

4. Nine service-detail routes:
   /services/household-shifting
   /services/office-commercial-shifting
   /services/packing-unpacking
   /services/local-shifting
   /services/domestic-relocation
   /services/loading-unloading
   /services/safe-secure-transportation
   /services/vehicle-transportation
   /services/shop-business-relocation
   Each page needs: unique hero, plain-language description, suitable-for list, typical process, careful-handling section, FAQ, related services, breadcrumb and quote CTA. Do not make claims not provided. Content must be specific enough that pages are not duplicates.

5. /gallery — Moving Gallery
   - A premium masonry/grid visual showcase with 8–10 image tiles representing packing, boxes, loading, truck transport, house move, office move, vehicle transport and unloading.
   - Use tasteful category chips and a lightbox if feasible.
   - Since real project photos were not supplied, label the section unobtrusively as “A look at the care behind every move” and do not claim generated/stock images are actual completed projects.

6. /service-areas — Service Areas
   - Main focus: Rajahmundry.
   - Clearly state local shifting in and around Rajahmundry and domestic relocation enquiries.
   - Address block and map CTA linking to a Google Maps search for the exact address.
   - Do not invent specific served cities as guaranteed coverage. Use a form asking users to confirm their source and destination.

7. /contact — Contact & Free Quote
   - Phone, WhatsApp, email, address, hours and Instagram cards.
   - Large quote form with: full name, mobile, moving from, moving to, service select, preferred moving date, brief details.
   - WhatsApp submission as described above.
   - Embedded map/search link based on exact address.
   - “Open every day · 7:00 AM–9:00 PM.”
   - FAQ/response expectation without inventing a response time.

VISUAL EXPERIENCE
Aim for a modern premium local-service website, not corporate SaaS. Use strong editorial typography (e.g. Manrope/Plus Jakarta Sans for body and Sora/Outfit for display if available). Rounded corners should be controlled (not every element pill-shaped). Use crisp shadows, subtle paper/box textures, orange route paths, tape-stripe motifs and diagonal motion cues derived from transport. Alternate bright off-white and deep navy sections. Add small line illustrations or icons for box, home, office, truck and shield. Keep text readable.
Animations:
- hero truck/route line moves subtly into place
- small box stack parallax or staggered reveal
- service cards lift 4–6px and reveal orange edge
- number “10” can count up once
- process line animates on scroll
- buttons have restrained arrow movement
- respect prefers-reduced-motion

IMAGE DIRECTION — GENERATE OR SOURCE VISUALS MATCHING THESE PROMPTS
Use realistic, high-quality, warm Indian context. No visible third-party brands, no text baked into images, no watermarks, no distorted hands, no unsafe lifting, no foreign license plates, no fake logo on vehicles.
A. HOME HERO (16:10 landscape):
“Premium commercial photography of a professional Indian packers and movers team carefully carrying sealed cardboard boxes beside a clean white medium-size moving truck outside a modern home in Rajahmundry, Andhra Pradesh, warm early-morning light, navy-blue work uniforms with subtle orange accents and no logos, organized calm scene, trustworthy service, natural skin tones, cinematic depth, generous negative space on the left for website headline, ultra realistic, crisp, no text, no watermark.”
B. HOUSEHOLD SHIFTING (4:3):
“Professional Indian movers wrapping a sofa and carefully packing household items inside a bright contemporary Indian living room, labeled-looking boxes but absolutely no readable text, protective materials, tidy organized workflow, navy and orange color accents, realistic documentary commercial photo, no logos, no watermark.”
C. OFFICE MOVE (4:3):
“Professional relocation team packing computers, office chairs and document boxes in a modern Indian office, careful cable organization, clean corporate environment, navy uniforms with orange accents, realistic commercial photography, no brand names, no text, no watermark.”
D. PACKING DETAIL (4:3):
“Close-up commercial photo of careful hands using bubble wrap, corrugated boxes, edge protectors and packing tape to secure fragile household items, clean organized table, warm natural light, navy and orange visual accents, ultra realistic, no text, no watermark.”
E. LOADING/TRUCK (4:3):
“Indian moving team safely loading organized sealed boxes into a clean white box truck using proper lifting posture and moving equipment, daylight, clean residential street in Andhra Pradesh, realistic commercial photography, no logos, no text, no watermark.”
F. VEHICLE TRANSPORT (4:3):
“Professional Indian vehicle relocation scene, a family car being carefully prepared for secure transport by trained movers, wheel straps and inspection checklist visible but no readable text, clean transport yard, trustworthy premium commercial photo, no logos, no watermark.”
G. DOMESTIC RELOCATION (16:9):
“Clean white moving truck traveling on a scenic Indian national highway at sunrise, subtle Andhra Pradesh landscape, feeling of safe long-distance relocation and punctual delivery, cinematic realistic photography, navy and orange grade, no company logos, no text, no watermark.”
H. DELIVERY/UNPACKING (4:3):
“Happy Indian family in a bright new home while professional movers neatly place sealed boxes and assemble furniture in the background, authentic calm expressions, respectful service, warm daylight, realistic premium lifestyle photo, no text, no logos, no watermark.”
I. SHOP RELOCATION (4:3):
“Professional Indian movers carefully packing shelving, cartons and small-business equipment in a clean retail shop, efficient organized commercial relocation, navy uniforms with orange accents, realistic photography, no readable signs, no logos, no watermark.”
J. CONTACT BANNER (21:9):
“Clean moving truck parked in front of a Rajahmundry residential street at golden hour, neatly stacked boxes in foreground, welcoming trustworthy atmosphere, wide cinematic composition with generous dark-safe negative space for contact headline, navy and orange color harmony, realistic commercial photography, no text, no watermark.”

COPY / UX DETAILS
- Do not put the email typo into headings; use it only as the exact email address.
- Use Indian phone formatting in visible text.
- “Get a Free Quote” does not imply a guaranteed price online.
- Add tap-friendly CTAs and at least one call or WhatsApp action above the fold.
- Footer must include routes, services, contact, Instagram, business hours, address and copyright using the current year.
- Include a 404 route that guides visitors back home or to contact.
- Check all routes and buttons before finishing.
- Produce a finished first version with complete content and visual polish, not a wireframe or planning document.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/660f3d55-ac92-43fe-8140-931e6749d00f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
