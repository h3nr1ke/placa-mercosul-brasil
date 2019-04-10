var assert = require('assert');
var ClassPlacaMercosul = require('../placa-mercosul-brasil.js');
var placa = new ClassPlacaMercosul();

describe('Placa Mercosul Brasil', function() {
  describe('validate()', function() {

    it("Deve acusar a placa ABC1D23 como válido", () => {
      let isValid = placa.validate("ABC1D23");
      assert.equal(isValid, true);
    });

    it("Deve acusar a placa ABC1234 como válido (FORMATO ANTIGO NO BRASIL)", () => {
      let isValid = placa.validate("ABC1234");
      assert.equal(isValid, true);
    });

    it("Deve acusar a placa 1234ABC como inválido ", () => {
      let isValid = placa.validate("1234ABC");
      assert.equal(isValid, false);
    });
  });
  describe('generate()', function() {
    it("Deve gerar um placa válida aleatória", () => {
      let _placa = placa.generate();
      let isValid = placa.validate(_placa);
      assert.equal(isValid, true);
    });
  });
  describe('unmask()', function() {
    it("Deve remover a máscara da placa ABC-1D23", () => {
      let _placa = placa.unmask("ABC-1D23");
      assert.equal(_placa, "ABC1D23");
    });
    it("Deve remover a máscara da placa ABC 1D23", () => {
      let _placa = placa.unmask("ABC 1D23");
      assert.equal(_placa, "ABC1D23");
    });
  });
  describe('mask()', function() {
    it("Deve aplicar a máscara da placa ABC1D23", () => {
      let _placa = placa.mask("ABC1D23");
      assert.equal(_placa, "ABC 1D23");
    });
    it("Não deve aplicar a máscara na placa 123ABCD", () => {
      let _placa = placa.mask("123ABCD");
      assert.equal(_placa, "123ABCD");
    });
  });
  describe('convert()', function() {
    it("Deve converter a placa antiga ABC9076 para ABC9A76", () => {
      let _placa = placa.convert("ABC9076");
      assert.equal(_placa, "ABC9A76");
    });
    it("Deve converter a placa antiga ABC9976 para ABC9J76", () => {
      let _placa = placa.convert("ABC9976");
      assert.equal(_placa, "ABC9J76");
    });
  });
});

