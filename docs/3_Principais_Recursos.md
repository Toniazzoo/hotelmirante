# 3. Principais Recursos e Funcionalidades

O sistema será responsável pela seguintes funcionalidades:

*   Check-in  e Check-out - O sistema pode realizar a entrada e saída dos hóspedes;
*   Locação de quartos e disponibilidade - O sistema mostra se o quarto está disponível e realiza a locação;
*   Criação de login de clientes.

## 3.1 Requisitos Funcionais

RF.001 - O sistema deve permitir a criação de logins de acesso ao sistema;

RF.002 - O sistema deve permitir o cadastramento de uma estadia;

RF.003 - O sistema deve permitir a inclusão, alteração, visualização e remoção de hóspedes do hotel;

RF.004 - O sistema deve permitir a inclusão, alteração, visualização e remoção dos tipos de acomodação oferecidos pelo hotel;

RF.005 - O sistema deverá permitir o registro de feedback do cliente.

  

## 3.2 Requisitos Não Funcionais 

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

RN.009 - No detalhamento da reserva é necessário as informações como:

*   Data do Check-in;
*   Data do Check-out;
*   Quantidade de quartos;
*   Quantidade de adultos;
*   Quantidade de crianças;
*   Código de desconto.

RN.010 - Na reserva, após selecionar a opção “Pesquisar", o sistema deverá mostrar fotos e detalhes de quartos de hoteis disponíveis na nossa companhia, para as datas e especificações detalhadas pelo hóspede.

RN.011 - Após a seleção de um quarto, o sistema deve solicitar as seguintes informações:

*   Nome completo;
*   Telefone;
*   RG;
*   CPF;
  

RN.012 - Depois das informações completas o sistema deve ir para o setor “Pagamento”, que pode ser realizado via cartão de crédito ou débito ou pix

RN.013 - No pagamento com cartão de crédito deverá ser incluído as seguintes informações:

*   Número do cartão;
*   Titular do cartão;
*   Validade;
*   CVV;
*   Quantidade de parcelas.


RN.014 - No pagamento com cartão de débito deverá ser incluído as seguintes informações:

*   Número do cartão;
*   Titular do cartão;
*   Validade;
*   CVV;
  

RN.015 - No pagamento com Pix o sistema deverá gerar um código para o pagamento via QR code.

RN.016 - Após o pagamento o sistema deve apresentar uma tela de confirmação com a mensagem “Reserva concluída com sucesso!”.

RN.017 - Os funcionários poderão incluir novos hóspedes que não realizaram a reserva online.

RN.018 - Os funcionários poderão alterar os dados dos hóspedes e informações da reserva.

RN.019 - Os funcionários poderão visualizar as reservas realizadas pelos hóspedes.

RN.020 - Os funcionários poderão remover hóspedes após o Check-out.

RN.021 - Os dados necessários para realizar ações do hóspede: 

*   Nome
*   CPF
*   E-mail

RN.022 - Os funcionários poderão incluir novas acomodações que serão oferecidas pelo hotel.

RN.024 - As informações necessárias para incluir uma acomodação são:

*   Código da acomodação;
*   Descrição da acomodação;
*   Quantidade de unidades desse tipo de acomodação existe no hotel;
*   Número de pessoas adultas e número de crianças que este quarto comporta;
*   Preço da diária.

  

RN.025 - Os funcionários poderão alterar as informações das acomodações do hotel.

RN.026 - Os funcionários poderão visualizar as informações das acomodações do hotel.

RN.027 - Os funcionários poderão remover as acomodações do hotel caso alguma já esteja reservada. 

RN.028 - Os dados necessários para realizar ações do quarto:

*   Código do quarto

RN.029 - Os clientes poderão enviar feedbacks, selecionando a aba "Avaliações”

RN.030 - Nesta aba eles responderão um formulário contendo as questões:

*   Como avaliam o nosso atendimento?
*   Como avaliam a nossa infraestrutura?