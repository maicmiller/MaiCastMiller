/**
 * Arquivo para utilidades gerais.
*/


/**
 * Função para converter os dados parar serem exibidos o tempo decorrido do audio em minutos.
*/
function secondsToMinutes(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`

}
/**
 * 
*/
const path = function (file) {
    return `${file}`;
}

export { path, secondsToMinutes };