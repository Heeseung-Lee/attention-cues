/************* 
 * Main *
 *************/
// variant: attention_cues


// store info about the experiment session:
let expName = 'main';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// Google Forms shown after the task; each one holds the matching Prolific completion
// link (completed vs screened out). The form is chosen on the final screen; there is
// no cancellation URL, so quitting with Escape does not redirect.
const FORM_URL_COMPLETED = 'https://docs.google.com/forms/d/e/1FAIpQLSedIzMqoLadAVOnWt_rXIeKyjN4S1UMMN6tFaFejkzWIcm21A/viewform?usp=header';
const FORM_URL_SCREENED_OUT = 'https://docs.google.com/forms/d/e/1FAIpQLSewe0q9w7tzh92sUZMMsgYKscpkJoasMyafPs26Z5KdlgBMyA/viewform?usp=header';

// CHECK MODE: trials per testing block (the primed first trial included) for a quick
// run-through. Set to null for the real experiment (64 trials per block).
const CHECK_NTRIALS_TEST = null;
// CHECK MODE: trial cap per screening block (before its test, if nscreen_test > 0; a
// multiple of 8 keeps the test balanced). Set to null for the real experiment (130 trials).
const CHECK_NTRIALS_SCREEN = null;
// CHECK MODE: skip the screening blocks and start with the testing blocks (for
// review). Set to false for the real experiment.
const CHECK_SKIP_SCREENING = false;
psychoJS.setRedirectUrls(FORM_URL_COMPLETED, undefined);
// form for this participant (set on the final screen); also used if saving fails
let redirect_url = FORM_URL_COMPLETED;

// Self-hosted (e.g. GitHub Pages): results are sent to DataPipe (pipe.jspsych.org),
// which writes each file to the Google Drive folder of the DataPipe experiment
// "Category Learning (cues)". Set DATAPIPE_EXPERIMENT_ID from the DataPipe dashboard;
// with the placeholder the experiment refuses to start.
const DATAPIPE_URL = 'https://pipe.jspsych.org/api/data/';
const DATAPIPE_EXPERIMENT_ID = 'dytbqCpbp4WM';

// partial results after every block (separate files, prefixed "partial_"), so a crash
// or closed tab loses at most one block; the complete file is saved before the final
// screen (and on Escape)
const PROGRESS_UPLOADS = true;

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
// one attempt per participant: once the first trial (of screening) has started, this
// browser remembers the Prolific ID; opening the study again with that ID shows a notice
// instead of the start dialog. Without a Prolific ID in the URL nothing is blocked, and
// if the browser storage is unavailable the study runs as usual.
const RETAKE_PID = (util.getUrlParameters().get('PROLIFIC_PID') || '');
const RETAKE_KEY = ('attention_cues_participated_' + RETAKE_PID);
const RETAKE_MSG = 'You have already taken part in this study. Taking it again is not allowed; you will be paid according to your first attempt. Please close this page and return to Prolific.';
function _alreadyParticipated() {
  if (!RETAKE_PID) {
    return false;
  }
  try {
    return (window.localStorage.getItem(RETAKE_KEY) !== null);
  } catch (error) {
    return false;
  }
}
function _markParticipated() {
  if (!RETAKE_PID) {
    return;
  }
  try {
    if ((window.localStorage.getItem(RETAKE_KEY) === null)) {
      window.localStorage.setItem(RETAKE_KEY, new Date().toISOString());
    }
  } catch (error) {
  }
}
// shown instead of the start dialog; the experiment never continues
function retakeBlockedRoutine() {
  let shown = false;
  return async function () {
    if (!shown) {
      shown = true;
      psychoJS.gui.dialog({warning: RETAKE_MSG, showOK: false});
    }
    return Scheduler.Event.FLIP_REPEAT;
  };
}
const RETAKE_BLOCKED = _alreadyParticipated();
if (RETAKE_BLOCKED) {
  psychoJS.schedule(retakeBlockedRoutine());
} else {
  psychoJS.schedule(psychoJS.gui.DlgFromDict({
    dictionary: expInfo,
    title: expName,
    OKAlwaysEnabledForLocal: false
  }));
}

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(init_expRoutineBegin());
flowScheduler.add(init_expRoutineEachFrame());
flowScheduler.add(init_expRoutineEnd());
flowScheduler.add(bot_agreeRoutineBegin('notice'));
flowScheduler.add(bot_agreeRoutineEachFrame());
flowScheduler.add(bot_agreeRoutineEnd());
const instruction_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instruction_loopLoopBegin(instruction_loopLoopScheduler));
flowScheduler.add(instruction_loopLoopScheduler);
flowScheduler.add(instruction_loopLoopEnd);


const block_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(block_loopLoopBegin(block_loopLoopScheduler));
flowScheduler.add(block_loopLoopScheduler);
flowScheduler.add(block_loopLoopEnd);











flowScheduler.add(final_infoRoutineBegin());
flowScheduler.add(final_infoRoutineEachFrame());
flowScheduler.add(final_infoRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you! Please click OK (do not press Esc) to continue to the Google Form.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'repstm_loop.xlsx', 'path': 'repstm_loop.xlsx'},
    {'name': 'default.png', 'path': 'images/default.png'},  // placeholder for image components until their first setImage
    {'name': 'images/instruction/instruction.001.jpeg', 'path': 'images/instruction/instruction.001.jpeg'},
    {'name': 'images/instruction/instruction.002.jpeg', 'path': 'images/instruction/instruction.002.jpeg'},
    {'name': 'images/instruction/instruction.003.jpeg', 'path': 'images/instruction/instruction.003.jpeg'},
    {'name': 'images/instruction/instruction.004.jpeg', 'path': 'images/instruction/instruction.004.jpeg'},
    {'name': 'images/instruction/instruction.005.jpeg', 'path': 'images/instruction/instruction.005.jpeg'},
    {'name': 'images/instruction/instruction.006.jpeg', 'path': 'images/instruction/instruction.006.jpeg'},
    {'name': 'images/instruction/instruction.007.jpeg', 'path': 'images/instruction/instruction.007.jpeg'},
    {'name': 'images/instruction/instruction.008.jpeg', 'path': 'images/instruction/instruction.008.jpeg'},
    {'name': 'images/instruction/instruction.009.jpeg', 'path': 'images/instruction/instruction.009.jpeg'},
    {'name': 'images/fractals/1.png', 'path': 'images/fractals/1.png'},
    {'name': 'images/fractals/2.png', 'path': 'images/fractals/2.png'},
    {'name': 'images/fractals/3.png', 'path': 'images/fractals/3.png'},
    {'name': 'images/fractals/4.png', 'path': 'images/fractals/4.png'},
    {'name': 'images/fractals/5.png', 'path': 'images/fractals/5.png'},
    {'name': 'images/fractals/6.png', 'path': 'images/fractals/6.png'},
    {'name': 'images/fractals/7.png', 'path': 'images/fractals/7.png'},
    {'name': 'images/fractals/8.png', 'path': 'images/fractals/8.png'},
    {'name': 'images/fractals/9.png', 'path': 'images/fractals/9.png'},
    {'name': 'images/fractals/10.png', 'path': 'images/fractals/10.png'},
    {'name': 'images/fractals/11.png', 'path': 'images/fractals/11.png'},
    {'name': 'images/fractals/12.png', 'path': 'images/fractals/12.png'},
    {'name': 'images/fractals/13.png', 'path': 'images/fractals/13.png'},
    {'name': 'images/fractals/14.png', 'path': 'images/fractals/14.png'},
    {'name': 'images/fractals/15.png', 'path': 'images/fractals/15.png'},
    {'name': 'images/fractals/16.png', 'path': 'images/fractals/16.png'},
    {'name': 'images/fractals/17.png', 'path': 'images/fractals/17.png'},
    {'name': 'images/fractals/18.png', 'path': 'images/fractals/18.png'},
    {'name': 'images/fractals/19.png', 'path': 'images/fractals/19.png'},
    {'name': 'images/fractals/20.png', 'path': 'images/fractals/20.png'},
    {'name': 'images/fractals/21.png', 'path': 'images/fractals/21.png'},
    {'name': 'images/fractals/22.png', 'path': 'images/fractals/22.png'},
    {'name': 'images/fractals/23.png', 'path': 'images/fractals/23.png'},
    {'name': 'images/fractals/24.png', 'path': 'images/fractals/24.png'},
    {'name': 'images/fractals/25.png', 'path': 'images/fractals/25.png'},
    {'name': 'images/fractals/26.png', 'path': 'images/fractals/26.png'},
    {'name': 'images/fractals/27.png', 'path': 'images/fractals/27.png'},
    {'name': 'images/fractals/28.png', 'path': 'images/fractals/28.png'},
    {'name': 'images/fractals/29.png', 'path': 'images/fractals/29.png'},
    {'name': 'images/fractals/30.png', 'path': 'images/fractals/30.png'},
    {'name': 'images/fractals/31.png', 'path': 'images/fractals/31.png'},
    {'name': 'images/fractals/32.png', 'path': 'images/fractals/32.png'},
    {'name': 'images/fractals/33.png', 'path': 'images/fractals/33.png'},
    {'name': 'images/fractals/34.png', 'path': 'images/fractals/34.png'},
    {'name': 'images/fractals/35.png', 'path': 'images/fractals/35.png'},
    {'name': 'images/fractals/36.png', 'path': 'images/fractals/36.png'},
    {'name': 'images/fractals/37.png', 'path': 'images/fractals/37.png'},
    {'name': 'images/fractals/38.png', 'path': 'images/fractals/38.png'},
    {'name': 'images/fractals/39.png', 'path': 'images/fractals/39.png'},
    {'name': 'images/fractals/40.png', 'path': 'images/fractals/40.png'},
    {'name': 'images/fractals/41.png', 'path': 'images/fractals/41.png'},
    {'name': 'images/fractals/42.png', 'path': 'images/fractals/42.png'},
    {'name': 'images/fractals/43.png', 'path': 'images/fractals/43.png'},
    {'name': 'images/fractals/44.png', 'path': 'images/fractals/44.png'},
    {'name': 'images/fractals/45.png', 'path': 'images/fractals/45.png'},
    {'name': 'images/fractals/46.png', 'path': 'images/fractals/46.png'},
    {'name': 'images/fractals/47.png', 'path': 'images/fractals/47.png'},
    {'name': 'images/fractals/48.png', 'path': 'images/fractals/48.png'},
    {'name': 'images/fractals/49.png', 'path': 'images/fractals/49.png'},
    {'name': 'images/fractals/50.png', 'path': 'images/fractals/50.png'},
    {'name': 'images/fractals/51.png', 'path': 'images/fractals/51.png'},
    {'name': 'images/fractals/52.png', 'path': 'images/fractals/52.png'},
    {'name': 'images/fractals/53.png', 'path': 'images/fractals/53.png'},
    {'name': 'images/fractals/54.png', 'path': 'images/fractals/54.png'},
    {'name': 'images/fractals/55.png', 'path': 'images/fractals/55.png'},
    {'name': 'images/fractals/56.png', 'path': 'images/fractals/56.png'},
    {'name': 'images/fractals/57.png', 'path': 'images/fractals/57.png'},
    {'name': 'images/fractals/58.png', 'path': 'images/fractals/58.png'},
    {'name': 'images/fractals/59.png', 'path': 'images/fractals/59.png'},
    {'name': 'images/fractals/60.png', 'path': 'images/fractals/60.png'},
    {'name': 'images/fractals/61.png', 'path': 'images/fractals/61.png'},
    {'name': 'images/fractals/62.png', 'path': 'images/fractals/62.png'},
    {'name': 'images/fractals/63.png', 'path': 'images/fractals/63.png'},
    {'name': 'images/fractals/64.png', 'path': 'images/fractals/64.png'},
    {'name': 'images/fractals/65.png', 'path': 'images/fractals/65.png'},
    {'name': 'images/fractals/66.png', 'path': 'images/fractals/66.png'},
    {'name': 'images/fractals/67.png', 'path': 'images/fractals/67.png'},
    {'name': 'images/fractals/68.png', 'path': 'images/fractals/68.png'},
    {'name': 'images/fractals/69.png', 'path': 'images/fractals/69.png'},
    {'name': 'images/fractals/70.png', 'path': 'images/fractals/70.png'},
    {'name': 'images/fractals/71.png', 'path': 'images/fractals/71.png'},
    {'name': 'images/fractals/72.png', 'path': 'images/fractals/72.png'},
    {'name': 'images/fractals/73.png', 'path': 'images/fractals/73.png'},
    {'name': 'images/fractals/74.png', 'path': 'images/fractals/74.png'},
    {'name': 'images/fractals/75.png', 'path': 'images/fractals/75.png'},
    {'name': 'images/fractals/76.png', 'path': 'images/fractals/76.png'},
    {'name': 'images/fractals/77.png', 'path': 'images/fractals/77.png'},
    {'name': 'images/fractals/78.png', 'path': 'images/fractals/78.png'},
    {'name': 'images/fractals/79.png', 'path': 'images/fractals/79.png'},
    {'name': 'images/fractals/80.png', 'path': 'images/fractals/80.png'},
    {'name': 'images/fractals/81.png', 'path': 'images/fractals/81.png'},
    {'name': 'images/fractals/82.png', 'path': 'images/fractals/82.png'},
    {'name': 'images/fractals/83.png', 'path': 'images/fractals/83.png'},
    {'name': 'images/fractals/84.png', 'path': 'images/fractals/84.png'},
    {'name': 'images/fractals/85.png', 'path': 'images/fractals/85.png'},
    {'name': 'images/fractals/86.png', 'path': 'images/fractals/86.png'},
    {'name': 'images/fractals/87.png', 'path': 'images/fractals/87.png'},
    {'name': 'images/fractals/88.png', 'path': 'images/fractals/88.png'},
    {'name': 'images/fractals/89.png', 'path': 'images/fractals/89.png'},
    {'name': 'images/fractals/90.png', 'path': 'images/fractals/90.png'},
    {'name': 'images/fractals/91.png', 'path': 'images/fractals/91.png'},
    {'name': 'images/fractals/92.png', 'path': 'images/fractals/92.png'},
    {'name': 'images/fractals/93.png', 'path': 'images/fractals/93.png'},
    {'name': 'images/fractals/94.png', 'path': 'images/fractals/94.png'},
    {'name': 'images/fractals/95.png', 'path': 'images/fractals/95.png'},
    {'name': 'images/fractals/96.png', 'path': 'images/fractals/96.png'},
    {'name': 'images/fractals/97.png', 'path': 'images/fractals/97.png'},
    {'name': 'images/fractals/98.png', 'path': 'images/fractals/98.png'},
    {'name': 'images/fractals/99.png', 'path': 'images/fractals/99.png'},
    {'name': 'images/fractals/100.png', 'path': 'images/fractals/100.png'},
    {'name': 'images/fractals/101.png', 'path': 'images/fractals/101.png'},
    {'name': 'images/fractals/102.png', 'path': 'images/fractals/102.png'},
    {'name': 'images/fractals/103.png', 'path': 'images/fractals/103.png'},
    {'name': 'images/fractals/104.png', 'path': 'images/fractals/104.png'},
    {'name': 'images/fractals/105.png', 'path': 'images/fractals/105.png'},
    {'name': 'images/fractals/106.png', 'path': 'images/fractals/106.png'},
    {'name': 'images/fractals/107.png', 'path': 'images/fractals/107.png'},
    {'name': 'images/fractals/108.png', 'path': 'images/fractals/108.png'},
    {'name': 'images/fractals/109.png', 'path': 'images/fractals/109.png'},
    {'name': 'images/fractals/110.png', 'path': 'images/fractals/110.png'},
    {'name': 'images/fractals/111.png', 'path': 'images/fractals/111.png'},
    {'name': 'images/fractals/112.png', 'path': 'images/fractals/112.png'},
    {'name': 'images/fractals/113.png', 'path': 'images/fractals/113.png'},
    {'name': 'images/fractals/114.png', 'path': 'images/fractals/114.png'},
    {'name': 'images/fractals/115.png', 'path': 'images/fractals/115.png'},
    {'name': 'images/fractals/116.png', 'path': 'images/fractals/116.png'},
    {'name': 'images/fractals/117.png', 'path': 'images/fractals/117.png'},
    {'name': 'images/fractals/118.png', 'path': 'images/fractals/118.png'},
    {'name': 'images/fractals/119.png', 'path': 'images/fractals/119.png'},
    {'name': 'images/fractals/120.png', 'path': 'images/fractals/120.png'},
    {'name': 'images/fractals/121.png', 'path': 'images/fractals/121.png'},
    {'name': 'images/fractals/122.png', 'path': 'images/fractals/122.png'},
    {'name': 'images/fractals/123.png', 'path': 'images/fractals/123.png'},
    {'name': 'images/fractals/124.png', 'path': 'images/fractals/124.png'},
    {'name': 'images/fractals/125.png', 'path': 'images/fractals/125.png'},
    {'name': 'images/fractals/126.png', 'path': 'images/fractals/126.png'},
    {'name': 'images/fractals/127.png', 'path': 'images/fractals/127.png'},
    {'name': 'images/fractals/128.png', 'path': 'images/fractals/128.png'},
    {'name': 'images/fractals/129.png', 'path': 'images/fractals/129.png'},
    {'name': 'images/fractals/130.png', 'path': 'images/fractals/130.png'},
    {'name': 'images/fractals/131.png', 'path': 'images/fractals/131.png'},
    {'name': 'images/fractals/132.png', 'path': 'images/fractals/132.png'},
    {'name': 'images/flags/flag.jpeg', 'path': 'images/flags/flag.jpeg'},
  ]
});



