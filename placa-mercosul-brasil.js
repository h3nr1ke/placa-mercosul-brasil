/**
 * Converte a placa atual Brasileira para o novo formato Mercosul, inclui também um validador e máscara
 * @author  Henrique Deodato <opensource@apps.etc.br>
 * @see  http://www.denatran.gov.br/download/Resolucoes/Resolucao5902016.pdf
 * @see  http://www.denatran.gov.br/images/Resolucoes/Resolucao7412018.pdf  
 * @see  https://pt.wikipedia.org/wiki/Placas_de_identifica%C3%A7%C3%A3o_de_ve%C3%ADculos_no_Mercosul#cite_note-Res741-22 
 */
"use strict";

var ClassPlacaMercosul = class PlacaMerosul {

    /**
     * Gera um numero aleatorio entre 0 a 9
     * @return {integer} um numero aleatorio
     */
    _createRandonNumber (){
        let n = 9;
        return Math.round(Math.random()*n);
    }
    /**
     * gera um string entre A e Z
     * @return {string} uma string aleatoria
     */
    _createRandonString (){
        let n = 25; // intervalo de valorees
        let i = 65  // menor valor possivel

        // gera um numero estre 65 e 90 e retorna a string correspondente ao codigo ASCII
        return String.fromCharCode( Math.round( Math.random()*n ) + i );
    }

    /**
     * Gera uma placa válida e aleatória
     * @return {string} a placa gerada
     */
    _generate (){
        let n1 = this._createRandonString(),
        n2 = this._createRandonString(),
        n3 = this._createRandonString(),
        n4 = this._createRandonNumber(),
        n5 = this._createRandonString(),
        n6 = this._createRandonNumber(),
        n7 = this._createRandonNumber();

        let placa = ""+n1+n2+n3+n4+n5+n6+n7;

        return placa;
    }

    /**
     * Retorna o a letra correspondente para alterar a placa antiga
     */
    _conversionTable(number){
        let table = ["A","B","C","D","E","F","G","H","I","J"];
        if( typeof number == "number" && number >= 0 && number <= 9 ){
            return table[number];
        }
        else{
            console.log(`${number} fora do range, deve ser de 0 até 9`);
            return number;
        }
    }

    /**
     * Valida se a placa informada eh valida ou nao
     * @param  {string} placa valor a ser validado
     * @return {boolean}     true se valida, false se não...
     */
    _validate(placa){
        let placaTemp = placa.replace(/[^0-9A-Za-z]/g,"");
        let regex = /^([a-zA-Z]{3}[0-9]{4})|([a-zA-Z]{3}[0-9][a-zA-Z][0-9]{2})$/; 
        return regex.test(placaTemp);
    }

    /**
     * Converte uma placa do formato antigo para o formato novo
     * @param {string} placa 
     * @return {string} placa formatada ou a string informada caso nao seja no formato necessario
     */
    _convert(placa){
        // eh uma placa antiga?
        let regexPlacaAntiga = /^([a-zA-Z]{3})([0-9])([0-9])([0-9]{2})$/;
        if( regexPlacaAntiga.test(placa) ){
            let _t = this;
            return placa.replace(regexPlacaAntiga,function (st,m1,m2,m3,m4) { 
                return ""+m1+m2+ _t._conversionTable( parseInt(m3) )+m4;
            });
        }
        else{
            console.log(`${placa} não está no formato antigo, conversão não realizada`);
            return placa;
        }
    }

    // metodo para a geracao
    get generate(){
        return this._generate;
    }

    // metodo para a validacao
    validate(placa){
        return this._validate(placa);
    }

    // metodo para a conversao
    convert(placa){
        return this._convert(placa);
    }

    // aplica a mascara para a placa informada
    mask(placa){
        if( this._validate(placa) ){
            return placa.replace(/^(.{3})(.{4})$/, '$1 $2');
        }
        else{
            console.log(`${placa} não é uma placa válida, máscara não aplicada`);
            return placa;
        }
    }

    // remove everything that is not a number
    unmask(placa){
        if( typeof placa == "string" ){
            return placa.replace(/[^0-9A-Za-z]/g,"");
        }
        else{
            console.log(`${placa} não é válido para esta operção [unmask], por favor informe uma string nos seguintes formatos AAA-9999, AAA 9999, AAA9999 ou AAA9A99 `);
            return placa;
        }
    }
};

module.exports = ClassPlacaMercosul;