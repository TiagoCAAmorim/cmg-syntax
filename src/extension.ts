// extension.ts
import * as vscode from 'vscode';
import { MyHoverProvider } from './hoverProvider';
import { parseFileContents } from './parser';
import { readFileContents } from './fileReader';

export function activate(context: vscode.ExtensionContext) {
    // Read the text file
    const fileContents = readFileContents('path/to/your/text/file.txt');

    // Parse the contents to extract keywords and descriptions
    const keywordMap = parseFileContents(fileContents);

    let hoverProvider = vscode.languages.registerHoverProvider('*', new MyHoverProvider(keywordMap));

    context.subscriptions.push(hoverProvider);
}

export function deactivate() {}
