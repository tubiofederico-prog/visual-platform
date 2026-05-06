import OpenAI from 'openai'
import { familyData, houseRules } from '../data/mockData'

const apiKey = import.meta.env.VITE_OPENAI_API_KEY

if (!apiKey) {
  console.warn('⚠️ VITE_OPENAI_API_KEY no está configurada. Usa respuestas mockeadas.')
}

const client = apiKey ? new OpenAI({ apiKey, dangerouslyAllowBrowser: true }) : null

// Context sobre las reglas de la familia
const getFamilyContext = () => {
  const rulesText = Object.entries(houseRules)
    .map(([category, rules]) => {
      const rulesList = rules.map(r => `- ${r.rule}`).join('\n')
      return `${category}:\n${rulesList}`
    })
    .join('\n\n')

  return `Eres un asistente IA que ayuda a familias a mantener reglas y rutinas.

FAMILIA: ${familyData.familyName}
CASAS: ${familyData.houses.map(h => h.name).join(', ')}
NIÑOS: ${familyData.children.map(c => `${c.name} (${c.age} años)`).join(', ')}

REGLAS DE LA FAMILIA:
${rulesText}

Tu tarea es responder preguntas sobre estas reglas de manera clara, concisa y amigable.
Responde en ESPAÑOL.
Sé específico con los nombres de los niños si la pregunta lo requiere.
Siempre basa tus respuestas en las reglas establecidas.
Si hay excepciones o casos especiales, menciónalo.`
}

export async function chatWithAI(message, childName = null) {
  // Si no hay API key, usa respuestas mockeadas
  if (!client) {
    return getMockedResponse(message, childName)
  }

  try {
    const systemPrompt = getFamilyContext()
    const userMessage = childName ? `${message} (para ${childName})` : message

    const response = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 300,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: userMessage
        }
      ]
    })

    return {
      answer: response.content[0].text,
      rule: 'Según las reglas de la familia',
      alternative: 'Consulta con los padres si tienes dudas',
      source: 'openai'
    }
  } catch (error) {
    console.error('Error calling OpenAI:', error)
    // Fallback a respuesta mockeada
    return getMockedResponse(message, childName)
  }
}

function getMockedResponse(message, childName) {
  const mockResponses = {
    'youtube': '✓ Puede mirar YouTube 30 minutos después de terminar la tarea',
    'pantalla': '✓ Máximo 1 hora por día entre semana. No pantallas 1 hora antes de dormir',
    'comida': '✓ Puede comer fruta, yogur o galletitas. Chocolate solo después de comer',
    'merendar': '✓ Puede comer fruta, yogur o galletitas. Chocolate solo después de comer',
    'dormir': `✓ ${childName || 'Los niños'} deben dormir antes de las 20:30. Baño antes.`,
    'tarea': '✓ Tarea antes de jugar. Revisar la agenda cada día',
    'baño': '✓ Baño antes de dormir, aproximadamente 1 hora antes',
    'jugar': '✓ Juego solo después de terminar tareas',
    'patio': '✓ Puede salir al patio con permiso',
  }

  const lowerMessage = message.toLowerCase()
  for (const [key, response] of Object.entries(mockResponses)) {
    if (lowerMessage.includes(key)) {
      return {
        answer: response,
        rule: 'Según las reglas de la familia',
        alternative: 'Consulta con los padres si tienes dudas',
        source: 'mocked'
      }
    }
  }

  return {
    answer: '✓ Pregunta interesante. Según las reglas, esto está permitido. Consulta con los padres si necesitas más detalles.',
    rule: 'Regla general de la familia',
    alternative: 'Habla con los padres para aclaraciones',
    source: 'mocked'
  }
}
