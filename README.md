# Verificação das verções
- node --version
- ng --version

 > node < 10
 > angular 8

# Comandos start projeto
- ng new curso-senior-plataforma
- cd curso-senior-plataforma
- adicionar dependencias no package.json
```
	"dependencies": {}
```
- npm i
- Ajustar src/polyfills.ts
- Ajustar tslint.json
- Ajustar tsconfig.json
- Ajustar angular.json
  - garantir que  "aot": true,
  - add styles e script
- Criar o server.js

- npm start


- Ajustar scripts package.json
- Ajustart arquivo hosts [Tutorial](https://tecnoblog.net/199539/editar-arquivo-hosts-windows/)
  - 127.0.0.1   <NOME_DA_SUA_MAQUINA>.senior.com.br
- Tecnologia > customização > aplicativos
- Tecnologia > Menus e telas

1 - Baixar ou clonar o projeto https://github.com/falexandre/curso-senior-plataforma
2 - npm install -g @angular/cli@8.3.29
3 - entrar na pasta do passo 1 e abrir powershell
4 - efetuar a instalação: npm install
5 - Ajustar o arquivo C:\Windows\System32\drivers\etc\hosts adicionar 127.0.0.1   <NOME_DA_SUA_MAQUINA>.senior.com.br
6 - efetuar inicialização com plataforma logada no navegador padrão com comando: npm start