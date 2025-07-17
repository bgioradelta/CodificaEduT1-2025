const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true
        if(success) {
            resolve("Dados charged with success!")
        } else {
            reject(new Error("Falha ao carregar data!"))
        }
    }, 3000)
})

myPromise.then(resultado => {
    console.log(resultado)
})