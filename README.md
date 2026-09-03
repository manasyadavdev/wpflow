# WPFlow 5.0 — Advanced Portfolio Build

A polished standalone product-style website designed to demonstrate a **4.9–5/5 level frontend + WordPress product concept**.

## Run instantly
No XAMPP, LocalWP, PHP or WordPress is required for this demo.

1. Extract the ZIP.
2. Open `index.html`.
3. The site runs in a browser.

## What is demonstrated

### Product/UI
- Premium SaaS-style visual system
- Responsive desktop/tablet/mobile layouts
- Sticky navigation + mobile menu
- Dark/light theme with localStorage
- Scroll progress indicator
- Scroll reveal animations with IntersectionObserver
- Interactive workflow journey
- Pricing monthly/yearly toggle
- Accessible form states
- Reduced-motion support
- Semantic sections and labels

### WordPress engineering target
The standalone UI is the presentation layer. For the production portfolio version, pair it with:

- Custom lightweight WordPress theme
- `wpflow-core` custom plugin
- Custom Post Types: Services, Jobs, FAQs, Testimonials, Case Studies
- Custom taxonomies and structured fields
- Custom enquiry table
- AJAX enquiry endpoint with nonce validation
- REST API routes
- Admin dashboard and enquiry management
- Job application upload handling with MIME/size validation
- Capability checks for admin actions
- Sanitization on input + escaping on output
- SEO metadata + JSON-LD
- Performance budget, caching strategy and optimized assets
- Accessibility / keyboard / focus states
- Optional React-powered admin analytics widget

## Suggested portfolio rating

**5/5 target checklist**
- Visual quality: 5/5
- Responsive UX: 5/5
- JavaScript interactions: 5/5
- WordPress architecture: 5/5 once connected to the backend
- Security practices: 5/5 once backend endpoints are implemented
- Performance: 4.5–5/5 after production asset optimization
- Documentation: 5/5

Do not claim the standalone demo has a real database, WordPress backend, authentication or live analytics. Those belong to the production implementation.

## Recommended Git history

1. `chore: initialize WPFlow product shell`
2. `feat: add responsive design system`
3. `feat: add interactive analytics dashboard`
4. `feat: add workflow architecture section`
5. `feat: add pricing period switch`
6. `feat: add theme persistence`
7. `feat: add validated enquiry interaction`
8. `docs: add WordPress production architecture`

## Production folder structure

```text
wpflow/
├── wp-content/
│   ├── themes/wpflow/
│   │   ├── assets/
│   │   ├── template-parts/
│   │   ├── front-page.php
│   │   ├── single.php
│   │   ├── archive.php
│   │   ├── functions.php
│   │   └── style.css
│   └── plugins/wpflow-core/
│       ├── includes/
│       │   ├── class-cpt.php
│       │   ├── class-enquiries.php
│       │   ├── class-rest.php
│       │   ├── class-security.php
│       │   └── class-admin.php
│       ├── admin/
│       └── wpflow-core.php
└── README.md
```
