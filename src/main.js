const modules = import.meta.glob('./js/*.js');

for (const path in modules) {
  modules[path]().then(module => {
    console.log(`Loaded: ${path}`);
  });
}
