import { $ } from '@wdio/globals'

class CalculatorPage {


// Mapeo de elemento con el recurso id
// get btnNumero2 () {return $('android=new UiSelector().resourceId("com.google.android.calculator:id/digit_2")')}


// Mapeei o elemento com accessibility id
get btnNumero2() { return $('~2')}
get btnMais() { return $('~más')}
get btnIgual() { return $('~igual a')}
get lblResultadoFinal() { return $('android=new UiSelector().resourceId("com.google.android.calculator:id/result_final")')}


    public async clicBtnNumero2 () {
        await this.btnNumero2.click()
        
    }
    public async clicBtnMais() {
        await this.btnMais.click()
        
    }
    public async clicBtnIgual() {
        await this.btnIgual.click()
        
    }

    public async pegarTextoDoCampoResultadoFinal() {
        return await this.lblResultadoFinal.getText()
        
    }
    
}

export default new CalculatorPage()