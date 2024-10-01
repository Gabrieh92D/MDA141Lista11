describe('Testando Calculadora Google', () => {
    before(async () => {
        const calculadora = '//android.view.ViewGroup[@resource-id="com.google.android.calculator:id/main_calculator"]'
        await $(calculadora).waitForDisplayed();

    });
 
    it('Soma', async () => {

        const numero1 = '//android.widget.ImageButton[@content-desc="5"]';
        await $(numero1).click()

        const soma = 'accessibility id:plus';
        await $(soma).click()

        const numero2 = '//android.widget.ImageButton[@content-desc="15"]';
        await $(numero2).click()

        const equals = 'accessibility id:equals';
        await $(equals).click();

        const resultado = 'id:com.google.android.calculator:id/result_final';
        expect(await $(resultado).getText()).toEqual('20');

    });

    it('Subtração', async () => {

        const numero1 = '//android.widget.ImageButton[@content-desc="10"]';
        await $(numero1).click()

        const subtração = 'accessibility id:minus';
        await $(subtração).click()

        const numero2 = '//android.widget.ImageButton[@content-desc="7"]';
        await $(numero2).click()

        const equals = 'accessibility id:equals';
        await $(equals).click();

        const resultado = 'id:com.google.android.calculator:id/result_final';
        expect(await $(resultado).getText()).toEqual('3');

    });

    it('Multiplicação', async () => {

        const numero1 = '//android.widget.ImageButton[@content-desc="3"]';
        await $(numero1).click()

        const multiplicacao = 'accessibility id:multiply';
        await $(multiplicacao).click()

        const numero2 = '//android.widget.ImageButton[@content-desc="8"]';
        await $(numero2).click()

        const equals = 'accessibility id:equals';
        await $(equals).click();

        const resultado = 'id:com.google.android.calculator:id/result_final';
        expect(await $(resultado).getText()).toEqual('24');

    });

    it('Divisão', async () => {

        const numero1 = '//android.widget.ImageButton[@content-desc="12"]';
        await $(numero1).click()

        const divisao= 'accessibility id:divide';
        await $(divisao).click()

        const numero2 = '//android.widget.ImageButton[@content-desc="4"]';
        await $(numero2).click()

        const equals = 'accessibility id:equals';
        await $(equals).click();

        const resultado = 'id:com.google.android.calculator:id/result_final';
        expect(await $(resultado).getText()).toEqual('3');

    });


});