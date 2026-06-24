Project Documentation — RocketSingh

Last updated: June 24, 2026


About the Project

RocketSingh is an on-demand home services platform for Chennai, India. It is the Indian version of TACKLES PRO, which runs in San Francisco.

Live website: rocketsingh.app
Planned production domain: rocketsingh.app
Support email: support@rocketsingh.app
Phone: +91-8190074189
WhatsApp: https://wa.me/918190074189


Tech Stack

Website is built with Next.js, React, TypeScript, and Tailwind CSS. It is hosted on Vercel.

The reference website tackles.pro uses Vite and React. We used it as the design and content template for RocketSingh.

Mobile app download page is on the website, but Play Store and App Store links are not connected yet. There is no mobile app code in this project folder. The website APIs are ready for a future mobile app.

Firebase is not set up yet. It is planned for the mobile app.

OneSignal is not set up yet. It is planned for push notifications on the app.


Supabase

Supabase (PostgreSQL + Storage) is the backend for all form submissions on the website.

Required environment variables (server-side only — never expose the service role key to the browser):
- SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY

Database tables:
- bookings + booking_services — Book a Service form
- career_applications + career_services — Career / Join applications
- partnership_applications + partnership_services — Partner registration
- contact_submissions — Contact form
- feedback_submissions — Customer feedback
- services — service name lookup for linked forms
- form_attachments — metadata for uploaded files

Storage buckets: booking-photos, career-documents, partnership-documents, feedback-headshots

Tables already exist in Supabase — no SQL migrations or data import required. See supabase/SCHEMA.md for expected table/column names. Verify connectivity with: npm run verify:supabase


Integrations

Currently working:
- Supabase for all form submissions
- Google Analytics
- Google Maps on the contact page
- WhatsApp chat link

Not done yet:
- Google Tag Manager
- Facebook Pixel
- Firebase
- OneSignal
- Real mobile app store links


What Works on the Website

- Home, About, Services, Book, Contact, Career, Feedback, and Partnership pages
- Services page with 7 categories and 30 services, matching tackles.pro
- 36 cleaning service detail pages
- Blog, FAQ, Gallery, Team, Testimonials, and legal pages
- All forms save data to Supabase
- File uploads work on Book, Career, Partnership, and Feedback forms


What Is Still Pending

Website:
- Update domain and SEO files to the final production domain
- Add Google Tag Manager and Facebook Pixel
- Connect real social media links in the footer
- Add detail pages for new services like handyman and plumbing
- Clean up mixed branding between old domains and RocketSingh

Mobile App:
- Build or connect the native mobile app
- Add real Play Store and App Store download links
- Set up Firebase
- Set up OneSignal for push notifications

Backend:
- Email alerts when someone submits a form
- Payment integration
- Live booking status tracking for customers


How to Run Locally

Install dependencies, copy .env.example to .env.local and add Supabase credentials, then npm run verify:supabase. Start the dev server with npm run dev and open localhost port 3000. No database migrations or Airtable data import are needed — tables already live in Supabase.

Production (Vercel): add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to Environment Variables, remove old AIRTABLE_* variables, redeploy, then smoke-test each form on the live site.


Recent Work — June 9, 2026

- Updated the services page to match tackles.pro
- Added 30 service images
- Fixed extra gap above the footer on the services page
- Pushed changes to the main branch on GitHub


Next Step

Review this document, then set up a Trello board and assign the remaining tasks listed under What Is Still Pending.
