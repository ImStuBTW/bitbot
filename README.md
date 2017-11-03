# BitBot - A BitBucket Push Bot for Discord and Slack

BitBot is a small Node script for sending commit messages from BitBucket pushes to the Discord or Slack room of your choice. BitBot takes advantage of BitBucket's outgoing webhooks, and Discord/Slack's incoming webhooks. You'll need your own server running NodeJS in order to receive and pass on the messages.

# Configure Discord Webhooks

Navigate to the channel of the Discord server you would like BitBot to post messages in. Click the gear icon next to the channel name. (Note: You will need admin privileges on the server to configure webhooks and use BitBot.) In the channel settings window, click 'Webhooks' on the left hand side of the screen. Click 'Create Webhook'. Enter a bot name, confirm the channel, and optionally upload an icon. Copy the Webhook URL, and click save.

# Configure Slack Webhooks

Navigate to the channel of the Slack server you would like BitBot to post messages in. Click the gear icon on the top of the page. Select 'Add an app' from the dropdown menu. Your Slack channel's app manager will appear in a new browser window. (Note: You will need admin privileges on the server to configure webhooks and use BitBot.) Click 'Manage' in the top right of the browser window. Select 'Custom Integrations' from the left side of the page. Choose 'Incoming Webhooks', and then 'Add Configuration'. Slack will ask you which channel you would like the bot to post into. Click 'Add Incoming Webhook Integration'. On the next page, you can configure your bot further. Copy the Webhook URL.

# Configure BitBot

Clone this repository to an empty public folder or subdomain on a server running Node. Edit the config.js file. Set the name to whatever you would like BitBot's display name in the chat to be. Choose a port, and paste in at least one Webhook URL from the previous steps. BitBot can post to both Discord and Slack, or just one of these services. If you are not using a service, just leave the single quotes blank.

# Build and Run BitBot

Run an `npm init` command to download the required npm packages. Run `npm start` to begin running BitBot.

# Configure BitBucket

Finally, browse to your BitBucket repository. Click the 'Settings' option and choose 'Webhooks' from the settings menu. Click 'Add webhook'. Give your webhook a title, and paste in the server URL where you installed BitBot. Make sure 'Active' is checked. Check the 'Skip certificate verification' checkbox if your server is not running SSL. Make sure 'Triggers' is set to 'Repository push'.

Congratulations, BitBot should now be up and running.
