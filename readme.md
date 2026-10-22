# attention_cues — self-hosted

Category learning with a cue ring on the first trial of each testing block (fixed
first-trial outcome), run in the browser with PsychoJS and hosted as static files.

- Results are sent to **DataPipe** (https://pipe.jspsych.org), which stores each file in
  the **Google Drive** folder of the experiment. `main.js` / `main-legacy-browsers.js` set
  `DATAPIPE_URL` and `DATAPIPE_EXPERIMENT_ID` (`dytbqCpbp4WM`, experiment "Category
  Learning (cues)") near the top.
- Files written per session:
  - `<participant>_main_<date>.csv` — the complete results, saved just before the final
    screen (completed or screened out) or when the participant presses Escape.
  - `partial_<participant>_main_<date>_<nn>.csv` — everything so far, after every block
    (screening and testing), so a crash or closed tab loses at most one block. Once the
    complete file exists, `tools/cleanup_partials.gs` (Google Apps Script, setup step 7)
    moves them to the Drive trash; sessions without a complete file keep them.
- The PsychoJS library is in `lib/` and is deployed with the experiment.
- The start dialog's OK button stays disabled until every image is loaded
  (`OKAlwaysEnabledForLocal: false`).
- Without a DataPipe ID (the placeholder `REPLACE_WITH_DATAPIPE_EXPERIMENT_ID`) the
  experiment shows a message and does not start.
- One attempt per participant (same browser): when the first trial of screening starts,
  the browser stores the Prolific ID (`localStorage`, key
  `attention_cues_participated_<PROLIFIC_PID>`). Opening the study again with that ID
  shows a notice instead of the start dialog. Leaving before the first trial (instructions,
  AGREE screen) does not count. Without `PROLIFIC_PID` in the URL nothing is blocked; a
  different browser or a private window is not blocked either (re-takes are also dropped
  in the analysis: first session per Prolific ID only).
- Piloting: use a new `PROLIFIC_PID` value for every test run (e.g. `TEST1`, `TEST2`),
  or clear the site data, since a run that reached the first trial blocks that ID.

## Setup

1. **DataPipe** (https://pipe.jspsych.org): sign in, connect Google Drive as the storage
   provider, create an experiment, and keep **Accept new data** on.
2. Turn **validation off** ("Check submissions before storing them"): new experiments
   require a `trial_type` column, which these results do not have, so every upload would
   be rejected (400 `INVALID_DATA`). Leave "Stop after a set number of sessions" off, or
   set it high: a full session sends 13 files (12 partial + 1 complete).
3. Put the experiment ID into `DATAPIPE_EXPERIMENT_ID` in **both** `main.js` and
   `main-legacy-browsers.js` (done: `dytbqCpbp4WM`).
4. **Hosting** (all files of this folder, as they are):
   - GitHub Pages: push this folder to a repository, Settings → Pages → deploy from the
     main branch, root folder. The site URL ends in `/index.html`.
   - or Netlify Drop (https://app.netlify.com/drop): drag this folder in.
5. **Pilot**: open the URL with `?PROLIFIC_PID=TEST1` and run to the end (or press Escape
   after the first screening block); check that the files appear in the Drive folder.
6. **Prolific**: set the study URL to
   `https://<site>/index.html?PROLIFIC_PID={{%PROLIFIC_PID%}}&STUDY_ID={{%STUDY_ID%}}&SESSION_ID={{%SESSION_ID%}}`.
   Completion goes through the Google Forms set in `main.js`.
7. **Partial-file cleanup**: at https://script.google.com, signed in with the Google account
   that owns the DataPipe folder, create a project, paste `tools/cleanup_partials.gs` and
   run `installTrigger` once (it then runs every 10 minutes).

## Notes

- The DataPipe experiment ID is visible to anyone who opens the page, so anyone could post
  files to it. Turn "Accept new data" off when the study is done.
- Analysis scripts that read every `*.csv` must skip the `partial_*` files.
- Do not commit participant data to this folder (`data/` is in `.gitignore`).
