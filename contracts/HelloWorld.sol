// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// Define um contrato nomeado por Hello Wolrd!
contract HelloWorld {

   // Declara uma variável de estado "message" do tipo string
   string public message;

   // O constructor é executado na inicialização do contrato.
   constructor(string memory initMessage) {
      // Armazena um valor do tipo string  na variável de armazenamento "message" do contrato
      message = initMessage;
   }

   // Uma função que aceita uma mensagem do tipo string e faz a atualização da variável de armazenamento
   function update(string memory newMessage) public {
      message = newMessage;
   }
}
