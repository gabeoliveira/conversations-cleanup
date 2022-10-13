require('dotenv').config();
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN} = process.env;
const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
const args = require('minimist')(process.argv.slice(2));



const conversationCleanup = async (address) => {
    const participantConversations = await client.conversations.v1.participantConversations
        .list({address: `whatsapp:+${address}`, limit: 1500})
        .catch(err => console.error(err));
    
    participantConversations
        .filter(conversation => conversation.conversationState === 'active')
        .forEach(activeConversation => {
            client.conversations.v1.conversations(activeConversation.conversationSid)
                .update({state: 'closed'})
                .then(conversation => console.log(conversation.state))
                .catch(err => console.error(err));
        })

    

}
console.log(args.address);
conversationCleanup(args.address.toString());


