/**
 * Google Apps Script: moves the partial backups of a session
 * (partial_<name>_<nn>.csv) to the Drive trash once its complete file
 * (<name>.csv) is in the same folder. Sessions without a complete file
 * (crash, closed tab) keep their partial files. Trashed files can be
 * restored from the Drive trash for 30 days.
 *
 * Setup (once, with the Google account that owns the DataPipe folder):
 *   1. https://script.google.com -> New project, paste this file.
 *   2. Run installTrigger (authorise Drive access when asked). It runs
 *      cleanupPartials now and then every 10 minutes.
 */

// DataPipe folders, as paths from My Drive
const FOLDERS = [
  ['DataPipe', 'Category Learning (cues)'],
];

const PARTIAL = /^partial_(.+)_\d{2}\.csv$/;

function cleanupPartials() {
  FOLDERS.forEach(function (path) {
    const folder = getFolder_(path);
    const names = new Set();
    const partials = [];
    const files = folder.getFiles();
    while (files.hasNext()) {
      const f = files.next();
      if (f.isTrashed()) {
        continue;
      }
      const name = f.getName();
      names.add(name);
      const m = name.match(PARTIAL);
      if (m) {
        partials.push({file: f, complete: m[1] + '.csv'});
      }
    }
    let n = 0;
    partials.forEach(function (p) {
      if (names.has(p.complete)) {
        p.file.setTrashed(true);
        n += 1;
      }
    });
    console.log(path.join('/') + ': ' + n + ' partial file(s) moved to the trash');
  });
}

function installTrigger() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'cleanupPartials') {
      ScriptApp.deleteTrigger(t);
    }
  });
  ScriptApp.newTrigger('cleanupPartials').timeBased().everyMinutes(10).create();
  cleanupPartials();
}

function getFolder_(path) {
  let folder = DriveApp.getRootFolder();
  path.forEach(function (name) {
    const it = folder.getFoldersByName(name);
    if (!it.hasNext()) {
      throw new Error('Folder not found: ' + path.join('/'));
    }
    folder = it.next();
  });
  return folder;
}
