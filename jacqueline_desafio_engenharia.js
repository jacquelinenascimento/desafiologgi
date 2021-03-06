var barcodes = ['288355555123888', '335333555584333', '223343555124001', '002111555874555', '111188555654777', '111333555123333', '432055555123888', '079333555584333', '155333555124001', 
    '333188555584333', '555288555123001', '111388555123555', '288000555367333', '066311555874001', '110333555123555', '333488555584333', '455448555123001', '022388555123555', '432044555845333', 
    '034311555874001'];

    var regOrigem = [];
    var regDestino = [];
    var codLoggi = [];
    var codVendedor = [];
    var tipoProduto = [];
    var centroOeste = [];
    var centroOesteO = [];
    var nordeste = []; 
    var norte = [];
    var sudeste = []; 
    var sul = [];
    var somatorioDestino;
    var nordesteO = []; 
    var norteO = [];
    var sudesteO = []; 
    var sulO = [];
    var joias = [];
    var livros = [];
    var eletronicos = []
    var bebidas = []
    var brinquedos = [];
    var codValido = [];
    var codInval = [];
    var brinqSul = [];
    var centroOesteVal = [];
    var norteVal = [];
    var nordesteVal = [];
    var sulVal = [];
    var sudesteVal = [];
    var vendedor123 = [];
    var vendedor584 = [];
    var vendedor124 = [];
    var vendedor874 = [];
    var vendedor654 = [];
    var vendedor845 = [];
    var centroOesteJoias = [];
    var centroOesteBebidas = [];
    var centroOesteBrinq = [];
    var centroOesteEletr = [];
    var centroOesteLivros = [];
    var norteJoias = [];
    var norteBebidas = [];
    var norteBrinq = [];
    var norteEletr = [];
    var norteLivros = [];
    var nordesteJoias = [];
    var nordesteBebidas = [];
    var nordesteBrinq = [];
    var nordesteEletr = [];
    var nordesteLivros = [];
    var sudesteJoias = [];
    var sudesteBebidas = [];
    var sudesteBrinq = [];
    var sudesteEletr = [];
    var sudesteLivros = [];
    var sulJoias = [];
    var sulBebidas = [];
    var sulBrinq = [];
    var sulEletr = [];
    var sulLivros = [];
    var norteCO = [];
    var norteCO2 = [];
    var norteCO3 = [];



   for (i = 0; i < barcodes.length; i++) {
        regOrigem.push(barcodes[i].slice(0,-12));
        regDestino.push(barcodes[i].slice(3,-9));
        codLoggi.push(barcodes[i].slice(6,-6));
        codVendedor.push(barcodes[i].slice(9,-3));
        tipoProduto.push(barcodes[i].slice(-3));

    } 

    
    function defineDestino () {
        for (i = 0; i < barcodes.length; i++) {
            
            var destino = parseInt(regDestino[i]);

            if (destino >= 201 && destino <= 299) {
                centroOeste.push(barcodes[i]); 
            } else if (destino >= 300 && destino <= 399) {
                nordeste.push(barcodes[i]);
            } else if (destino >= 400 && destino <= 499) {
                norte.push(barcodes[i]);
            } else if (destino >= 001 && destino <= 099) {
                sudeste.push(barcodes[i]);
            } else if (destino >= 100 && destino <= 199) {
                sul.push(barcodes[i]);
            } else {
                codInval.push(barcodes[i]);
            }
        }
        somatorioDestino = centroOeste.length + norte.length + nordeste.length + sul.length + sudeste.length;
        return centroOeste, norte, nordeste, sul, sudeste;
        return somatorioDestino;
    }

    function defineOrigem() {
        for (i = 0; i < barcodes.length; i++) {
            
            var origem = parseInt(regOrigem[i]);

            if (origem >= 201 && origem <= 299) {
                centroOesteO.push(barcodes[i]); 
            } else if (origem >= 300 && origem <= 399) {
                nordesteO.push(barcodes[i]);
            } else if (origem >= 400 && origem <= 499) {
                norteO.push(barcodes[i]);
            } else if (origem >= 001 && origem <= 099) {
                sudesteO.push(barcodes[i]);
            } else if (origem >= 100 && origem <= 199) {
                sulO.push(barcodes[i]);
            } else {
                codInval.push(barcodes[i]);
            }
        }
        return centroOesteO, norteO, nordesteO, sulO, sudesteO;
    }

    function defineProduto() {
        for (i = 0; i < barcodes.length; i++) {
           
            if (tipoProduto[i] == '001') {
                joias.push(barcodes[i]); 
            } else if (tipoProduto[i] == '111') {
                livros.push(barcodes[i]);
            } else if (tipoProduto[i] == '333') {
                eletronicos.push(barcodes[i]);
            } else if (tipoProduto[i] == '555') {
                bebidas.push(barcodes[i]);
            } else if (tipoProduto[i] == '888') {
                brinquedos.push(barcodes[i]);
            } else {
                codInval.push(barcodes[i]);
            }

        }

        return joias, livros, eletronicos, bebidas, brinquedos, codInval;
        
    }

    function validaCodigo() {

        for (i = 0; i < barcodes.length; i++) {
            if (codVendedor[i] == '367' && !codInval.includes(barcodes[i])) {
                codInval.push(barcodes[i]);
            } else if (codVendedor[i] != '367' && !codInval.includes(barcodes[i])) {
                codValido.push(barcodes[i]);
            }
        }   
        return codInval, codValido;
    }


    function sulBrinquedos() {
        for (i = 0; i < tipoProduto.length; i++) {
            if (tipoProduto[i] == "888") {
                if (regOrigem[i] >= 100 && regOrigem[i] <= 199) {
                    brinqSul.push(barcodes);
                }
            }
        }
    return brinqSul;
    }

    function defineVendedor() {
        for (i = 0; i < barcodes.length; i++) {
           
           if (codVendedor[i] == '123') {
                vendedor123.push(barcodes[i]); 
           } else if (codVendedor[i] == '584') {
                vendedor584.push(barcodes[i]);
           } else if (codVendedor[i] == '124') {
                vendedor124.push(barcodes[i]);
           } else if (codVendedor[i] == '874') {
                vendedor874.push(barcodes[i]);
           } else if (codVendedor[i] == '654') {
                vendedor654.push(barcodes[i]);
           } else if (codVendedor[i] == '845') {
                vendedor845.push(barcodes[i]);
           }

       }

       return vendedor123, vendedor584, vendedor124, vendedor874, vendedor654, vendedor845;
       
    }

    function produtoDestino() {

    for (i = 0; i <joias.length; i++) {
        if (centroOesteVal.includes(joias[i]) && !centroOesteJoias.includes(joias[i])) {
            centroOesteJoias.push(joias[i]);
        } 
    }
    for (i = 0; i <brinquedos.length; i++) {
        if (centroOesteVal.includes(brinquedos[i]) && !centroOesteBrinq.includes(brinquedos[i])) {
            centroOesteBrinq.push(brinquedos[i]);
        }
    }
    for (i = 0; i <livros.length; i++) {
        if (centroOesteVal.includes(livros[i]) && !centroOesteLivros.includes(livros[i])) {
            centroOesteLivros.push(livros[i]);
        }
    }
    for (i = 0; i <eletronicos.length; i++) {
        if (centroOesteVal.includes(eletronicos[i]) && !centroOesteEletr.includes(eletronicos[i])) {
            centroOesteEletr.push(eletronicos[i]);
        }
    }
    for (i = 0; i <bebidas.length; i++) {
        if (centroOesteVal.includes(bebidas[i]) && !centroOesteBebidas.includes(bebidas[i])) {
            centroOesteBebidas.push(bebidas[i]);
        }  
    }

    for (i = 0; i <joias.length; i++) {
        if (norteVal.includes(joias[i]) && !norteJoias.includes(joias[i])) {
            norteJoias.push(joias[i]);
        } 
    }
    for (i = 0; i <brinquedos.length; i++) {
        if (norteVal.includes(brinquedos[i]) && !norteBrinq.includes(brinquedos[i])) {
            norteBrinq.push(brinquedos[i]);
        }
    }
    for (i = 0; i <livros.length; i++) {
        if (norteVal.includes(livros[i]) && !norteLivros.includes(livros[i])) {
            norteLivros.push(livros[i]);
        }
    }
    for (i = 0; i <eletronicos.length; i++) {
        if (norteVal.includes(eletronicos[i]) && !norteEletr.includes(eletronicos[i])) {
            norteEletr.push(eletronicos[i]);
        }
    }
    for (i = 0; i <bebidas.length; i++) {
        if (norteVal.includes(bebidas[i]) && !norteBebidas.includes(bebidas[i])) {
            norteBebidas.push(bebidas[i]);
        }  
    }
    for (i = 0; i <joias.length; i++) {
        if (sulVal.includes(joias[i]) && !sulJoias.includes(joias[i])) {
            sulJoias.push(joias[i]);
        } 
    }
    for (i = 0; i <brinquedos.length; i++) {
        if (sulVal.includes(brinquedos[i]) && !sulBrinq.includes(brinquedos[i])) {
            sulBrinq.push(brinquedos[i]);
        }
    }
    for (i = 0; i <livros.length; i++) {
        if (sulVal.includes(livros[i]) && !sulLivros.includes(livros[i])) {
            sulLivros.push(livros[i]);
        }
    }
    for (i = 0; i <eletronicos.length; i++) {
        if (sulVal.includes(eletronicos[i]) && !sulEletr.includes(eletronicos[i])) {
            sulEletr.push(eletronicos[i]);
        }
    }
    for (i = 0; i <bebidas.length; i++) {
        if (sulVal.includes(bebidas[i]) && !sulBebidas.includes(bebidas[i])) {
            sulBebidas.push(bebidas[i]);
        }  
    }
    for (i = 0; i <joias.length; i++) {
        if (sudesteVal.includes(joias[i]) && !sudesteJoias.includes(joias[i])) {
            sudesteJoias.push(joias[i]);
        } 
    }
    for (i = 0; i <brinquedos.length; i++) {
        if (sudesteVal.includes(brinquedos[i]) && !sudesteBrinq.includes(brinquedos[i])) {
            sudesteBrinq.push(brinquedos[i]);
        }
    }
    for (i = 0; i <livros.length; i++) {
        if (sudesteVal.includes(livros[i]) && !sudesteLivros.includes(livros[i])) {
            sudesteLivros.push(livros[i]);
        }
    }
    for (i = 0; i <eletronicos.length; i++) {
        if (sudesteVal.includes(eletronicos[i]) && !sudesteEletr.includes(eletronicos[i])) {
            sudesteEletr.push(eletronicos[i]);
        }
    }
    for (i = 0; i <bebidas.length; i++) {
        if (sudesteVal.includes(bebidas[i]) && !sudesteBebidas.includes(bebidas[i])) {
            sudesteBebidas.push(bebidas[i]);
        }  
    }
    for (i = 0; i <joias.length; i++) {
        if (nordesteVal.includes(joias[i]) && !nordesteJoias.includes(joias[i])) {
            nordesteJoias.push(joias[i]);
        } 
    }
    for (i = 0; i <brinquedos.length; i++) {
        if (nordesteVal.includes(brinquedos[i]) && !nordesteBrinq.includes(brinquedos[i])) {
            nordesteBrinq.push(brinquedos[i]);
        }
    }
    for (i = 0; i <livros.length; i++) {
        if (nordesteVal.includes(livros[i]) && !nordesteLivros.includes(livros[i])) {
            nordesteLivros.push(livros[i]);
        }
    }
    for (i = 0; i <eletronicos.length; i++) {
        if (nordesteVal.includes(eletronicos[i]) && !nordesteEletr.includes(eletronicos[i])) {
            nordesteEletr.push(eletronicos[i]);
        }
    }
    for (i = 0; i <bebidas.length; i++) {
        if (nordesteVal.includes(bebidas[i]) && !nordesteBebidas.includes(bebidas[i])) {
            nordesteBebidas.push(bebidas[i]);
        }  
    }

    return centroOesteJoias, centroOesteBebidas, centroOesteBrinq, centroOesteEletr, centroOesteLivros;
    return norteJoias, norteBebidas, norteBrinq, norteEletr, norteLivros;
    return nordesteJoias, nordesteBebidas, nordesteBrinq, nordesteEletr, nordesteLivros;
    return sudesteJoias, sudesteBebidas, sudesteBrinq, sudesteEletr, sudesteLivros;
    return sulJoias, sulBebidas, sulBrinq, sulEletr, sulLivros;
    }


    console.log('Quest??o 1 ')

    for (i = 0; i < barcodes.length; i++) {
        var destino = parseInt(regDestino[i]);

        if (destino >= 201 && destino <= 299) {
            console.log(barcodes[i] + ' - Centro-Oeste');
        } else if (destino >= 300 && destino <= 399) {
            console.log(barcodes[i] + ' - Nordeste');
        } else if (destino >= 400 && destino <= 499) {
            console.log(barcodes[i] + ' - Norte');
        } else if (destino >= 001 && destino <= 099) {
            console.log(barcodes[i] + ' - Sudeste');
        } else if (destino >= 100 && destino <= 199) {
            console.log(barcodes[i] + ' - Sul');
        }
    }
    defineDestino(barcodes);
    console.log ('Destino Centro-Oeste: ' + centroOeste.length);
    console.log ('Destino Nordeste: ' + nordeste.length);
    console.log ('Destino Norte: ' + norte.length);
    console.log ('Destino Sul: ' + sul.length);
    console.log ('Destino Sudeste: ' + sudeste.length);
    console.log ('Total de pacotes: ' + somatorioDestino);


    console.log('Quest??o 2 ')
    defineProduto(barcodes);
    validaCodigo(barcodes);

    console.log ('Pacotes com c??digo inv??lido: ' + codInval);
    console.log ('Pacotes com c??digo v??lido: ' + codValido);

    console.log('Quest??o 3 ')
    sulBrinquedos(barcodes);
    console.log(brinqSul);

    console.log('Quest??o 4 ')
    defineDestino();

    for (i = 0; i <centroOeste.length; i++) {
        if (codValido.includes(centroOeste[i]) && !centroOesteVal.includes(centroOeste[i])) {
            centroOesteVal.push(centroOeste[i]);
        }
    }
    for (i = 0; i <nordeste.length; i++) {
        if (codValido.includes(nordeste[i]) && !nordesteVal.includes(nordeste[i])) {
            nordesteVal.push(nordeste[i]);
        }
    }
    for (i = 0; i <norte.length; i++) {
        if (codValido.includes(norte[i]) && !norteVal.includes(norte[i])) {
            norteVal.push(norte[i]);
        }
    }
    for (i = 0; i <sul.length; i++) {
        if (codValido.includes(sul[i]) && !sulVal.includes(sul[i])) {
            sulVal.push(sul[i]);
        }
    }
    for (i = 0; i <sudeste.length; i++) {
        if (codValido.includes(sudeste[i]) && !sudesteVal.includes(sudeste[i])) {
            sudesteVal.push(sudeste[i]);
        }
    }
    console.log('Pacotes v??lidos Centro-Oeste: ' + centroOesteVal);
    console.log('Pacotes v??lidos Nordeste: ' + nordesteVal);
    console.log('Pacotes v??lidos Norte: ' + norteVal);
    console.log('Pacotes v??lidos Sul: ' + sulVal);
    console.log('Pacotes v??lidos Sudeste: ' + sudesteVal);
    
    console.log('Quest??o 5 ')
    defineVendedor(barcodes);
    console.log('Pacotes vendedor 123: ' + vendedor123.length);
    console.log('Pacotes vendedor 124: ' + vendedor124.length);
    console.log('Pacotes vendedor 584: ' + vendedor584.length);
    console.log('Pacotes vendedor 654: ' + vendedor654.length);
    console.log('Pacotes vendedor 845: ' + vendedor845.length);
    console.log('Pacotes vendedor 874: ' + vendedor874.length);

    console.log('Quest??o 6 ')
    produtoDestino();

    console.log('Destino Centro-Oeste | Produto Joias: ' + centroOesteJoias);
    console.log('Destino Centro-Oeste | Produto Bebidas: ' + centroOesteBebidas);
    console.log('Destino Centro-Oeste | Produto Brinquedos: ' + centroOesteBrinq);
    console.log('Destino Centro-Oeste | Produto Eletr??nicos: ' + centroOesteEletr);
    console.log('Destino Centro-Oeste | Produto Livros: ' + centroOesteLivros);
    console.log('Destino Nordeste | Produto Joias: ' + nordesteJoias);
    console.log('Destino Nordeste | Produto Bebidas: ' + nordesteBebidas);
    console.log('Destino Nordeste | Produto Brinquedos: ' + nordesteBrinq);
    console.log('Destino Nordeste | Produto Eletr??nicos: ' + nordesteEletr);
    console.log('Destino Nordeste | Produto Livros: ' + nordesteLivros);
    console.log('Destino Norte | Produto Joias: ' + norteJoias);
    console.log('Destino Norte | Produto Bebidas: ' + norteBebidas);
    console.log('Destino Norte | Produto Brinquedos: ' + norteBrinq);
    console.log('Destino Norte | Produto Eletr??nicos: ' + norteEletr);
    console.log('Destino Norte | Produto Livros: ' + norteLivros);
    console.log('Destino Sul | Produto Joias: ' + sulJoias);
    console.log('Destino Sul | Produto Bebidas: ' + sulBebidas);
    console.log('Destino Sul | Produto Brinquedos: ' + sulBrinq);
    console.log('Destino Sul | Produto Eletr??nicos: ' + sulEletr);
    console.log('Destino Sul | Produto Livros: ' + sulLivros);
    console.log('Destino Sudeste | Produto Joias: ' + sudesteJoias);
    console.log('Destino Sudeste | Produto Bebidas: ' + sudesteBebidas);
    console.log('Destino Sudeste | Produto Brinquedos: ' + sudesteBrinq);
    console.log('Destino Sudeste | Produto Eletr??nicos: ' + sudesteEletr);
    console.log('Destino Sudeste | Produto Livros: ' + sudesteLivros);

    console.log('Quest??o 7 ')

    defineDestino();

    norteCO.push(centroOesteVal);
    norteCO.push(norteVal);
    
    console.log('Pacotes do caminh??o para a regi??o Norte: ' + norteCO);

    console.log('Quest??o 8 ')
   
    norteCO2.push(norteVal);
    norteCO2.push(centroOesteVal);

    console.log('Pacotes do caminh??o para a regi??o Norte em ordem de carga: ' + norteCO2);

    console.log('Quest??o 9 ')
    defineProduto();

    for (i = 0; i < norteCO2.length; i++) {
        if (tipoProduto[i] != '001') {
            norteCO3.push(tipoProduto[i]);
        } else {
            norteCO3.push(tipoProduto[i]);
        }
    }
    console.log('Pacotes do caminh??o para a regi??o Norte em nova ordem de carga: ' + norteCO2);



    console.log('Quest??o 10 ')
    console.log('Pacotes inv??lidos: ' + codInval);
