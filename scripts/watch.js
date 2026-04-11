import chokidar from 'chokidar';
import { spawn } from 'node:child_process';
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const WATCH_PATH = [
    path.join(__dirname, './config/config.js'),
    path.join(__dirname, './config/opencode.example.jsonc'),
];

const NPM_COMMAND = ['run', 'setup'];
const DEBOUNCE_MS = 100; // adjust delay here

let currentProcess = null;
let debounceTimer = null;

function runCommand() {
    if (currentProcess) {
        console.log('Killing previous process...');
        currentProcess.kill();
    }

    console.log(`Running: npm ${NPM_COMMAND.join(' ')}`);

    currentProcess = spawn('npm', NPM_COMMAND, {stdio: 'inherit', shell: true});

    currentProcess.on('close', (code) => {
        console.log(`Command exited with code ${code}`);
        currentProcess = null;
    });
}

function scheduleRun() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(runCommand, DEBOUNCE_MS);
}

const watcher = chokidar.watch(WATCH_PATH, { ignoreInitial: true });

watcher.on('add', scheduleRun).on('change', scheduleRun).on('unlink', scheduleRun);

console.log(`Watching ${WATCH_PATH} with ${DEBOUNCE_MS}ms debounce...`);