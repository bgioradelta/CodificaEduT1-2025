// Codifica Edu
// 20:01
if(indice < 0 || indice > this.length) throw new RangeError("Índice fora dos limites")
        if(indice === 0) return this.inserirInicio(valor)    
        if(indice === this.length) return this.inserirFim(valor)
            
        let atual = this.head
        
        for(let i = 0; i < indice; i++){
            atual = atual.proximo
        }

        let novo = new Node(v)
        let noAnterior = atual.anterior

        noAnterior.proximo = novo
        novo.anterior = noAnterior