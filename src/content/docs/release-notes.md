---
title: Release Notes
description: A user-facing place to summarize WarHQ changes.
---

## WarHQ 3.5.0

This release is focused on PBEM Box for local/manual PBEM turn handling across Wargame Design Studio games.

### PBEM Box

- Dedicated PBEM Box view for local/manual PBEM turns across your installed WDS games.
- Scans WDS save folders for supported PBEM files, including `.bte` and `.cpf` turns.
- Groups related turn files into PBEM threads using filename matching, including compact campaign filenames.
- Shows game, file, scenario, turn number, modified date, opponent assignment, and detection confidence in one list.
- Opens the correct WDS executable from a PBEM row by double-clicking, pressing Enter, or using the context menu.
- Tracks game launch from PBEM Box and watches for a newly completed turn when you exit the game.
- Prompts to prepare a return email when WarHQ detects a completed outgoing turn.
- Opens file actions from PBEM Box, including open game, assign opponent, show file history, open folder, and copy path.

### Importing Turns

- Imports received turns from the PBEM Box **Import Turn** button.
- Supports drag-and-drop turn import in PBEM Box with a visible drop overlay for supported files.
- Monitors a folder you choose, such as Downloads, for new `.bte` and `.cpf` turn files.
- Waits for watched-folder files to finish writing before opening the PBEM Box import workflow.
- Detects the likely destination game from save-file contents and existing local PBEM files.
- Lets you edit the **Copy to** destination before importing.
- Checks for destination filename conflicts when you click **Import**.
- Asks whether to overwrite or go back and change the destination name if the target file already exists.
- Can open the game immediately after importing a received turn.
- Tracks imported mail attachments to reduce duplicate imports when the same turn is handled again.

### Opponents

- Manage PBEM opponents with names, email addresses, and filename aliases.
- Assign an opponent to a PBEM thread from PBEM Box.
- Detects the opponent during import using saved aliases and filename patterns.
- Lets you choose an existing opponent or create a new opponent during import.
- Captures the opponent's alias in the filename only when WarHQ needs it.
- Prefills **Send to** from a known opponent, saved match profile, or sender address when available.

### Email Draft Help

- Uses Windows `mailto:` handling instead of direct mail account integration.
- Opens a draft with the opponent address, subject, and message text filled in.
- Copies the completed turn file to the clipboard so you can paste it into the email draft.
- Opens File Explorer with the completed turn file selected so you can drag it into the draft.
- Shows status messages in the active WarHQ or PBEM Box window when it copies a file or opens Explorer.
- Warns if Windows does not have a default email app configured for `mailto:`.
- Adds PBEM preferences for the watch folder, Explorer helper, and clipboard helper.
