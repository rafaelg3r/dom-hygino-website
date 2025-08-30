// Função para carregar CSS/JS com versão dinâmica
      function loadFile(filename, filetype) {
        const timestamp = new Date().getTime()

        if (filetype === "js") {
          const script = document.createElement("script")
          script.src = filename + "?v=" + timestamp
          document.head.appendChild(script)
        } else if (filetype === "css") {
          const link = document.createElement("link")
          link.rel = "stylesheet"
          link.href = filename + "?v=" + timestamp
          document.head.appendChild(link)
        }
      }

      // Carregar arquivos (sem cache)
      loadFile("style.css", "css")
      loadFile("script.js", "js")