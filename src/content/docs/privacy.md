---
title: Privacy Policy
description: How WarHQ handles local data, PBEM Box helper data, and WarMatch cloud data.
---

Last updated: May 18, 2026

WarHQ is a desktop utility for managing Wargame Design Studio game launches, local PBEM files, default mail app draft assistance, and optional WarMatch multiplayer features.

## Information Stored Locally

WarHQ stores local application data on your computer under your Windows user profile, including preferences, game library state, PBEM opponent/profile data, imported-turn history, and logs.

PBEM opponent/profile data can include opponent names, email addresses, filename aliases, match assignments, and information WarHQ uses to recognize related local PBEM files.

## PBEM Box and Email Drafts

PBEM Box is a local/manual PBEM workflow. It scans local WDS save folders for supported PBEM files, imports received `.bte` and `.cpf` files when you choose to import them, can monitor a local folder you choose for new received turns, and helps prepare outgoing email drafts through Windows.

Current PBEM Box email help uses Windows `mailto:` handling. WarHQ does not require direct access to your mail account for PBEM Box.

For PBEM Box email drafts, WarHQ can:

- Ask Windows to open your default email app.
- Fill in draft fields such as recipient, subject, and message text.
- Copy the completed turn file to the clipboard so you can paste it into the draft.
- Open File Explorer with the completed turn file selected so you can drag it into the draft.

WarHQ does not read your inbox for PBEM Box. WarHQ does not download email attachments from your mailbox. WarHQ does not attach files directly through a mail provider API. WarHQ does not send email automatically.

If you enable a PBEM watch folder, WarHQ monitors only the local folder path you selected for supported turn files. It does not monitor your email account.

Your default email app or email provider handles the draft after Windows opens it. Review the message and attachments before sending.

## Data Protection and Security

WarHQ uses technical and procedural safeguards to protect local and cloud data:

- Local WarHQ files are stored under your Windows user profile and are protected by your operating system's user account access controls.
- PBEM Box file detection, opponent matching, and import decisions are handled by the WarHQ app on your device.
- Network requests to WarMatch services use HTTPS/TLS.
- Support logs are intended for troubleshooting and should not include private message bodies or PBEM file contents. Do not send support any sensitive file or message content unless it is necessary for your support request.

## WarMatch Cloud Features

If you sign in to WarMatch, WarHQ sends the information needed to provide multiplayer features, such as account identity, match metadata, chat messages, LFG posts, and uploaded turn files. Uploaded turn files are used only to deliver WarMatch gameplay features to the intended players.

## Data Sharing

WarHQ does not sell personal information. WarHQ does not sell, rent, or transfer user data to advertising platforms, data brokers, information resellers, or other third parties.

PBEM Box does not share your mailbox data with WarHQ servers because PBEM Box does not connect to your mailbox. WarMatch cloud features share only the data needed to provide the WarMatch features you choose to use.

## Retention and Deletion

Local WarHQ data remains on your computer until you delete it or uninstall the app. You can change or clear PBEM Box opponents, aliases, and preferences inside WarHQ.

PBEM Box uses your Windows default email app and does not require revoking mail account access. To change which app opens PBEM Box drafts, change your Windows default email app.

## Contact

For privacy questions or data requests, contact the WarHQ maintainer through the project repository or support channel listed on the WarHQ homepage.
