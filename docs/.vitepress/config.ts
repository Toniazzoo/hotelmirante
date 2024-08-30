import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'Introdução', link: '1_Introducao' },
      { text: 'Descrição do Projeto', link: '/2_Descricao_projeto' },
      { text: 'Principais Recursos', link: '/3_Principais_Recursos' },
      { text: 'Diagrama de Caso de Uso', link: '/4_Diagrama_Caso_de_Uso' },
      { text: 'Diagrama de Classe', link: '/5_Diagrama_de_Classe' },
      { text: 'Cronograma', link: '/6_Cronograma' },
      { text: 'Riscos', link: '/7_Riscos' },
      { text: 'Considerações Finais', link: '/8_Consideracoes' },
      { text: 'Protótipos de Tela', link: '/Prototipagens_de_Tela' },
    ],

    sidebar: [
      {
        items: [
          { text: 'Introdução', link: '1_Introducao' },
          { text: 'Descrição do Projeto', link: '/2_Descricao_projeto' },
          { text: 'Principais Recursos', link: '/3_Principais_Recursos' },
          { text: 'Diagrama de Caso de Uso', link: '/4_Diagrama_Caso_de_Uso' },
          { text: 'Diagrama de Classe', link: '/5_Diagrama_de_Classe' },
          { text: 'Cronograma', link: '/6_Cronograma' },
          { text: 'Riscos', link: '/7_Riscos' },
          { text: 'Considerações Finais', link: '/8_Consideracoes' },
          { text: 'Protótipos de Tela', link: '/Prototipagens_de_Tela' },
        ],
      },
    ],
  },
});
