function mostrarDetalhes(carro) {
    let descricao = '';

    switch (carro) {
        case 'carro1':
            descricao = 'Carro 1: Um modelo esportivo com motor V8, velocidade máxima de 300 km/h e 500cv.';
            break;
        case 'carro2':
            descricao = 'Carro 2: Um sedã de luxo com motor turbo, design elegante e sistema de som premium.';
            break;
        case 'carro3':
            descricao = 'Carro 3: Um carro ecológico, 100% elétrico, com autonomia de 400 km por carga.';
            break;
        default:
            descricao = 'Selecione um carro para ver mais detalhes.';
    }

    document.getElementById('descricao').innerText = descricao;
}
