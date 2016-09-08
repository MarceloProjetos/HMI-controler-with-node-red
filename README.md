HMI (human machine interface) in Node-RED & MongoDB
========================

This project is an HTML page that accesses a "MQTT" server, that accesses the "Node-red". The Node-Red in turn accesses a MongoDB database which stores the machine records. The Node-red manages all this data and controls a PLC with Modbus TCP server. As in the image below:

![alt tag](https://github.com/MarceloProjetos/HMI-controler-with-node-red/blob/master/images/project idea with node-red.png)

#Jquery Page
![alt tag](https://github.com/MarceloProjetos/HMI-controler-with-node-red/blob/master/images/HMI.png)

#Node-Red flow
![alt tag](https://github.com/MarceloProjetos/HMI-controler-with-node-red/blob/master/images/flow%20node-red.png)

##To setup this project we need to the free softwares below:

| Software | Description |
| -------- | ----------- |
| [Java SE][6]  |If you have not installed, First download and install the most suitable for your system. X64 or i586. |
| [ActiveMQ][2] | MQTT v3.1 support allowing for connections in an IoT environment.  |
| [NodeJS][3]   | Support package npm, is the largest ecosystem of open source libraries in the world. |
| [Node-Red][1] | Node-RED is a tool for wiring together hardware devices, APIs and online services. |
| [MongoDB][5]  | It is a graphical tool for control together hardware devices, online services and others NPM library. |

I tested the following procedure in Windows 7 / Windows 8.1 and Windows 10. 
Although this project works on linux, I make this in Windows because I am using a [PIPO X9][7]

#Install environment 

##1-Broker Installation "ActiveMQ" 

Access the site [ActiveMQ][2]
Look for "Downloads" and download the version **"Windows Distribution"**

Unzip the file "apache-activemq-5.13.3.zip" the folder /Development
In a terminal window enter the following command

    c:/Development/apache-activemq-5.13.3/bin/activemq start

If an error occurred, Maybe you don't have installed "JAVA SE". Download and install the [**"Java SE Development Kit"**][6].

For test open a browser **FireFox** or **Chrome** e connect to port 8161 "http://127.0.0.1:8161/admin/"

Password: **admin**   Login: **admin**

Configuring to start ActiveMQ on Windows Boot.

For systems 64 bits in a terminal window, in root permission, enter the following command

    c:/Desenvolvimento/apache-activemq-5.13.3/bin/win64/InstallService.bat

For systems 32 bits in a terminal window, in root permission, enter the following command

    c:/Desenvolvimento/apache-activemq-5.13.3/bin/win32/InstallService.bat

To verify that it is installed as a service see:

    Control Panel-->Administrative tools-->Services and look for **ActiveMQ**
___
##2-Installation NODE-JS and Python

Access the site [NodeJS][3]

Download the latest LTS version, follow with the default installation. In this example I used the "node-v4.4.5-x64"

Now install the **phyton**. In this tutorial I used [python-2.7.10][8]

Wait for the installation and restart the machine to continue.
___
##3-Installation NODE-RED

Run the following command in the root directory of your Node-RED install

    npm install -g --unsafe-perm node-red

Wait finish installation...

Run the following command in root mode. Of the libraries installation.

    c:\Program Files\nodejs\npm install -g node-red-contrib-modbustcp-no-pooling
    c:\Program Files\nodejs\npm install -g node-red-node-mongodb
    c:\Program Files\nodejs\npm install -g node-red-dashboard
   
Run the command prompt **"node-red -v"**

For test open a browser **FireFox** or **Chrome** e connect to port 1880 **"http://127.0.0.1:1880/#"**

To restore a node-red flow with Ctrl-I command or the menu, "Menu > Import > Clipboard".

Now open the folder in Github **NodeRed\AplanadoraN.txt** and open the file.

Select all **"Ctrl-a"** --> Copy **"Ctrl-c"** --> Past **"Ctrl-v"** all JSON content to the box that appears empty in node-red.

Click "OK" and position the flow where to find, the better.

Ready the NODE-RED is installed!

Now setting to start the  Windows Boot...

Use the Windows Task Scheduler to run at boot.

    C:\Users\xxxxxxx\AppData\Roaming\npm\node-red
    
Note: Sometimes the windows occult the folder **"appdata"**.

###External library NPM at node-red 

If you need a library NPM in your design flows and don't have one in "http://flows.nodered.org". 
You can include an NPM as below:

Install via prompt the library "NPM" chosen. For this example I will use the "https://www.npmjs.com/package/aws-sdk"

To install them globally you need to add the -g flag to the install:   

    npm install -g aws-sdk

Now to access through node-red you need to edit the settings.js file. In my case it is in:

    c:\Users\"Nome"\AppData\Roaming\npm\node_modules\node-red\settings.js
    
Add support the library, add your name in the function **functionGlobalContext**:
My file works like this...

    functionGlobalContext: {
    // os:require('os'),
    // octalbonescript:require('octalbonescript'),
    // jfive:require("johnny-five"),
    // j5board:require("johnny-five").Board({repl:false})
    aws:require('aws-sdk')
    },

Restart the node-red to access "aws" call it in a function block.

    var aws = global.get('aws'); //Now the functions "aws-sdk" are disponible in all flow ...
    aws.config.update({ 
    region: 'us-east-1',
    accessKeyId: 'ALIAITORMWJYRXO00000', 
    secretAccessKey: 'cLuJmpUyg/Khxtb4000000KmqISELc1dW1NoMpfm' 
    });
___
##4-Installation MongoDB

Access the site [MongoDB][5]
Download file mongodb-win32-x86_64-2008plus-ssl-3.2.9-signed.msi or later version.
Run the default full installation.

Once installed MongoDB Create 3 directories to store the data.

    mkdir c:\data
    mkdir c:\data\db
    mkdir c:\data\log
        
In c:\data create one file named "mongod.cfg" containing:

    systemLog:
    destination: file
    path: c:\data\log\mongod.log
    storage:
    dbPath: c:\data\db

Save and close file...

Starting Server MongoDB "**mongod**"

Enter the directory where is installed the binaries and run the command. 

In my case it is ...

    c:\Program Files\MongoDB\Server\3.2\bin>mongod -dbpath c:\data\db

If your system is Windows 32bits

    C:\Program Files\MongoDB\Server\3.2\bin>mongod --journal -dbpath c:\data\db
    
If the Windows firewall ask for permission, click the button to "Allow Access".

Now open another Windows Prompt or "Powershell"

To make a connection to MongoDB server that left running in the previous step.

Enter the directory where you installed the binaries again and run:

    c:\Program Files\MongoDB\Server\3.2\bin\mongo.exe

Você verá o prompt do mongodb, pronto para receber comandos!
Para finalizar o Mongodb, pressione as teclas Ctrl + C no terminal onde o mongod está rodando.

___
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
    
If your system is Windows 32bits

    c:\Program Files\MongoDB\Server\3.2\bin\mongod --journal --config "c:\data\mongod.cfg" --install
    
I wear as webadmin the "**mongobooster**"

Below how are structured as the "Collections" or "Tables" of this project "**parametros**" and "**log_erro**".

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
    
And collection log_erro

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
[7]:http://www.pipo-store.com/pipo-x9-tv-box-8-9-inch-mini-pc.html
[8]:https://www.python.org/downloads/release/python-2712/
