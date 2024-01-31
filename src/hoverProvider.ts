import * as vscode from 'vscode';

export class MyHoverProvider implements vscode.HoverProvider {
    provideHover(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.Hover> {
        const wordRange = document.getWordRangeAtPosition(position);
        if (!wordRange) {
            return;
        }

        const hoveredWord = document.getText(wordRange);
        const description = keywordMap.get(hoveredWord);
        if (description) {
            return new vscode.Hover(description);
        }
    }
}
