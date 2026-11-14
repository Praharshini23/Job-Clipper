# Job-Clipper
Job Clipper is a Chrome extension designed to simplify job application tracking. It extracts relevant job details from online listings and allows users to save opportunities in a centralized dashboard. Users can organize applications into stages and Result a Kanban board. The extension helping users manage their job search efficiently.

# Job Clipper

A privacy-first Chrome extension that clips job opportunities from job pages into a four-stage application board.

## Features
- Click the extension icon on a job page to prefill role, company, URL and a detectable deadline.
- Review and edit every field before saving.
- Kanban board: Saved, Applied, Interview and Result. Drag cards between stages or use Move.
- Deadline reminders using Chrome alarms and notifications.
- Search across role, company, URL and notes.
- Export all records to spreadsheet-friendly UTF-8 CSV.
- Data stays in `chrome.storage.local`; no account, backend or external API is required.

## Install in Chrome
1. Extract the `Job-Clipper` folder.
2. Open `chrome://extensions`.
3. Turn on **Developer mode**.
4. Choose **Load unpacked** and select this folder.
5. Open a job listing and click the Job Clipper icon. Confirm the extracted details and choose **Add to my board**.
6. Open the board from the popup footer or the extension's Details → Extension options.

## Extraction notes
The extension uses common page headings, metadata and job-site selectors, plus a deadline phrase scan. Job sites change their markup and some content loads dynamically, so extraction is best-effort. The popup always allows manual correction. Test at least three sites and manually enter any missing fields.

## Reminders
Chrome notifications must be allowed by the operating system/browser. A reminder is scheduled for 9:00 AM on the selected number of days before the deadline. If that time has already passed, the extension does not create a retroactive reminder. Keep Chrome running for scheduled alarms to be delivered reliably.

## Privacy and offline behavior
No network requests are made by the extension. The active tab is read locally when you click the extension. Records are stored in the browser profile's local extension storage. CSV export is generated locally.

## Files
- `manifest.json` — Manifest V3 configuration.
- `popup.html`, `popup.js` — quick-save form.
- `content.js` — best-effort page extraction.
- `dashboard.html`, `dashboard.js` — editable kanban board, search and CSV export.
- `background.js` — reminder scheduling and notifications.

## Browser compatibility
Built for Chromium-based browsers supporting Manifest V3 (Chrome, Edge and Brave). The extension itself requires no paid API or login.
