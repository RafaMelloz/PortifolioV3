export const Projects = [
    {
        id: 1,
        nameProject:'Catalogo Digital',
        linkWebSite:'https://catalogo-digital.vercel.app',
        linkGitHub:'https://github.com/RafaMelloz/catalogoDigital',
        description:`Projeto full-stack com React e Node para uma loja virtual/catálogo. Permite visualizar produtos detalhadamente, ajustar quantidades no carrinho e baixar o resumo do pedido em Excel`,
        technologies: [
            { name: 'React' },
            { name: 'Axios' },
            { name: 'TailWind'},
            { name: 'Node' },
            { name: 'Fastify' },
            { name: 'Prisma' },
        ]
    },
    {
        id: 2,
        nameProject: 'Calendário Gamer',
        linkWebSite: 'https://game-calendarf.vercel.app',
        linkGitHub: 'https://github.com/RafaMelloz/gameCalendar',
        description: `Projeto front-end desenvolvido em React que consome a API do RAWG. Exibe jogos lançados no dia atual e ao longo do mês pegando a data dinamicamente.`,
        technologies: [
            { name: 'React' },
            { name: 'Axios' },
        ]
    },
    {
        id: 3,
        nameProject: 'GitSearch',
        linkWebSite: 'https://rafa-git-search.vercel.app',
        linkGitHub: 'https://github.com/RafaMelloz/gitSearch',
        description: `Localizador de perfis no GitHub usando a API do próprio GitHub. Permite encontrar perfis e visualizar informações detalhadas diretamente da API do GitHub`,
        technologies: [
            { name: 'React' },
        ]
    },
]