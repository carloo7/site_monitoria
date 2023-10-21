function abrirPopUp() {
    // Defina o tamanho do pop-up como um quadrado de 328x328 pixels, mantendo a mesma proporção
    var size = Math.min(window.innerWidth * 0.8, window.innerHeight * 0.8, 508);
    var width = size;
    var height = size; 
    var left = (window.innerWidth - width) / 2; // Centralize o pop-up horizontalmente
    var top = (window.innerHeight - height) / 2; // Centralize o pop-up verticalmente
    
    var popup = window.open('login.html', 'popup', 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top);
}
