import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'Example', link: '/example' },
      

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        items: [
          { text: 'Example', link: '/example' },
          { text: 'Introdução', link: '1_Introducao' },
          { text: 'Descrição do Projeto', link: '/2_Descricao_projeto' },
          { text: 'Principais Recursos', link: '/3_Principais_Recursos' },
          { text: 'Diagrama de Caso de Uso', link: '/4_Diagrama_Caso_de_Uso' },
          { text: 'Diagrama de Classe', link: '/5_Diagrama_de_Classe' },
          { text: 'Cronograma', link: '/6_Cronograma' },
          { text: 'Riscos', link: '/7_Riscos' },
          { text: 'Considerações Finais', link: '/8_Consideracoes' },
          
        ],
      },
    ],
  },
});
