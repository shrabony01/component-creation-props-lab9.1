# React Component Library Lab -9.1

In this lab, I built three reusable React components with TypeScript and Vite: `AlertBox`, `UserProfileCard`, and `ProductDisplay`.

---

## Problems I Faced & How I Fixed Them

* **TypeScript Import Errors**: When importing my interfaces, TypeScript gave red errors because Vite required type-only imports, so I added the `type` keyword to lines like `import type { UserProfileCardProps } from '../../types'`.
* **Browser Syntax Errors**: The browser console said `index.ts` had no exports because my file had unsaved changes in VS Code; saving all files (`Ctrl + K` then `S`) and restarting the TypeScript server fixed it.
* **JSX and Tag Mismatches**: 
I ran into issues where tags were accidentally pasted in the wrong file, extra closing `</div>` tags broke the layout, and boolean props had quotes (`'true'` instead of `true`).

* **Huge Stretched Images**:
 The avatar and headphones images took up the whole screen because Tailwind CSS was not set up in the project, causing all the utility classes to be ignored.

* **Fixing Tailwind with HTML**:
 Since installing Tailwind wasn't working right away, I fixed it by adding the CDN script `<script src="https://cdn.tailwindcss.com"></script>` directly inside the `<head>` of `index.html`, which immediately made the avatar a neat circle and sized all cards correctly.

* **Wiring Up the Buttons**:
 I had to make sure clicking **Edit Profile** passed the user ID to show `"Editing user ID: 1"` in the alert, clicking **Add to Cart** showed the product alert, and clicking the **`×`** button closed the alert box properly.



## How to Run

1. `npm install`
2. `npm run dev`
3. Open `http://localhost:5173/` in your browser.