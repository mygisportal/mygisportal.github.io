import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Deployed as a user/organization GitHub Pages site (mygisportal.github.io),
// served from the domain root, so base stays "/".
// If you fork this into a PROJECT page (username.github.io/repo-name),
// change base to "/repo-name/".
export default defineConfig({
  base: "/",
  plugins: [react()],
});
