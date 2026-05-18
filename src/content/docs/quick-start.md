---
title: Quick Start
description: First steps for installing WarHQ, opening your WDS library, and using PBEM Box.
---

WarHQ is a Windows companion app for Wargame Design Studio players. It discovers installed WDS titles, launches games from a single Library, and supports PBEM workflows through WarMatch or PBEM Box.

Use this page when you want the shortest reliable path from download to your first launched game or PBEM turn.

## Before you start

You need:

- Windows 10 or newer.
- At least one installed Wargame Design Studio title.
- An internet connection if you plan to use WarMatch.
- A default Windows email app if you plan to use PBEM Box to prepare outgoing mail drafts.

## Install WarHQ

1. Download the WarHQ: [Download WarHQ](https://github.com/makingwargames/warhq/releases/latest/download/WarHQ.exe).
2. Run the installer.
3. Open WarHQ from the Start menu or desktop shortcut.

Success looks like the WarHQ Library opening without an error dialog.

## Find your games

WarHQ discovers Wargame Design Studio games from your Windows registry. If a game is installed but missing from the Library, restart WarHQ after installing or updating the game.

![WarHQ Library showing discovered WDS games grouped by series.](../../assets/screenshots/warhq-library.png)

Success looks like your WDS series in the left sidebar and game rows in the main Library view.

## Open a game

1. Select a series in the sidebar.
2. Search or scroll to the title you want.
3. Use the launch button on the game row.

## Choose your PBEM path

| Goal | Use | Start here |
| --- | --- | --- |
| Manage local save files and email turns yourself | PBEM Box | [PBEM Box tutorial](../tutorials/pbem-box/) |
| Find opponents and exchange supported turns through the cloud | WarMatch | [WarMatch tutorial](../tutorials/warmatch/) |
| Just launch and play installed WDS games | Library | Stay on this page |

## First PBEM Box turn

PBEM Box does not require signing in to a mail account inside WarHQ. It works with local turn files and asks Windows to open your default email app when it prepares an outgoing draft.

1. Open **PBEM Box** from the Library toolbar.
2. Click **Import Turn**, or drag one received `.bte` or `.cpf` file onto PBEM Box.
3. Confirm the detected destination game and edit **Copy to** if the suggested filename is not what you want.
4. Choose an existing opponent or create a new opponent when WarHQ asks.
5. Click **Import**. If the target filename already exists, choose whether to overwrite it or go back and change the destination name.
6. Open the game from PBEM Box, play your turn, save, and exit the WDS game.
7. When WarHQ detects the completed turn, review the prepared email draft and attach the file by pasting from the clipboard or dragging it from the Explorer window WarHQ opened.

## First five-minute checklist

- WarHQ opens from the Start menu or desktop shortcut.
- Your installed WDS titles appear in the Library.
- At least one game launches from WarHQ.
- PBEM Box opens and shows your local PBEM files if you use manual PBEM.
- WarHQ can open a draft in your default email app if you use PBEM Box outgoing mail help.
- WarMatch opens and signs in if you use cloud PBEM.

## If something does not work

| Problem | First thing to try |
| --- | --- |
| A WDS title is missing | Open that game once from its normal shortcut, close it, then restart WarHQ. |
| WarMatch will not connect | Confirm your internet connection, then sign out and back in. |
| Email drafts open in the wrong app | Check the default email app in Windows settings. WarHQ uses Windows `mailto:` handling. |
| An email draft has no attachment | Paste the copied turn file into the draft or drag it from the Explorer window. `mailto:` cannot attach files automatically. |
| You are not sure what to send support | Include your WarHQ version, Windows version, WDS game title, and the exact step that failed. |

## Keep handy

- [Troubleshooting](../troubleshooting/)
- [Useful links](../useful-links/)
- [WarHQ Discord](https://discord.gg/rCpZwWJExb)
- [Email support](mailto:makingwargames@gmail.com)
