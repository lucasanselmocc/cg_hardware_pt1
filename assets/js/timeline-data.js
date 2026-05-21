window.DISPLAY_PRIMER = [
  {
    "title": "CRT não significa automaticamente raster",
    "body": "CRT é o dispositivo físico: um feixe de elétrons excita fósforo na tela. Esse feixe pode ser controlado por varredura raster, como em televisão, ou por desenho vetorial/random-scan, como em muitos displays gráficos iniciais."
  },
  {
    "title": "Raster-scan",
    "body": "No raster-scan, o feixe percorre linhas regularmente, da esquerda para a direita e de cima para baixo. A imagem é reconstruída continuamente a partir de amostras/pixels. É o modelo natural de TV, vídeo e framebuffers."
  },
  {
    "title": "Vector/random-scan",
    "body": "No vector display, o feixe é comandado para desenhar segmentos diretamente entre coordenadas. Ele é excelente para linhas nítidas, wireframes, radar e CAD inicial, mas sofre quando a cena tem muitas linhas ou preenchimentos densos."
  },
  {
    "title": "Framebuffer/bitmapped display",
    "body": "O framebuffer muda o papel do raster: a tela deixa de ser apenas varredura física e passa a ser uma matriz de memória endereçável. Isso abre caminho para pintura digital, GUI, imagens densas e o pipeline moderno de rasterização."
  }
];

