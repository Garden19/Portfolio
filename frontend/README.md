# Personal Portfolio
A responsive personal portfolio built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. It showcases my professional experience, development projects, and technical skills, and provides a way for visitors to get in touch.

The site is designed around clear typography, purposeful animations, and user-controlled accessibility options.

> **Project status:** In active development. A live website URL will be added after deployment.

## Features
### Home and navigation
- Responsive layout designed for desktop, tablet, and mobile screens.
- Introductory section with an illustrated mascot and cursor-following eye effect.
- Navigation to Experience, Projects, Skills, and Contact sections.
- Smooth in-page scrolling and URL-hash navigation when returning from detail pages.
- Scroll restoration when moving between routes.

### Experience
- Timeline of roles and professional experience.
- Reusable experience cards populated from structured TypeScript data.
- Dedicated experience detail pages with responsibilities and achievements.
- Fallback page when an experience ID cannot be found.

### Projects
- Visual project showcase with desktop and mobile screenshots, including work such as Country Explorer, an Ohm’s Law Calculator, and a Cruise Admin Dashboard.
- Scroll-driven image scaling and transitions using Motion for React.
- Space for individual project descriptions and further details as the portfolio develops.

### Accessibility
- Optional accessibility prompt for first-time visitors.
- **High-contrast mode** that can be enabled or disabled.
- **Dyslexia-friendly font** option that can be enabled or disabled.
- Preferences saved in `localStorage` and restored on return visits in the same browser.
- A control to reopen the accessibility settings after the initial prompt is dismissed.
- Accessible toggle buttons using `aria-pressed` and labelled form controls.

### Contact
- Custom-styled contact form with name, email, and message fields.
- Browser-native form submission through **Form.taxi**, without a custom backend.
- Redirect to a portfolio **Thank You** page after successful submission.
- Required-field and email-format checks provided by native HTML validation.

