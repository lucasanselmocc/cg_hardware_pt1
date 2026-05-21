# Referências de estudo — Hardware Evolution in Computer Graphics, Parte 1

## 1950s — Whirlwind, SAGE e computação visual em tempo real

### MIT Whirlwind

- IEEE Engineering and Technology History Wiki — *Milestones: Whirlwind Computer, 1944–59*  
  https://ethw.org/Milestones:Whirlwind_Computer,_1944-59  
  Fonte histórica forte para Whirlwind como computador digital de tempo real, com saída em CRT e importância para sistemas interativos.

- MIT News — *IEEE honors MIT milestones in computing and navigation*  
  https://news.mit.edu/2012/ieee-honors-mit-milestones-0629  
  Síntese institucional curta sobre Whirlwind e seu reconhecimento como marco IEEE.

- Computer History Museum — *Real-Time Computing*  
  https://www.computerhistory.org/revolution/real-time-computing/6  
  Útil para ligar Whirlwind, tempo real e SAGE.

### SAGE

- Computer History Museum — *A SAGE Defense*  
  https://www.computerhistory.org/revolution/real-time-computing/6/120  
  Fonte muito útil para explicar o console SAGE, o uso de light gun/light pen e a interação operacional.

- MIT Lincoln Laboratory — *Semi-Automatic Ground Environment Air Defense System*  
  https://www.ll.mit.edu/about/history/sage-semi-automatic-ground-environment-air-defense-system  
  Fonte institucional sobre o papel do SAGE na defesa aérea.

### Trilhas secundárias

- Computer History Museum — *Timeline of Computer History*  
  https://www.computerhistory.org/timeline/computers/  
  Útil para TX-0, cultura MIT e computadores experimentais.

- Computer History Museum — *DAC-1*  
  https://www.computerhistory.org/revolution/computer-graphics-music-and-art/15/215  
  Use para relacionar computação gráfica a CAD e design industrial.

---

## 1960s — Sketchpad, light pen e interação direta

### Sketchpad

- Ivan Sutherland — *Sketchpad: A Man-Machine Graphical Communication System*  
  https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-574.pdf  
  Fonte primária. Explica light pen, constraints, manipulação direta e desenho interativo.

- Computer History Museum — *The Remarkable Ivan Sutherland*  
  https://computerhistory.org/blog/the-remarkable-ivan-sutherland/  
  Boa fonte de contextualização histórica.

- National Inventors Hall of Fame — *Ivan E. Sutherland*  
  https://www.invent.org/inductees/ivan-e-sutherland  
  Síntese de impacto histórico de Sketchpad, CAD e interfaces gráficas.

### Tecnologias secundárias

- Computer History Museum — *IBM 2250 Graphics Display Unit*  
  https://www.computerhistory.org/revolution/input-output/14/346/1875  
  Exemplo de terminal gráfico vetorial comercial.

- Bill Buxton — *Some Milestones in Computer Input Devices*  
  https://www.billbuxton.com/inputTimeline.html  
  Linha do tempo de dispositivos de entrada, útil para light pen, mouse e apontamento.

- Jack Bresenham — *Algorithm for computer control of a digital plotter*  
  https://dl.acm.org/doi/10.1145/365230.365249  
  Artigo clássico sobre rasterização eficiente de linhas.

- Evans & Sutherland brochure / Computer History Museum archive  
  https://s3data.computerhistory.org/brochures/evanssutherland.3d.1974.102646288.pdf  
  Material histórico sobre hardware gráfico especializado.

---

## 1970s — Vector display para raster/framebuffer

### Transição raster

- A. Michael Noll — *First-Hand: Raster Scanned Display*  
  https://ethw.org/First-Hand:Raster_Scanned_Display  
  Relato importante sobre raster scan display em Bell Labs.

- Marc Levoy — *History of Computer Graphics*, Stanford CS248  
  https://graphics.stanford.edu/courses/cs248-01/History-of-graphics/History-of-graphics.pdf  
  Slides úteis para organizar vector displays, raster displays, framebuffers e rendering.

- Philipp Slusallek — *History of Computer Graphics*  
  Arquivo da disciplina: `CG01b-History_Applications.pdf`  
  Bom para alinhar a apresentação ao curso.

### SuperPaint, Alto e framebuffer

- Richard Shoup — *SuperPaint: An Early Frame Buffer Graphics System*  
  https://bitsavers.trailing-edge.com/pdf/xerox/parc/superpaint/rgshoup.com/Annals_final.pdf  
  Excelente fonte sobre framebuffer, pintura digital e imagens raster.

- Computer History Museum — *Recollections of Early Paint Systems*  
  https://computerhistory.org/events/recollections-early-paint-systems/  
  Complementa SuperPaint e sistemas iniciais de pintura.

