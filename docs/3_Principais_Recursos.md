# 3. Principais Recursos e Funcionalidades

O sistema será responsável pela seguintes funcionalidades:

*   Check-in  e Check-out - O sistema pode realizar a entrada e saída dos hóspedes;
*   Locação de quartos e disponibilidade - O sistema mostra se o quarto está disponível e realiza a locação;
*   Criação de login de clientes.

## 3.1 Requisitos Funcionais e Não Funcionais



**RF.001 - O sistema deve permitir a criação de logins de acesso ao sistema:**

RN.001- O login “Cliente” será destinado a pessoas físicas que desejarem usufruir dos serviços do hotel.

RN.002 - O login “Reserva” se destinará exclusivamente aos funcionários que trabalham no setor de reserva dos quartos e registro de clientes no sistema.

RN.003 - Para a criação do cadastro de pessoa física são necessários os seguintes dados: 

*   Nome Completo;
*   E-mail;
*   Senha.

RN.004 - Com os dados preenchidos o sistema deve salvar os dados das pessoas físicas e criar seu login no sistema.

RN.005 - Em caso de perda de senha, na aba selecionada “Esqueci minha senha” o sistema deverá enviar uma mensagem de verificação para o e-mail cadastrado.

RN.006 - As alterações de dados pessoais no sistema devem solicitar o login e senha.

RN.007 - Os dados que poderão ser alterados do cliente pessoa física são:

*   Nome Completo;
*   E-mail.

RN.008 - Os dados solicitados para Login são:

*   E-mail;
*   Senha.

  

**RF.002 - O sistema deve permitir o cadastramento de uma estadia**

RN.009 - No detalhamento da reserva é necessário as informações como:

*   Data do Check-in;
*   Data do Check-out;
*   Quantidade de quartos;
*   Quantidade de adultos;
*   Quantidade de crianças;
*   Tipo Acomodação;
*   Código de desconto.

  

RN.010 - Na reserva, após selecionar a opção “Pesquisar", o sistema deverá mostrar fotos e detalhes de quartos de hoteis disponíveis na nossa companhia, para as datas e especificações detalhadas pelo hóspede.

RN.011 - Após a seleção de um quarto, o sistema deve solicitar as seguintes informações:

*   Nome completo;
*   Telefone;
*   RG;
*   CPF;

  

**RF.003 - O sistema deve realizar o pagamento da estadia.** 

RN.12 - Para realizar o pagamento é preciso informar:

*   Valor;
*   Parcelas;
*   Tipo de pagamento;
*   Código de Desconto;

RN.013 - O sistema deve calcular o valor das parcelas dividindo o valor final pela quantidade de parcelas.

RN.014 - O sistema deve realizar a verificação do código de desconto, informando se ele é válido e mostrar a porcentagem de desconto.

RN.015 - O sistema deve realizar o cálculo do desconto, subtraindo porcentagem de desconto do valor final da hospedagem, mostrando o valor final.

RN.016 - Quando o tipo de pagamento for selecionado como cartão o usuário deverá adicionar um cartão.

RN.017 - Para o cartão ser adicionado deverá ser incluído as seguintes informações:

*   Número do cartão;
*   Titular do cartão;
*   Validade;
*   CVV;

RN.018 - No pagamento com Pix o sistema deverá gerar um código para o pagamento via QR code.

RN.019 - Após o pagamento o sistema deve apresentar uma tela de confirmação com a mensagem “Reserva concluída com sucesso!”.

  

**RF.004 - O sistema deve permitir a inclusão, alteração, visualização e remoção de hóspedes do hotel.**

RN.020 - Os funcionários poderão incluir novos hóspedes que não realizaram a reserva online.

RN.021 - Os funcionários poderão alterar os dados dos hóspedes e informações da reserva.

RN.022 - Os funcionários poderão visualizar as reservas realizadas pelos hóspedes.

RN.023 - Os funcionários poderão remover hóspedes após o Check-out.

RN.024 - Os dados necessários para realizar ações do hóspede: 

*   Nome
*   CPF
*   E-mail

  

**RF.005 - O sistema deve permitir a inclusão, alteração, visualização e remoção dos tipos de acomodação oferecidos pelo hotel**.

RN.025 - Os funcionários poderão incluir novas acomodações que serão oferecidas pelo hotel.

RN.026 - As informações necessárias para incluir uma acomodação são:

  

*   Código da acomodação;
*   Descrição da acomodação;
*   Quantidade de unidades desse tipo de acomodação existe no hotel;
*   Número de pessoas adultas e número de crianças que este quarto comporta;
*   Preço da diária.

  

RN.027 - Os funcionários poderão alterar as informações das acomodações do hotel.

RN.028 - Os funcionários poderão visualizar as informações das acomodações do hotel.

RN.029 - Os funcionários poderão remover as acomodações do hotel caso alguma já esteja reservada. 

RN.030 - Os dados necessários para realizar ações do quarto:

*   Código do quarto

  

**RF.006 - O sistema deve permitir a inclusão, alteração, visualização e remoção dos produtos no estoque:**

RN.031 - Os funcionários poderão cadastrar com os seguintes dados:

*   Nome do produto;
*   Tipo do produto;

RN.032 - Após o cadastramento do produto ele poderá informar a quantidade.

RN.033 - Para entrada e saída de produtos o funcionário deverá alterar a quantidade.

RN.034 - Os funcionários terão acesso ao relatório referente a quantidade dos produtos.