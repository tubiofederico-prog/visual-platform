export const familyData = {
  familyName: "Familia García",
  activeHouse: "Casa principal",
  parents: [
    { id: 1, name: "María García", email: "maria@example.com", role: "Mamá" },
    { id: 2, name: "Juan García", email: "juan@example.com", role: "Papá" }
  ],
  children: [
    {
      id: 1,
      name: "Sofía García",
      age: 8,
      grade: "3er grado",
      school: "Colegio San Miguel",
      interests: ["Dibujo", "Lectura", "Fútbol"],
      specialPermissions: ["Puede salir sola al patio"],
      toReinforce: ["Organización", "Paciencia"],
      educationalPriorities: ["Lectura", "Matemática", "Escritura"]
    },
    {
      id: 2,
      name: "Lucas García",
      age: 11,
      grade: "5to grado",
      school: "Colegio San Miguel",
      interests: ["Videojuegos", "Programación", "Fútbol"],
      specialPermissions: ["Puede estar hasta las 21:00"],
      toReinforce: ["Responsabilidad", "Emociones"],
      educationalPriorities: ["Matemática", "Inglés", "Organización"]
    }
  ],
  caregivers: [
    { id: 1, name: "Abuela Rosa", type: "Abuela", status: "Activa" },
    { id: 2, name: "Niñera Carla", type: "Niñera", status: "Activa" }
  ],
  houses: [
    { id: 1, name: "Casa principal", type: "Casa familiar" },
    { id: 2, name: "Casa de mamá", type: "Departamento" },
    { id: 3, name: "Casa de abuelos", type: "Casa" }
  ]
}

export const houseRules = {
  "Comida": [
    { id: 1, rule: "Chocolate solo después de comer", priority: "Alta" },
    { id: 2, rule: "Agua antes de dormir", priority: "Media" },
    { id: 3, rule: "Verduras en la comida principal", priority: "Alta" }
  ],
  "Pantallas": [
    { id: 1, rule: "No pantallas antes de la tarea", priority: "Alta" },
    { id: 2, rule: "Máximo 1 hora por día entre semana", priority: "Alta" },
    { id: 3, rule: "No pantallas 1 hora antes de dormir", priority: "Alta" }
  ],
  "Sueño": [
    { id: 1, rule: "Dormir antes de las 20:30 (Sofía)", priority: "Alta" },
    { id: 2, rule: "Dormir antes de las 21:30 (Lucas)", priority: "Alta" },
    { id: 3, rule: "Baño antes de dormir", priority: "Media" }
  ],
  "Juego": [
    { id: 1, rule: "Juego solo después de terminar tareas", priority: "Alta" },
    { id: 2, rule: "Pedir permiso para salir al patio", priority: "Media" }
  ],
  "Seguridad": [
    { id: 1, rule: "Avisar dónde va y con quién", priority: "Alta" },
    { id: 2, rule: "Teléfono siempre cargado", priority: "Alta" }
  ],
  "Colegio": [
    { id: 1, rule: "Tarea antes de jugar", priority: "Alta" },
    { id: 2, rule: "Revisar la agenda diaria", priority: "Media" }
  ],
  "Emociones": [
    { id: 1, rule: "Hablar sobre los sentimientos", priority: "Media" },
    { id: 2, rule: "Respetar los tiempos de cada uno", priority: "Media" }
  ],
  "Valores": [
    { id: 1, rule: "Honestidad en todo", priority: "Alta" },
    { id: 2, rule: "Respeto por los mayores", priority: "Alta" },
    { id: 3, rule: "Ayudar en casa", priority: "Media" }
  ]
}

export const dailyRoutine = [
  { time: "07:00", activity: "Desayuno", completed: true },
  { time: "08:00", activity: "Colegio", completed: true },
  { time: "13:00", activity: "Almuerzo", completed: true },
  { time: "14:00", activity: "Merienda", completed: true },
  { time: "15:00", activity: "Tarea", completed: false },
  { time: "17:00", activity: "Juego", completed: false },
  { time: "18:30", activity: "Baño", completed: false },
  { time: "19:30", activity: "Cena", completed: false },
  { time: "20:30", activity: "Dormir", completed: false }
]

export const alerts = [
  { id: 1, type: "Seguridad", priority: "Alta", message: "Lucas no ha respondido desde hace 2 horas", read: false },
  { id: 2, type: "Rutina", priority: "Media", message: "Sofía no completó la tarea", read: false },
  { id: 3, type: "Colegio", priority: "Media", message: "Prueba de matemática el próximo martes", read: true },
  { id: 4, type: "Alimentación", priority: "Baja", message: "Sofía no comió verduras", read: true }
]

export const chatExamples = [
  {
    question: "¿Puede mirar YouTube?",
    answer: "Solo 30 minutos después de terminar la tarea",
    rule: "No pantallas antes de la tarea",
    alternative: "Puede leer un libro o jugar al aire libre"
  },
  {
    question: "¿Qué puede merendar?",
    answer: "Frutas, yogur o galletitas. Chocolate solo después de comer",
    rule: "Chocolate solo después de comer",
    alternative: "Puede pedir un batido de frutas"
  },
  {
    question: "¿Tiene tarea?",
    answer: "Sí, matemática y lectura para mañana",
    rule: "Tarea antes de jugar",
    alternative: "Puede estudiar con música de fondo"
  },
  {
    question: "¿A qué hora se baña?",
    answer: "A las 18:30, una hora antes de dormir",
    rule: "Baño antes de dormir",
    alternative: "Si se apura, puede bañarse 15 minutos antes"
  }
]

export const dailySummary = {
  date: "Hoy",
  questionsAsked: 5,
  rulesConsulted: 3,
  alerts: 1,
  observations: [
    "Sofía pidió pantalla 2 veces",
    "Lucas consultó sobre tarea de matemática",
    "Se completaron las tareas escolares"
  ],
  suggestions: [
    "Reforzar la rutina de sueño",
    "Aumentar tiempo de juego al aire libre"
  ]
}
