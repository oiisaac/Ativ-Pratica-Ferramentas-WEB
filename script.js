document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert("Formulário enviado com sucesso!");
    // Limpa todos os campos do formulário
    this.reset(); 
});
