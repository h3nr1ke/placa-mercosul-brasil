# Gerenciador de Placas Mercosul Brasil

Converte a placa atual Brasileira para o novo formato Mercosul, inclui também um validador e máscara

## Status
[![Build Status](https://travis-ci.org/h3nr1ke/placa-mercosul-brasil.svg?branch=master)](https://travis-ci.org/h3nr1ke/placa-mercosul-brasil)

## Instalação

    npm i placa-mersocul-brasil

## Como utilizar

importar o item

    var ClassPlacaMercosul = require('placa-mersocul-brasil');

criar uma nova var para a classe importada

    var placa = new ClassPlacaMercosul();

gera uma nova PLACA já no novo formato

    var newPlaca = placa.generate();

valida uma PLACA (String)

    var isValidPlacaAntiga = placa.validate("ABC1234");
    var isValidPlacaNova = placa.validate("ABC1C34");

aplica a máscara na PLACA (String)

    var maskedPLACA = placa.mask("ABC1D23"); // ABC 1D23

remove a máscara da PLACA (String) (remove qualquer coisa que não seja letra ou número)

    var unmaskedPlaca = placa.unmask("ABC 1D23"); // ABC1D23

Converte uma placa no formato antigo para o novo padrão, seguindo as regras definidas na resolução do [DENATRAN](http://www.denatran.gov.br/images/Resolucoes/Resolucao7412018.pdf)

    var newPlacaNovoFormato = placa.convert("ABC9876"); // ABC9I76


Simple assim =)

## Café?

Se você achou este plugin útil, considere fazer um doação

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=h3nr1ke%40gmail.com&currency_code=USD&source=url)