var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';
  results_base = `${expInfo["participant"]}_${expName}_${expInfo["date"]}`;
  if ((DATAPIPE_EXPERIMENT_ID.indexOf('REPLACE') === 0)) {
    psychoJS._saveResults = false;   // nothing to save, and no local download
    return quitPsychoJS('This study is not configured yet (no data destination). Please return it on Prolific and contact the researcher.', false);
  }
  // PsychoJS would download a CSV here: send it to DataPipe instead
  psychoJS.experiment.save = async function ({tag = ''} = {}) {
    await _pipeUpload(`${results_base}${tag}.csv`, _resultsCsv());
  };


  return Scheduler.Event.NEXT;
}


var init_expClock;
var nblocks;
var nstm;
var nstmrep;
var ntrials;
var npractice_blocks;
var nstmrep_practice;
var ntrials_practice;
var nblock_total;
var time_precue;
var itime_precue;
var time_resp;
var time_feed;
var blocks;
var prime_dim_blocks;
var stm1;
var stm2;
var stm3;
var stm4;
var stm5;
var stm6;
var stm7;
var stm8;
var type3_AB;
var type3_AC;
var type3_BC;
var type1_A;
var type1_B;
var type1_C;
var type2_AB;
var type2_AC;
var type2_BC;
var type4;
var type5_A;
var type5_B;
var type5_C;
var screen_type1_dim;
var nCombo_master;
var unit_height;
var pos_A;
var pos_B;
var pos_C;
var size_Stim;
var size_Precue;
var size_Flag_w;
var size_Flag_h;
var size_fix;
var width_fix;
var show_fix;
var stimidx;
var stimidx_test;
var stimidx_prac;
var n_fractal_images;
var n_fractals;
var fractal_exclude;
var size_cue;
var cue_precue;
var cue_stim;
var txt_feed_color;
var txt_feed_size;
var txt_block_instruction;
var text_trialcount;
var precue_color;
var precue_width;
var screen_skip;
var NaNVal;
var pos_trialinfo_x;
var pos_trialinfo_y;
var base_payment;
var total_payment;
var fail_payment;
var screening_bonus_block;
var screening_bonus;
var testing_bonus;
var testing_bonus_list;
var ncorrect_choice;
var nalltrial;
var ncorrect_choice_practice;
var nalltrial_practice;
var failed_practice;
var flag_loc_friend;
var flag_loc_enemy;
var flag_loc_empty;
var instructionClock;
var baseimagedir;
var image_files;
var image_index;
var n_images;
var exit_intro;
var image_instruction;
var mouse_instruction;
var key_instruction;
var init_blockClock;
var txt_block_intro;
var key_block_start;
var precueClock;
var Flag_precue;
var text_trialinfo;
var precue_fix;
var stimulusClock;
var Flag_Empty;
var image_A;
var image_B;
var image_C;
var key_resp;
var text_trialinfo_2;
var stim_fix;
var feedbackClock;
var Flag_feed;
var image_A_feed;
var image_B_feed;
var image_C_feed;
var txt_feed;
var text_trialinfo_3;
var summary_trialClock;
var feedback_blockClock;
var txt_block_feedback;
var key_block_finish;
var final_infoClock;
var txt_final;
var key_final;
var globalClock;
var routineTimer;
// "+$1.00" / "-$1.00" style amounts for the block summary screen
function _fmtBonus(x) {
  if (x === 0) {
    return "$0.00";
  }
  return ((x < 0) ? "-$" : "+$") + Math.abs(x).toFixed(2);
}

// results file name without extension (set in updateInfo) and the number of partial
// uploads so far
var results_base = '';
var n_partial = 0;

