let nmds = document.querySelectorAll(`.nmd`)

nmds.forEach((nmd) => {
    document.addEventListener(nmd.dataset.trigger, () => nmd.dataset.open = `true`)
})