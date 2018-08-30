window.addEventListener('load', () => {
    document.querySelectorAll(".modal-toggler").forEach((e) => {

        e.addEventListener('click', () => {
            //Lendo o id do data-modal
            let idModal = e.attributes["data-modal"].value;

            //Chamando o modal pelo id
            let modal = document.getElementById(idModal);

            //Procurando o elemento que possui a classe 'modal-disposal' de
            //dentro do proprio modal
            let disposal = modal.querySelector(".modal-disposal");

            //Se existir um modal-disposal...
            if (disposal) {

                //Coloca um evento de click nele retirando o 'modal-show' do modal
                disposal.addEventListener('click', () => {
                    modal.classList.remove('modal-show');
                });
            }

            modal.classList.toggle('modal-show');
        });
    });
});

