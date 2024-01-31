import * as vscode from 'vscode';
import * as fs from 'fs';

// Read the text file
const fileContents = fs.readFileSync('description.txt', 'utf-8');
