<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('Service Worker registrato', reg))
      .catch(err => console.error('Errore Service Worker', err));
  }
</script>