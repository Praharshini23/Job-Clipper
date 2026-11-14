# Manual acceptance test checklist

## Install
- [ ] Extract folder and load unpacked at `chrome://extensions`.
- [ ] Confirm Job Clipper icon appears without manifest errors.

## Capture on three sites
- [ ] Site 1: open a job detail page; click extension icon; verify role, company, URL and deadline; save.
- [ ] Site 2: repeat and compare extraction.
- [ ] Site 3: repeat and compare extraction.
- [ ] If extraction misses any value, type it manually and save.

## Board
- [ ] Verify card appears under Saved.
- [ ] Edit every field and save; verify changes persist after refresh.
- [ ] Drag Saved → Applied → Interview → Result.
- [ ] Use Move action and verify it advances one stage.
- [ ] Search by role, company and a notes keyword; clear search.
- [ ] Close/reopen Chrome and verify records remain.

## Reminder
- [ ] Allow Chrome notifications in browser and OS settings.
- [ ] Create a test job with a deadline/reminder time in the near future (or temporarily set the test deadline/reminder to a near-future time).
- [ ] Keep Chrome running; verify notification appears.
- [ ] Verify Result-stage jobs do not receive reminders.

## CSV
- [ ] Add values containing commas, quotes and non-English characters.
- [ ] Export CSV.
- [ ] Open in Excel or Google Sheets; verify columns and values are intact.

## Offline / privacy
- [ ] Disconnect Wi-Fi and verify board, search, edit and export still work.
- [ ] Confirm no account or login is requested.
