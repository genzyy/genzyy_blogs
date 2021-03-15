# Vscode Setup

So for sometime I have been using vim( neovim ) for most of the editing part but recently I moved to vscode and this is my setup.

In this setup I will be sharing all the extensions and my `settings.json` file for better understanding

## Setup

![](https://raw.githubusercontent.com/genzyy/genzyy_blogs/main/src/content/assets/vscode/vscode.png)

## Extensions That I Use

- Auto Close Tag 

- Auto Rename Tag 

- Better Comments 

- Bracket Pair Colorizer 2 

- Carbon Product Icons 

- Color Highlight 

- ES7 React/Redux/GraphQL/React-Native snippets 

- Font Switcher 

- Import Cost 

- Live Server 

- Prettier 

## Some Info About Certain Extensions

* ***Auto close and rename tag*** helps to write the close tag in html and react and also if you rename the opening or closing tag then it automatically renames the other one.

* ***Better Comments*** helps to add todo's as comments with a better highlighting and color syntax and also better informatiion comments. Read more about them [here](https://github.com/aaron-bond/better-comments).

* ***Bracket Pair Colorizer 2*** helps to understand and locate the bracket pairs more clearly. Check my `settings.json` for the configuration.

* ***Color Highlight*** add the color as the background to the hex colors written in react or css files.

* ***Import Cost*** gives the size of the imported file in the react files ( works for both react and other type of files and frameworks ).

* ***Live Server*** same as the popular npm package but is integrated in vscode for ease.

* ***Prettier*** best code formatter when you save or paste something in your files. It formats the file and the syntax for better viewing

## Settings.json

To access your `settings.json` file in vscode, use `Ctrl + Shift + P` if you are on linux or windows, and `Cmd + shift + P` if you are on a mac.

```javascript
    {
  "workbench.iconTheme": "eq-material-theme-icons-palenight",
  "editor.fontFamily": "'Operator Mono Lig', 'Droid Sans Fallback', 'JetBrainsMono Nerd Font', monospace",
  "editor.fontSize": 16.5,
  "editor.wordWrap": "on",
  "editor.cursorBlinking": "expand",
  "window.restoreFullscreen": true,
  "window.zoomLevel": 0.3,
  "editor.cursorSmoothCaretAnimation": true,
  "editor.minimap.enabled": false,
  "workbench.productIconTheme": "icons-carbon",

  // Font Settings
  "editor.fontWeight": "normal",
  "editor.fontLigatures": true,
  "editor.tabCompletion": "on",
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "breadcrumbs.enabled": true,
  "explorer.openEditors.visible": 0,

  // Bracket Pair Colorizer and Prettier Settings
  "bracket-pair-colorizer-2.colors": ["#F72585", "#94b4a4", "#a3d8f4"],
  "prettier.singleQuote": true,
  "prettier.jsxSingleQuote": true,
  "prettier.trailingComma": "none",
  "prettier.arrowParens": "avoid",
  "prettier.proseWrap": "preserve",
  "prettier.quoteProps": "as-needed",
  "prettier.jsxBracketSameLine": false,
  "prettier.bracketSpacing": true,
  "prettier.tabWidth": 2,
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "workbench.sideBar.location": "right",

  // Import Cost Extension Settings
  // Upper size limit, in KB, that will count a package as a small package
  "importCost.smallPackageSize": 50,

  // Upper size limit, in KB, that will count a package as a medium package
  "importCost.mediumPackageSize": 100,

  // Decoration color for small packages
  "importCost.smallPackageColor": "#7cc36e",

  // Decoration color for medium packages
  "importCost.mediumPackageColor": "#7cc36e",

  // Decoration color for large packages
  "importCost.largePackageColor": "#d44e40",

  // File extensions to be parsed by the Typescript parser
  "importCost.typescriptExtensions": ["\\.tsx?$"],

  // File extensions to be parsed by the Javascript parser
  "importCost.javascriptExtensions": ["\\.jsx?$"],

  // Which bundle size to display
  "importCost.bundleSizeDecoration": "both",

  // Display the 'calculating' decoration
  "importCost.showCalculatingDecoration": true,

  // Print debug messages in output channel
  "importCost.debug": false,
  "workbench.colorTheme": "morgan.codes",
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "workbench.startupEditor": "newUntitledFile"
}

```