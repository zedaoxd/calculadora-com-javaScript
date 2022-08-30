// function criaCalculadora() {
//     return {
//         display: document.querySelector('.display'),

//         inicia() {
//             this.clickBotoes();
//             this.pressionaEnter();
//         },

//         btnParaDisplay(texto) {
//             this.display.value += texto;
//         },

//         clearDiplay() {
//             this.display.value = '';
//         },

//         apagarUltimo() {
//             this.display.value = this.display.value.slice(0, -1);
//         },

//         fazConta() {
//             let conta = this.display.value;
//             try {
//                 conta = eval(conta);
//                 if (!conta) {
//                     alert('Conta inválida');
//                     return;
//                 }
//                 this.display.value = String(conta);
//             } catch {
//                 alert('Conta inválida');
//                 return;
//             }
//         },

//         pressionaEnter() {
//             this.display.addEventListener('keyup', (e) => {
//                 if (e.key === 'Enter') {
//                     this.fazConta();
//                 }
//             });
//         },

//         clickBotoes() {
//             document.addEventListener('click', (e) => {
//                 const el = e.target;
//                 if (el.classList.contains('btn-num')) {
//                     this.btnParaDisplay(el.innerText);
//                 }

//                 if (el.classList.contains('btn-clear')) {
//                     this.clearDiplay();
//                 }

//                 if (el.classList.contains('btn-del')) {
//                     this.apagarUltimo();
//                 }

//                 if (el.classList.contains('btn-eq')) {
//                     this.fazConta();
//                 }
//             });
//         },
//     };
// }

// const calculadora = criaCalculadora();
// calculadora.inicia();


function Calculadora() {
    const _display = document.querySelector('.display');

    this.inicia = function () {
        clickBotoes();
        pressionaEnter();
    }

    function btnParaDisplay(texto) {
        _display.value += texto;
    }

    function clearDiplay() {
        _display.value = '';
    }

    function apagarUltimo() {
        _display.value = _display.value.slice(0, -1);
    }

    function fazConta() {
        let conta = _display.value;
        try {
            conta = eval(conta);
            if (!conta) {
                alert('Conta inválida');
                return;
            }
            _display.value = String(conta);
        } catch {
            alert('Conta inválida');
            return;
        }
    }

    function pressionaEnter() {
        document.addEventListener('keyup', (e) => { if (e.key === 'Enter') fazConta(); });
    }

    function clickBotoes() {
        document.addEventListener('click', (e) => {
            const el = e.target;
            if (el.classList.contains('btn-num')) btnParaDisplay(el.innerText);
            if (el.classList.contains('btn-clear')) clearDiplay();
            if (el.classList.contains('btn-del')) apagarUltimo();
            if (el.classList.contains('btn-eq')) fazConta();
            _display.focus();
        });
    }
}

const calculadora = new Calculadora();
calculadora.inicia();
