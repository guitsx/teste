const notas = require('./notas');

describe('Testa media_final', () => {

    test('se a1=0 e a2=0 então media=0', () => {
        const resultado = notas.media_final(0, 0);
        const esperado = 0;
        expect(resultado).toBe(esperado);
    });

    test('se a1>=0 ou a2>=0 então media>0', () => {
        expect(notas.media_final(0,1)).toBe(0.6);
        expect(notas.media_final(1,0)).toBe(0.4);
        expect(notas.media_final(1,1)).toBe(1);
        expect(notas.media_final(10,10)).toBe(10);
    })

    test('se a3>0 e substitui a1 então media=a3*0.4 + a2*0.6', () => {
        // a3 substitui a1
        // 3*0.4 + 5*0.6 = 1.2 + 3 = 4.2
        // a3 substitui a2 
        // 1*0.4 + 3*0.6 = 0.4 + 1.8 = 2.2
        expect(notas.media_final(1, 5, 3)).toBe(4.2);
        expect(notas.media_final(2, 5, 3)).toBe(4.2);
        expect(notas.media_final(3, 5, 3)).toBe(4.2);
        // 6*0.4 + 5*0.6 = 2.4 + 3 = 5.4
        // 1*0.4 + 6*0.6 = 0.4 + 3.6 = 4
        expect(notas.media_final(1, 5, 6)).toBe(6*0.4+5*0.6);
        expect(notas.media_final(1, 5, 6)).toBe(6*0.4+5*0.6);
    });

    test('se a3>0 e substitui a2 então media=a1*0.4 + a3*0.6', () => {
        // 6*0.4 + 5*0.6 = 2.4 + 3 = 5.4
        // 5*0.4 + 6*0.6 = 2 + 3.6 = 5.6
        expect(notas.media_final(5, 5, 6)).toBe(5*0.4+6*0.6);    
        expect(notas.media_final(6, 5, 6)).toBe(6*0.4+6*0.6);
        expect(notas.media_final(7, 5, 6)).toBe(7*0.4+6*0.6);
    });
 
    test('se a3>0 e não subsitui então media=a1*0.4 + a2*0.6', () => {
        expect(notas.media_final(5, 5, 3)).toBe(5*0.4+5*0.6);    
        expect(notas.media_final(4, 5, 3)).toBe(4*0.4+5*0.6);
        expect(notas.media_final(5, 4, 3)).toBe(5*0.4+4*0.6);
    });
});