window.TIMELINE_DATA = [
  {
    "id": "1950s",
    "decade": "1950s",
    "arc": "CRT → visualização em tempo real",
    "headline": "A computação deixa de ser invisível",
    "thesis": "A tela CRT entra no sistema computacional como superfície de resposta imediata.",
    "bottleneck": "O gargalo era mostrar dados computados rápido o bastante para que humanos pudessem agir.",
    "main": [
      {
        "id": "whirlwind",
        "year": "1951",
        "title": "MIT Whirlwind",
        "role": "Computador digital de tempo real com saída visual em CRT.",
        "problem": "Mostrar resultados computados quase imediatamente, em vez de esperar relatórios impressos ou processamento em lote.",
        "replaces": "Saída impressa, cartões perfurados, instrumentos analógicos e computação sem feedback visual imediato.",
        "impact": "A tela passa a ser uma superfície dinâmica alimentada pelo computador.",
        "central": "Primeiro elo: o computador começa a desenhar informação em uma superfície eletrônica.",
        "video": {
          "kind": "local",
          "src": "assets/video/1950s/whirlwind.mp4",
          "title": "MIT Whirlwind — CRT e tempo real"
        },
        "accent": "gold"
      },
      {
        "id": "sage",
        "year": "1955–1958",
        "title": "SAGE",
        "role": "Sistema de defesa aérea com consoles CRT, visualização vetorial e light gun/light pen.",
        "problem": "Transformar dados de radar em interface operacional para identificação e seleção de alvos.",
        "replaces": "Interpretação manual fragmentada de radar e fluxos separados entre ver, decidir e comandar.",
        "impact": "A tela vira console de decisão; saída visual e entrada por apontamento passam a compor o mesmo ciclo.",
        "central": "Segundo elo: a imagem deixa de ser passiva e se torna manipulável.",
        "video": {
          "kind": "local",
          "src": "assets/video/1950s/sage.mp4",
          "title": "SAGE — display vetorial e apontamento"
        },
        "accent": "gold"
      }
    ],
    "secondary": [
      {
        "id": "tx0",
        "year": "1956",
        "title": "TX-0",
        "role": "Máquina experimental associada à cultura de computação interativa do MIT.",
        "problem": "Tornar a experimentação computacional mais direta.",
        "replaces": "Uso distante de grandes computadores institucionais.",
        "impact": "Ajuda a formar a cultura técnica de interação com computadores por display.",
        "central": "Explica o ambiente em que a computação gráfica interativa se tornaria plausível.",
        "link": {
          "url": "https://www.computerhistory.org/timeline/computers/",
          "title": "Computer History Museum — timeline"
        }
      },
      {
        "id": "dac1",
        "year": "1959–1964",
        "title": "DAC-1",
        "role": "Projeto GM/IBM de design assistido por computador.",
        "problem": "Reduzir redesenho manual no design industrial.",
        "replaces": "Pranchetas, desenho técnico físico e revisão manual.",
        "impact": "Antecipa CAD industrial e visualização técnica aplicada à economia real.",
        "central": "Mostra que gráficos computacionais emergem também de engenharia e produção.",
        "link": {
          "url": "https://www.computerhistory.org/revolution/computer-graphics-music-and-art/15/215",
          "title": "Computer History Museum — DAC-1"
        }
      }
    ]
  },
  {
    "id": "1960s",
    "decade": "1960s",
    "arc": "Interação direta → desenho computacional",
    "headline": "A tela vira uma superfície de trabalho",
    "thesis": "A computação gráfica passa a permitir criação, seleção e manipulação direta de objetos.",
    "bottleneck": "O gargalo era criar geometria sem traduzir cada ação para cartões, texto ou comandos indiretos.",
    "main": [
      {
        "id": "sketchpad",
        "year": "1963",
        "title": "Sketchpad",
        "role": "Sistema de desenho interativo de Ivan Sutherland com light pen e constraints.",
        "problem": "Permitir desenho e edição de formas diretamente no display.",
        "replaces": "Desenho técnico manual e comunicação indireta com o computador.",
        "impact": "Define manipulação direta, objetos gráficos e restrições geométricas.",
        "central": "A imagem vira o meio pelo qual usuário e máquina conversam.",
        "video": {
          "kind": "local",
          "src": "assets/video/1960s/sketchpad.mp4",
          "title": "Sketchpad — desenho direto e constraints"
        },
        "accent": "gold"
      }
    ],
    "secondary": [
      {
        "id": "ibm2250",
        "year": "1964",
        "title": "IBM 2250",
        "role": "Terminal gráfico vetorial comercial.",
        "problem": "Levar visualização gráfica interativa a ambientes técnicos e comerciais.",
        "replaces": "Terminais alfanuméricos e saída impressa.",
        "impact": "Mantém display vetorial como rota profissional importante.",
        "central": "Mostra que vector displays continuaram úteis antes da hegemonia raster.",
        "link": {
          "url": "https://www.computerhistory.org/revolution/input-output/14/346/1875",
          "title": "Computer History Museum — IBM 2250"
        }
      },
      {
        "id": "mouse",
        "year": "1963–1968",
        "title": "Mouse de Engelbart",
        "role": "Dispositivo de apontamento fora da tela.",
        "problem": "Apontar e navegar de modo mais ergonômico que tocar o CRT com caneta ótica.",
        "replaces": "Dependência exclusiva de light pen, teclado ou joysticks.",
        "impact": "Prepara a interação gráfica com cursor em GUIs raster.",
        "central": "A interação direta se separa fisicamente da tela, mas mantém manipulação visual.",
        "link": {
          "url": "https://www.billbuxton.com/inputTimeline.html",
          "title": "Bill Buxton — input devices timeline"
        }
      },
      {
        "id": "bresenham",
        "year": "1965",
        "title": "Algoritmo de Bresenham",
        "role": "Método eficiente para desenhar linhas em dispositivos discretos.",
        "problem": "Converter linhas contínuas em pixels discretos sem custo excessivo.",
        "replaces": "Métodos mais custosos de rasterização de linhas.",
        "impact": "Cria ponte algorítmica entre geometria vetorial e telas raster.",
        "central": "Antecipação técnica: desenhar passa a significar escolher pixels.",
        "link": {
          "url": "https://dl.acm.org/doi/10.1145/365230.365249",
          "title": "ACM — Bresenham 1965"
        }
      },
      {
        "id": "evans-sutherland",
        "year": "1968",
        "title": "Evans & Sutherland",
        "role": "Empresa de hardware gráfico especializado.",
        "problem": "Atender simulação e visualização técnica com hardware gráfico dedicado.",
        "replaces": "Soluções acadêmicas improvisadas e displays comerciais limitados.",
        "impact": "Fortalece a linhagem de workstations e displays gráficos dedicados.",
        "central": "A computação gráfica começa a virar indústria especializada.",
        "link": {
          "url": "https://s3data.computerhistory.org/brochures/evanssutherland.3d.1974.102646288.pdf",
          "title": "Evans & Sutherland brochure"
        }
      }
    ]
  },
  {
    "id": "1970s",
    "decade": "1970s",
    "arc": "Framebuffer → imagem como memória",
    "headline": "Raster deixa de ser só varredura e vira representação",
    "thesis": "O ponto decisivo não é que raster tenha sido inventado nos anos 1970; é que framebuffers e bitmapped displays tornam pixels endereçáveis e manipuláveis.",
    "bottleneck": "O gargalo era representar imagens densas, áreas preenchidas, texto rico e interfaces sem depender de listas de linhas a redesenhar.",
    "main": [
      {
        "id": "superpaint",
        "year": "1973",
        "title": "SuperPaint",
        "role": "Sistema de pintura digital baseado em framebuffer no Xerox PARC.",
        "problem": "Editar imagens raster coloridas e integrar pintura digital com vídeo.",
        "replaces": "Fluxos puramente analógicos e displays vetoriais inadequados para imagens densas.",
        "impact": "Mostra o framebuffer como meio de criação, composição e armazenamento de imagem.",
        "central": "Terceiro elo: a imagem passa a ser memória endereçável por pixel.",
        "video": {
          "kind": "local",
          "src": "assets/video/1970s/superpaint.mp4",
          "title": "SuperPaint — framebuffer e pintura digital"
        },
        "accent": "gold"
      },
      {
        "id": "alto",
        "year": "1973",
        "title": "Xerox Alto",
        "role": "Computador experimental com bitmapped display e interface gráfica.",
        "problem": "Construir uma experiência pessoal baseada em janelas, texto gráfico e manipulação visual.",
        "replaces": "Terminal de texto como interface dominante.",
        "impact": "Normaliza o display bitmap como base de GUI e computação pessoal gráfica.",
        "central": "Leva framebuffer/raster para o modelo de interface que dominaria os computadores pessoais.",
        "video": {
          "kind": "local",
          "src": "assets/video/1970s/alto.mp4",
          "title": "Xerox Alto — bitmapped display e GUI"
        },
        "accent": "gold"
      }
    ],
    "secondary": [
      {
        "id": "bell-raster",
        "year": "fim dos 1960s–1970s",
        "title": "Raster scanned display em pesquisa",
        "role": "Uso de varredura raster em laboratórios como Bell Labs.",
        "problem": "Exibir imagens e experimentos visuais que não se encaixavam bem no modelo vetorial.",
        "replaces": "Exclusividade de displays vetoriais para gráficos computacionais.",
        "impact": "Ajuda a consolidar raster como caminho técnico para imagens densas.",
        "central": "Esclarece que a mudança foi gradual e coexistiu com vector displays.",
        "link": {
          "url": "https://ethw.org/First-Hand:Raster_Scanned_Display",
          "title": "A. Michael Noll — Raster Scanned Display"
        }
      },
      {
        "id": "picture-system",
        "year": "1974",
        "title": "Evans & Sutherland Picture System",
        "role": "Sistema vetorial de alto desempenho.",
        "problem": "Servir CAD, simulação e visualização técnica com linhas precisas.",
        "replaces": "Raster inicial em cenários onde memória e resolução eram limitantes.",
        "impact": "Mostra que vector continuou competitivo em nichos técnicos.",
        "central": "A história real foi coexistência e disputa, não substituição instantânea.",
        "link": {
          "url": "https://s3data.computerhistory.org/brochures/evanssutherland.3d.1974.102646288.pdf",
          "title": "E&S Picture System"
        }
      },
      {
        "id": "zbuffer",
        "year": "1974",
        "title": "Z-buffer",
        "role": "Buffer de profundidade por pixel para visibilidade 3D.",
        "problem": "Decidir automaticamente quais superfícies estão na frente em uma cena 3D.",
        "replaces": "Painter's algorithm, ordenação manual e hidden-line menos robustos.",
        "impact": "Transforma o framebuffer em família de buffers: cor, profundidade e depois stencil/targets.",
        "central": "Prepara o pipeline 3D acelerado: cada pixel passa a carregar estado visual e geométrico.",
        "link": {
          "url": "https://graphics.stanford.edu/courses/cs248-01/History-of-graphics/History-of-graphics.pdf",
          "title": "Stanford CS248 — history slides"
        }
      }
    ]
  },
  {
    "id": "1980s",
    "decade": "1980s",
    "arc": "Framebuffer → padronização PC",
    "headline": "Do texto monocromático ao ecossistema VGA",
    "thesis": "A década não começa com VGA: ela passa por MDA, CGA, EGA, fabricantes como ATI e só então chega à consolidação VGA.",
    "bottleneck": "O gargalo era fragmentação e maturidade de mercado: o PC precisava sair de texto/monocromia e chegar a uma base gráfica previsível para software.",
    "main": [
      {
        "id": "vga",
        "year": "1987",
        "title": "VGA",
        "role": "Video Graphics Array no IBM PS/2.",
        "problem": "Oferecer uma base gráfica reconhecível, compatível e mais capaz para PCs.",
        "replaces": "CGA, EGA, Hercules e padrões menos uniformes.",
        "impact": "Consolida modos gráficos e memória de vídeo como base comum do software visual de PC.",
        "central": "Quarto elo: a imagem raster precisa virar plataforma padronizada para se massificar.",
        "video": {
          "kind": "local",
          "src": "assets/video/1980s/vga.mp4",
          "title": "VGA — padronização gráfica do PC"
        },
        "accent": "gold"
      }
    ],
    "secondary": [
      {
        "id": "mda",
        "year": "1981",
        "title": "IBM MDA",
        "role": "Monochrome Display Adapter: texto nítido, sem gráficos bitmap.",
        "problem": "Fornecer saída de texto de alta legibilidade para o IBM PC original.",
        "replaces": "Terminais/texto menos integrados ao novo ecossistema IBM PC.",
        "impact": "Estabelece a base inicial de display do PC como máquina de escritório: texto primeiro, gráficos depois.",
        "central": "MDA é importante porque mostra o ponto de partida econômico do PC: antes de padronizar gráficos, era preciso padronizar vídeo e texto.",
        "link": {
          "url": "https://www.computer.org/publications/tech-news/chasing-pixels/ibm-monochrome-display-and-printer-adapter",
          "title": "IEEE Computer Society — IBM MDA"
        }
      },
      {
        "id": "cga",
        "year": "1981",
        "title": "IBM CGA",
        "role": "Color Graphics Adapter: primeira opção gráfica/colorida comum no IBM PC.",
        "problem": "Adicionar gráficos e cor ao PC sem sair do mercado de baixo custo.",
        "replaces": "Uso exclusivo de texto monocromático no PC.",
        "impact": "Introduz modos gráficos acessíveis, mas com resolução e paleta bastante limitadas.",
        "central": "CGA mostra que o caminho até VGA foi incremental: primeiro cor e gráficos básicos, depois maior resolução e compatibilidade.",
        "link": {
          "url": "https://www.computer.org/publications/tech-news/chasing-pixels/famous-graphics-chips-ega-to-vga",
          "title": "IEEE Computer Society — EGA to VGA"
        }
      },
      {
        "id": "hercules",
        "year": "1982",
        "title": "Hercules Graphics Card",
        "role": "Adaptador monocromático de alta resolução, muito usado em software técnico e de escritório.",
        "problem": "Combinar legibilidade monocromática com gráficos mais úteis que CGA para muitos usos profissionais.",
        "replaces": "A divisão rígida entre texto MDA e gráficos coloridos CGA de baixa resolução.",
        "impact": "Mostra que a competição de adaptadores era guiada por nichos: texto, resolução, custo e compatibilidade.",
        "central": "Hercules explica por que VGA importou: havia várias soluções parcialmente incompatíveis tentando resolver problemas diferentes.",
        "link": {
          "url": "https://www.computerhistory.org/collections/catalog/102782627",
          "title": "Computer History Museum — Hercules Graphics Card"
        }
      },
      {
        "id": "ega",
        "year": "1984",
        "title": "IBM EGA",
        "role": "Enhanced Graphics Adapter: etapa intermediária entre CGA e VGA.",
        "problem": "Aumentar resolução, número de cores e capacidade gráfica do PC.",
        "replaces": "Limitações fortes de CGA em cor e resolução.",
        "impact": "Aproxima o PC de uma plataforma gráfica mais séria, mas ainda antes da consolidação VGA.",
        "central": "EGA é o degrau técnico que torna VGA menos abrupto historicamente.",
        "link": {
          "url": "https://www.computer.org/publications/tech-news/chasing-pixels/famous-graphics-chips-ega-to-vga",
          "title": "IEEE Computer Society — EGA to VGA"
        }
      },
      {
        "id": "ati",
        "year": "1985–1988",
        "title": "ATI Technologies",
        "role": "Fabricante canadense; EGA Wonder e VGA Wonder foram produtos importantes no ecossistema PC.",
        "problem": "Oferecer compatibilidade e flexibilidade em um mercado de vídeo de PC fragmentado.",
        "replaces": "Dependência de adaptadores IBM ou soluções menos integradas entre padrões.",
        "impact": "Ajuda a transformar gráficos de PC em ecossistema competitivo de placas, clones e compatibilidade.",
        "central": "ATI mostra o lado econômico da evolução: VGA se massifica por fabricantes que vendem compatibilidade em escala.",
        "link": {
          "url": "https://www.minuszerodegrees.net/manuals/VGA%20Wonder%20Operation%20Manual%20%281st%20Edition%2C%20July%201988%29.pdf",
          "title": "ATI VGA Wonder Operation Manual, 1988"
        }
      },
      {
        "id": "sgi",
        "year": "1982",
        "title": "Silicon Graphics",
        "role": "Workstations gráficas de alto desempenho.",
        "problem": "Renderizar e manipular 3D profissional em ciência, engenharia e produção visual.",
        "replaces": "PCs incapazes de atender visualização 3D profissional.",
        "impact": "Desenvolve o ramo high-end que influencia APIs, pipelines e aceleração.",
        "central": "A aceleração madura aparece primeiro em workstations, depois no consumo.",
        "link": {
          "url": "https://www.computerhistory.org/brochures/graphics/",
          "title": "Computer History Museum — graphics brochures"
        }
      },
      {
        "id": "ibm8514",
        "year": "1987",
        "title": "IBM 8514/A",
        "role": "Alta resolução e aceleração 2D profissional.",
        "problem": "Atender aplicações profissionais acima do VGA comum.",
        "replaces": "VGA como solução suficiente para todos os usos.",
        "impact": "Separa o caminho de massa do caminho profissional de alta resolução/aceleração.",
        "central": "Padronização não elimina hardware especializado.",
        "link": {
          "url": "https://www.researchgate.net/publication/332707912_Famous_Graphics_Chips_IBM%27s_professional_graphics_the_PGC_and_8514A",
          "title": "IBM PGC and 8514/A"
        }
      },
      {
        "id": "amiga",
        "year": "1985",
        "title": "Amiga chipset",
        "role": "Blitter, sprites e multimídia doméstica.",
        "problem": "Mover operações de pixels e animação para chips dedicados.",
        "replaces": "CPU fazendo toda a movimentação gráfica 2D.",
        "impact": "Mostra aceleração gráfica 2D antes da GPU 3D.",
        "central": "Aceleração gráfica começa com blocos 2D e memória, não só triângulos.",
        "link": {
          "url": "https://archive.org/details/Amiga_Hardware_Reference_Manual_3rd_Edition_1991_Commodore",
          "title": "Amiga Hardware Reference Manual"
        }
      }
    ]
  },
  {
    "id": "1990s",
    "decade": "1990s",
    "arc": "SVGA → acelerador 3D → GPU",
    "headline": "A placa gráfica passa a executar o pipeline",
    "thesis": "A década transforma o adaptador de vídeo em processador especializado: primeiro mais modos e pixels, depois rasterização 3D, depois T&L.",
    "bottleneck": "O gargalo era a CPU: triângulos, texturas, profundidade e iluminação em tempo real exigiam hardware dedicado.",
    "main": [
      {
        "id": "svga",
        "year": "1990s",
        "title": "SVGA / VESA VBE",
        "role": "Modos gráficos estendidos além do VGA.",
        "problem": "Aumentar resolução e profundidade de cor sem quebrar compatibilidade entre placas.",
        "replaces": "Modos proprietários e dependência do VGA básico.",
        "impact": "Amplia o framebuffer de PC e prepara o ecossistema para hardware gráfico mais ambicioso.",
        "central": "Ainda é mais sobre exibir pixels do que processar 3D, mas cria o terreno de mercado.",
        "video": {
          "kind": "local",
          "src": "assets/video/1990s/svga.mp4",
          "title": "SVGA/VESA — expansão e compatibilidade"
        },
        "accent": "gold"
      },
      {
        "id": "voodoo",
        "year": "1996",
        "title": "3dfx Voodoo Graphics",
        "role": "Acelerador 3D de consumo focado em jogos.",
        "problem": "Rodar jogos 3D com fluidez e qualidade que software rendering não entregava.",
        "replaces": "CPU renderizando 3D e placas 2D sem pipeline 3D eficaz.",
        "impact": "Leva texturização, filtragem, rasterização e profundidade para hardware dedicado popular.",
        "central": "Quinto elo: a placa deixa de só exibir e passa a acelerar o pipeline 3D.",
        "video": {
          "kind": "local",
          "src": "assets/video/1990s/voodoo.mp4",
          "title": "3dfx Voodoo — aceleração 3D de consumo"
        },
        "accent": "gold"
      },
      {
        "id": "geforce256",
        "year": "1999",
        "title": "GeForce 256",
        "role": "Placa comercializada como primeira GPU, com hardware transform and lighting.",
        "problem": "Reduzir o gargalo da CPU nas etapas geométricas e de iluminação.",
        "replaces": "Aceleradores que dependiam fortemente da CPU para transformação e iluminação.",
        "impact": "Integra mais partes do pipeline em um processador gráfico e populariza a linguagem de GPU.",
        "central": "O hardware gráfico passa a ser apresentado como processador do pipeline.",
        "video": {
          "kind": "local",
          "src": "assets/video/1990s/geforce256.mp4",
          "title": "GeForce 256 — T&L e GPU"
        },
        "accent": "gold"
      }
    ],
    "secondary": [
      {
        "id": "s3virge",
        "year": "1995–1996",
        "title": "S3 ViRGE",
        "role": "Primeira onda popular de placas 3D, lembrada por desempenho limitado.",
        "problem": "Adicionar funções 3D a placas de vídeo de massa.",
        "replaces": "Placas puramente 2D em PCs comuns.",
        "impact": "Mostra que recursos 3D no silício não bastam; throughput, drivers e API importam.",
        "central": "Caso de tentativa que não venceu a narrativa principal.",
        "link": {
          "url": "https://www.computer.org/publications/tech-news/chasing-pixels/s3-virge",
          "title": "IEEE Computer Society — S3 ViRGE"
        }
      },
      {
        "id": "rendition",
        "year": "1996",
        "title": "Rendition Vérité",
        "role": "Acelerador 3D inicial com rota arquitetural alternativa.",
        "problem": "Acelerar jogos 3D e vídeo com flexibilidade maior que soluções fixas.",
        "replaces": "Renderização por CPU e aceleradores menos completos.",
        "impact": "Alternativa plausível antes da consolidação de 3dfx/NVIDIA/ATI.",
        "central": "A GPU não nasceu de uma linha única e inevitável.",
        "link": {
          "url": "https://www.vogonswiki.com/index.php/Rendition_V%C3%A9rit%C3%A9",
          "title": "Rendition Vérité overview"
        }
      },
      {
        "id": "powervr",
        "year": "1996–1999",
        "title": "PowerVR",
        "role": "Tile-based deferred rendering.",
        "problem": "Reduzir trabalho desperdiçado e economizar largura de banda de memória.",
        "replaces": "Renderização imediata como única estratégia dominante.",
        "impact": "Não domina o desktop da época, mas antecipa escolhas importantes em GPUs móveis.",
        "central": "Solução arquitetural concorrente ao pipeline dominante.",
        "link": {
          "url": "https://docs.imgtec.com/starter-guides/powervr-architecture/html/topics/from-the-80s-to-present-day.html",
          "title": "PowerVR architecture history"
        }
      },
      {
        "id": "ati-rage",
        "year": "1996–1999",
        "title": "ATI Rage",
        "role": "Família 2D/3D de massa.",
        "problem": "Integrar aceleração 2D, vídeo e 3D em placas amplamente vendidas.",
        "replaces": "Separação rígida entre placa 2D e acelerador 3D dedicado.",
        "impact": "Contribui para a expectativa de uma placa gráfica multifuncional.",
        "central": "Completa o contexto competitivo no qual o termo GPU ganha força.",
        "link": {
          "url": "https://www.computer.org/publications/tech-news/chasing-pixels",
          "title": "IEEE Computer Society — Chasing Pixels"
        }
      }
    ]
  }
];
