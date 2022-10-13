# Twilio Conversations Cleanup for Flex 2.0
 
During the development stage, if you forget to close tasks on Flex 2.0, some conversations are left on a "limbo", making some Whatsapp Phone Numbers unable to reach Flex.

This script takes care of that by closing every active conversation for a specific Whatsapp number. Use it during the development stage so you can keep testing it. In production the script is unlikely to be needed due to the task lifecycle being adopted in a regular way.

## Installation

1. Clone the repository
2. Copy the environment variable example into an usable file  `cp .env.example .env`
3. Run `npm install` or `yarn install`


## Usage

To clean up stuck conversations, run: 

```bash
npm start -- --address "<your Whatsapp number in E.164 format (e.g. +5511912345678)>"
```

If an active conversation is found you'll see a `closed` message in the console.