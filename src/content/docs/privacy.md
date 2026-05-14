---
title: Privacy Policy
description: How WarHQ handles local data, mail access, and WarMatch cloud data.
---

Last updated: May 14, 2026

WarHQ is a desktop utility for managing Wargame Design Studio game launches, local PBEM files, and optional WarMatch multiplayer features.

## Information Stored Locally

WarHQ stores local application data on your computer under your Windows user profile, including preferences, game library state, PBEM opponent/profile data, mail OAuth tokens, and logs. OAuth tokens are protected with Windows user-level encryption where supported.

## Gmail and Microsoft Mail Access

If you enable mail integration, WarHQ uses OAuth to connect to the mail provider you configure.

For Gmail, WarHQ requests:

- `https://www.googleapis.com/auth/gmail.readonly`
- `https://www.googleapis.com/auth/gmail.compose`

WarHQ uses Gmail access only to:

- Search recent inbox messages for `.bte` and `.cpf` PBEM turn attachments.
- Download selected PBEM turn attachments to a local staging folder before import.
- Create Gmail drafts with a PBEM turn file attached.

WarHQ does not send Gmail messages automatically. WarHQ does not delete, archive, label, modify, or mark Gmail messages as read. WarHQ does not use Gmail data for advertising, analytics, profiling, or model training.

For Microsoft mail, WarHQ uses Microsoft Graph delegated OAuth permissions to perform the same PBEM attachment scan and draft creation workflow for Microsoft 365 or Outlook.com mailboxes.

## WarMatch Cloud Features

If you sign in to WarMatch, WarHQ sends the information needed to provide multiplayer features, such as account identity, match metadata, chat messages, LFG posts, and uploaded turn files. Uploaded turn files are used only to deliver WarMatch gameplay features to the intended players.

## Data Sharing

WarHQ does not sell personal information. WarHQ does not share Gmail or Microsoft mail data with third parties except as necessary to provide the user-requested mail integration through Google or Microsoft APIs.

## Retention and Deletion

Local WarHQ data remains on your computer until you delete it or uninstall the app. You can revoke WarHQ's Google access from your Google Account security settings and Microsoft access from your Microsoft account consent settings.

## Contact

For privacy questions or data requests, contact the WarHQ maintainer through the project repository or support channel listed on the WarHQ homepage.
