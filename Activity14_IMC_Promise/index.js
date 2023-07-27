function imcPromise(weight, height) {
    return new Promise((resolved, rejected) => {
        if (weight/ (height**2)) {
            resolved(weight/ (height**2))
        } else {
            rejected("O IMC foi rejeitado! Insira os dados corretos.")
        }
    })
}

function calculateIMC(weight, height) {
    const p = imcPromise(weight, height)

    p.then((result)=> {
        console.log(result)
        switch (result) {
            case (result < 18.5):
                console.log("Magreza")
                break
            case (result > 18.5 && result < 24.9):
                console.log("Normal")
                break
            case (result > 25 && result < 29.9):
                console.log("Sobrepeso")
                break
            case (result > 30 && result < 39.9):
                console.log("Obesidade")
                break
            case (result > 40):
                console.log("Obesidade grave")
                break
        }
    }).catch((error) => {
        console.log(`A promise não foi feita por conta do seguinte erro: ${error}`)
    }).finally(() => {
        console.log("aaa")
    })
    console.log("Mensagem qualquer...")
}

calculateIMC(70, 1.85)
