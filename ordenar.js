const clientes = require("./clientes.json");

function ordenar(lista, propriedadde){
    const resultado = lista.sort((a,b) => {
        if (a[propriedadde] < b[propriedadde]) {
            return -1;
        }
        if (a[propriedadde] > b[propriedadde]) {
            return 1;
        }
        return 0;
    });
    return resultado;
}

const ordenadoNome = ordernar(clientes, "nome");

console.log(ordnado.ordenadoNome);

