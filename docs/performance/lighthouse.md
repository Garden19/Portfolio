# Lighthouse Scores
The tests done both before and after are using Lighthouse. The url used for both tests is http://localhost:4173/

## Baseline Results (13/11/2026)
| **Category**               | Mobile | Desktop |
|----------------------------|--------|---------|
| Performance                | 94     | 98      |
| Accessibility              | 100    | 100     |
| Best Practices             | 100    | 100     |
| Search Engine Optimisation | 75     | 75      |
| Agentic Browsing           | 2      |  2      |

### Issues:
- Document does not have a meta description.
- Links do not have descriptive text.
- robots.txt is not valid.
- llms.txt does not follow recommendations.
- ai-catalog.json shema is invalid

### What I changed:
- Added meta tags for robot indexing and descriptions.
- Added robots.txt to allow crawlers.
- Added a sitemap to specify urls for crawlers.
- Added a llms.txt to specify pages and urls for AI agents to find.

## After Results (15/11/2026)
| **Category**               | Mobile | Desktop |
|----------------------------|--------|---------|
| Performance                | 89     | 99      |
| Accessibility              | 100    | 100     |
| Best Practices             | 100    | 100     |
| Search Engine Optimisation | 100    | 100     |
| Agentic Browsing           | 3      | 3       |

### What I Learned
Before conducting these tests, I had limited knowledge of technical SEO and how search engines discover and interpret website content.

Researching the issues identified by Lighthouse helped me understand the purpose of meta tags, robots.txt, XML sitemaps and llms.txt.

I also learned that achieving a high Lighthouse score involves more than making a website look good. It requires taking into account the performance, accessibility and how automated systems interact with the website.

The testing process also highlighted the importance of measuring changes rather than assuming every implementation will result in an improvement.