# BitBot

A BitBucket Push Bot for Discord

## Introduction

BitBot is a small Node script for sending commit messages from BitBucket pushes to the Discord room of your choice with minimal configuration. It is deployable on Google App Engine as a Node app.

## Features

BitBot will display a message for:

- Code pushed to a branch.
- Pull request created.
- Pull request merged.

## Non-features

There is no need for BitBot to:

- Analyse branches.

Branch deletion is 1-to-1 with pull request merges. Branch creation is not supported by a webhook. The Discord bot to integrate this should be provided by Jira functionality instead, if possible.

## Configuration Instructions

1. Configure Discord Webhooks.
    1. Navigate to a Discord channel's settings.
    2. Navigate to "Webhooks".
    3. Create a webhook.
    4. Copy the Webhook URL and save.
2. Deploy BitBot somewhere.
3. Configure BitBucket.
    1. Navigate to the BitBucket repository's settings.
    2. Navigate to "Webhooks."
    3. Add a webhook using the URL of the BitBot deployment _plus_ the second part of the Discord webhook URL (everything after the TLD).
    4. Add triggers (e.g.: Repository push) and save.

## Build Instructions

Locally, run:

```shell
npm init
npm start
```

For GCP deployment, you should run:

```shell
gcloud init
gcloud app deploy
```
