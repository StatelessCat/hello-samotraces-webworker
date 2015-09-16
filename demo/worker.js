
onmessage = function(o) {
  console.log('Message received from main script');
  console.log(o.data.msg);
  importScripts('/samotracesjs/dist/vendors.js');
  importScripts('/samotracesjs/dist/samotraces-core-debug.js');
  console.log(Samotraces.ktbs);
  console.log(typeof Samotraces.Ktbs.Base === 'function');
  console.log(Samotraces.Ktbs.Ktbs("http://dsi-liris-silex.univ-lyon1.fr/m2ia/ktbs/"));
};
