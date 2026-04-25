import { SessionsClient } from '@google-cloud/dialogflow'

const privateKey = process.env.GOOGLE_PRIVATE_KEY
  ?.replace(/\\n/g, '\n')
  ?.replace(/^"|"$/g, '')

const client = new SessionsClient({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: privateKey,
  }
})

export async function POST(request) {
  const { message, sessionId } = await request.json()

  const sessionPath = client.projectAgentSessionPath(
    process.env.GOOGLE_PROJECT_ID,
    sessionId
  )

  const dialogflowRequest = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: 'pt-BR',
      },
    },
  }

  const [response] = await client.detectIntent(dialogflowRequest)
  const result = response.queryResult

  return Response.json({
    text: result.fulfillmentText,
  })
}