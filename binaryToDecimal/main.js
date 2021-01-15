convert = () => {
    const binary = document.getElementById('bin').value;

    if(binary === '') return alert('Por favor! Preencha o campo com um número binário válido');
    binary.split('').map((char)=> {
        if(char != '0' && char != '1') return alert('Atenção! Os números binários válidos são 0 ou 1');
    });
    const decimal = parseInt(binary, 2);
    document.getElementById('res').value = decimal;
    return true;
}