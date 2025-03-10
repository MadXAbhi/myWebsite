addEventListener('fetch', event => {
     event.respondWith(handleRequest(event.request))
   })

   async function handleRequest(request) {
     const url = new URL(request.url)
     let path = url.pathname

     // Default to index.html
     if (path === '/') {
       path = '/index.html'
     }

     // Serve static files
     return fetch(`https://asmultiverse.com${path}`)
   }
