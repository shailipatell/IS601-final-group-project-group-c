# Group Activity Report 


## Discussions

- Yahya coded the about and privacy policy page, while shaili created the navbar and home page, and radhika created the blog page, all under next.js functionality
- Yahya would take care of playwright testing and github workflow actions, ensuring all tests passed and the website was deployed seemlessly
- Shaili took care of mailchimp and Google Analytics integration and seemlessly coded it into the repository and webpage
- Radhika took care of Agile develoment, wiki, user stories and acceptance criteria. In addition, she created the figma design for the website.
- Yahya would create the video, while recieving audio and guidelines from Shaili and Radhika
- Manual QA review took place before submission

## GIT Pull Request Table

| Pull Request | Author       | Title                                   | Story Points | Merged Date   |
|--------------|--------------|-----------------------------------------|--------------|---------------|
| #9           | shailipatell | Added node-fetch                        | 3            | 08/09/23      |
| #8           | shailipatell | Mailchimp and GDPR Compliance           | 5            | 08/08/23      |
| #5           | rr745        | Added blog.js                           | 8            | 08/07/23      |
| #4           | ysheikh728   | Fixed name                              | 2            | 08/07/23      |
| #3           | rr745        | Blog added                              | 5            | 08/07/23      |
| #2           | ysheikh728   | Added about and privacy pages           | 3            | 08/07/23      |
| #1           | shailipatell | Gym home page                           | 5            | 08/07/23      |

The Total number of story points takes into account the Issues + PR's raised + Miscelleous tasks

## Project Contribution Percent Calculation

- Yahya's contribution percent: (35 / 85) * 100 = 41.18%
- Shaili's contribution percent: (30 / 85) * 100 = 35.29%
- Radhika's contribution percent: (20 /85) * 100 = 23.53%

## Manual QA Review

**5 Issues Identified before Submission**
1. Lack of Skip Navigation Feature Hinders Accessibility
- Resolved by implementation of a keyboard/screen-reader accessible skip navigation link at the page beginning, enabling users to bypass repetitive navigation and reach main content directly, while maintaining design. Test for consistent functionality, considering unique stable target IDs and content hierarchy.
2. Inconsistent naming for Page Title
- Resolved by Ensuring page titles start with "TechFit Gym - [Page Name]," remain under 60 characters, are unique, relevant to content, avoid vagueness, and use meta title tags for SEO.
3. Fix Workflow for deployment 
- Ensuring tasks involve investigating and resolving deployment issues, updating workflow configurations and dependencies, testing changes, validating staging and production deployments, and updating workflow documentation.
4. Fix Playwright Test
- Ensuring tasks involve fixing a sign-up test to ensure successful registration and redirection, as well as addressing a search test to display relevant search results on the homepage.
5. Integration of MailChimp in a better manner
- Recreating a MailChimp account by visiting their website and signing up. Once your account is set up, obtain your MailChimp API key from your account settings. Then, integrate the MailChimp API with your website by incorporating the API key into your website's code to enable features like subscriber forms, list management, and email campaigns directly from your site.
