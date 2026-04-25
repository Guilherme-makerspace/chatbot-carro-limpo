export async function POST(request) {
  const body = await request.json()

  const intent = body.queryResult.intent.displayName
  const params = body.queryResult.parameters

  if (intent === 'agendar.servico') {
    return await handleAgendar(params)
  }

  if (intent === 'consultar.agendamento') {
    return await handleConsultar(params)
  }

  return Response.json({ fulfillmentText: 'Não entendi sua solicitação.' })
}

async function handleAgendar(params) {
  const { placa, nome, horario, servico } = params

  return Response.json({
    fulfillmentText:
      `✅ Agendamento confirmado!\n` +
      `🚗 Placa: ${placa}\n` +
      `👤 Nome: ${nome}\n` +
      `🕐 Horário: ${horario}\n` +
      `🧼 Serviço: ${servico}`
  })
}

async function handleConsultar(params) {
  const { placa } = params

  const agendamentoFake = {
    'ABC1234': { horario: '14h00', servico: 'Completo' },
    'XYZ5678': { horario: '10h30', servico: 'Premium' },
  }

  const agendamento = agendamentoFake[placa.toUpperCase()]

  if (agendamento) {
    return Response.json({
      fulfillmentText:
        `📋 Encontrei seu agendamento!\n` +
        `🚗 Placa: ${placa}\n` +
        `🕐 Horário: ${agendamento.horario}\n` +
        `🧼 Serviço: ${agendamento.servico}`
    })
  }

  return Response.json({
    fulfillmentText: `❌ Não encontrei agendamento para a placa ${placa}.`
  })
}