import calculatorPage from '../screen/calculator.page'

describe('Calculator test', () => {
    it('Sumar 2 + 2', async () => {
        // Arrange - Give

        const somaDoisValores = {

            preimeiroValor: 2, 
            segundoValor: 2, 
            resultado: '4'

        }
        // Imprimir el tipo de variable resultado
        console.log("🐦❓❓❓❓❓❓❓❓❓")
        console.log("🐦❓❓❓❓❓❓❓❓❓")
        console.log('El tipo de la variable "resultado" es:', typeof somaDoisValores.resultado, '👀');
        console.log("🐦❓❓❓❓❓❓❓❓❓")
        console.log("🐦❓❓❓❓❓❓❓❓❓")

        // Act - When
        await calculatorPage.clicBtnNumero2()
        await calculatorPage.clicBtnMais()
        await calculatorPage.clicBtnNumero2()
        await calculatorPage.clicBtnIgual()


        // Assert - Then

        expect(await calculatorPage.pegarTextoDoCampoResultadoFinal()).toContain(somaDoisValores.resultado)


        await driver.pause(5000)


    })
})