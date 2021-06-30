// const timeStamp = Date.now();
// const version = '0.0.1';
// const staticCacheName = `liva-${version}`;
// const dynamicCacheName = `liva-dynamic-${version}`;
// const assets = [
//     '/',
//     '/index.html',
//     'fallback.html'
// ]
// self.addEventListener("install",(evt)=>{
//     evt.waitUntil(
//         caches
//             .open(staticCacheName)
//             .then((cache)=>{
//                 cache.addAll(assets);
//             })
//             .then(()=>self.skipWaiting())
//     );
// });

// self.addEventListener("activate",(evt)=>{
//     evt.waitUntil(
//         caches.Keys().then((keys)=>{
//             return Promise.all(
//                 keys
//                 .filter( (key) => key !== staticCacheName && key !== dynamicCacheName)
//                 .map((key)=> caches.delete(key))
//             )
//         })
//     );
// });

// self.addEventListener("fetch",(evt)=>{
//     let requestURL = new URL(evt.request.url);
//     evt.respondWith(
//         caches
//         .match(evt.request)
//         .then((cachesRes)=>{
//             return(
//                 cachesRes ||
//                 fetch(evt.request).then((fetchRes) =>{
//                     return caches.open(dynamicCacheName).then((cache)=>{
//                         cache.put(evt.request.url,fetchRes.clone());
//                         return fetchRes;
//                     })
//                 })
//             )
//         }).catch(()=> caches.match("fallback.html"))
//     );
// })