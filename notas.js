const media_final = (a1, a2, a3=0) =>  {
    const media1 = a1*0.4 + a2*0.6;
    const media2 = a1*0.4 + a3*0.6;
    const media3 = a3*0.4 + a2*0.6;

    if (media2 > media1 && media2 > media3) {
        return media2;
    }

    if (media3 > media1 && media3 > media2) {
        return media3;
    }

    return media1;
    
};

const media_conceito = () => {}

const nota_a1 = () => {}

const nota_a2 = () => {}

module.exports = { media_final };