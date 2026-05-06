# 🤖 Configuración de OpenAI para Family Guide AI

## Paso 1: Obtener tu API Key de OpenAI

1. Ve a [platform.openai.com](https://platform.openai.com)
2. Inicia sesión o crea una cuenta
3. Ve a **API Keys** en el menú lateral
4. Haz clic en **Create new secret key**
5. Copia la key (no podrás verla nuevamente)

## Paso 2: Configurar la Variable de Entorno

### Opción A: En desarrollo local

1. En la raíz del proyecto, crea un archivo `.env.local`:

```bash
VITE_OPENAI_API_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxx
```

2. Reemplaza `sk_test_xxxxxxxxxxxxxxxxxxxxx` con tu API key real

3. Reinicia el servidor de desarrollo:
```bash
npm run dev
```

### Opción B: En Vercel (Producción)

1. Ve a tu proyecto en [vercel.com](https://vercel.com)
2. Abre **Settings** → **Environment Variables**
3. Agrega una nueva variable:
   - **Name**: `VITE_OPENAI_API_KEY`
   - **Value**: Tu API key de OpenAI
4. Redeploy el proyecto

## Paso 3: Verificar que Funciona

1. Abre la app en http://localhost:5173
2. Ve a la sección **Chat**
3. Haz una pregunta como "¿Puede mirar YouTube?"
4. Deberías ver un badge que dice "🤖 IA Real" si está usando OpenAI
5. Si ves "💾 Sistema", significa que no está configurada la API key

## 🔒 Seguridad

- **NUNCA** commits tu API key al repositorio
- El archivo `.env` está en `.gitignore`
- La key se usa desde el navegador, por lo que es visible en el network
- Considera usar un backend proxy en producción para mayor seguridad

## 💰 Costos

- Las primeras $5 USD son gratis (créditos de prueba)
- Después, pagas por uso (muy barato, ~$0.002 por pregunta)
- Monitorea tu uso en [platform.openai.com/account/billing](https://platform.openai.com/account/billing)

## 🐛 Troubleshooting

### Error: "Invalid API key"
- Verifica que copiaste la key correctamente
- Genera una nueva key en OpenAI

### Error: "Rate limit exceeded"
- Esperaste demasiado tiempo. Reintenta en unos segundos
- Puedes revisar tu límite en OpenAI

### Las respuestas son lentas
- OpenAI puede tardar 1-2 segundos
- Esto es normal

### Sigue usando "Sistema" en lugar de "IA Real"
- El archivo `.env` no está siendo leído
- Reinicia el servidor `npm run dev`
- Verifica que el archivo se llama `.env.local` (no `.env`)

## 📝 Cambiar el Modelo

En `src/services/openaiService.js`, línea ~40:
```javascript
model: 'claude-3-5-sonnet-20241022'
```

Puedes cambiar a:
- `gpt-4o` - Más potente y caro
- `gpt-4-turbo` - Buena relación precio/rendimiento
- `gpt-3.5-turbo` - Más rápido y barato

## ✅ Todo configurado!

Ahora tu app está usando OpenAI real. Las respuestas serán contextuales y mucho más precisas.
