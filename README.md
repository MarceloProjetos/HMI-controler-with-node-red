HMI (human machine interface) in Node-RED & MongoDB
========================

This project is an HTML page that accesses a "MQTT" server, that accesses the "Node-red". The Node-Red in turn accesses a MongoDB database which stores the machine records. The Node-red manages all this data and controls a PLC with Modbus TCP server.

![alt tag](https://github.com/MarceloProjetos/HMI-controler-with-node-red/blob/master/images/project idea with node-red.png)

#Jquery Page
![alt tag](https://github.com/MarceloProjetos/HMI-controler-with-node-red/blob/master/images/HMI.png)

#Node-Red flow
![alt tag](https://github.com/MarceloProjetos/HMI-controler-with-node-red/blob/master/images/flow%20node-red.png)

##To setup this project we need to:

| Software | Description |
| -------- | ----------- |
| [ActiveMQ][2] | MQTT v3.1 support allowing for connections in an IoT environment.  |
| [NodeJS][3]   | Support package npm, is the largest ecosystem of open source libraries in the world. |
| [Node-Red][1] | Node-RED is a tool for wiring together hardware devices, APIs and online services. |
| [MongoDB][5]  | It is a graphical tool for control together hardware devices, online services and others NPM library. |

#Install environment in **English** 

##1-Broker Installation "ActiveMQ" 

Access the site [ActiveMQ][2]
Look for "Downloads" and download the version **"Windows Distribution"**

Unzip the file "apache-activemq-5.13.3.zip" the folder /Development
In a terminal window enter the following command

    c:/Development/apache-activemq-5.13.3/bin/activemq start

If an error occurred, Maybe you don't have installed "JAVA". Install [**"Java SE Development Kit"**][6].

For Win64 **jdk-8u102-windows-x64.exe** or **jdk-8u102-windows-i586.exe** for Win32 
___
___
#Install environment in **Portuguese Brazil**

##1-Instalação do Broker "ActiveMQ"

Acessar o site [ActiveMQ][2]
Procure "Downloads" e baixe a versão **"Windows Distribution"**

Descompactar o arquivo "apache-activemq-5.13.3.zip" na pasta /Desenvolvimento

Em uma janela de terminal digite o seguinte comando

    c:/Desenvolvimento/apache-activemq-5.13.3/bin/activemq start

Se ocorrer um erro, talvez você não tenha instalado "JAVA". Instale o [**"Java SE Development Kit"**][6].

Para Win64 **jdk-8u102-windows-x64.exe** ou **jdk-8u102-windows-i586.exe** para Win32 

Para testar abra um browser e conecte na porta 8161 "http://127.0.0.1:8161/admin/"

Senha: **admin**   Login: **admin**

Configurando para iniciar ActiveMQ no Boot.

Para sistemas 64 bits iniciar o ActiveMQ no Boot do windows entre na pasta ACTIVEMQ_HOME/bin/win64

Para sistemas 32 bits iniciar o ActiveMQ no Boot do windows entre na pasta ACTIVEMQ_HOME/bin/win32

Execute InstallService.bat num prompt de comando em root

Para verifcar entre em Painel de Controle->Ferramentas Administrativas -> serviços e procure por ActiveMQ
___
##2-Instalação NODE-JS e Python

Acessar o site [NodeJS][3]

Abaixe a ultima versão LTS, siga com a instalação padrão. Nesse exemplo utilizei a "node-v4.4.5-x64"

Agora instale o phyton ultima versão LTS. Nesse tutorial utilizei "python-2.7.10.amd64"

Aguarde terminara a instalação e reinicie a maquina...
___
##3-Instalação NODE-RED

Run the following command in the root directory of your Node-RED install

    npm install -g --unsafe-perm node-red

Aguarde terminara a instalação...

Entre pelo prompt no modo root em: "C:\Program Files\nodejs" e digite:

    npm install -g node-red-contrib-modbustcp-no-pooling
    npm install -g node-red-node-mongodb
    npm install -g node-red-dashboard

Execute no prompt de comando "node-red -v"

Abra um brower e conecte na porta 1880 "http://127.0.0.1:1880/#"

Para restaurar um fluxo do node-red com o comando Ctrl-I ou pelo menu, "Menu > Import > Clipboard".

Copie e cole todo o conteudo JSON para a caixa que apareceu.

Click em "OK" e posicione o fluxo onde achar, melhor.

Configurando para iniciar no Boot...

Use o agendador de tarefas do Windows para no boot executar.

    C:\Users\xxxxxxx\AppData\Roaming\npm

###Bibliotecas NPM no node-red

Utilizando uma biblioteca no NPM nos fluxos do node-red
Instalar via prompt a biblioteca "NPM" escolhida. Para esse exemplo utilizarei a "aws-sdk"

    https://www.npmjs.com/package/aws-sdk
    npm install aws-sdk

Agora para acessar via node-red você precisa editar o arquivo settings.js. No meu caso fica em:

    c:\Users\"Nome"\AppData\Roaming\npm\node_modules\node-red\settings.js
    
Adicionar suporte a biblioteca, adicione seu nome na função functionGlobalContext:
O meu ficou assim...

    functionGlobalContext: {
    // os:require('os'),
    // octalbonescript:require('octalbonescript'),
    // jfive:require("johnny-five"),
    // j5board:require("johnny-five").Board({repl:false})
    aws:require('aws-sdk')
    },

Reiniciar o node-red e para acessar "aws" pelo node-red coloque dentro de um bloco de funções.

    var aws = global.get('aws'); //Pronto agora utiliza suas funções do aws-sdk...
    aws.config.update({ 
    region: 'us-east-1',
    accessKeyId: 'ALIAITORMWJYRXO00000', 
    secretAccessKey: 'cLuJmpUyg/Khxtb4000000KmqISELc1dW1NoMpfm' 
    });
___
##4-Instalação MongoDB

Acessar o site [MongoDB][5]
Baixar o arquivo mongodb-win32-x86_64-2008plus-ssl-3.2.9-signed.msi ou versão mais atual.
Executar a instalação padrão completa.

Depois de instalado o MongoDB Criar 3 diretorios para armazenar os dados.

    mkdir c:\data
    mkdir c:\data\db
    mkdir c:\data\log
        
Em C:\data criar 1 arquivo de nome "mongod.cfg" contendo:

    systemLog:
    destination: file
    path: c:\data\log\mongod.log
    storage:
    dbPath: c:\data\db

Salvar e fechar...

Inicializando Servidor MongoDB "mongod"

Entrar no diretorio onde esta instalado os binarios. No meu caso é...

    C:\Program Files\MongoDB\Server\3.2\bin\

Execute o comando:

    C:\Program Files\MongoDB\Server\3.2\bin>mongod -dbpath c:\data\db

Em Systemas 32bits

    C:\Program Files\MongoDB\Server\3.2\bin>mongod --journal -dbpath c:\data\db

Se o firewall do Windows solicitar permissão, clique no botão “Permitir Acesso”
Se aparecer "waiting for connections" ou outra coisa que não seja voltar ao prompt, ele provavelmente esta rodando OK!

Para efetuar uma conexão ao Servidor MongoDB que deixou rodando no passo anterior.
Deixe o servidor rodando e abra um novo "Prompt" ou "Powershell"
Entrar no diretorio onde esta instalado os binarios.

    c:\Program Files\MongoDB\Server\3.2\bin\
    
Execute:

    mongo.exe
    
Você verá o prompt do mongodb, pronto para receber comandos!
Para finalizar o Mongodb, pressione as teclas Ctrl + C no terminal onde o mongod está rodando.

###Testando e criando Coleções ou Tabelas

Entrar no prompt onde executou "mongo" e execute

    use db 					            <--Cria um banco chamado db
    db.createCollection('parametros')	<--Cria uma collection chamada parametros
    db.createCollection('log_erro')		<--Cria uma collection chamada log_erro
    show dbs 				            <--Monstra nome dos bancos e seus tamanhos
    show collections			        <--Mostra as coleçoes no banco atual
    exit					            <--Sai do mongo shell

Instalando o serviço para o MongoDB iniciar automaticamente no boot do windows.

Abra um prompt e entre na pasta onde estão os arquivos binarios.

    c:\Program Files\MongoDB\Server\3.2\bin\mongod --config "c:\data\mongod.cfg" --install
    
Em Systemas 32bits

    c:\Program Files\MongoDB\Server\3.2\bin\mongod --journal --config "c:\data\mongod.cfg" --install
    
Como web admin eu utilizei o mongobooster

Como estão estruturados as Coleções ou tabelas desse projeto "parametros" e log_erro.

    db.createCollection('parametros')
    {
    "_id": "AplanadoraN3",
    "nome": "Aplanadora N3",
    "setor": "Estamparia",
    "parametros": {
    	"encoder": {
    		"fator": 9998,
    		"resolucao": 2500,
    		"perimetro": 400
    	},
    	"velocidade": {
    		"automatico": 100,
    		"manual": 30
    	},
    	"ferramenta": {
    		"passo": 200
    	}
    },
    "estado": {
    	"situacao": {
    		"codigo": 99,
    		"descricao": "Maquina OK"
    	}
    },
    "operador": {
    	"codigo": 1012,
    	"nome": "IRANILDO"
    },
    "os": {
    	"numero": "1231-11",
    	"produto": {
    		"codigo": "XXXXXXXXX",
    		"descricao": "AAAAAABBBBBCCCCC"
    	},
    	"quantidade": 1550,
    	"produzido": 0,
    	"refugo": 0
    },
    "lubrificacao": {
    	"preset": {
    		"MbNovoCiclosUnd": 0,
    		"MbNovoCiclosmil": 1
    	},
    	"ciclos": {
    		"PrsCiclosUnid": 500,
    		"PrsCiclosMil": 0
    	}
    },
    "timestamp": new Date()
    }
    
E

    db.createCollection('log_erro')
    {
    	"_id": "AplanadoraN3",
    	"log_erro": "Aplanadora N3",
    	"log_erro_masagens": {
    	}
    }

___
#Author

[Marcelo Miranda][4]

pxa255@gmail.com

[1]:http://nodered.org
[2]:http://activemq.apache.org/
[3]:https://nodejs.org/
[4]:https://github.com/MarceloProjetos
[5]:https://www.mongodb.com/download-center#community
[6]:http://www.oracle.com/technetwork/pt/java/javase/downloads/jdk8-downloads-2133151.html
