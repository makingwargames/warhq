---
title: Troubleshooting
description: Common fixes for WarHQ setup and PBEM workflows.
---

## A game is missing

Restart WarHQ after installing or updating a WDS title. If the game still does not appear, open the game once from its normal shortcut so Windows and the game installer finish writing their settings.

## A turn imported to the wrong place

Open PBEM Box and check the file history for the match. If needed, import the file again and choose the intended destination game. You can edit **Copy to** before clicking **Import**.

## WarHQ says the destination file already exists

Choose **Overwrite** only if you are sure the existing file should be replaced. Choose the option to go back if you want to change the destination filename first.

## Drag and drop does not start an import

Use PBEM Box for the clearest drop feedback. Drag one supported file at a time. WarHQ accepts `.bte` and `.cpf` PBEM files.

If the green drop overlay does not appear in PBEM Box, confirm that the file extension is supported and that you are not dragging a folder or multiple files.

## The opponent is not detected

Open **Opponents** in PBEM Box and confirm the opponent has the right email address and filename aliases. If the name in the save filename is shortened, add that shortened value as an alias.

You can also assign the opponent during import. Choose an existing opponent or choose **New** when WarHQ asks.

## Email drafts open in the wrong app

WarHQ asks Windows to open your default mail handler. Check Windows default apps and make sure your preferred mail client is assigned for email links.

## No email app opens

WarHQ uses Windows `mailto:` handling for PBEM Box email drafts. If no app opens, set a default email app in Windows settings and try again.

## The draft opens without an attachment

This is expected for PBEM Box. Windows `mailto:` links can fill in recipient, subject, and message text, but they cannot attach files reliably.

WarHQ helps by copying the completed turn file to the clipboard and opening File Explorer with the file selected. Paste the file into the draft or drag it from Explorer into your email app.

## The file was not copied or Explorer did not open

Check **Preferences > PBEM**. The clipboard helper and Explorer helper can be disabled there.

WarHQ also shows status in the active WarHQ or PBEM Box window when these helpers run.

## WarHQ does not prompt after I finish a turn

Launch the game from PBEM Box when you want automatic completed-turn detection. WarHQ watches for updated turn files after the WDS game exits.

If you opened the game outside WarHQ, return to PBEM Box and refresh the list. You can still prepare or send the turn manually from your email app.

## WarMatch cannot connect

Check your internet connection, sign out and back in, then try again. If the service is temporarily unavailable, local launching and PBEM Box workflows can still be used.

## Reporting an issue

Email [makingwargames@gmail.com](mailto:makingwargames@gmail.com) or post in the [WarHQ Discord](https://discord.gg/rCpZwWJExb). Include the WarHQ version, Windows version, the WDS game title involved, and the exact steps that led to the problem.