- Computer History Museum — *Xerox Alto Source Code*  
  https://computerhistory.org/blog/xerox-alto-source-code/  
  Contextualiza bitmapped displays, GUI experimental e computação pessoal.

### Trilhas secundárias

- Evans & Sutherland Picture System  
  https://s3data.computerhistory.org/brochures/evanssutherland.3d.1974.102646288.pdf  
  Mostra que vector displays continuaram fortes em CAD e simulação.

- Z-buffer / Catmull / Strasser  
  Use os slides de Levoy e Slusallek para situar Z-buffer como buffer de profundidade por pixel.

---

## 1980s — VGA, padronização e caminhos paralelos

### VGA

- IBM — *The PS/2*  
  https://www.ibm.com/history/ps-2  
  Fonte oficial sobre a linha PS/2, contexto em que VGA aparece.

- IEEE Computer Society — *Famous Graphics Chips: IBM's VGA*  
  https://www.computer.org/publications/tech-news/chasing-pixels/Famous-Graphics-Chips-IBMs-VGA  
  Fonte histórica e técnica sobre VGA.

- BYTE 1987 — *PS/2 Video Programming*  
  https://www.infania.net/misc1/ibmart/BYTE_1987_10_PS2_Video_Programming.pdf  
  Fonte contemporânea para modos gráficos e visão técnica da época.

### Trilhas secundárias

- IEEE Computer Society — *Famous Graphics Chips: EGA to VGA*  
  https://www.computer.org/publications/tech-news/chasing-pixels/famous-graphics-chips-ega-to-vga  
  Útil para explicar CGA/EGA como degraus anteriores.

- IBM PGC e IBM 8514/A  
  https://www.researchgate.net/publication/332707912_Famous_Graphics_Chips_IBM%27s_professional_graphics_the_PGC_and_8514A  
  Caminho profissional paralelo ao VGA de massa.

- Amiga Hardware Reference Manual  
  https://archive.org/details/Amiga_Hardware_Reference_Manual_3rd_Edition_1991_Commodore  
  Fonte técnica para blitter, sprites e aceleração 2D doméstica.

---

## 1990s — SVGA, aceleradores 3D e GeForce 256

### SVGA / VESA VBE

- VESA BIOS Extension 2.0  
  https://www.phatcode.net/res/221/files/vbe20.pdf  
  Fonte técnica para explicar SVGA como problema de compatibilidade e interface, não só como “mais resolução”.

- VBE 1.2 historical page  
  https://ps-2.kev009.com/ohland/video/Volkman_VBE_12_Standard.html  
  Útil para contexto histórico do VBE.

### 3dfx Voodoo

- Computer History Museum — *1996 Timeline*  
  https://www.computerhistory.org/timeline/1996/  
  Situa Voodoo Graphics no crescimento do mercado de placas 3D.

- Computer History Museum — *3dfx Oral History Panel*  
  https://www.youtube.com/watch?v=3MghYhf-GhU  
  Fonte audiovisual útil para contexto de mercado, jogos e aceleração 3D.

### GeForce 256

- NVIDIA — *1999 corporate timeline*  
  https://www.nvidia.com/content/timeline/time_99.html  
  Fonte institucional para a formulação “primeira GPU”.

- NVIDIA — *GeForce Optimization / Transform and Lighting*  
  https://developer.download.nvidia.com/assets/gamedev/docs/GeForce_Optimization2.pdf  
  Fonte técnica para explicar T&L e pipeline em hardware.

- Tom’s Hardware — *Full Review: NVIDIA GeForce 256*  
  https://www.tomshardware.com/reviews/full-review-nvidia,134.html  
  Fonte de época para entender recepção técnica.

- IEEE Computer Society — *NVIDIA's GeForce 256*  
  https://www.computer.org/publications/tech-news/chasing-pixels/nvidias-geforce-256  
  Fonte externa para nuance histórica sobre GPU e integração.

### Trilhas secundárias

- IEEE Computer Society — *S3 ViRGE*  
  https://www.computer.org/publications/tech-news/chasing-pixels/s3-virge  
  Bom exemplo de acelerador 3D que tentou resolver o problema, mas ficou associado a desempenho fraco.

- Imagination Technologies — *History of PowerVR*  
  https://docs.imgtec.com/starter-guides/powervr-architecture/html/topics/from-the-80s-to-present-day.html  
  Fonte para tile-based deferred rendering e alternativa arquitetural.

- PowerVR Series 1 source archive  
  https://github.com/powervr-graphics/PowerVR-Series1  
  Material técnico para quem quiser investigar a arquitetura e drivers.

---