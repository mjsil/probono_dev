# PROBONO

### Funcionamento:
#### Criando usuário:
###### -> O usuário é criando informando nome, cpf, email, senha e uma flag de provider para determinar quando o usuário é um advogado ou não, logo depois de criado o usuário é mandado para a tela de login para poder logar na aplicação.

#### Fazendo login:
###### -> O usuário é autenticado com email e senha e é gerado um token de acesso (JWT), assim que logado o usuário é mandado para a tela de Dashboard onde são listados todos os seu Processos e Progressos.

#### Processos:
###### -> Criando: o usuário (advogado) pode criar um processo informando apenas o número do Processo e o CPF do cliente que o mesmo se refere.
###### -> Listando: o usuário (advogado) tem acesso a lista de todos os Processos que pertence a ele assim que acessa o Dashboard.

#### Progressos:
###### -> Criando: o usuário (advogado) pode criar um progresso informando apenas o número do Processo, o Generic_Title que irá servir para fazer a tradução para uma linguagem que o cliente possa ter entendimento mais fácil, Details que pode ser considerado como algum detalhe do progresso (nome do cliente, nome da empresa), Data e Hora.
###### -> Listando: qualquer usuário tem acesso a listagem do Progresso do Processo, desde que o mesmo pertença a ele.

#### Regras/Trasução:
###### -> Criando: o usuário (advogado) pode criar uma Regra informando apenas a Generic_Title e a sua Tradução a regra criada irá pertencer apenas ao advogado que crio-lá.
###### -> Listando: o usuário (advogado) pode listar todas as regras que pertencem a ele.
###### -> Tradução: quando o usuário logado na aplicação for um cliente ao listar os Progressos de um Processo o sistema irá girar todos os caracteres especiais do Generic_Title e deixalo em letras minusculas, esse novo Generic_Title será enviado para a API que irá retornar a Tradução se existir daquela regra. 

#### Compilação Back-End:
##### 1) cd Back-End
##### 2) yarn ou npm install
##### 2) yarn dev ou npm dev

#### Compilação Front-End:
##### 1) cd Front-End
##### 2) yarn ou npm install
##### 2) yarn start ou npm start

#### Compilação Mobile:
##### 1) cd Mobile
##### 2) yarn ou npm install
##### 2) yarn start ou npm start


## Segue imagens da aplicação Back-End

![create](https://user-images.githubusercontent.com/42494117/84097700-ac304d00-a9db-11ea-84c9-4b0c4eedb800.png)
![session](https://user-images.githubusercontent.com/42494117/84097711-af2b3d80-a9db-11ea-802c-8cac70ae3ff8.png)
![processCreate](https://user-images.githubusercontent.com/42494117/84097736-bce0c300-a9db-11ea-8afc-8cae1a348918.png)
![listProcesses](https://user-images.githubusercontent.com/42494117/84097746-c407d100-a9db-11ea-8a7b-823b6062a6be.png)
![progressCreate](https://user-images.githubusercontent.com/42494117/84097753-cc600c00-a9db-11ea-86b1-c9671cd6632e.png)
![listProgresses](https://user-images.githubusercontent.com/42494117/84097761-d255ed00-a9db-11ea-8418-01c639b902b4.png)
![ruleCreate](https://user-images.githubusercontent.com/42494117/84097774-dda91880-a9db-11ea-86a6-881631bfe443.png)
![showRule](https://user-images.githubusercontent.com/42494117/84097777-e26dcc80-a9db-11ea-8da5-58162b6a8bc0.png)

## Segue imagens da aplicação Front-End

![login](https://user-images.githubusercontent.com/42494117/84099695-95402980-a9e0-11ea-8067-62138b57b7a4.png)
![register](https://user-images.githubusercontent.com/42494117/84099706-9cffce00-a9e0-11ea-93cb-2b4f7c6a52e1.png)
![processos](https://user-images.githubusercontent.com/42494117/84099709-a25d1880-a9e0-11ea-87a9-42ce5755db49.png)
![progressos](https://user-images.githubusercontent.com/42494117/84099712-a4bf7280-a9e0-11ea-86e6-2612c672718d.png)
![dashboard](https://user-images.githubusercontent.com/42494117/84099734-af7a0780-a9e0-11ea-872d-703edb9cdc75.png)
![dashboard2](https://user-images.githubusercontent.com/42494117/84099746-b43ebb80-a9e0-11ea-9045-d16d29925088.png)
