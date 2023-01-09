# **Projeto [Driven Eats](https://yokuny.github.io/projeto3-driveneats/)**

> O site permite de forma fácil a escolha sua refeição, e enviar em seguida o pedido por WhatsApp diretamente para o restaurante.
> 

Esse projeto foi desenvolvido para funcionar perfeitamente em **todos os dispositivos moveis**.

Cada passo do desenvolvimento do projeto foi `versionada` no `GitHub`. Vocês podem acompanhar o processo nos `commits` no [repositório do projeto](https://github.com/Yokuny/projeto3-driveneats).

[O projeto pode ser acessado online aqui <](https://yokuny.github.io/projeto3-driveneats/)

**Neste aplicativo** você pode escolher seu **prato principal**, sua **bebida** e **sobremesa**. Apenas após a seleção dos três itens o **botão para revisão do pedido é liberado**, e ao ser clicado, a revisão do pedido é apresentada, mostrando os **itens selecionados** e o **valor total**.
Confirmando sua escolha seu **nome** e **endereço** são solicitados e o pedido é enviado via **WhatsApp** para a produção.

## Este projeto é sobre

- `Browser Compatibility`: Hoje, é impossível imaginar a Web sem o uso de navegadores. Testemunhamos uma mudança de aplicativos autônomos para `HTML5` e `Progressive Web Apps`, que permitem que os aplicativos funcionem totalmente em um navegador.
- `Responsive Design`: “Design responsivo” é o termo usado para descrever a criação de sites que respondem a `mudanças no tamanho do navegador` para criar algo que `funcione em qualquer dispositivo`.
- `JavaScript`: Cada vez mais a lógica está chegando ao `cliente-side` para ajudar na experiência dos usuário. Além disso o `JavaScript` está até se movendo para o lado do servidor com o `Node.js`.

## ✅ Requisitos

- Versionamento do código
    - [ ]  Versionamento usando Git é obrigatório, crie um **repositório público** no seu perfil do GitHub.
    - [ ]  Faça *commits* a cada funcionalidade implementada.
- *Layout*
    - [ ]  Aplicar layout para *mobile*, seguindo o Figma fornecido (não é necessário implementar um *layout* para *desktop*).
    - [ ]  O topo e o botão de fechar pedido devem ter posicionamento fixo e não rolar com a barra de rolagem.
    - [ ]  Você pode usar imagens e textos aleatórios para ilustrar a página, porém varie o preço em cada item da mesma categoria.
    - [ ]  As fontes utilizadas são: [Righteous](https://fonts.google.com/specimen/Righteous) (nome do restaurante e títulos das categorias) e [Roboto](https://fonts.google.com/specimen/Roboto) (demais textos).
    - [ ]  Para fazer as sombras presentes em alguns elementos, pesquise sobre como aplicar sombras em CSS e brinque com os valores até ficar parecido com as imagens do *layout*.
    - [ ]  Para fazer os produtos rolarem horizontalmente, utilize `overflow-x: scroll`. No modo desktop um *scroll* é exibido, mas no modo celular não.
- Seleção de itens
    - [ ]  Ao clicar sobre um item, ele deve ser marcado como selecionado.
    - [ ]  Ao clicar em um item, caso já exista um item selecionado na mesma categoria, este deve ser desmarcado e o novo item clicado deve ser o novo selecionado.
    - [ ]  Ao clicar em um item já marcado, não é necessário desmarcá-lo.
- Botão de finalizar pedido
    - [ ]  Por padrão, o botão de finalizar pedido deve vir desabilitado. Ao clicar no botão nesse estado, nada deve acontecer.
        - Além de alterar o estilo, use o atributo **disabled** no HTML da tag button.
    - [ ]  Quando o usuário tiver selecionado os itens das três categorias, o botão deve mudar para o estado de habilitado.
- Envio do pedido
    - [ ]  Ao finalizar o pedido, o usuário deverá ser encaminhado para o WhatsApp Web, em conversa com o contato do restaurante, já com uma mensagem padrão preenchida.
    - [ ]  Essa mensagem deverá seguir este formato, o padrão abaixo:
        
        ```
        Olá, gostaria de fazer o pedido:
        - Prato: Frango Yin Yang
        - Bebida: Coquinha Gelada
        - Sobremesa: Pudim
        Total: R$ 27,70
        ```