// all rows recorded so far (plus the unfinished current row) as CSV, in the format of
// PsychoJS's own CSV: one column per key in order of first appearance, arrays and
// objects as JSON, booleans as TRUE / FALSE
function _resultsCsv() {
  const rows = psychoJS.experiment._trialsData.slice();
  const cur = psychoJS.experiment._currentTrialData;
  if (cur && Object.keys(cur).length > 0) {
    rows.push(cur);
  }
  const keys = [];
  const seen = new Set();
  rows.forEach(function (r) {
    Object.keys(r).forEach(function (k) {
      if (!seen.has(k)) { seen.add(k); keys.push(k); }
    });
  });
  const cell = function (v) {
    if ((v === undefined) || (v === null)) { return ''; }
    if ((typeof v === 'boolean')) { return (v ? 'TRUE' : 'FALSE'); }
    let s = (((typeof v === 'object')) ? JSON.stringify(v) : String(v));
    if (/[",\r\n]/.test(s)) { s = '"' + s.replace(/"/g, '""') + '"'; }
    return s;
  };
  const lines = [keys.map(cell).join(',')];
  rows.forEach(function (r) {
    lines.push(keys.map(function (k) { return cell(r[k]); }).join(','));
  });
  return lines.join('\n') + '\n';
}

// send one file to DataPipe; retries with a growing pause, throws if all tries fail
async function _pipeUpload(filename, csv, tries = 4) {
  let lastError = null;
  for (let i = 0; i < tries; i++) {
    try {
      const resp = await fetch(DATAPIPE_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': '*/*'},
        body: JSON.stringify({experimentID: DATAPIPE_EXPERIMENT_ID, filename: filename, data: csv})
      });
      if (resp.ok) {
        return true;
      }
      lastError = 'HTTP ' + resp.status + ' ' + (await resp.text()).slice(0, 200);
    } catch (error) {
      lastError = String(error);
    }
    await new Promise(function (r) { setTimeout(r, (1000 * (i + 1))); });
  }
  psychoJS.logger.warn('DataPipe upload failed for ' + filename + ': ' + lastError);
  throw new Error(lastError);
}

// upload all data collected so far as a separate partial file (partial_<name>_<n>.csv),
// so that a crash or closed tab loses little data; never interrupts the participant
function saveProgress() {
  if (!PROGRESS_UPLOADS) {
    return;
  }
  n_partial += 1;
  _pipeUpload(`partial_${results_base}_${String(n_partial).padStart(2, '0')}.csv`, _resultsCsv()).catch(function () {});
}

// save all results once, just before the final screen, so they are kept even if the
// participant then presses Esc or closes the tab; once saved, PsychoJS does not upload
// again when quitting (one upload per session). If this fails, the quit retries.
async function saveFinalResults() {
  if (!psychoJS._saveResults) {
    return;
  }
  try {
    await psychoJS.experiment.save({tag: '', clear: false});
    psychoJS._saveResults = false;
  } catch (error) {
    psychoJS.logger.warn('final save before the end screen failed: ' + JSON.stringify(error));
  }
}

// Screening trial order that stops a single-feature (type I style) strategy from
// passing: a feature whose best one-feature rule is right on 6/8 stimuli is wrong on
// its 2 "exceptions", and each epoch puts those 2 at fixed slots 4 trials apart, so
// such a rule can never get more than 5 right in a row.
//   2 such features (type III): rest at 1,3,5,7; one feature's exceptions at 2,6 and
//     the other's at 4,8 (which feature goes where is random per epoch)
//   3 such features (type IV): prototypes at 1,5; the features' exception pairs at
//     2,6 / 3,7 / 4,8 in a random assignment per epoch
// Order within each slot group is random. Returns null for any other rule (type I),
// which keeps the usual random order.
function _screenOrder(ans, nEpochs) {
  const S = [stm1, stm2, stm3, stm4, stm5, stm6, stm7, stm8];
  const exc = [];
  for (let f = 0; f < 3; f++) {
    const wrongSame = [], wrongFlip = [];
    for (let i = 0; i < 8; i++) {
      if ((S[i][f] !== ans[i])) { wrongSame.push(i + 1); } else { wrongFlip.push(i + 1); }
    }
    if ((wrongSame.length === 2)) { exc.push(wrongSame); }
    else if ((wrongFlip.length === 2)) { exc.push(wrongFlip); }
  }
  let pairs, restPos;
  if ((exc.length === 2)) {
    pairs = [[1, 5], [3, 7]]; restPos = [0, 2, 4, 6];
  } else if ((exc.length === 3)) {
    pairs = [[1, 5], [2, 6], [3, 7]]; restPos = [0, 4];
  } else {
    return null;
  }
  const excAll = [].concat(...exc);
  const rest = [1, 2, 3, 4, 5, 6, 7, 8].filter(function (s) { return (excAll.indexOf(s) < 0); });
  const seq = [];
  for (let e = 0; e < nEpochs; e++) {
    const ep = new Array(8);
    const r = rest.slice(); util.shuffle(r);
    restPos.forEach(function (p, j) { ep[p] = r[j]; });
    const featOrder = exc.map(function (_, j) { return j; }); util.shuffle(featOrder);
    pairs.forEach(function (pp, j) {
      const x = exc[featOrder[j]].slice(); util.shuffle(x);
      ep[pp[0]] = x[0]; ep[pp[1]] = x[1];
    });
    seq.push(...ep);
  }
  return {seq: seq, exc: exc};
}

// n shape checks: shape 0 = triangle, 1 = square; map 0: triangle = E and square = O,
// map 1: the reverse. Whole sets of the four map x shape combinations, plus a
// complementary pair (and one random combination) for the remainder, so both mapping
// and shape are balanced (9/9 for 18 checks); random order.
function _probeSeq(n) {
  const combos = [[0, 0], [0, 1], [1, 0], [1, 1]];
  const seq = [];
  for (let k = 0; k < Math.floor((n / 4)); k++) { seq.push(...combos); }
  let rest = (n % 4);
  if ((rest >= 2)) {
    const c = combos[util.randint(0, 4)];
    seq.push(c, [(1 - c[0]), (1 - c[1])]);
    rest -= 2;
  }
  if ((rest === 1)) { seq.push(combos[util.randint(0, 4)]); }
  util.shuffle(seq);
  return seq.map(function (c) { return {map: c[0], shape: c[1]}; });
}

// primed trials of a block, as [{trial, dim, epoch}] (a ring on feature dim from the
// precue until the response), one per odd epoch of 8 trials:
//   testing: on the first trial of epochs 1, 3 and 5 (trials 1, 17, 33), none in
//     epoch 7, so each feature is cued once. Epoch 1 cues firstDim; if it is
//     informative (in inf), epoch 3 cues the other informative feature and epoch 5 the
//     uninformative one; otherwise epoch 3 cues a random informative feature and epoch 5
//     the remaining one.
//   screening: every odd epoch on a random trial of the epoch (within the first nTrials),
//     the first one at firstDim and the others at a random feature.
function _primePlan(testing, nTrials, firstDim, inf) {
  const plan = [];
  const randTrial = function (e) {
    const lo = ((8 * (e - 1)) + 1);
    const hi = Math.min((8 * e), nTrials);
    return (lo + util.randint(0, ((hi - lo) + 1)));
  };
  if (testing) {
    const uninf = [0, 1, 2].filter(function (d) { return (inf.indexOf(d) < 0); })[0];
    let d3, d5;
    if ((inf.indexOf(firstDim) >= 0)) {
      d3 = inf.filter(function (d) { return (d !== firstDim); })[0];
      d5 = uninf;
    } else {
      const order = inf.slice();
      util.shuffle(order);
      d3 = order[0];
      d5 = order[1];
    }
    [[1, firstDim], [3, d3], [5, d5]].forEach(function (ed) {
      if ((((8 * (ed[0] - 1)) + 1) <= nTrials)) {
        plan.push({trial: ((8 * (ed[0] - 1)) + 1), dim: ed[1], epoch: ed[0]});
      }
    });
  } else {
    for (let e = 1; (((8 * (e - 1)) + 1) <= nTrials); e += 2) {
      plan.push({trial: randTrial(e), dim: ((e === 1) ? firstDim : util.randint(0, 3)), epoch: e});
    }
  }
  return plan;
}

// equilateral triangle (pointing up) of the given side, centred on its centroid
function _triangleVertices(side) {
  const h = (side / Math.sqrt(3));
  return [[0, h], [((- side) / 2), ((- h) / 2)], [(side / 2), ((- h) / 2)]];
}

function _squareVertices(side) {
  const h = (side / 2);
  return [[(- h), (- h)], [(- h), h], [h, h], [h, (- h)]];
}

function _circleVertices(nSides, radius) {
  const pts = [];
  for (let i = 0; i < nSides; i++) {
    const a = (2 * Math.PI * i) / nSides;
    pts.push([radius * Math.cos(a), radius * Math.sin(a)]);
  }
  return pts;
}

// ---- bot / automation detection ---------------------------------------------------
// Strong signals (navigator.webdriver, script-generated input events) are checked at the
// start of every screening block and of the first testing block; if any is present, a
// warning must be acknowledged by typing BOT_AGREE_WORD. Behavioural indices (RT spread,
// fast responses, key hold time, timeouts, tab switches, mouse movement) are only
// recorded, per trial and per block, for offline review.
const BOT_AGREE_WORD = 'AGREE';
const BOT_TXT_NOTICE = "IMPORTANT: BOT AND AUTOMATION POLICY\n\n" +
  "This study runs algorithms that detect bots and automated tools while you do the task.\n\n" +
  "You must complete this study yourself. Using a bot, script, macro, auto-clicker, browser extension, AI agent, or any other automated tool to perform the task is strictly prohibited.\n\n" +
  "If it is found, during or after the study, that you used a bot or any automated tool, your submission will be rejected and you will not be paid.\n\n" +
  "Any use of a bot or an automated tool will be reported to Prolific, which may result in penalties to your Prolific account, including suspension or permanent removal from the platform.\n\n" +
  "To confirm that you have read and agree to these terms, type " + BOT_AGREE_WORD + " on your keyboard.";
function _botTxtDetected(reasons) {
  return "WARNING: AUTOMATED ACTIVITY DETECTED\n\n" +
    "Our system has detected signs of a bot or an automated tool in this session:\n- " + reasons.join("\n- ") + "\n\n" +
    "This has been recorded. If you continue in this state, your submission will be rejected.\n\n" +
    "If this problem continues, you must either turn off the bot or automated tool (including browser extensions) or quit the study now.\n\n" +
    "If a bot or automated tool is detected at any point during the study, it will be recorded, no payment will be made, and your submission will be rejected.\n\n" +
    "To confirm that you have read and agree to this, type " + BOT_AGREE_WORD + " on your keyboard.";
}

var botLog = {
  untrusted: 0,         // script-generated (isTrusted = false) key/pointer events so far
  untrustedAtCheck: 0,  // value at the previous checkpoint
  hidden: 0,            // times the tab was hidden
  blur: 0,              // times the window lost focus
  mouseMoves: 0,        // mousemove events so far
  respOpen: false,      // response window of the stimulus routine is open
  down: null,           // pending F/K keydown in the response window
  press: null           // completed F/K press of this trial: {hold, trusted}
};
var botBlock = null;    // behavioural tallies of the current block
var bot_n_warnings = 0;
var bot_agree_active = false;   // agreement screen is accepting typing
var bot_agree_buffer = [];      // letters / 'BS' typed on the agreement screen
function _botNow() { return performance.now() / 1000; }
window.addEventListener('keydown', function (e) {
  if (!e.isTrusted) { botLog.untrusted += 1; }
  // typing on the agreement screen (PsychoJS does not report Backspace)
  if (bot_agree_active && !e.repeat) {
    if (e.code === 'Backspace') {
      bot_agree_buffer.push('BS');
    } else if (/^Key[A-Z]$/.test(e.code)) {
      bot_agree_buffer.push(e.code.slice(3));
    }
  }
  if (botLog.respOpen && !e.repeat && botLog.down === null && botLog.press === null &&
      (e.code === 'KeyF' || e.code === 'KeyK')) {
    botLog.down = {code: e.code, t: _botNow(), trusted: e.isTrusted};
  }
}, true);
window.addEventListener('keyup', function (e) {
  if (!e.isTrusted) { botLog.untrusted += 1; }
  if (botLog.down !== null && e.code === botLog.down.code) {
    botLog.press = {hold: (_botNow() - botLog.down.t), trusted: (botLog.down.trusted && e.isTrusted)};
    botLog.down = null;
  }
}, true);
window.addEventListener('pointerdown', function (e) { if (!e.isTrusted) { botLog.untrusted += 1; } }, true);
window.addEventListener('mousemove', function () { botLog.mouseMoves += 1; }, true);
document.addEventListener('visibilitychange', function () { if (document.hidden) { botLog.hidden += 1; } });
window.addEventListener('blur', function () { botLog.blur += 1; });

function botStrongSignals() {
  const reasons = [];
  if (navigator.webdriver === true) {
    reasons.push("the browser is controlled by an automation tool (webdriver)");
  }
  if (botLog.untrusted > botLog.untrustedAtCheck) {
    reasons.push("script-generated keyboard or mouse input");
  }
  return reasons;
}

function _botNewBlock() {
  return {n: 0, late: 0, rts: [], keydur: 0, shortHold: 0};
}

// per-block behavioural indices; missing values are NaNVal
function _botBlockSummary(b) {
  const rts = b.rts.slice().sort(function (x, y) { return x - y; });
  function q(p) {
    const i = (rts.length - 1) * p, lo = Math.floor(i), hi = Math.ceil(i);
    return rts[lo] + (rts[hi] - rts[lo]) * (i - lo);
  }
  const s = {
    iqr: ((rts.length >= 4) ? (q(0.75) - q(0.25)) : null),
    fast: (rts.length ? (rts.filter(function (x) { return x < 0.25; }).length / rts.length) : null),
    keydur: (rts.length ? (b.keydur / rts.length) : null),
    shortHold: (rts.length ? (b.shortHold / rts.length) : null),
    late: (b.n ? (b.late / b.n) : null)
  };
  s.flags = (((s.iqr !== null) && (s.iqr < 0.10)) ? 1 : 0) + (((s.fast !== null) && (s.fast > 0.30)) ? 1 : 0) +
            (((s.keydur !== null) && (s.keydur > 0.30)) ? 1 : 0) + (((s.late !== null) && (s.late > 0.20)) ? 1 : 0);
  return s;
}

// agreement screen: the bot policy notice (mode 'notice', always shown) or the
// detection warning (mode 'check', shown only when a strong signal is present)
var bot_agreeClock;
var bot_agree_txt;
var bot_agree_typed_txt;
var bot_agree_mode;
var bot_agree_show;
var bot_agree_reasons;
var bot_agree_typed;
var bot_agreeComponents;
var bot_agree_rt;
function bot_agreeRoutineBegin(mode, snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    t = 0;
    frameN = -1;
    continueRoutine = true;
    routineForceEnded = false;
    bot_agreeClock.reset();
    routineTimer.reset();
    bot_agree_mode = mode;
    bot_agree_typed = '';
    bot_agree_reasons = [];
    if ((mode === 'notice')) {
      bot_agree_show = true;
    } else {
      // runs before every block: fresh behavioural tallies, strong-signal check at
      // the screening blocks and the first testing block
      botBlock = _botNewBlock();
      const blk = (block_loop.thisRepN + 1 + screen_skip);
      const isCheckpoint = ((blk <= npractice_blocks) || (blk === (npractice_blocks + 1)));
      if (isCheckpoint) {
        bot_agree_reasons = botStrongSignals();
        botLog.untrustedAtCheck = botLog.untrusted;
      }
      bot_agree_show = (bot_agree_reasons.length > 0);
      if (bot_agree_show) {
        bot_n_warnings += 1;
      }
      psychoJS.experiment.addData("bot_check", (isCheckpoint ? 1 : 0));
      psychoJS.experiment.addData("bot_detected", (bot_agree_show ? 1 : 0));
      psychoJS.experiment.addData("bot_reasons", bot_agree_reasons.join("; "));
      psychoJS.experiment.addData("bot_n_warnings", bot_n_warnings);
      psychoJS.experiment.addData("bot_webdriver", ((navigator.webdriver === true) ? 1 : 0));
      psychoJS.experiment.addData("bot_untrusted_total", botLog.untrusted);
    }
    if (!bot_agree_show) {
      continueRoutine = false;
      return Scheduler.Event.NEXT;
    }
    //--- Prepare to start Routine 'bot_agree' ---
    bot_agree_txt.setText(((mode === 'notice') ? BOT_TXT_NOTICE : _botTxtDetected(bot_agree_reasons)));
    bot_agree_txt.setColor(new util.Color(((mode === 'notice') ? 'white' : 'red')));
    bot_agree_typed_txt.setText("Typed: _");
    bot_agree_buffer = [];
    psychoJS.experiment.addData(('bot_' + mode + '.started'), globalClock.getTime());
    bot_agreeComponents = [bot_agree_txt, bot_agree_typed_txt];
    bot_agreeComponents.forEach(function (thisComponent) {
      if ('status' in thisComponent) {
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
      }
    });
    return Scheduler.Event.NEXT;
  }
}

function bot_agreeRoutineEachFrame() {
  return async function () {
    if (!bot_agree_show) {
      return Scheduler.Event.NEXT;
    }
    t = bot_agreeClock.getTime();
    frameN = frameN + 1;
    if (t >= 0.0 && bot_agree_txt.status === PsychoJS.Status.NOT_STARTED) {
      bot_agree_txt.tStart = t;
      bot_agree_txt.frameNStart = frameN;
      bot_agree_txt.setAutoDraw(true);
      bot_agree_typed_txt.setAutoDraw(true);
      bot_agree_buffer = [];
      bot_agree_active = true;
    }
    if ((bot_agree_buffer.length > 0)) {
      while ((bot_agree_buffer.length > 0)) {
        const k = bot_agree_buffer.shift();
        if ((k === 'BS')) {
          bot_agree_typed = bot_agree_typed.slice(0, -1);
        } else {
          if ((bot_agree_typed.length < 12)) {
            bot_agree_typed = (bot_agree_typed + k);
          }
        }
      }
      bot_agree_typed_txt.setText(("Typed: " + bot_agree_typed + "_"));
      if ((bot_agree_typed === BOT_AGREE_WORD)) {
        bot_agree_rt = t;
        continueRoutine = false;
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    if (!continueRoutine) {
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    return Scheduler.Event.FLIP_REPEAT;
  };
}

function bot_agreeRoutineEnd(snapshot) {
  return async function () {
    if (bot_agree_show) {
      bot_agreeComponents.forEach(function (thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      bot_agree_active = false;
      psychoJS.experiment.addData(('bot_' + bot_agree_mode + '.stopped'), globalClock.getTime());
      psychoJS.experiment.addData(('bot_' + bot_agree_mode + '_agreed'), 1);
      psychoJS.experiment.addData(('bot_' + bot_agree_mode + '_rt'), bot_agree_rt);
      if ((bot_agree_mode === 'notice')) {
        psychoJS.experiment.addData("bot_webdriver", ((navigator.webdriver === true) ? 1 : 0));
        psychoJS.experiment.addData("bot_untrusted_total", botLog.untrusted);
      }
    }
    routineTimer.reset();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

// announcement before the test of a screening block (shown only before its first test trial)
var test_introClock;
var test_intro_txt;
var test_intro_key;
var test_intro_show;
var _test_intro_allKeys;
var test_introComponents;
function test_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    t = 0;
    frameN = -1;
    continueRoutine = true;
    routineForceEnded = false;
    test_introClock.reset();
    routineTimer.reset();
    test_intro_show = ((itraining === 1) && (ctrial === (intrain + 1)));
    if (!test_intro_show) {
      continueRoutine = false;
      return Scheduler.Event.NEXT;
    }
    //--- Prepare to start Routine 'test_intro' ---
    test_intro_txt.setText("TEST\n\nYou did not answer " + nCombo_master.toString() + " trials correctly in a row within " + intrain.toString() + " trials.\n\nNow you will take a test of " + nscreen_test.toString() + " trials with the same emblems and the same rule.\nYou will NOT be told whether your answers are correct.\nYou need at least " + nscreen_test_pass.toString() + " correct answers to complete this block.\n\nPress the space bar to start the test!");
    test_intro_key.keys = undefined;
    test_intro_key.rt = undefined;
    _test_intro_allKeys = [];
    psychoJS.experiment.addData('test_intro.started', globalClock.getTime());
    test_introComponents = [test_intro_txt, test_intro_key];
    test_introComponents.forEach(function (thisComponent) {
      if ('status' in thisComponent) {
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
      }
    });
    return Scheduler.Event.NEXT;
  }
}

function test_introRoutineEachFrame() {
  return async function () {
    if (!test_intro_show) {
      return Scheduler.Event.NEXT;
    }
    t = test_introClock.getTime();
    frameN = frameN + 1;
    if (t >= 0.0 && test_intro_txt.status === PsychoJS.Status.NOT_STARTED) {
      test_intro_txt.tStart = t;
      test_intro_txt.frameNStart = frameN;
      test_intro_txt.setAutoDraw(true);
    }
    if (t >= 0.0 && test_intro_key.status === PsychoJS.Status.NOT_STARTED) {
      test_intro_key.tStart = t;
      test_intro_key.frameNStart = frameN;
      psychoJS.window.callOnFlip(function() { test_intro_key.clock.reset(); });
      psychoJS.window.callOnFlip(function() { test_intro_key.start(); });
      psychoJS.window.callOnFlip(function() { test_intro_key.clearEvents(); });
    }
    if (test_intro_key.status === PsychoJS.Status.STARTED) {
      const theseKeys = test_intro_key.getKeys({keyList: ['space'], waitRelease: false});
      _test_intro_allKeys = _test_intro_allKeys.concat(theseKeys);
      if ((_test_intro_allKeys.length > 0)) {
        test_intro_key.rt = _test_intro_allKeys[_test_intro_allKeys.length - 1].rt;
        continueRoutine = false;
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    if (!continueRoutine) {
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    return Scheduler.Event.FLIP_REPEAT;
  };
}

function test_introRoutineEnd(snapshot) {
  return async function () {
    if (test_intro_show) {
      test_intro_txt.setAutoDraw(false);
      test_intro_key.stop();
      psychoJS.experiment.addData('test_intro.stopped', globalClock.getTime());
      psychoJS.experiment.addData('test_intro.rt', test_intro_key.rt);
    }
    routineTimer.reset();
    return Scheduler.Event.NEXT;
  }
}

// warning after the feedback of a too-fast response (RT <= rt_too_fast), shown for
// time_fast_warning s; skipped on all other trials and on the primed trials of a
// testing block
var fast_warningClock;
var fast_warning_txt;
var fast_warningComponents;
function fast_warningRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    t = 0;
    frameN = -1;
    continueRoutine = true;
    routineForceEnded = false;
    fast_warningClock.reset();
    routineTimer.reset();
    if ((fastwarning !== 1)) {
      continueRoutine = false;
      return Scheduler.Event.NEXT;
    }
    //--- Prepare to start Routine 'fast_warning' ---
    psychoJS.experiment.addData('fast_warning.started', globalClock.getTime());
    fast_warningComponents = [fast_warning_txt];
    fast_warningComponents.forEach(function (thisComponent) {
      if ('status' in thisComponent) {
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
      }
    });
    return Scheduler.Event.NEXT;
  }
}

function fast_warningRoutineEachFrame() {
  return async function () {
    if ((fastwarning !== 1)) {
      return Scheduler.Event.NEXT;
    }
    t = fast_warningClock.getTime();
    frameN = frameN + 1;
    if (t >= 0.0 && fast_warning_txt.status === PsychoJS.Status.NOT_STARTED) {
      fast_warning_txt.tStart = t;
      fast_warning_txt.frameNStart = frameN;
      fast_warning_txt.setAutoDraw(true);
    }
    frameRemains = 0.0 + time_fast_warning - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fast_warning_txt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fast_warning_txt.tStop = t;
      fast_warning_txt.frameNStop = frameN;
      fast_warning_txt.status = PsychoJS.Status.FINISHED;
      fast_warning_txt.setAutoDraw(false);
      continueRoutine = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    if (!continueRoutine) {
      return Scheduler.Event.NEXT;
    }
    return Scheduler.Event.FLIP_REPEAT;
  };
}

function fast_warningRoutineEnd(snapshot) {
  return async function () {
    if ((fastwarning === 1)) {
      fast_warning_txt.setAutoDraw(false);
      psychoJS.experiment.addData('fast_warning.stopped', globalClock.getTime());
    }
    routineTimer.reset();
    return Scheduler.Event.NEXT;
  }
}

// shape check (attention check), testing blocks only, twice per block: before the first
// trial ('start') and after the feedback of the last trial ('end'). A white triangle or
// square appears at the centre of the flag with the key mapping just below it. It stays
// until E or O is pressed (keys kept apart from the F/K choice; no time limit, no
// feedback).
var probeClock;
var Flag_probe;
var text_trialinfo_probe;
var probe_tri;
var probe_sq;
var probe_txt_E;
var probe_txt_O;
var probe_map_tri;
var probe_map_sq;
var probe_key;
var size_probe_tri;
var size_probe_sq;
var probe_map_scale;
var size_probe_txt;
var probe_txt_x;
var probe_shape_x;
var probe_row_y;
var probe_when;
var _probe_allKeys;
var probeComponents;
function probeRoutineBegin(snapshot, when) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    t = 0;
    frameN = -1;
    continueRoutine = true;
    routineForceEnded = false;
    probeClock.reset();
    routineTimer.reset();
    probe_when = when;
    probe_show = ((itraining === 0) && (ctrial === ((when === 'start') ? 1 : intrials)));
    if (!probe_show) {
      continueRoutine = false;
      return Scheduler.Event.NEXT;
    }
    //--- Prepare to start Routine 'probe' ---
    const _p = probe_seq[((2 * idx_block) + ((when === 'start') ? 0 : 1))];
    probe_map = _p.map;
    probe_shape = _p.shape;
    // map 0: triangle = E, square = O; map 1: the reverse
    probe_corrkey = ((probe_shape === probe_map) ? 'e' : 'o');
    const _shape = ((probe_shape === 0) ? probe_tri : probe_sq);
    // row 0 ("E =") shows the triangle under map 0, row 1 ("O =") under map 1
    probe_map_tri.setPos([probe_shape_x, probe_row_y[probe_map]]);
    probe_map_sq.setPos([probe_shape_x, probe_row_y[(1 - probe_map)]]);
    text_trialinfo_probe.setPos([pos_trialinfo_x, pos_trialinfo_y]);
    // before the first trial only the block count (text_trial is set in precue)
    text_trialinfo_probe.setText(((when === 'start') ? ("Block = " + iblock.toString() + "/" + inblocks.toString()) : text_trial));
    probe_key.keys = undefined;
    probe_key.rt = undefined;
    _probe_allKeys = [];
    psychoJS.experiment.addData(('probe_' + when + '.started'), globalClock.getTime());
    probeComponents = [Flag_probe, text_trialinfo_probe, _shape, probe_txt_E, probe_txt_O, probe_map_tri, probe_map_sq, probe_key];
    probeComponents.forEach(function (thisComponent) {
      if ('status' in thisComponent) {
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
      }
    });
    return Scheduler.Event.NEXT;
  }
}

function probeRoutineEachFrame() {
  return async function () {
    if (!probe_show) {
      return Scheduler.Event.NEXT;
    }
    t = probeClock.getTime();
    frameN = frameN + 1;
    probeComponents.forEach(function (thisComponent) {
      if ((thisComponent !== probe_key) && t >= 0.0 && thisComponent.status === PsychoJS.Status.NOT_STARTED) {
        thisComponent.tStart = t;
        thisComponent.frameNStart = frameN;
        thisComponent.setAutoDraw(true);
      }
    });
    if (t >= 0.0 && probe_key.status === PsychoJS.Status.NOT_STARTED) {
      probe_key.tStart = t;
      probe_key.frameNStart = frameN;
      psychoJS.window.callOnFlip(function() { probe_key.clock.reset(); });
      psychoJS.window.callOnFlip(function() { probe_key.start(); });
      psychoJS.window.callOnFlip(function() { probe_key.clearEvents(); });
    }
    if (probe_key.status === PsychoJS.Status.STARTED) {
      const theseKeys = probe_key.getKeys({keyList: ['e', 'o'], waitRelease: false});
      _probe_allKeys = _probe_allKeys.concat(theseKeys);
      if ((_probe_allKeys.length > 0)) {
        probe_key.keys = _probe_allKeys[_probe_allKeys.length - 1].name;
        probe_key.rt = _probe_allKeys[_probe_allKeys.length - 1].rt;
        continueRoutine = false;
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    if (!continueRoutine) {
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    return Scheduler.Event.FLIP_REPEAT;
  };
}

function probeRoutineEnd(snapshot) {
  return async function () {
    if (probe_show) {
      probeComponents.forEach(function (thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      probe_key.stop();
      probe_corr = ((probe_key.keys === probe_corrkey) ? 1 : 0);
      probe_n += 1;
      probe_ncorrect += probe_corr;
      const _pre = ('probe_' + probe_when + '_');
      psychoJS.experiment.addData((_pre.slice(0, -1) + '.stopped'), globalClock.getTime());
      psychoJS.experiment.addData((_pre + 'shape'), ((probe_shape === 0) ? 'triangle' : 'square'));
      psychoJS.experiment.addData((_pre + 'map'), ((probe_map === 0) ? 'triangle=E' : 'triangle=O'));
      psychoJS.experiment.addData((_pre + 'corrkey'), probe_corrkey);
      psychoJS.experiment.addData((_pre + 'key'), probe_key.keys);
      psychoJS.experiment.addData((_pre + 'rt'), probe_key.rt);
      psychoJS.experiment.addData((_pre + 'corr'), probe_corr);
      psychoJS.experiment.addData('probe_n_total', probe_n);
      psychoJS.experiment.addData('probe_ncorrect_total', probe_ncorrect);
    }
    routineTimer.reset();
    return Scheduler.Event.NEXT;
  }
}

async function experimentInit() {
  // Initialize components for Routine "init_exp"
  init_expClock = new util.Clock();
  // Run 'Begin Experiment' code from code_global
  
          // add-on: list(s: string): string[]
          function list(s) {
              // if s is a string, we return a list of its characters
              if (typeof s === 'string')
                  return s.split('');
              else
                  // otherwise we return s:
                  return s;
          }
  
          nblocks = 9;
  nstm = 8;
  nstmrep = 8; // 8 epochs * 8 = 64 type III trials per testing block
  ntrials = (nstm * nstmrep); // primed trials: see _primePlan
  npractice_blocks = 3; // screening: type I, type IV, then type III on the other two features
  // screening block: up to nscreen_train trials with feedback, passed at once by
  // nCombo_master correct in a row. With nscreen_test > 0, a block not passed by then ends
  // with a test of nscreen_test trials without feedback (each stimulus twice, random order),
  // passed by nscreen_test_pass correct; with nscreen_test = 0 it fails at the cap.
  nscreen_train = 130;
  nscreen_test = 0;
  nscreen_test_pass = 13;
  ntrials_practice = (nscreen_train + nscreen_test); // longest screening block
  nstmrep_practice = Math.ceil((ntrials_practice / nstm)); // 17 epochs; the block ends at the cap
  nCombo_master = 7; // consecutive correct answers that pass a screening block
  nblock_total = (nblocks + npractice_blocks);
  screen_skip = (CHECK_SKIP_SCREENING ? npractice_blocks : 0); // screening blocks skipped (check mode)
  time_precue = 0.5;
  time_resp = 4;
  time_feed = 1.5;
  time_feed_test = 1.0; // screening test: neutral screen instead of feedback
  rt_too_fast = 0.3; // responses this fast (s) get a warning after the feedback
  time_fast_warning = 2.0; // duration of that warning (a time penalty)
  // answer structure per testing block (1=AB, 2=AC, 3=BC): each three times, never the
  // same structure in consecutive blocks
  blocks = [1, 1, 1, 2, 2, 2, 3, 3, 3];
  do {
      util.shuffle(blocks);
  } while (blocks.some(function (b, i) { return ((i > 0) && (b === blocks[(i - 1)])); }));
  // cued feature of the first primed trial per testing block (0=A, 1=B, 2=C): the three
  // blocks of a structure cue
  // A, B and C once each in random order, so the cue is informative in 2/3 of blocks (the
  // base rate) and every participant has each feature/location cued exactly three times
  prime_dim_blocks = (function () {
      const dims = {1: [0, 1, 2], 2: [0, 1, 2], 3: [0, 1, 2]};
      for (const b in dims) {
          util.shuffle(dims[b]);
      }
      return blocks.map(function (b) { return dims[b].shift(); });
  })();
  // first-trial outcome per testing block (1 = correct, 0 = error), fixed in advance:
  // blocks whose cue is informative get 3 correct / 3 error; the other three get one of
  // each plus one more of first_outcome_major (random per participant), so overall 5 / 4
  // with block 1 always in the larger group. See the primed-trial scoring in feedback.
  first_outcome_major = util.randint(0, 2);
  first_outcome_blocks = (function () {
      const feats = {1: [0, 1], 2: [0, 2], 3: [1, 2]};
      const inf = blocks.map(function (b, i) { return (feats[b].indexOf(prime_dim_blocks[i]) >= 0); });
      let out;
      do {
          const a = [1, 1, 1, 0, 0, 0];
          const u = [first_outcome_major, first_outcome_major, (1 - first_outcome_major)];
          util.shuffle(a);
          util.shuffle(u);
          out = inf.map(function (isInf) { return (isInf ? a.shift() : u.shift()); });
      } while (out[0] !== first_outcome_major);
      return out;
  })();
  // shape checks per testing block (see probeRoutineBegin): probe_seq[2*i] / [2*i+1]
  // are the start / end checks of block i+1; mapping and shape are each balanced over
  // all checks
  probe_seq = _probeSeq((2 * nblocks));
  // cued feature of the first primed trial of screening blocks 2 and 3: two different
  // features, at random
  screen_first_dims = [0, 1, 2];
  util.shuffle(screen_first_dims);
  screen_first_dims = screen_first_dims.slice(0, 2);
  stm1 = [0, 0, 0];
  stm2 = [0, 0, 1];
  stm3 = [0, 1, 0];
  stm4 = [0, 1, 1];
  stm5 = [1, 0, 0];
  stm6 = [1, 0, 1];
  stm7 = [1, 1, 0];
  stm8 = [1, 1, 1];
  type3_AB = [0, 0, 1, 0, 0, 1, 1, 1];
  type3_AC = [0, 0, 0, 1, 1, 1, 0, 1];
  type3_BC = [0, 1, 0, 1, 1, 1, 0, 0];
  type1_A = [0, 0, 0, 0, 1, 1, 1, 1];
  type1_B = [0, 0, 1, 1, 0, 0, 1, 1];
  type1_C = [0, 1, 0, 1, 0, 1, 0, 1];
  type2_AB = [0, 0, 1, 1, 1, 1, 0, 0];
  type2_AC = [0, 1, 0, 1, 1, 0, 1, 0];
  type2_BC = [0, 1, 1, 0, 0, 1, 1, 0];
  type4 = [0, 1, 1, 1, 0, 0, 0, 1];
  type5_A = [0, 0, 0, 1, 1, 1, 1, 0];
  type5_B = [0, 0, 1, 1, 1, 0, 0, 1];
  type5_C = [0, 1, 0, 1, 0, 1, 1, 0];
  // features on an equilateral triangle (side unit_height) centred on the
  // flag/fixation cross: A top, B bottom-left, C bottom-right
  unit_height = 0.3;
  pos_A = [0, (unit_height / Math.sqrt(3))];
  pos_B = [((- unit_height) / 2), ((- unit_height) / (2 * Math.sqrt(3)))];
  pos_C = [(unit_height / 2), ((- unit_height) / (2 * Math.sqrt(3)))];
  size_Stim = 0.15;
  size_Precue = 0.05;
  size_Flag_w = (1024 / 768);
  size_Flag_h = 1;
  size_fix = 0.03;
  width_fix = 0.01;
  show_fix = false; // fixation cross at the flag centre (precue and stimulus): off
  size_cue = (size_Stim * 1.3 * 0.8 * 1.1); // diameter of the white ring around a cued fractal
  size_probe_tri = 0.08; // shape check: side of the triangle
  size_probe_sq = 0.064; // shape check: side of the square (about the same extent)
  // 6 fractals per block
  n_fractals = (6 * nblock_total);
  n_fractal_images = 132; // images/fractals/1.png .. 132.png
  // draw from all 72 images except visually confusable ones
  fractal_exclude = [29, 36, 56, 68];
  stimidx = util.range(1, (n_fractal_images + 1)).filter(function (i) { return (fractal_exclude.indexOf(i) < 0); });
  util.shuffle(stimidx);
  stimidx = stimidx.slice(0, n_fractals);
  // stimidx_test[i] / stimidx_prac[i]: the 6 fractals of testing / practice block i+1
  stimidx_test = [];
  for (let _i = 0; _i < nblocks; _i++) {
      stimidx_test.push(stimidx.slice((6 * _i), (6 * (_i + 1))));
  }
  stimidx_prac = [];
  for (let _i = nblocks; _i < nblock_total; _i++) {
      stimidx_prac.push(stimidx.slice((6 * _i), (6 * (_i + 1))));
  }
  txt_feed_color = ["red", "chartreuse", "yellow", "white"];
  txt_feed_size = 0.03;
  txt_block_instruction = 0.03;
  text_trialcount = 0.03;
  // shape check: key mapping rows ("E =" / "O =", each with a small shape) just below
  // the shape, 1.5 times the size of the trial counter
  probe_map_scale = 1.5;
  size_probe_txt = (text_trialcount * probe_map_scale);
  probe_txt_x = (- 0.036);
  probe_shape_x = 0.045;
  probe_row_y = [(- 0.1), (- 0.166)];
  precue_color = ["black", "chartreuse"];
  precue_width = (4 * 1.1 * 1.2); // line width of that ring
  NaNVal = 1000;
  pos_trialinfo_x = (- 0.6);
  pos_trialinfo_y = 0.35;
  base_payment = 10; // paid on completing all testing blocks, plus the testing bonus only
  fail_payment = 0.5; // paid when stopped at screening (plus screening bonus earned)
  screening_bonus_block = 0.5; // per completed screening block (counts only if stopped at screening)
  screening_bonus = 0;
  testing_bonus = 0;
  testing_bonus_list = []; // per-block testing bonuses, shown on each block summary
  total_payment = base_payment;
  ncorrect_choice = 0;
  nalltrial = 0;
  ncorrect_choice_practice = 0;
  nalltrial_practice = 0;
  failed_practice = false;
  flag_loc_friend = "images/flags/flag.jpeg";
  flag_loc_enemy = "images/flags/flag.jpeg";
  flag_loc_empty = "images/flags/flag.jpeg";
  
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  // Run 'Begin Experiment' code from code_instruction
  baseimagedir = "images/instruction";
  image_files = [(baseimagedir + "/instruction.001.jpeg"), (baseimagedir + "/instruction.002.jpeg"), (baseimagedir + "/instruction.003.jpeg"), (baseimagedir + "/instruction.004.jpeg"), (baseimagedir + "/instruction.005.jpeg"), (baseimagedir + "/instruction.006.jpeg"), (baseimagedir + "/instruction.007.jpeg"), (baseimagedir + "/instruction.008.jpeg"), (baseimagedir + "/instruction.009.jpeg")];
  image_index = 0;
  n_images = image_files.length;
  exit_intro = false;
  
  image_instruction = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_instruction', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [((1 * 1024) / 768), 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  mouse_instruction = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_instruction.mouseClock = new util.Clock();
  key_instruction = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "init_block"
  init_blockClock = new util.Clock();
  txt_block_intro = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_block_intro',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_block_start = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "precue"
  precueClock = new util.Clock();
  Flag_precue = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Flag_precue', units : undefined, 
    image : flag_loc_empty, mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [size_Flag_w, size_Flag_h],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  text_trialinfo = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_trialinfo',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: text_trialcount,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  precue_fix = new visual.ShapeStim ({
    win: psychoJS.window, name: 'precue_fix', 
    vertices: 'cross', size:[size_fix, size_fix],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: width_fix, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  // white ring on the cued feature during the precue of a primed trial (cue_stim takes
  // over during the stimulus)
  cue_precue = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cue_precue',
    vertices: _circleVertices(64, (size_cue / 2)),
    ori: 0.0, pos: [0, 0], draggable: false, anchor: 'center',
    lineWidth: precue_width, lineColor: new util.Color('white'),
    fillColor: undefined, colorSpace: 'rgb', opacity: undefined,
    depth: -5, interpolate: true,
  });

  // Initialize components for Routine "probe" (shape check): a white triangle or
  // square at the centre of the flag, and the key mapping just below it
  probeClock = new util.Clock();
  Flag_probe = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Flag_probe', units : undefined,
    image : flag_loc_empty, mask : undefined,
    anchor : 'center',
    ori : 0.0,
    pos : [0, 0],
    draggable: false,
    size : [size_Flag_w, size_Flag_h],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0
  });
  text_trialinfo_probe = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_trialinfo_probe',
    text: '',
    font: 'Arial',
    units: undefined,
    pos: [0, 0], draggable: false, height: text_trialcount,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0
  });
  probe_tri = new visual.ShapeStim ({
    win: psychoJS.window, name: 'probe_tri',
    vertices: _triangleVertices(size_probe_tri),
    ori: 0.0, pos: [0, 0], draggable: false, anchor: 'center',
    lineWidth: 0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'), colorSpace: 'rgb', opacity: undefined,
    depth: -3, interpolate: true,
  });
  probe_sq = new visual.ShapeStim ({
    win: psychoJS.window, name: 'probe_sq',
    vertices: _squareVertices(size_probe_sq),
    ori: 0.0, pos: [0, 0], draggable: false, anchor: 'center',
    lineWidth: 0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'), colorSpace: 'rgb', opacity: undefined,
    depth: -3, interpolate: true,
  });
  // mapping: "E =" over "O =", each followed by a small shape (set per check)
  probe_txt_E = new visual.TextStim({
    win: psychoJS.window, name: 'probe_txt_E', text: 'E =', font: 'Arial',
    units: undefined, pos: [probe_txt_x, probe_row_y[0]], draggable: false, height: size_probe_txt,
    wrapWidth: undefined, ori: 0.0, languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined, depth: -4.0
  });
  probe_txt_O = new visual.TextStim({
    win: psychoJS.window, name: 'probe_txt_O', text: 'O =', font: 'Arial',
    units: undefined, pos: [probe_txt_x, probe_row_y[1]], draggable: false, height: size_probe_txt,
    wrapWidth: undefined, ori: 0.0, languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined, depth: -4.0
  });
  probe_map_tri = new visual.ShapeStim ({
    win: psychoJS.window, name: 'probe_map_tri',
    vertices: _triangleVertices((0.026 * probe_map_scale)),
    ori: 0.0, pos: [0, 0], draggable: false, anchor: 'center',
    lineWidth: 0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'), colorSpace: 'rgb', opacity: undefined,
    depth: -4, interpolate: true,
  });
  probe_map_sq = new visual.ShapeStim ({
    win: psychoJS.window, name: 'probe_map_sq',
    vertices: _squareVertices((0.021 * probe_map_scale)),
    ori: 0.0, pos: [0, 0], draggable: false, anchor: 'center',
    lineWidth: 0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'), colorSpace: 'rgb', opacity: undefined,
    depth: -4, interpolate: true,
  });
  probe_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "stimulus"
  stimulusClock = new util.Clock();
  Flag_Empty = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Flag_Empty', units : undefined, 
    image : flag_loc_empty, mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [size_Flag_w, size_Flag_h],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_A = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_A', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color('white'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_B = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_B', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color('white'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_C = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_C', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color('white'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_trialinfo_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_trialinfo_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: text_trialcount,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  stim_fix = new visual.ShapeStim ({
    win: psychoJS.window, name: 'stim_fix', 
    vertices: 'cross', size:[size_fix, size_fix],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: width_fix, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  });
  
  cue_stim = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cue_stim',
    vertices: _circleVertices(64, (size_cue / 2)),
    ori: 0.0, pos: [0, 0], draggable: false, anchor: 'center',
    lineWidth: precue_width, lineColor: new util.Color('white'),
    fillColor: undefined, colorSpace: 'rgb', opacity: undefined,
    depth: -8, interpolate: true,
  });

  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  Flag_feed = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Flag_feed', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [size_Flag_w, size_Flag_h],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_A_feed = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_A_feed', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color('white'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image_B_feed = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_B_feed', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color('white'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  image_C_feed = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_C_feed', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color('white'), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  txt_feed = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_feed',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  text_trialinfo_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_trialinfo_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: text_trialcount,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "summary_trial"
  summary_trialClock = new util.Clock();
  // Initialize components for Routine "feedback_block"
  feedback_blockClock = new util.Clock();
  txt_block_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_block_feedback',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_block_finish = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "final_info"
  final_infoClock = new util.Clock();
  txt_final = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_final',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_final = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "test_intro"
  test_introClock = new util.Clock();
  test_intro_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'test_intro_txt',
    text: '',
    font: 'Arial',
    units: undefined,
    pos: [0, 0], draggable: false, height: txt_block_instruction,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0
  });
  test_intro_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  // Initialize components for Routine "fast_warning"
  fast_warningClock = new util.Clock();
  fast_warning_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'fast_warning_txt',
    text: 'Too fast!\n\nPlease take your time and respond carefully on every trial.',
    font: 'Arial',
    units: undefined,
    pos: [0, 0], draggable: false, height: txt_feed_size,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(txt_feed_color[2]),  opacity: undefined,
    depth: -1.0
  });

  // Initialize components for Routine "bot_agree"
  bot_agreeClock = new util.Clock();
  bot_agree_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'bot_agree_txt',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.05], draggable: false, height: 0.026,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  bot_agree_typed_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'bot_agree_typed_txt',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, -0.42], draggable: false, height: 0.035,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('yellow'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var init_expMaxDurationReached;
var init_expMaxDuration;
var init_expComponents;
function init_expRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'init_exp' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    init_expClock.reset();
    routineTimer.reset();
    init_expMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('init_exp.started', globalClock.getTime());
    init_expMaxDuration = null
    // keep track of which components have finished
    init_expComponents = [];
    
    init_expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function init_expRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'init_exp' ---
    // get current time
    t = init_expClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    init_expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function init_expRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'init_exp' ---
    init_expComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('init_exp.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_global
    psychoJS.experiment.addData("nblocks", nblocks);
    psychoJS.experiment.addData("ntrials", ntrials);
    psychoJS.experiment.addData("nstm", nstm);
    psychoJS.experiment.addData("nstmrep", nstmrep);
    psychoJS.experiment.addData("blocks", blocks);
    psychoJS.experiment.addData("prime_dim_blocks", prime_dim_blocks);
    psychoJS.experiment.addData("first_outcome_blocks", first_outcome_blocks);
    psychoJS.experiment.addData("first_outcome_major", first_outcome_major);
    psychoJS.experiment.addData("bot_webdriver_start", ((navigator.webdriver === true) ? 1 : 0));
    psychoJS.experiment.addData("userAgent", navigator.userAgent);
    psychoJS.experiment.addData("screen_size", [window.screen.width, window.screen.height]);
    psychoJS.experiment.addData("window_size", [window.innerWidth, window.innerHeight]);
    psychoJS.experiment.addData("stimidx", stimidx);
    psychoJS.experiment.addData("probe_seq", JSON.stringify(probe_seq));
    psychoJS.experiment.addData("screen_first_dims", screen_first_dims);
    
    // the Routine "init_exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_loop;
function instruction_loopLoopBegin(instruction_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instruction_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 9999, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'instruction_loop'
    });
    psychoJS.experiment.addLoop(instruction_loop); // add the loop to the experiment
    currentLoop = instruction_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    instruction_loop.forEach(function() {
      snapshot = instruction_loop.getSnapshot();
    
      instruction_loopLoopScheduler.add(importConditions(snapshot));
      instruction_loopLoopScheduler.add(instructionRoutineBegin(snapshot));
      instruction_loopLoopScheduler.add(instructionRoutineEachFrame());
      instruction_loopLoopScheduler.add(instructionRoutineEnd(snapshot));
      instruction_loopLoopScheduler.add(instruction_loopLoopEndIteration(instruction_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function instruction_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instruction_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function instruction_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var block_loop;
function block_loopLoopBegin(block_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    block_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: (nblock_total - screen_skip), method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'block_loop'
    });
    psychoJS.experiment.addLoop(block_loop); // add the loop to the experiment
    currentLoop = block_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    block_loop.forEach(function() {
      snapshot = block_loop.getSnapshot();
    
      block_loopLoopScheduler.add(importConditions(snapshot));
      block_loopLoopScheduler.add(bot_agreeRoutineBegin('check', snapshot));
      block_loopLoopScheduler.add(bot_agreeRoutineEachFrame());
      block_loopLoopScheduler.add(bot_agreeRoutineEnd(snapshot));
      block_loopLoopScheduler.add(init_blockRoutineBegin(snapshot));
      block_loopLoopScheduler.add(init_blockRoutineEachFrame());
      block_loopLoopScheduler.add(init_blockRoutineEnd(snapshot));
      const repstm_loopLoopScheduler = new Scheduler(psychoJS);
      block_loopLoopScheduler.add(repstm_loopLoopBegin(repstm_loopLoopScheduler, snapshot));
      block_loopLoopScheduler.add(repstm_loopLoopScheduler);
      block_loopLoopScheduler.add(repstm_loopLoopEnd);
      block_loopLoopScheduler.add(feedback_blockRoutineBegin(snapshot));
      block_loopLoopScheduler.add(feedback_blockRoutineEachFrame());
      block_loopLoopScheduler.add(feedback_blockRoutineEnd(snapshot));
      block_loopLoopScheduler.add(block_loopLoopEndIteration(block_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


// primed trial (see _primePlan) and whether it is the first one of a testing block
// (outcome fixed in advance); set per trial in precue
var isPrime = false;
var isFirstPrime = false;
var prime_epoch;

// screening test trials: those after the training cap (intrain) of a screening block;
// set per trial in precue
var isTest = false;
var time_feed_test;
// too-fast responses: scored as usual, followed by a warning screen; set per trial
// in feedback
var fastwarning = 0;
// screening trial order of the current block (null = usual random order) and the
// exception stimuli per single-feature rule; set in init_block
var screen_seq = null;
var screen_exc = null;
// shape check (see probeRoutineBegin): per-block sequence (init_exp), the current
// check (probe), and the running score
var probe_seq;
var probe_show = false;
var probe_map;
var probe_shape;
var probe_corrkey;
var probe_corr;
var probe_n = 0;
var probe_ncorrect = 0;
var rt_too_fast;
var time_fast_warning;
var itime_feed;
var nscreen_train;
var nscreen_test;
var nscreen_test_pass;
var intrain;
var ntest_done;
var ntest_correct;
var screen_pass_by;


var repstm_loop;
function repstm_loopLoopBegin(repstm_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    repstm_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: instmrep, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'repstm_loop'
    });
    psychoJS.experiment.addLoop(repstm_loop); // add the loop to the experiment
    currentLoop = repstm_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    repstm_loop.forEach(function() {
      snapshot = repstm_loop.getSnapshot();
    
      repstm_loopLoopScheduler.add(importConditions(snapshot));
      const trial_loopLoopScheduler = new Scheduler(psychoJS);
      repstm_loopLoopScheduler.add(trial_loopLoopBegin(trial_loopLoopScheduler, snapshot));
      repstm_loopLoopScheduler.add(trial_loopLoopScheduler);
      repstm_loopLoopScheduler.add(trial_loopLoopEnd);
      repstm_loopLoopScheduler.add(repstm_loopLoopEndIteration(repstm_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trial_loop;
function trial_loopLoopBegin(trial_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trial_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'repstm_loop.xlsx',
      seed: undefined, name: 'trial_loop'
    });
    psychoJS.experiment.addLoop(trial_loop); // add the loop to the experiment
    currentLoop = trial_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trial_loop.forEach(function() {
      snapshot = trial_loop.getSnapshot();
    
      trial_loopLoopScheduler.add(importConditions(snapshot));
      trial_loopLoopScheduler.add(test_introRoutineBegin(snapshot));
      trial_loopLoopScheduler.add(test_introRoutineEachFrame());
      trial_loopLoopScheduler.add(test_introRoutineEnd(snapshot));
      trial_loopLoopScheduler.add(probeRoutineBegin(snapshot, 'start'));
      trial_loopLoopScheduler.add(probeRoutineEachFrame());
      trial_loopLoopScheduler.add(probeRoutineEnd(snapshot));
      trial_loopLoopScheduler.add(precueRoutineBegin(snapshot));
      trial_loopLoopScheduler.add(precueRoutineEachFrame());
      trial_loopLoopScheduler.add(precueRoutineEnd(snapshot));
      trial_loopLoopScheduler.add(stimulusRoutineBegin(snapshot));
      trial_loopLoopScheduler.add(stimulusRoutineEachFrame());
      trial_loopLoopScheduler.add(stimulusRoutineEnd(snapshot));
      trial_loopLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trial_loopLoopScheduler.add(feedbackRoutineEachFrame());
      trial_loopLoopScheduler.add(feedbackRoutineEnd(snapshot));
      trial_loopLoopScheduler.add(fast_warningRoutineBegin(snapshot));
      trial_loopLoopScheduler.add(fast_warningRoutineEachFrame());
      trial_loopLoopScheduler.add(fast_warningRoutineEnd(snapshot));
      trial_loopLoopScheduler.add(probeRoutineBegin(snapshot, 'end'));
      trial_loopLoopScheduler.add(probeRoutineEachFrame());
      trial_loopLoopScheduler.add(probeRoutineEnd(snapshot));
      trial_loopLoopScheduler.add(summary_trialRoutineBegin(snapshot));
      trial_loopLoopScheduler.add(summary_trialRoutineEachFrame());
      trial_loopLoopScheduler.add(summary_trialRoutineEnd(snapshot));
      trial_loopLoopScheduler.add(trial_loopLoopEndIteration(trial_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trial_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trial_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trial_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function repstm_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(repstm_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function repstm_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function block_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(block_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function block_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var instructionMaxDurationReached;
var thisImage;
var gotValidClick;
var _key_instruction_allKeys;
var instructionMaxDuration;
var instructionComponents;
function instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instructionClock.reset();
    routineTimer.reset();
    instructionMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_instruction
    thisImage = image_files[image_index];
    gotValidClick = false;
    
    // setup some python lists for storing info about the mouse_instruction
    // current position of the mouse:
    mouse_instruction.x = [];
    mouse_instruction.y = [];
    mouse_instruction.leftButton = [];
    mouse_instruction.midButton = [];
    mouse_instruction.rightButton = [];
    mouse_instruction.time = [];
    gotValidClick = false; // until a click is received
    key_instruction.keys = undefined;
    key_instruction.rt = undefined;
    _key_instruction_allKeys = [];
    psychoJS.experiment.addData('instruction.started', globalClock.getTime());
    instructionMaxDuration = null
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(image_instruction);
    instructionComponents.push(mouse_instruction);
    instructionComponents.push(key_instruction);
    
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction' ---
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_instruction* updates
    if (t >= 0.0 && image_instruction.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      image_instruction.setImage(thisImage, false);
      // keep track of start time/frame for later
      image_instruction.tStart = t;  // (not accounting for frame time here)
      image_instruction.frameNStart = frameN;  // exact frame index
      
      image_instruction.setAutoDraw(true);
    }
    
    
    // if image_instruction is active this frame...
    if (image_instruction.status === PsychoJS.Status.STARTED) {
      // update params
      image_instruction.setImage(thisImage, false);
    }
    
    // *mouse_instruction* updates
    if (t >= 0.0 && mouse_instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_instruction.tStart = t;  // (not accounting for frame time here)
      mouse_instruction.frameNStart = frameN;  // exact frame index
      
      mouse_instruction.status = PsychoJS.Status.STARTED;
      mouse_instruction.mouseClock.reset();
      prevButtonState = mouse_instruction.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_instruction is active this frame...
    if (mouse_instruction.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_instruction.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_instruction.getPos();
          mouse_instruction.x.push(_mouseXYs[0]);
          mouse_instruction.y.push(_mouseXYs[1]);
          mouse_instruction.leftButton.push(_mouseButtons[0]);
          mouse_instruction.midButton.push(_mouseButtons[1]);
          mouse_instruction.rightButton.push(_mouseButtons[2]);
          mouse_instruction.time.push(mouse_instruction.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *key_instruction* updates
    if (t >= 0.0 && key_instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instruction.tStart = t;  // (not accounting for frame time here)
      key_instruction.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instruction.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instruction.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instruction.clearEvents(); });
    }
    
    // if key_instruction is active this frame...
    if (key_instruction.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instruction.getKeys({
        keyList: typeof ['comma','period'] === 'string' ? [['comma','period']] : ['comma','period'], 
        waitRelease: false
      });
      _key_instruction_allKeys = _key_instruction_allKeys.concat(theseKeys);
      if (_key_instruction_allKeys.length > 0) {
        key_instruction.keys = _key_instruction_allKeys[_key_instruction_allKeys.length - 1].name;  // just the last key pressed
        key_instruction.rt = _key_instruction_allKeys[_key_instruction_allKeys.length - 1].rt;
        key_instruction.duration = _key_instruction_allKeys[_key_instruction_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _pj;
var keys;
function instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction' ---
    instructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instruction.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_instruction
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = key_instruction.keys;
    if ((keys && _pj.in_es6("comma", keys))) {
        image_index -= 1;
    } else {
        if ((keys && _pj.in_es6("period", keys))) {
            if ((image_index !== (n_images - 1))) {
                image_index += 1;
            } else {
                if ((image_index === (n_images - 1))) {
                    instruction_loop.finished = true;
                }
            }
        }
    }
    if ((image_index < 0)) {
        image_index = 0;
    } else {
        if ((image_index >= n_images)) {
            image_index -= 1;
        }
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_instruction.x', mouse_instruction.x);
    psychoJS.experiment.addData('mouse_instruction.y', mouse_instruction.y);
    psychoJS.experiment.addData('mouse_instruction.leftButton', mouse_instruction.leftButton);
    psychoJS.experiment.addData('mouse_instruction.midButton', mouse_instruction.midButton);
    psychoJS.experiment.addData('mouse_instruction.rightButton', mouse_instruction.rightButton);
    psychoJS.experiment.addData('mouse_instruction.time', mouse_instruction.time);
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_instruction.corr, level);
    }
    psychoJS.experiment.addData('key_instruction.keys', key_instruction.keys);
    if (typeof key_instruction.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_instruction.rt', key_instruction.rt);
        psychoJS.experiment.addData('key_instruction.duration', key_instruction.duration);
        routineTimer.reset();
        }
    
    key_instruction.stop();
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var init_blockMaxDurationReached;
var ctrial;
var iblock;
var itraining;
var instmrep;
var intrials;
var inblocks;
var idx_type;
var idx_block;
var idx_answer;
var ians_block;
var istimidx;
var idx_As;
var idx_Bs;
var idx_Cs;
var instruct_begin;
var instruct_block;
var txt_block;
var color_A;
var color_B;
var color_C;
var ncorrect;
var pcorrect;
var nCombo;
var mastered_block;
var ntrial_scored;
var prime_dim;
// primed trials of the current block (init_block), and the first cued features of
// screening blocks 2 / 3 (init_exp)
var prime_plan = [];
var screen_first_dims;
// first-trial outcome plan (init_exp), this block's target, and whether this block's
// category mapping was reversed to meet it (init_block / feedback)
var first_outcome_major;
var first_outcome_blocks;
var first_target = NaN;
var map_flipped = 0;
var _key_block_start_allKeys;
var init_blockMaxDuration;
var init_blockComponents;
function init_blockRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'init_block' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    init_blockClock.reset();
    routineTimer.reset();
    init_blockMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_block
    ctrial = 1;
    iblock = (block_loop.thisRepN + 1 + screen_skip);
    if ((iblock <= npractice_blocks)) {
        itraining = 1;
        intrain = nscreen_train;
        if ((CHECK_NTRIALS_SCREEN !== null)) {
            intrain = CHECK_NTRIALS_SCREEN;
        }
        intrials = (intrain + nscreen_test);
        instmrep = Math.ceil((intrials / nstm));
        inblocks = npractice_blocks;
    } else {
        if ((iblock > npractice_blocks)) {
            itraining = 0;
            iblock = (iblock - npractice_blocks);
            instmrep = nstmrep;
            intrials = ntrials;
            if ((CHECK_NTRIALS_TEST !== null)) {
                intrials = CHECK_NTRIALS_TEST;
            }
            inblocks = nblocks;
        }
    }
    idx_type = NaNVal;
    if ((itraining === 0)) {
        idx_block = (iblock - 1);
        idx_answer = blocks[idx_block];
        if ((idx_answer === 1)) {
            ians_block = type3_AB;
        } else {
            if ((idx_answer === 2)) {
                ians_block = type3_AC;
            } else {
                if ((idx_answer === 3)) {
                    ians_block = type3_BC;
                }
            }
        }
    } else {
        if ((itraining === 1)) {
            if ((iblock === 1)) {
                idx_type = util.randint(0, 3);
                screen_type1_dim = idx_type; // block 3 uses the other two features
                if ((idx_type === 0)) {
                    ians_block = type1_A;
                } else {
                    if ((idx_type === 1)) {
                        ians_block = type1_B;
                    } else {
                        if ((idx_type === 2)) {
                            ians_block = type1_C;
                        }
                    }
                }
            } else {
                if ((iblock === 2)) {
                    idx_type = 0;
                    ians_block = type4;
                } else {
                    if ((iblock === 3)) {
                        // type III on the two features not informative in block 1
                        // (idx_type = block 1's feature: 0=A -> BC, 1=B -> AC, 2=C -> AB)
                        idx_type = screen_type1_dim;
                        if ((idx_type === 0)) {
                            ians_block = type3_BC;
                        } else {
                            if ((idx_type === 1)) {
                                ians_block = type3_AC;
                            } else {
                                if ((idx_type === 2)) {
                                    ians_block = type3_AB;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if ((itraining === 0)) {
        istimidx = stimidx_test[(iblock - 1)];
    } else {
        istimidx = stimidx_prac[(iblock - 1)];
    }
    idx_As = istimidx.slice(0, 2);
    idx_Bs = istimidx.slice(2, 4);
    idx_Cs = istimidx.slice(4);
    // primed trials (see _primePlan): testing blocks and screening blocks 2-3, with a
    // ring on the cued feature from the precue until the response. prime_dim is the
    // feature cued first; the first primed trial of a testing block also has its outcome
    // fixed in advance (first_target).
    prime_dim = NaNVal;
    prime_plan = [];
    first_target = NaNVal;
    map_flipped = 0;
    if ((itraining === 0)) {
        prime_dim = prime_dim_blocks[idx_block];
        first_target = first_outcome_blocks[idx_block];
        prime_plan = _primePlan(true, intrials, prime_dim, {1: [0, 1], 2: [0, 2], 3: [1, 2]}[idx_answer]);
    } else {
        if ((iblock >= 2)) {
            prime_dim = screen_first_dims[(iblock - 2)];
            prime_plan = _primePlan(false, intrain, prime_dim, null);
        }
    }
    // screening blocks 2-3: exception-spaced trial order (see _screenOrder); block 1
    // and the testing blocks use the usual random order
    screen_seq = null;
    screen_exc = null;
    if ((itraining === 1)) {
        const _so = _screenOrder(ians_block, instmrep);
        if ((_so !== null)) {
            screen_seq = _so.seq;
            screen_exc = _so.exc;
        }
    }
    instruct_begin = "";
    if ((iblock === 1)) {
        if ((itraining === 1)) {
            instruct_begin = "Screening blocks begin.\n\n";
        } else {
            if ((itraining === 0)) {
                instruct_begin = "Testing blocks begin.\n\n";
            }
        }
    } else {
        instruct_block = "";
    }
    if (((iblock === 1) && (itraining === 1))) {
        instruct_block = "Learn the association of the emblems and their identity, either Unit F or Unit K, through trial and error. \nReport the identity by pressing the \u2018F\u2019 and \u2018K\u2019 keys, respectively.";
    } else {
        instruct_block = "Learn the NEW association of the emblems and their identity, either Unit F or Unit K, through trial and error. \nReport the identity by pressing the \u2018F\u2019 and \u2018K\u2019 keys, respectively.";
    }
    if ((itraining === 0)) {
        txt_block = (((((((instruct_begin + "Testing block = ") + iblock.toString()) + "/") + nblocks.toString()) + "\n\n") + instruct_block) + "\n\nPress the space bar to start!");
        if ((iblock === 1)) {
            // remind the testing-phase payment rules before the first testing block
            txt_block = (instruct_begin + "Testing block = 1/" + nblocks.toString() + "\n\n" + instruct_block + "\n\nYour bonus for each testing block depends on your percentage of correct choices (P):\nP < 55%: -$0.50 (penalty)\n55% ≤ P < 60%: $0\n60% ≤ P < 75%: +$0.50\n75% ≤ P: +$1\nIf you complete all testing blocks, you will receive $" + base_payment.toString() + " plus your total bonus in testing blocks.\nAny negative bonus will not reduce the $" + base_payment.toString() + " base payment.\n\nPress the space bar to start!");
        }
    } else {
        if ((itraining === 1)) {
            txt_block = (((((((instruct_begin + "Screening block = ") + iblock.toString()) + "/") + npractice_blocks.toString()) + "\n\n") + instruct_block) + "\n\nAnswer " + nCombo_master.toString() + " trials correctly in a row to complete this block and earn a $" + screening_bonus_block.toFixed(2) + " bonus. As soon as you do, the block ends immediately.\n" + ((nscreen_test > 0) ? ("If you cannot do so within " + intrain.toString() + " trials, you will take a test of " + nscreen_test.toString() + " trials without feedback, and you need at least " + nscreen_test_pass.toString() + " correct answers to complete the block.\nIf you do not pass the test, the study ends here") : ("If you cannot do so within " + intrain.toString() + " trials, the study ends here")) + " and you will receive $" + fail_payment.toFixed(2) + " plus any screening bonus you have earned.\n\nPress the space bar to start!");
        }
    }
    color_A = precue_color[0];
    color_B = precue_color[0];
    color_C = precue_color[0];
    ncorrect = 0;
    pcorrect = NaNVal;
    nCombo = 0;
    mastered_block = false;
    ntrial_scored = 0;
    ntest_done = 0;
    ntest_correct = 0;
    screen_pass_by = "";

    txt_block_intro.setText(txt_block);
    txt_block_intro.setHeight(txt_block_instruction);
    key_block_start.keys = undefined;
    key_block_start.rt = undefined;
    _key_block_start_allKeys = [];
    psychoJS.experiment.addData('init_block.started', globalClock.getTime());
    init_blockMaxDuration = null
    // keep track of which components have finished
    init_blockComponents = [];
    init_blockComponents.push(txt_block_intro);
    init_blockComponents.push(key_block_start);
    
    init_blockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function init_blockRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'init_block' ---
    // get current time
    t = init_blockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *txt_block_intro* updates
    if (t >= 0.0 && txt_block_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_block_intro.tStart = t;  // (not accounting for frame time here)
      txt_block_intro.frameNStart = frameN;  // exact frame index
      
      txt_block_intro.setAutoDraw(true);
    }
    
    
    // if txt_block_intro is active this frame...
    if (txt_block_intro.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_block_start* updates
    if (t >= 0.0 && key_block_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_block_start.tStart = t;  // (not accounting for frame time here)
      key_block_start.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_block_start.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_block_start.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_block_start.clearEvents(); });
    }
    
    // if key_block_start is active this frame...
    if (key_block_start.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_block_start.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_block_start_allKeys = _key_block_start_allKeys.concat(theseKeys);
      if (_key_block_start_allKeys.length > 0) {
        key_block_start.keys = _key_block_start_allKeys[_key_block_start_allKeys.length - 1].name;  // just the last key pressed
        key_block_start.rt = _key_block_start_allKeys[_key_block_start_allKeys.length - 1].rt;
        key_block_start.duration = _key_block_start_allKeys[_key_block_start_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    init_blockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function init_blockRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'init_block' ---
    init_blockComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('init_block.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_block
    psychoJS.experiment.addData("itraining", itraining);
    if ((itraining === 1)) {
        psychoJS.experiment.addData("idx_type", idx_type);
    }
    psychoJS.experiment.addData("iblock", iblock);
    psychoJS.experiment.addData("idx_answer", idx_answer);
    psychoJS.experiment.addData("ians_block", ians_block);
    psychoJS.experiment.addData("idx_As", idx_As);
    psychoJS.experiment.addData("idx_Bs", idx_Bs);
    psychoJS.experiment.addData("idx_Cs", idx_Cs);
    psychoJS.experiment.addData("prime_dim", prime_dim);
    psychoJS.experiment.addData("prime_plan", JSON.stringify(prime_plan));
    psychoJS.experiment.addData("screen_seq", ((screen_seq !== null) ? screen_seq : ""));
    psychoJS.experiment.addData("screen_exc", ((screen_exc !== null) ? JSON.stringify(screen_exc) : ""));

    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_block_start.corr, level);
    }
    psychoJS.experiment.addData('key_block_start.keys', key_block_start.keys);
    if (typeof key_block_start.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_block_start.rt', key_block_start.rt);
        psychoJS.experiment.addData('key_block_start.duration', key_block_start.duration);
        routineTimer.reset();
        }
    
    key_block_start.stop();
    // the Routine "init_block" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var precueMaxDurationReached;
var irepstm;
var idx_A;
var idx_B;
var idx_C;
var idx_ans;
var ians;
var iresp;
var ifeed;
var itxt_feed;
var text_blockcount;
var text_trial;
var basedir;
var istms;
var istm;
var prime_cue_dim;
var image_A_loc;
var image_B_loc;
var image_C_loc;
var precueMaxDuration;
var precueComponents;
function precueRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    _markParticipated();   // from the first trial on, a re-take is blocked (see RETAKE_KEY)
    
    //--- Prepare to start Routine 'precue' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    precueClock.reset();
    routineTimer.reset();
    precueMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from init_vars
    irepstm = NaNVal;
    idx_A = NaNVal;
    idx_B = NaNVal;
    idx_C = NaNVal;
    idx_ans = NaNVal;
    ians = NaNVal;
    key_resp.keys = NaNVal;
    iresp = NaNVal;
    ifeed = NaNVal;
    itxt_feed = NaNVal;
    fastwarning = 0;
    irepstm = (repstm_loop.thisRepN + 1);
    const _prime = prime_plan.filter(function (p) { return (p.trial === ctrial); })[0];
    isPrime = (_prime !== undefined);
    isFirstPrime = (isPrime && (itraining === 0) && (_prime.epoch === 1));
    prime_epoch = (isPrime ? _prime.epoch : NaNVal);
    itime_precue = time_precue;
    isTest = ((itraining === 1) && (ctrial > intrain));
    text_blockcount = ((("Block = " + iblock.toString()) + "/") + inblocks.toString());
    text_trial = ((((text_blockcount + "\nTrial = ") + ctrial.toString()) + "/") + ((itraining === 1) ? intrain : intrials).toString());
    if (isTest) {
        text_trial = (text_blockcount + "\nTest trial = " + (ctrial - intrain).toString() + "/" + nscreen_test.toString());
    }
    
    // Run 'Begin Routine' code from code_trial
    basedir = "images/fractals/";
    istm = ((screen_seq !== null) ? screen_seq[(ctrial - 1)] : idx_stm);
    idx_ans = (istm - 1);
    ians = ians_block[idx_ans];
    if ((istm === 1)) {
        istms = stm1;
    } else {
        if ((istm === 2)) {
            istms = stm2;
        } else {
            if ((istm === 3)) {
                istms = stm3;
            } else {
                if ((istm === 4)) {
                    istms = stm4;
                } else {
                    if ((istm === 5)) {
                        istms = stm5;
                    } else {
                        if ((istm === 6)) {
                            istms = stm6;
                        } else {
                            if ((istm === 7)) {
                                istms = stm7;
                            } else {
                                if ((istm === 8)) {
                                    istms = stm8;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    idx_A = idx_As[istms[0]];
    idx_B = idx_Bs[istms[1]];
    idx_C = idx_Cs[istms[2]];
    prime_cue_dim = NaNVal;
    if (isPrime) {
        prime_cue_dim = _prime.dim;
        cue_precue.setPos([pos_A, pos_B, pos_C][prime_cue_dim]);
        cue_stim.setPos([pos_A, pos_B, pos_C][prime_cue_dim]);
    }
    image_A_loc = ((basedir + idx_A.toString()) + ".png");
    image_B_loc = ((basedir + idx_B.toString()) + ".png");
    image_C_loc = ((basedir + idx_C.toString()) + ".png");
    
    text_trialinfo.setPos([pos_trialinfo_x, pos_trialinfo_y]);
    text_trialinfo.setText(text_trial);
    psychoJS.experiment.addData('precue.started', globalClock.getTime());
    precueMaxDuration = null
    // keep track of which components have finished
    precueComponents = [];
    precueComponents.push(Flag_precue);
    precueComponents.push(text_trialinfo);
    if (show_fix) {
      precueComponents.push(precue_fix);
    }
    // primed trial: the ring on the cued feature appears with the precue (cue_stim keeps
    // it on during the stimulus)
    if (isPrime) {
      precueComponents.push(cue_precue);
    }
    
    precueComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function precueRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'precue' ---
    // get current time
    t = precueClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Flag_precue* updates
    if (t >= 0.0 && Flag_precue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Flag_precue.tStart = t;  // (not accounting for frame time here)
      Flag_precue.frameNStart = frameN;  // exact frame index
      
      Flag_precue.setAutoDraw(true);
    }
    
    
    // if Flag_precue is active this frame...
    if (Flag_precue.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + itime_precue - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Flag_precue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      Flag_precue.tStop = t;  // not accounting for scr refresh
      Flag_precue.frameNStop = frameN;  // exact frame index
      // update status
      Flag_precue.status = PsychoJS.Status.FINISHED;
      Flag_precue.setAutoDraw(false);
    }
    
    
    // *text_trialinfo* updates
    if (t >= 0.0 && text_trialinfo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_trialinfo.tStart = t;  // (not accounting for frame time here)
      text_trialinfo.frameNStart = frameN;  // exact frame index
      
      text_trialinfo.setAutoDraw(true);
    }
    
    
    // if text_trialinfo is active this frame...
    if (text_trialinfo.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + itime_precue - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_trialinfo.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_trialinfo.tStop = t;  // not accounting for scr refresh
      text_trialinfo.frameNStop = frameN;  // exact frame index
      // update status
      text_trialinfo.status = PsychoJS.Status.FINISHED;
      text_trialinfo.setAutoDraw(false);
    }
    
    
    // *precue_fix* updates
    if (show_fix && t >= 0.0 && precue_fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      precue_fix.tStart = t;  // (not accounting for frame time here)
      precue_fix.frameNStart = frameN;  // exact frame index
      
      precue_fix.setAutoDraw(true);
    }
    
    
    // if precue_fix is active this frame...
    if (precue_fix.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + itime_precue - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (precue_fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      precue_fix.tStop = t;  // not accounting for scr refresh
      precue_fix.frameNStop = frameN;  // exact frame index
      // update status
      precue_fix.status = PsychoJS.Status.FINISHED;
      precue_fix.setAutoDraw(false);
    }


    // *cue_precue* updates (primed trial only: ring on the cued feature)
    if (isPrime && t >= 0.0 && cue_precue.status === PsychoJS.Status.NOT_STARTED) {
      cue_precue.tStart = t;  // (not accounting for frame time here)
      cue_precue.frameNStart = frameN;  // exact frame index

      cue_precue.setAutoDraw(true);
    }

    frameRemains = 0.0 + itime_precue - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cue_precue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cue_precue.tStop = t;  // not accounting for scr refresh
      cue_precue.frameNStop = frameN;  // exact frame index
      cue_precue.status = PsychoJS.Status.FINISHED;
      cue_precue.setAutoDraw(false);
    }

    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    precueComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function precueRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'precue' ---
    precueComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('precue.stopped', globalClock.getTime());
    // the Routine "precue" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var stimulusMaxDurationReached;
var _key_resp_allKeys;
var itime_resp;
var stimulusMaxDuration;
var stimulusComponents;
function stimulusRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stimulus' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    stimulusClock.reset();
    routineTimer.reset();
    stimulusMaxDurationReached = false;
    // update component parameters for each repeat
    image_A.setColor(new util.Color(color_A));
    image_A.setPos([pos_A[0], pos_A[1]]);
    image_A.setSize([size_Stim, size_Stim]);
    image_A.setImage(image_A_loc);
    image_B.setColor(new util.Color(color_B));
    image_B.setPos([pos_B[0], pos_B[1]]);
    image_B.setSize([size_Stim, size_Stim]);
    image_B.setImage(image_B_loc);
    image_C.setColor(new util.Color(color_C));
    image_C.setPos([pos_C[0], pos_C[1]]);
    image_C.setSize([size_Stim, size_Stim]);
    image_C.setImage(image_C_loc);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // primed trial of a testing block: no response deadline, so the ring stays on until a
    // decision is made (screening: the usual deadline)
    itime_resp = ((isPrime && (itraining === 0)) ? Infinity : time_resp);
    // bot indices: time the F/K key hold of this trial's response
    botLog.respOpen = true;
    botLog.down = null;
    botLog.press = null;
    text_trialinfo_2.setPos([pos_trialinfo_x, pos_trialinfo_y]);
    text_trialinfo_2.setText(text_trial);
    psychoJS.experiment.addData('stimulus.started', globalClock.getTime());
    stimulusMaxDuration = null
    // keep track of which components have finished
    stimulusComponents = [];
    stimulusComponents.push(Flag_Empty);
    stimulusComponents.push(image_A);
    stimulusComponents.push(image_B);
    stimulusComponents.push(image_C);
    stimulusComponents.push(key_resp);
    stimulusComponents.push(text_trialinfo_2);
    if (show_fix) {
      stimulusComponents.push(stim_fix);
    }
    if (isPrime) {
      stimulusComponents.push(cue_stim);
    }
    
    stimulusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function stimulusRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stimulus' ---
    // get current time
    t = stimulusClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Flag_Empty* updates
    if (t >= 0.0 && Flag_Empty.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Flag_Empty.tStart = t;  // (not accounting for frame time here)
      Flag_Empty.frameNStart = frameN;  // exact frame index
      
      Flag_Empty.setAutoDraw(true);
    }
    
    
    // if Flag_Empty is active this frame...
    if (Flag_Empty.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + itime_resp - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Flag_Empty.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      Flag_Empty.tStop = t;  // not accounting for scr refresh
      Flag_Empty.frameNStop = frameN;  // exact frame index
      // update status
      Flag_Empty.status = PsychoJS.Status.FINISHED;
      Flag_Empty.setAutoDraw(false);
    }
    
    
    // *image_A* updates
    if (t >= 0.0 && image_A.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_A.tStart = t;  // (not accounting for frame time here)
      image_A.frameNStart = frameN;  // exact frame index
      
      image_A.setAutoDraw(true);
    }
    
    
    // if image_A is active this frame...
    if (image_A.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + itime_resp - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_A.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_A.tStop = t;  // not accounting for scr refresh
      image_A.frameNStop = frameN;  // exact frame index
      // update status
      image_A.status = PsychoJS.Status.FINISHED;
      image_A.setAutoDraw(false);
    }
    
    
    // *image_B* updates
    if (t >= 0.0 && image_B.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_B.tStart = t;  // (not accounting for frame time here)
      image_B.frameNStart = frameN;  // exact frame index
      
      image_B.setAutoDraw(true);
    }
    
    
    // if image_B is active this frame...
    if (image_B.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + itime_resp - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_B.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_B.tStop = t;  // not accounting for scr refresh
      image_B.frameNStop = frameN;  // exact frame index
      // update status
      image_B.status = PsychoJS.Status.FINISHED;
      image_B.setAutoDraw(false);
    }
    
    
    // *image_C* updates
    if (t >= 0.0 && image_C.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_C.tStart = t;  // (not accounting for frame time here)
      image_C.frameNStart = frameN;  // exact frame index
      
      image_C.setAutoDraw(true);
    }
    
    
    // if image_C is active this frame...
    if (image_C.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + itime_resp - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_C.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_C.tStop = t;  // not accounting for scr refresh
      image_C.frameNStop = frameN;  // exact frame index
      // update status
      image_C.status = PsychoJS.Status.FINISHED;
      image_C.setAutoDraw(false);
    }


    // *cue_stim* updates (primed trial only: ring around the cued fractal,
    // shown until the stimulus routine ends)
    if (isPrime && t >= 0.0 && cue_stim.status === PsychoJS.Status.NOT_STARTED) {
      cue_stim.tStart = t;  // (not accounting for frame time here)
      cue_stim.frameNStart = frameN;  // exact frame index

      cue_stim.setAutoDraw(true);
    }

    frameRemains = 0.0 + itime_resp - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cue_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cue_stim.tStop = t;  // not accounting for scr refresh
      cue_stim.frameNStop = frameN;  // exact frame index
      cue_stim.status = PsychoJS.Status.FINISHED;
      cue_stim.setAutoDraw(false);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    frameRemains = 0.0 + itime_resp - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      key_resp.tStop = t;  // not accounting for scr refresh
      key_resp.frameNStop = frameN;  // exact frame index
      // update status
      key_resp.status = PsychoJS.Status.FINISHED;
      frameRemains = 0.0 + itime_resp - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        key_resp.tStop = t;  // not accounting for scr refresh
        key_resp.frameNStop = frameN;  // exact frame index
        // update status
        key_resp.status = PsychoJS.Status.FINISHED;
        key_resp.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if key_resp is active this frame...
      if (key_resp.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp.getKeys({
          keyList: typeof ['f','k'] === 'string' ? [['f','k']] : ['f','k'], 
          waitRelease: false
        });
        _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
        if (_key_resp_allKeys.length > 0) {
          key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
          key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
          key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      
      // *text_trialinfo_2* updates
      if (t >= 0.0 && text_trialinfo_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_trialinfo_2.tStart = t;  // (not accounting for frame time here)
        text_trialinfo_2.frameNStart = frameN;  // exact frame index
        
        text_trialinfo_2.setAutoDraw(true);
      }
      
      
      // if text_trialinfo_2 is active this frame...
      if (text_trialinfo_2.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + itime_resp - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_trialinfo_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_trialinfo_2.tStop = t;  // not accounting for scr refresh
        text_trialinfo_2.frameNStop = frameN;  // exact frame index
        // update status
        text_trialinfo_2.status = PsychoJS.Status.FINISHED;
        text_trialinfo_2.setAutoDraw(false);
      }
      
      
      // *stim_fix* updates
      if (show_fix && t >= 0.0 && stim_fix.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        stim_fix.tStart = t;  // (not accounting for frame time here)
        stim_fix.frameNStart = frameN;  // exact frame index
        
        stim_fix.setAutoDraw(true);
      }
      
      
      // if stim_fix is active this frame...
      if (stim_fix.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + itime_resp - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (stim_fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        stim_fix.tStop = t;  // not accounting for scr refresh
        stim_fix.frameNStop = frameN;  // exact frame index
        // update status
        stim_fix.status = PsychoJS.Status.FINISHED;
        stim_fix.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      stimulusComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function stimulusRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'stimulus' ---
      stimulusComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('stimulus.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp.corr, level);
      }
      psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
      if (typeof key_resp.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
          psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
          routineTimer.reset();
          }
      
      key_resp.stop();
      // Run 'End Routine' code from code_resp
      botLog.respOpen = false;
      var _pj;
      function _pj_snippets(container) {
          function in_es6(left, right) {
              if (((right instanceof Array) || ((typeof right) === "string"))) {
                  return (right.indexOf(left) > (- 1));
              } else {
                  if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                      return right.has(left);
                  } else {
                      return (left in right);
                  }
              }
          }
          container["in_es6"] = in_es6;
          return container;
      }
      _pj = {};
      _pj_snippets(_pj);
      keys = key_resp.keys;
      if ((keys && _pj.in_es6("f", keys))) {
          iresp = 0;
      } else {
          if ((keys && _pj.in_es6("k", keys))) {
              iresp = 1;
          }
      }
      
      // the Routine "stimulus" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var feedbackMaxDurationReached;
var ifeed_color;
var iflag_loc;
var feedbackMaxDuration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'feedback' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      feedbackClock.reset();
      routineTimer.reset();
      feedbackMaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_feedback
      // first primed trial of a testing block: its outcome is fixed in advance
      // (first_target). If the choice does not give that outcome, the block's category
      // mapping is reversed (same informative features, F and K swapped) for this and
      // every later trial of the block.
      if ((isFirstPrime && (iresp !== NaNVal) && (((iresp === ians) * 1) !== first_target))) {
          ians_block = ians_block.map(function (a) { return (1 - a); });
          ians = (1 - ians);
          map_flipped = 1;
      }
      ifeed = ((iresp === ians) * 1);
      ifeed_color = ifeed;
      if ((ifeed === 0)) {
          itxt_feed = "Incorrect!";
      } else {
          if ((ifeed === 1)) {
              itxt_feed = "Correct!";
          }
      }
      if ((iresp === NaNVal)) {
          itxt_feed = "Late!\nPress F or K faster!";
          ifeed_color = 2;
      }
      // screening test: no feedback on correctness, shorter neutral screen
      itime_feed = time_feed;
      if (isTest) {
          itime_feed = time_feed_test;
          if ((iresp !== NaNVal)) {
              itxt_feed = "Response recorded.";
              ifeed_color = 3;
          }
      }
      // too fast: the feedback above is shown as usual, then a warning screen
      // (never after a primed trial of a testing block)
      fastwarning = (((iresp !== NaNVal) && (key_resp.rt <= rt_too_fast) && !(isPrime && (itraining === 0))) ? 1 : 0);
      ncorrect += ifeed;
      ntrial_scored += 1;
      // late responses count as wrong and also break the run
      nCombo = ((ifeed === 1) ? (nCombo + 1) : 0);
      // feedback shows correctness only; the category (ians) is not revealed
      if ((ians === 0)) {
          iflag_loc = flag_loc_enemy;
      } else {
          if ((ians === 1)) {
              iflag_loc = flag_loc_friend;
          }
      }
      if ((itraining === 0)) {
          ncorrect_choice += ifeed;
          nalltrial += 1;
      } else {
          if ((itraining === 1)) {
              ncorrect_choice_practice += ifeed;
              nalltrial_practice += 1;
          }
      }
      
      Flag_feed.setImage(iflag_loc);
      image_A_feed.setColor(new util.Color(color_A));
      image_A_feed.setPos([pos_A[0], pos_A[1]]);
      image_A_feed.setSize([size_Stim, size_Stim]);
      image_A_feed.setImage(image_A_loc);
      image_B_feed.setColor(new util.Color(color_B));
      image_B_feed.setPos([pos_B[0], pos_B[1]]);
      image_B_feed.setSize([size_Stim, size_Stim]);
      image_B_feed.setImage(image_B_loc);
      image_C_feed.setColor(new util.Color(color_C));
      image_C_feed.setPos([pos_C[0], pos_C[1]]);
      image_C_feed.setSize([size_Stim, size_Stim]);
      image_C_feed.setImage(image_C_loc);
      txt_feed.setColor(new util.Color(txt_feed_color[ifeed_color]));
      txt_feed.setText(itxt_feed);
      txt_feed.setHeight(txt_feed_size);
      text_trialinfo_3.setPos([pos_trialinfo_x, pos_trialinfo_y]);
      text_trialinfo_3.setText(text_trial);
      psychoJS.experiment.addData('feedback.started', globalClock.getTime());
      feedbackMaxDuration = null
      // keep track of which components have finished
      feedbackComponents = [];
      feedbackComponents.push(Flag_feed);
      feedbackComponents.push(image_A_feed);
      feedbackComponents.push(image_B_feed);
      feedbackComponents.push(image_C_feed);
      feedbackComponents.push(txt_feed);
      feedbackComponents.push(text_trialinfo_3);
      
      feedbackComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function feedbackRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'feedback' ---
      // get current time
      t = feedbackClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *Flag_feed* updates
      if (t >= 0.0 && Flag_feed.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        Flag_feed.tStart = t;  // (not accounting for frame time here)
        Flag_feed.frameNStart = frameN;  // exact frame index
        
        Flag_feed.setAutoDraw(true);
      }
      
      
      // if Flag_feed is active this frame...
      if (Flag_feed.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + itime_feed - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (Flag_feed.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        Flag_feed.tStop = t;  // not accounting for scr refresh
        Flag_feed.frameNStop = frameN;  // exact frame index
        // update status
        Flag_feed.status = PsychoJS.Status.FINISHED;
        Flag_feed.setAutoDraw(false);
      }
      
      
      // *image_A_feed* updates
      if (t >= 0.0 && image_A_feed.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_A_feed.tStart = t;  // (not accounting for frame time here)
        image_A_feed.frameNStart = frameN;  // exact frame index
        
        image_A_feed.setAutoDraw(true);
      }
      
      
      // if image_A_feed is active this frame...
      if (image_A_feed.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + itime_feed - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (image_A_feed.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        image_A_feed.tStop = t;  // not accounting for scr refresh
        image_A_feed.frameNStop = frameN;  // exact frame index
        // update status
        image_A_feed.status = PsychoJS.Status.FINISHED;
        image_A_feed.setAutoDraw(false);
      }
      
      
      // *image_B_feed* updates
      if (t >= 0.0 && image_B_feed.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_B_feed.tStart = t;  // (not accounting for frame time here)
        image_B_feed.frameNStart = frameN;  // exact frame index
        
        image_B_feed.setAutoDraw(true);
      }
      
      
      // if image_B_feed is active this frame...
      if (image_B_feed.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + itime_feed - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (image_B_feed.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        image_B_feed.tStop = t;  // not accounting for scr refresh
        image_B_feed.frameNStop = frameN;  // exact frame index
        // update status
        image_B_feed.status = PsychoJS.Status.FINISHED;
        image_B_feed.setAutoDraw(false);
      }
      
      
      // *image_C_feed* updates
      if (t >= 0.0 && image_C_feed.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_C_feed.tStart = t;  // (not accounting for frame time here)
        image_C_feed.frameNStart = frameN;  // exact frame index
        
        image_C_feed.setAutoDraw(true);
      }
      
      
      // if image_C_feed is active this frame...
      if (image_C_feed.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + itime_feed - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (image_C_feed.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        image_C_feed.tStop = t;  // not accounting for scr refresh
        image_C_feed.frameNStop = frameN;  // exact frame index
        // update status
        image_C_feed.status = PsychoJS.Status.FINISHED;
        image_C_feed.setAutoDraw(false);
      }
      
      
      // *txt_feed* updates
      if (t >= 0.0 && txt_feed.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        txt_feed.tStart = t;  // (not accounting for frame time here)
        txt_feed.frameNStart = frameN;  // exact frame index
        
        txt_feed.setAutoDraw(true);
      }
      
      
      // if txt_feed is active this frame...
      if (txt_feed.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + itime_feed - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (txt_feed.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        txt_feed.tStop = t;  // not accounting for scr refresh
        txt_feed.frameNStop = frameN;  // exact frame index
        // update status
        txt_feed.status = PsychoJS.Status.FINISHED;
        txt_feed.setAutoDraw(false);
      }
      
      
      // *text_trialinfo_3* updates
      if (t >= 0.0 && text_trialinfo_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_trialinfo_3.tStart = t;  // (not accounting for frame time here)
        text_trialinfo_3.frameNStart = frameN;  // exact frame index
        
        text_trialinfo_3.setAutoDraw(true);
      }
      
      
      // if text_trialinfo_3 is active this frame...
      if (text_trialinfo_3.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + itime_feed - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_trialinfo_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_trialinfo_3.tStop = t;  // not accounting for scr refresh
        text_trialinfo_3.frameNStop = frameN;  // exact frame index
        // update status
        text_trialinfo_3.status = PsychoJS.Status.FINISHED;
        text_trialinfo_3.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      feedbackComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function feedbackRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'feedback' ---
      feedbackComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
      // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var summary_trialMaxDurationReached;
var summary_trialMaxDuration;
var summary_trialComponents;
function summary_trialRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'summary_trial' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      summary_trialClock.reset();
      routineTimer.reset();
      summary_trialMaxDurationReached = false;
      // update component parameters for each repeat
      psychoJS.experiment.addData('summary_trial.started', globalClock.getTime());
      summary_trialMaxDuration = null
      // keep track of which components have finished
      summary_trialComponents = [];
      
      summary_trialComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function summary_trialRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'summary_trial' ---
      // get current time
      t = summary_trialClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      summary_trialComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function summary_trialRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'summary_trial' ---
      summary_trialComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('summary_trial.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_trialsummary
      psychoJS.experiment.addData("ctrial", ctrial);
      psychoJS.experiment.addData("irepstm", irepstm);
      // block context on every trial row, so trials can be analysed without forward-filling
      psychoJS.experiment.addData("itraining", itraining);
      psychoJS.experiment.addData("iblock", iblock);
      psychoJS.experiment.addData("idx_type", idx_type);
      psychoJS.experiment.addData("idx_answer", idx_answer);
      psychoJS.experiment.addData("isPrime", isPrime);
      psychoJS.experiment.addData("isTest", isTest);
      psychoJS.experiment.addData("idx_stm", istm);
      // stimulus actually shown: the trial loop's own idx_stm (from repstm_loop.xlsx)
      // overwrites the column above, and differs from it in screening blocks 2-3
      psychoJS.experiment.addData("istm", istm);
      psychoJS.experiment.addData("idx_A", idx_A);
      psychoJS.experiment.addData("idx_B", idx_B);
      psychoJS.experiment.addData("idx_C", idx_C);
      psychoJS.experiment.addData("ians", ians);
      psychoJS.experiment.addData("key_resp", key_resp.keys);
      psychoJS.experiment.addData("iresp", iresp);
      psychoJS.experiment.addData("ifeed", ifeed);
      psychoJS.experiment.addData("itxt_feed", itxt_feed);
      psychoJS.experiment.addData("nCombo", nCombo);
      psychoJS.experiment.addData("fastwarning", fastwarning);
      psychoJS.experiment.addData("prime_cue_dim", prime_cue_dim);
      psychoJS.experiment.addData("prime_epoch", prime_epoch);
      psychoJS.experiment.addData("first_target", (isFirstPrime ? first_target : NaNVal));
      psychoJS.experiment.addData("map_flipped", map_flipped);
      // bot indices (recorded only)
      psychoJS.experiment.addData("key_hold", ((botLog.press !== null) ? botLog.press.hold : NaNVal));
      psychoJS.experiment.addData("key_trusted", ((botLog.press !== null) ? (botLog.press.trusted ? 1 : 0) : NaNVal));
      psychoJS.experiment.addData("bot_untrusted_total", botLog.untrusted);
      psychoJS.experiment.addData("bot_hidden_total", botLog.hidden);
      psychoJS.experiment.addData("bot_blur_total", botLog.blur);
      psychoJS.experiment.addData("bot_mousemoves_total", botLog.mouseMoves);
      if ((botBlock !== null)) {
          botBlock.n += 1;
          if ((iresp === NaNVal)) {
              botBlock.late += 1;
          } else {
              botBlock.rts.push(key_resp.rt);
              if ((typeof key_resp.duration === 'number')) {
                  botBlock.keydur += 1;
              }
              if (((botLog.press !== null) && (botLog.press.hold < 0.02))) {
                  botBlock.shortHold += 1;
              }
          }
      }
      // screening: nCombo_master correct in a row during training passes at once;
      // otherwise the block ends with the test, scored on its own
      if ((itraining === 1)) {
          if (isTest) {
              ntest_done += 1;
              ntest_correct += ifeed;
              if ((ntest_done >= nscreen_test)) {
                  mastered_block = (ntest_correct >= nscreen_test_pass);
                  screen_pass_by = (mastered_block ? "test" : "fail");
                  trial_loop.finished = true;
                  repstm_loop.finished = true;
              }
          } else {
              if ((nCombo >= nCombo_master)) {
                  mastered_block = true;
                  screen_pass_by = "run";
                  trial_loop.finished = true;
                  repstm_loop.finished = true;
              } else {
                  if (((nscreen_test === 0) && (ctrial >= intrain))) {
                      // no test: the block fails at the training cap
                      mastered_block = false;
                      screen_pass_by = "fail";
                      trial_loop.finished = true;
                      repstm_loop.finished = true;
                  }
              }
          }
      }
      // check mode: end the testing block once intrials trials have run
      if (((itraining === 0) && (CHECK_NTRIALS_TEST !== null) && (ctrial >= intrials))) {
          trial_loop.finished = true;
          repstm_loop.finished = true;
      }
      ctrial += 1;
      
      // the Routine "summary_trial" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var feedback_blockMaxDurationReached;
var itxt_block_feedback;
var igrade_block;
var itxt_block_incentive;
var incent;
var itxt_block_warning;
var pcorrect_total;
var _key_block_finish_allKeys;
var feedback_blockMaxDuration;
var feedback_blockComponents;
function feedback_blockRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'feedback_block' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      feedback_blockClock.reset();
      routineTimer.reset();
      feedback_blockMaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_block_feedback
      // over trials run so far: practice levels can end early
      pcorrect = (util.round(((ncorrect / ntrial_scored) * 100)) / 100);
      itxt_block_feedback = ("Correct proportion of this block = " + pcorrect.toString());
      if ((pcorrect < 0.55)) {
          igrade_block = "\n\nYour score in this block: Insufficient\n\nThe task seems to have been quite difficult.\nPlease review the instructions carefully.";
      } else {
          if ((pcorrect < 0.6)) {
              igrade_block = "\n\nYour score in this block: Fair\n\nYour performance was modest.\nWith a bit more focus and effort, you can definitely improve.";
          } else {
              if ((pcorrect < 0.7)) {
                  igrade_block = "\n\nYour score in this block: Good\n\nSolid performance!\nYou're getting the hang of it\u2014keep up the consistency.";
              } else {
                  if ((pcorrect < 0.8)) {
                      igrade_block = "\n\nYour score in this block: Excellent\n\nOutstanding work!\nYour performance is among the best.\nStay sharp and keep going strong!";
                  } else {
                      if ((pcorrect >= 0.8)) {
                          igrade_block = "\n\nYour score in this block: Perfect\n\nFlawless performance!\nYou mastered this block.\nKeep up this exceptional work!";
                      }
                  }
              }
          }
      }
      itxt_block_incentive = "";
      incent = 0;
      if ((itraining === 0)) {
          // testing-block bonus by block accuracy
          if ((pcorrect < 0.55)) {
              incent = (- 0.5);
          } else {
              if ((pcorrect < 0.6)) {
                  incent = 0;
              } else {
                  if ((pcorrect < 0.75)) {
                      incent = 0.5;
                  } else {
                      incent = 1;
                  }
              }
          }
          testing_bonus = (Math.round(((testing_bonus + incent) * 100)) / 100); // no float residue
          // completers get base + testing bonus; a negative total never reduces the base
          total_payment = (base_payment + Math.max(0, testing_bonus));
          pcorrect_total = (util.round(((ncorrect_choice / nalltrial) * 100)) / 100);
          // each block shows only its own bonus; the history and the settlement come
          // after the last block
          testing_bonus_list.push(_fmtBonus(incent));
          itxt_block_incentive = ("Your bonus for this block: " + _fmtBonus(incent) + ".");
          if ((iblock === nblocks)) {
              const _rows = [];
              for (let _i = 0; _i < testing_bonus_list.length; _i += 3) {
                  _rows.push(testing_bonus_list.slice(_i, (_i + 3)).map(function (b, j) { return ("Block " + (_i + j + 1).toString() + ": " + b); }).join("     "));
              }
              itxt_block_incentive = (itxt_block_incentive + "\n\nYou have completed all testing blocks!\n\nBonus per block:\n" + _rows.join("\n") + "\n\nTotal testing bonus: " + _fmtBonus(testing_bonus) + "\nTotal payment: $" + base_payment.toFixed(2) + " base + $" + Math.max(0, testing_bonus).toFixed(2) + " bonus = $" + total_payment.toFixed(2) + "\n(A negative total bonus counts as $0.)");
          }
          itxt_block_feedback = ("Testing block " + iblock.toString() + "/" + nblocks.toString() + " completed.\n\n" + itxt_block_incentive);
      } else {
          pcorrect_total = NaNVal;
          if (mastered_block) {
              screening_bonus = (Math.round(((screening_bonus + screening_bonus_block) * 100)) / 100); // no float residue
              if ((screen_pass_by === "test")) {
                  itxt_block_feedback = "You passed the test with " + ntest_correct.toString() + "/" + nscreen_test.toString() + " correct answers.\nYou have completed this screening block and earned a $" + screening_bonus_block.toFixed(2) + " bonus.";
              } else {
                  itxt_block_feedback = "Great! You answered " + nCombo_master.toString() + " trials correctly in a row.\nYou have completed this screening block and earned a $" + screening_bonus_block.toFixed(2) + " bonus.";
              }
              if ((iblock === npractice_blocks)) {
                  itxt_block_feedback = (itxt_block_feedback + "\n\nYou passed the screening phase! The testing blocks begin next.");
              }
          } else {
              // hit the screening cap: skip every remaining block
              failed_practice = true;
              total_payment = (fail_payment + screening_bonus);
              block_loop.finished = true;
              itxt_block_feedback = "You did not answer " + nCombo_master.toString() + " trials correctly in a row within " + intrain.toString() + " trials" + ((nscreen_test > 0) ? (", and you answered " + ntest_correct.toString() + "/" + nscreen_test.toString() + " test trials correctly (at least " + nscreen_test_pass.toString() + " needed)") : "") + ".\nThe study ends here. You will receive $" + total_payment.toFixed(2) + " ($" + fail_payment.toFixed(2) + " + $" + screening_bonus.toFixed(2) + " screening bonus).";
          }
      }
      itxt_block_feedback = (itxt_block_feedback + "\n\nPress the space bar to proceed!");
      // log this block's summary and upload all data so far before showing the summary screen
      psychoJS.experiment.addData("itraining", itraining);
      psychoJS.experiment.addData("iblock", iblock);
      psychoJS.experiment.addData("pcorrect", pcorrect);
      psychoJS.experiment.addData("pcorrect_total", pcorrect_total);
      psychoJS.experiment.addData("incent", incent);
      psychoJS.experiment.addData("screening_bonus", screening_bonus);
      psychoJS.experiment.addData("testing_bonus", testing_bonus);
      psychoJS.experiment.addData("total_payment", total_payment);
      psychoJS.experiment.addData("itxt_block_feedback", itxt_block_feedback);
      psychoJS.experiment.addData("mastered_block", mastered_block);
      psychoJS.experiment.addData("screen_pass_by", ((itraining === 1) ? screen_pass_by : ""));
      psychoJS.experiment.addData("ntest_correct", ((itraining === 1) ? ntest_correct : NaNVal));
      psychoJS.experiment.addData("failed_practice", failed_practice);
      psychoJS.experiment.addData("ntrials_block", (ctrial - 1));
      psychoJS.experiment.addData("prime_dim", prime_dim);
      // bot indices of this block (recorded only; flags = number of the 4 criteria met)
      if ((botBlock !== null)) {
          const _bs = _botBlockSummary(botBlock);
          psychoJS.experiment.addData("bot_rt_iqr", ((_bs.iqr !== null) ? _bs.iqr : NaNVal));
          psychoJS.experiment.addData("bot_frac_fast", ((_bs.fast !== null) ? _bs.fast : NaNVal));
          psychoJS.experiment.addData("bot_frac_keydur", ((_bs.keydur !== null) ? _bs.keydur : NaNVal));
          psychoJS.experiment.addData("bot_frac_shorthold", ((_bs.shortHold !== null) ? _bs.shortHold : NaNVal));
          psychoJS.experiment.addData("bot_frac_late", ((_bs.late !== null) ? _bs.late : NaNVal));
          psychoJS.experiment.addData("bot_flags", _bs.flags);
      }
      psychoJS.experiment.addData("bot_webdriver", ((navigator.webdriver === true) ? 1 : 0));
      psychoJS.experiment.addData("bot_untrusted_total", botLog.untrusted);
      psychoJS.experiment.addData("bot_hidden_total", botLog.hidden);
      psychoJS.experiment.addData("bot_blur_total", botLog.blur);
      psychoJS.experiment.addData("bot_mousemoves_total", botLog.mouseMoves);
      psychoJS.experiment.nextEntry();
      saveProgress();
      
      txt_block_feedback.setText(itxt_block_feedback);
      txt_block_feedback.setHeight(txt_block_instruction);
      key_block_finish.keys = undefined;
      key_block_finish.rt = undefined;
      _key_block_finish_allKeys = [];
      psychoJS.experiment.addData('feedback_block.started', globalClock.getTime());
      feedback_blockMaxDuration = null
      // keep track of which components have finished
      feedback_blockComponents = [];
      feedback_blockComponents.push(txt_block_feedback);
      feedback_blockComponents.push(key_block_finish);
      
      feedback_blockComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function feedback_blockRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'feedback_block' ---
      // get current time
      t = feedback_blockClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *txt_block_feedback* updates
      if (t >= 0.0 && txt_block_feedback.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        txt_block_feedback.tStart = t;  // (not accounting for frame time here)
        txt_block_feedback.frameNStart = frameN;  // exact frame index
        
        txt_block_feedback.setAutoDraw(true);
      }
      
      
      // if txt_block_feedback is active this frame...
      if (txt_block_feedback.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_block_finish* updates
      if (t >= 0.0 && key_block_finish.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_block_finish.tStart = t;  // (not accounting for frame time here)
        key_block_finish.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_block_finish.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_block_finish.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_block_finish.clearEvents(); });
      }
      
      // if key_block_finish is active this frame...
      if (key_block_finish.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_block_finish.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _key_block_finish_allKeys = _key_block_finish_allKeys.concat(theseKeys);
        if (_key_block_finish_allKeys.length > 0) {
          key_block_finish.keys = _key_block_finish_allKeys[_key_block_finish_allKeys.length - 1].name;  // just the last key pressed
          key_block_finish.rt = _key_block_finish_allKeys[_key_block_finish_allKeys.length - 1].rt;
          key_block_finish.duration = _key_block_finish_allKeys[_key_block_finish_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      feedback_blockComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function feedback_blockRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'feedback_block' ---
      feedback_blockComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('feedback_block.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_block_feedback
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_block_finish.corr, level);
      }
      psychoJS.experiment.addData('key_block_finish.keys', key_block_finish.keys);
      if (typeof key_block_finish.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_block_finish.rt', key_block_finish.rt);
          psychoJS.experiment.addData('key_block_finish.duration', key_block_finish.duration);
          routineTimer.reset();
          }
      
      key_block_finish.stop();
      // the Routine "feedback_block" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var final_infoMaxDurationReached;
var itxt_final_info;
var _key_final_allKeys;
var final_infoMaxDuration;
var final_infoComponents;
function final_infoRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'final_info' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      final_infoClock.reset();
      routineTimer.reset();
      final_infoMaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from code_final_feedback
      if (failed_practice) {
          itxt_final_info = "The study ended after the screening phase.\nYour total payment will be $" + total_payment.toFixed(2) + " ($" + fail_payment.toFixed(2) + " + $" + screening_bonus.toFixed(2) + " screening bonus).";
      } else {
          itxt_final_info = "You have completed the study!\nYour total payment will be $" + total_payment.toFixed(2) + " ($" + base_payment.toFixed(2) + " base + $" + (total_payment - base_payment).toFixed(2) + " testing bonus).";
      }
      itxt_final_info = (itxt_final_info + "\n\nPress the space bar, then click OK to be redirected to a Google Form.\nPlease do NOT press Esc, or you will not be redirected.\nIn the form, please click the completion URL to finish your participation.\n\nThank you for your participation!");
      redirect_url = (failed_practice ? FORM_URL_SCREENED_OUT : FORM_URL_COMPLETED);
      psychoJS.setRedirectUrls(redirect_url, undefined);
      psychoJS.experiment.addData("redirect_form", (failed_practice ? FORM_URL_SCREENED_OUT : FORM_URL_COMPLETED));
      // record the final payment and upload before the last screen
      psychoJS.experiment.addData("final_payment", total_payment);
      psychoJS.experiment.addData("screening_bonus", screening_bonus);
      psychoJS.experiment.addData("testing_bonus", testing_bonus);
      psychoJS.experiment.addData("failed_practice", failed_practice);
      psychoJS.experiment.addData("itxt_final_info", itxt_final_info);
      psychoJS.experiment.nextEntry();
      await saveFinalResults();
      
      txt_final.setText(itxt_final_info);
      txt_final.setHeight(txt_block_instruction);
      key_final.keys = undefined;
      key_final.rt = undefined;
      _key_final_allKeys = [];
      psychoJS.experiment.addData('final_info.started', globalClock.getTime());
      final_infoMaxDuration = null
      // keep track of which components have finished
      final_infoComponents = [];
      final_infoComponents.push(txt_final);
      final_infoComponents.push(key_final);
      
      final_infoComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function final_infoRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'final_info' ---
      // get current time
      t = final_infoClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *txt_final* updates
      if (t >= 0.0 && txt_final.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        txt_final.tStart = t;  // (not accounting for frame time here)
        txt_final.frameNStart = frameN;  // exact frame index
        
        txt_final.setAutoDraw(true);
      }
      
      
      // if txt_final is active this frame...
      if (txt_final.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_final* updates
      if (t >= 0.0 && key_final.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_final.tStart = t;  // (not accounting for frame time here)
        key_final.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_final.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_final.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_final.clearEvents(); });
      }
      
      // if key_final is active this frame...
      if (key_final.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_final.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _key_final_allKeys = _key_final_allKeys.concat(theseKeys);
        if (_key_final_allKeys.length > 0) {
          key_final.keys = _key_final_allKeys[_key_final_allKeys.length - 1].name;  // just the last key pressed
          key_final.rt = _key_final_allKeys[_key_final_allKeys.length - 1].rt;
          key_final.duration = _key_final_allKeys[_key_final_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      final_infoComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function final_infoRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'final_info' ---
      final_infoComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('final_info.stopped', globalClock.getTime());
      // Run 'End Routine' code from code_final_feedback
      psychoJS.experiment.addData("itxt_final_info", itxt_final_info);
      
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_final.corr, level);
      }
      psychoJS.experiment.addData('key_final.keys', key_final.keys);
      if (typeof key_final.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_final.rt', key_final.rt);
          psychoJS.experiment.addData('key_final.duration', key_final.duration);
          routineTimer.reset();
          }
      
      key_final.stop();
      // the Routine "final_info" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
function importConditions(currentLoop) {
    return async function () {
      psychoJS.importAttributes(currentLoop.getCurrentTrial());
      return Scheduler.Event.NEXT;
      };
  }
  
  
async function quitPsychoJS(message, isCompleted) {
    // Check for and save orphaned data
    if (psychoJS.experiment.isEntryEmpty()) {
      psychoJS.experiment.nextEntry();
    }
    psychoJS.window.close();
    try {
      await psychoJS.quit({message: message, isCompleted: isCompleted});
    } catch (error) {
      // the results could not be sent (e.g. DataPipe unreachable after all retries):
      // still send participants who finished to their form so they can complete on
      // Prolific, instead of leaving them on an error dialog
      if (isCompleted) {
        window.location = redirect_url;
      }
    }
    
    return Scheduler.Event.QUIT;
  }
