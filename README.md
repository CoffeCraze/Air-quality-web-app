@ -1,100 +0,0 @@
# Air-quality-web-app
## 🌟 **Funcionalidades Principais**

### **Interface Intuitiva**

- Design limpo e moderno com gradiente suave
- Layout responsivo que se adapta a diferentes tamanhos de tela
- Componentes bem organizados e fáceis de usar


### **Configuração da API**

- Campo seguro para inserir a chave da API (tipo password)
- Botão para mostrar/ocultar a configuração
- Link direto para obter a chave gratuita no API-Ninjas


### **Busca de Dados**

- Campo de busca com placeholder explicativo
- Botão com ícone de busca e estado de carregamento
- Validação de entrada antes de fazer a requisição


## 📊 **Visualização dos Dados**

### **Índice Geral de Qualidade do Ar**

- Exibição destacada do AQI geral
- Indicadores visuais com cores padronizadas:

- 🟢 Verde: Bom (0-50)
- 🟡 Amarelo: Moderado (51-100)
- 🟠 Laranja: Insalubre para Sensíveis (101-150)
- 🔴 Vermelho: Insalubre (151-200)
- 🟣 Roxo: Muito Insalubre (201-300)
- 🟤 Marrom: Perigoso (301+)





### **Detalhes dos Poluentes**

Cards individuais para cada poluente principal:

- **PM2.5**: Partículas finas
- **PM10**: Partículas inaláveis
- **O3**: Ozônio troposférico
- **NO2**: Dióxido de nitrogênio
- **SO2**: Dióxido de enxofre
- **CO**: Monóxido de carbono


Cada card mostra:

- Concentração em μg/m³
- Índice AQI específico
- Nível de qualidade com cores
- Descrição educativa do poluente


## 🛡️ **Gerenciamento de Estados**

### **Estados de Carregamento**

- Indicador visual durante a busca
- Botão desabilitado durante o carregamento
- Spinner animado


### **Tratamento de Erros**

- Mensagens específicas para diferentes tipos de erro
- Validação de chave API inválida
- Tratamento de cidade não encontrada
- Alertas visuais com ícones


## 📱 **Responsividade**

- Grid adaptativo para os cards de poluentes
- Layout que funciona em desktop, tablet e mobile
- Componentes que se ajustam automaticamente


## 🎯 **Experiência do Usuário**

### **Instruções Claras**

- Guia passo-a-passo para novos usuários
- Explicações educativas sobre cada poluente
- Descrições dos níveis de qualidade do ar


### **Feedback Visual**

- Cores intuitivas para diferentes níveis de poluição
- Descrições em linguagem simples
- Recomendações baseadas no nível de qualidade