## Tech stack
| Technology | Role |
| --- | --- |
| [React](https://react.dev/) | Component-based user interface |
| [TypeScript](https://www.typescriptlang.org/) | Typed components, props, and data |
| [Vite](https://vite.dev/) | Development server and production build tooling |
| [Tailwind CSS](https://tailwindcss.com/) | Responsive styling and design utilities |
| [React Router](https://reactrouter.com/) | Page navigation and dynamic routes |
| [Motion for React](https://motion.dev/) | Scroll-linked transitions and animations |
| [Form.taxi](https://form.taxi/) | Contact-form submission processing |
| Browser `localStorage` | Persists accessibility choices locally |

## Project organisation

The following is a **representative overview** of the project's main files and folders; the precise contents may change during development.

```text
Portfolio/
├── frontend/
│   ├── public/
│   │   └── fonts/               # Locally served fonts
│   ├── src/
│   │   ├── assets/
│   │   │   └── images/          # Mascot and project imagery
│   │   ├── components/
│   │   │   ├── AccessibilityMenu.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── ExperienceDetails.tsx
│   │   │   ├── Intro.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── ScrollToTop.tsx
│   │   │   ├── ThankYou.tsx
│   │   │   └── ...               # Other sections and components
│   │   ├── data/
│   │   │   └── experienceData.ts
│   │   ├── types/
│   │   │   └── Experience.ts
│   │   ├── App.tsx               # Routes and page composition
│   │   ├── index.css            # Theme variables and font definitions
│   │   └── main.tsx             # React entry point
│   ├── index.html
│   └── package.json
├── docs/                        # Project documentation, if present
└── README.md
```

## Routes and sections
| Path or anchor | Purpose |
| --- | --- |
| `/` | Main portfolio page |
| `/#experience` | Experience timeline |
| `/experience/:id` | Details for an individual role |
| `/projects` | Projects page / showcase |
| `/#projects-list` | Projects section anchor |
| `/#skills` | Skills section anchor |
| `/#contact` | Contact section anchor |
| `/thank-you` | Form-submission confirmation page |

Navigation uses React Router for routes and section IDs for scrolling on the homepage. Section anchors require matching `id` attributes in the rendered page.

## Accessibility preferences
The accessibility menu saves these keys in the visitor's browser:

| `localStorage` key | Example values | Purpose |
| --- | --- | --- |
| `accessibility-decision` | `yes`, `no` | Remembers the initial prompt response |
| `accessibility-theme` | `default`, `contrast` | Selects the colour theme |
| `accessibility-font` | `default`, `dyslexic` | Selects the font preference |

The selected visual settings are applied to the document root using attributes such as:

```html
<html data-theme="contrast" data-font="dyslexic">
```

Styles in `frontend/src/index.css` map these attributes to the site's theme variables and typography. Saved preferences are **device- and browser-specific**; they are not stored in an account or synchronised across devices.

To reset preferences during development, run the following in the browser's developer console:

```js
localStorage.removeItem("accessibility-decision");
localStorage.removeItem("accessibility-theme");
localStorage.removeItem("accessibility-font");
location.reload();
```

> Accessibility features support user preferences, but their presence alone does not establish WCAG compliance. Keyboard navigation, focus indicators, colour contrast, text resizing, and reduced-motion behaviour should also be tested.

## Contact form setup
The contact form submits directly to Form.taxi using the browser's native form behaviour. A separate server or API key is not required for this approach.

1. Create a form in your [Form.taxi dashboard](https://form.taxi/).
2. Copy the form's unique submission URL.
3. In `frontend/src/components/Contact.tsx`, configure the form's `action` and `method`:

   ```tsx
   <form
       action="https://form.taxi/s/YOUR_FORM_CODE"
       method="POST"
   >
       {/* Name, email and message fields */}
       <input
           type="hidden"
           name="_next"
           value="http://localhost:5173/thank-you"
       />
       {/* Submit button */}
   </form>
   ```

4. Keep the visible input `name` attributes aligned with the fields Form.taxi should receive (`name`, `email`, and `message`).
5. Submit a test message and confirm it appears in the Form.taxi inbox.
6. Before publishing, replace the local `_next` URL with the real deployed website address, for example `https://YOUR_DOMAIN/thank-you`.

### Why use a native form submission?
During local development, a JavaScript `fetch()` submission from `http://localhost:5173` encountered a CORS response mismatch. Form.taxi still received the messages, but the browser would not allow JavaScript to read the response. Native HTML submission avoids depending on that cross-origin JavaScript response and supports a redirect after submission.

**Do not add `event.preventDefault()` to the native form's submit handler** unless you are intentionally replacing browser submission with a working JavaScript submission flow.

### Important considerations
- The Form.taxi URL identifies the public receiving form; it is not a private API secret.
- Form.taxi may detect and reject repeat submissions containing the same data in a short period.
- The `/thank-you` route can also be visited directly, so displaying that page does not independently verify a submission.
- Check the current Form.taxi plan limits and data-handling terms before relying on it for production contact enquiries.
- If submission controls are disabled while sending, provide a way to retry if navigation or the request fails.

## Styling and customisation
The project uses Tailwind utility classes and CSS variables rather than separate stylesheets for each component.

- **Theme colours:** edit the relevant CSS variables and Tailwind mappings in `frontend/src/index.css`.
- **Fonts:** update the local font declarations and `data-font` rules. The portfolio uses General Sans for headings and Sentient for body copy in its default design.
- **Professional experience:** edit `frontend/src/data/experienceData.ts` and keep its entries consistent with the `Experience` TypeScript type.
- **Project imagery:** replace or add images in the appropriate assets directory and update the components that import them.
- **Section layout and navigation:** adjust the respective components and any matching section IDs in `Navbar.tsx`.

When adding an accessibility option, consider storing its value persistently, exposing its current state to assistive technologies, and providing a way to turn it off again.

## Deployment checklist
Before going live:
- [ ] Run `npm run build` and resolve any build errors.
- [ ] Test desktop and mobile layouts.
- [ ] Check keyboard navigation, focus visibility, and colour contrast in both themes.
- [ ] Test the accessibility controls after a refresh and when returning to the website.
- [ ] Confirm route navigation and direct page refreshes work on the chosen host.
- [ ] Configure the host to serve `index.html` for client-side routes such as `/experience/1` and `/thank-you`, where required.
- [ ] Update the Form.taxi website address and `_next` redirect to the production domain.
- [ ] Send one real test submission and verify receipt.
- [ ] Check image optimisation, alt text, metadata, and reduced-motion behaviour.
- [ ] Add a live website link and screenshots to this README.

### Hosting notes
A Vite/React application can be deployed as a static site. The build output is `dist/`. The hosting provider must support React Router's client-side navigation, typically through a single-page application fallback or rewrite rule.

## Future improvements
Potential additions include:

- More accessibility settings, grouped under **Appearance**, **Typography**, and **Motion**.
- A font-size control and reduced-motion preference.
- More detailed project case studies.
- Improved submission feedback and retry handling once the form backend supports the required interaction.
- Automated accessibility and end-to-end tests.
- Expanded SEO metadata and social sharing previews.

These are planned possibilities, not features claimed to be complete.

## AI usage
During the development of this portfolio AI has been used, here is how:
- Any and all README files (excluding parts mentioning AI usage, this is me personally).
- Explaining tailwind CSS as this is my second project using it.