[...document.getElementsByTagName('a')].forEach((element) => {
    element.href = element.href.replace(/(\w\w)\.(wikipedia\.org)/, '$1.m.$2');
});