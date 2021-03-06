Obsolete 
Changing the jQuery technology project to Reach + Router
Please consider using "IHM_REACT-ROUTER" 
==========================================================

This project is an HTML page that accesses a "MQTT" server, that accesses the "Node-red". The Node-Red in turn accesses a MongoDB database which stores the machine records. The Node-red manages all this data and controls a PLC with Modbus TCP server. As in the image below:

![alt tag](https://github.com/MarceloProjetos/HMI-controler-with-node-red/blob/master/images/project idea with node-red.png)

#Jquery Page
![alt tag](https://github.com/MarceloProjetos/HMI-controler-with-node-red/blob/master/images/HMI.png)

#Node-Red flow
![alt tag](https://github.com/MarceloProjetos/HMI-controler-with-node-red/blob/master/images/flow%20node-red.png)

#About this Project:
I will combine my passion for computers and electronics in this project, but I believe that many people who try to do something like have same difficulties with with installation tutorials and basic components. Besides at first step with new softwares.

There have already been several challenges and problems with this project, which is why I thought it would be helpful to share my experiences with the world. celso
If you have ideas, please reach out!

##To setup this project we need to the free softwares below:

| Software | Description |
| -------- | ----------- |
| [Java SE][6]  |If you have not installed, First download and install the most suitable for your system. X64 or i586. |
| [ActiveMQ][2] | MQTT v3.1 support allowing for connections in an IoT environment.  |
| [NodeJS][3]   | Support package npm, is the largest ecosystem of open source libraries in the world. |
| [Node-Red][1] | Node-RED is a tool for wiring together hardware devices, APIs and online services. |
| [MongoDB][5]  | It is a graphical tool for control together hardware devices, online services and others NPM library. |

Other software can you use for your development are:

| Software    | Description |
|       --------    | ----------- |
| [Tortoisegit][10] |TortoiseGit provides overlay icons showing the file status, context menu for Git and much more! |
| [7-zip][11]       | 7-Zip is a file archiver with a high compression ratio. |
| [Sublimetext][12] | Sublime Text is a sophisticated text editor for code, markup and prose. Use [packagecontrol][13] together |

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

    npm install -g node-red
    npm install -g bcryptjs

Wait finish installation...

Run the following command in root mode. Of the libraries installation.

    c:\Program Files\nodejs\npm install -g node-red-contrib-modbustcp-no-pooling
    c:\Program Files\nodejs\npm install -g node-red-node-mongodb
    c:\Program Files\nodejs\npm install -g node-red-dashboard
   
Run the command prompt **"node-red -v"**

For test open a browser **FireFox** or **Chrome** e connect to port 1880 **"http://127.0.0.1:1880/#"**

To restore a node-red flow with Ctrl-I command or the menu, "Menu > Import > Clipboard".

Below you will find node-red project.

 ```sh
[{"id":"b01357d9.8e32f8","type":"mqtt in","z":"10900aeb.adaf25","name":"","topic":"financeiro/duplicata/alterar/#","qos":"0","broker":"673dc57b.0c3b2c","x":700,"y":1000,"wires":[["da3a4ae8.ed2278"]]},{"id":"ff7ece03.861f6","type":"debug","z":"10900aeb.adaf25","name":"","active":true,"console":"false","complete":"payload","x":1150,"y":1040,"wires":[]},{"id":"f35260a9.3b4e6","type":"mqtt in","z":"10900aeb.adaf25","name":"","topic":"financeiro/duplicata/inserir","qos":"0","broker":"673dc57b.0c3b2c","x":710,"y":1160,"wires":[["f489ca14.807a78"]]},{"id":"46da0969.7c1b78","type":"debug","z":"10900aeb.adaf25","name":"","active":true,"console":"false","complete":"payload","x":1130,"y":1160,"wires":[]},{"id":"6cba88bf.428848","type":"mqtt in","z":"10900aeb.adaf25","name":"","topic":"financeiro/duplicata/excluir","qos":"0","broker":"673dc57b.0c3b2c","x":710,"y":1260,"wires":[["b482c984.a7a4c8"]]},{"id":"7682c3b3.c1fe1c","type":"debug","z":"10900aeb.adaf25","name":"","active":true,"console":"false","complete":"payload","x":1130,"y":1260,"wires":[]},{"id":"f82c0e0d.e9358","type":"mqtt in","z":"10900aeb.adaf25","name":"","topic":"financeiro/duplicata/imprimir","qos":"0","broker":"673dc57b.0c3b2c","x":720,"y":1360,"wires":[["c05a1ab.96bf3e8"]]},{"id":"d72d9964.6e5908","type":"debug","z":"10900aeb.adaf25","name":"","active":true,"console":"false","complete":"payload","x":1130,"y":1360,"wires":[]},{"id":"e0a073b2.98fca","type":"mqtt in","z":"10900aeb.adaf25","name":"","topic":"financeiro/duplicata/listar","qos":"0","broker":"673dc57b.0c3b2c","x":710,"y":1460,"wires":[["2e907298.e15b1e"]]},{"id":"25de084d.06cf28","type":"debug","z":"10900aeb.adaf25","name":"","active":true,"console":"false","complete":"payload","x":1130,"y":1460,"wires":[]},{"id":"8b7d8878.881248","type":"mqtt in","z":"10900aeb.adaf25","name":"","topic":"financeiro/duplicata/busca","qos":"0","broker":"673dc57b.0c3b2c","x":710,"y":1560,"wires":[["dc3d9e14.d5ac5"]]},{"id":"7bf2762d.0f98a8","type":"debug","z":"10900aeb.adaf25","name":"","active":true,"console":"false","complete":"payload","x":1130,"y":1560,"wires":[]},{"id":"2609576c.c9bb18","type":"mqtt in","z":"10900aeb.adaf25","name":"","topic":"financeiro/duplicata/calcular","qos":"0","broker":"673dc57b.0c3b2c","x":720,"y":1660,"wires":[["f950d58b.6acce8"]]},{"id":"a15903ed.f926d","type":"debug","z":"10900aeb.adaf25","name":"","active":true,"console":"false","complete":"payload","x":1130,"y":1660,"wires":[]},{"id":"437e2893.bde318","type":"inject","z":"10900aeb.adaf25","name":"","topic":"","payload":"{ \"_id\": \"asdfsd45sdfs09ssdfsdfs\" }","payloadType":"json","repeat":"","crontab":"","once":false,"x":90,"y":1000,"wires":[["83815d4d.264c1"]]},{"id":"83815d4d.264c1","type":"mqtt out","z":"10900aeb.adaf25","name":"","topic":"financeiro/duplicata/gravar/mg09xe054","qos":"0","retain":"false","broker":"673dc57b.0c3b2c","x":340,"y":1000,"wires":[]},{"id":"11bec429.b3b43c","type":"inject","z":"10900aeb.adaf25","name":"","topic":"","payload":"inserir","payloadType":"str","repeat":"","crontab":"","once":false,"x":110,"y":1160,"wires":[["325b9e0e.fb0d32"]]},{"id":"325b9e0e.fb0d32","type":"mqtt out","z":"10900aeb.adaf25","name":"","topic":"financeiro/duplicata/inserir","qos":"0","retain":"false","broker":"673dc57b.0c3b2c","x":380,"y":1160,"wires":[]},{"id":"16de55f5.7729ea","type":"inject","z":"10900aeb.adaf25","name":"","topic":"","payload":"excluir","payloadType":"str","repeat":"","crontab":"","once":false,"x":110,"y":1260,"wires":[["4b2a3f12.29c4"]]},{"id":"4b2a3f12.29c4","type":"mqtt out","z":"10900aeb.adaf25","name":"","topic":"financeiro/duplicata/excluir","qos":"0","retain":"false","broker":"673dc57b.0c3b2c","x":380,"y":1260,"wires":[]},{"id":"a4f190e5.7a346","type":"inject","z":"10900aeb.adaf25","name":"","topic":"","payload":"imprimir","payloadType":"str","repeat":"","crontab":"","once":false,"x":120,"y":1360,"wires":[["feab4145.229df"]]},{"id":"feab4145.229df","type":"mqtt out","z":"10900aeb.adaf25","name":"","topic":"financeiro/duplicata/imprimir","qos":"0","retain":"false","broker":"673dc57b.0c3b2c","x":380,"y":1360,"wires":[]},{"id":"7081c732.841638","type":"inject","z":"10900aeb.adaf25","name":"","topic":"","payload":"listar","payloadType":"str","repeat":"","crontab":"","once":false,"x":110,"y":1460,"wires":[["2c29164c.b68a5a"]]},{"id":"2c29164c.b68a5a","type":"mqtt out","z":"10900aeb.adaf25","name":"","topic":"financeiro/duplicata/listar","qos":"0","retain":"false","broker":"673dc57b.0c3b2c","x":370,"y":1460,"wires":[]},{"id":"5b77cb36.b9cc04","type":"inject","z":"10900aeb.adaf25","name":"","topic":"","payload":"busca","payloadType":"str","repeat":"","crontab":"","once":false,"x":110,"y":1560,"wires":[["f9617e5c.307a4"]]},{"id":"f9617e5c.307a4","type":"mqtt out","z":"10900aeb.adaf25","name":"","topic":"financeiro/duplicata/busca","qos":"0","retain":"false","broker":"673dc57b.0c3b2c","x":380,"y":1560,"wires":[]},{"id":"f94bb145.4d3a8","type":"inject","z":"10900aeb.adaf25","name":"","topic":"","payload":"calcular","payloadType":"str","repeat":"","crontab":"","once":false,"x":110,"y":1660,"wires":[["fafd3c0b.1b661"]]},{"id":"fafd3c0b.1b661","type":"mqtt out","z":"10900aeb.adaf25","name":"","topic":"financeiro/duplicata/calcular","qos":"0","retain":"false","broker":"673dc57b.0c3b2c","x":380,"y":1660,"wires":[]},{"id":"f489ca14.807a78","type":"json","z":"10900aeb.adaf25","name":"","x":930,"y":1160,"wires":[["46da0969.7c1b78","9a8bb18.44c755"]]},{"id":"b482c984.a7a4c8","type":"json","z":"10900aeb.adaf25","name":"","x":930,"y":1260,"wires":[["7682c3b3.c1fe1c"]]},{"id":"c05a1ab.96bf3e8","type":"json","z":"10900aeb.adaf25","name":"","x":930,"y":1360,"wires":[["d72d9964.6e5908"]]},{"id":"2e907298.e15b1e","type":"json","z":"10900aeb.adaf25","name":"","x":930,"y":1460,"wires":[["25de084d.06cf28"]]},{"id":"f950d58b.6acce8","type":"json","z":"10900aeb.adaf25","name":"","x":930,"y":1660,"wires":[["a15903ed.f926d"]]},{"id":"dc3d9e14.d5ac5","type":"json","z":"10900aeb.adaf25","name":"","x":930,"y":1560,"wires":[["7bf2762d.0f98a8"]]},{"id":"57fb9f6a.a6b9b","type":"mongodb out","z":"10900aeb.adaf25","service":"_ext_","mongodb":"258dcda0.cc5e32","name":"","collection":"duplicatas","payonly":true,"upsert":false,"multi":false,"operation":"store","x":1220,"y":1000,"wires":[]},{"id":"9a8bb18.44c755","type":"mongodb out","z":"10900aeb.adaf25","service":"_ext_","mongodb":"258dcda0.cc5e32","name":"","collection":"duplicatas","payonly":true,"upsert":false,"multi":false,"operation":"store","x":1200,"y":1200,"wires":[]},{"id":"a578af9f.e7b65","type":"function","z":"10900aeb.adaf25","name":"","func":"return [\n    {\n        id: msg.id,\n        topic: 'financeiro/duplicata/alterado/' + msg.payload._id,\n        payload: msg.payload\n    }, \n    {\n        id: msg.id,\n        topic: 'financeiro/duplicata/erros/' + msg.topic.split('/')[msg.topic.split('/').length - 1],\n        payload: msg.payload\n    }\n];","outputs":"2","noerr":0,"x":1130,"y":1080,"wires":[["50d0ea81.613f24","a42cd5d0.603078"],["d60d6d03.50c37","30b5f3f0.993a9c"]]},{"id":"50d0ea81.613f24","type":"mqtt out","z":"10900aeb.adaf25","name":"","topic":"","qos":"0","retain":"false","broker":"673dc57b.0c3b2c","x":1390,"y":1060,"wires":[]},{"id":"a42cd5d0.603078","type":"debug","z":"10900aeb.adaf25","name":"","active":true,"console":"false","complete":"true","x":1390,"y":1020,"wires":[]},{"id":"da3a4ae8.ed2278","type":"json","z":"10900aeb.adaf25","name":"","x":950,"y":1000,"wires":[["ff7ece03.861f6","57fb9f6a.a6b9b","a578af9f.e7b65"]]},{"id":"30b5f3f0.993a9c","type":"mqtt out","z":"10900aeb.adaf25","name":"","topic":"","qos":"0","retain":"false","broker":"673dc57b.0c3b2c","x":1390,"y":1160,"wires":[]},{"id":"d60d6d03.50c37","type":"debug","z":"10900aeb.adaf25","name":"","active":true,"console":"false","complete":"true","x":1390,"y":1120,"wires":[]},{"id":"673dc57b.0c3b2c","type":"mqtt-broker","z":"10900aeb.adaf25","broker":"192.168.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"258dcda0.cc5e32","type":"mongodb","z":"","hostname":"127.0.0.1","port":"27017","db":"node-red","name":"mongodb"}]
```

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

    C:\Program Files\MongoDB\Server\3.2\bin>mongod --journal --storageEngine=mmapv1 -dbpath c:\data\db
    
If the Windows firewall ask for permission, click the button to "Allow Access".

Now open another Windows Prompt or "Powershell"

To make a connection to MongoDB server that left running in the previous step.

Enter the directory where you installed the binaries again and run:

    c:\Program Files\MongoDB\Server\3.2\bin\mongo.exe

You will see the prompt mongodb, ready to receive your commands!
___
###Testing and creating Collections or Tables

Enter at the prompt where you run "mongo.exe" run commands below:

    use db 					            <--Create a database called db. If exists it enters in the collection.
    db.createCollection('parametros')	<--Create a collection called parametros
    db.createCollection('log_erro')		<--Create a collection called log_erro
    db.createCollection('indice')		<--Create a collection called indice
    show dbs 				            <--Show names of banks and their sizes
    show collections			        <--Displays the collections in the current bank
    exit					            <--Exit to mongo shell or **Ctrl + C**

Installing the service for MongoDB automatically start on Windows **boot**.

Enter the directory where is installed the binaries and run the command.

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
    
Collection log_erro

    db.createCollection('log_erro')
    {
	    "_id": 1,
	    "log_mesagens": {
         /* json message format */
	    }
    }
    
And Indice

    db.createCollection('indice')
    {
        "_id": "indice",
	    "indice_mesagens": 0
    }
___
##5-Configuring access of node-red across settings.js

**DNS**
There are two ways to access a page on the Internet: the domain name "DNS" or "IP ADDRESS" of the servers on which it is hosted. In our case "Node-RED."

For your application to make a simple DNS access or "IP ADDRESS". We need to edit the [settings.js][9] file.

    c:\Users\marcelo.miranda\AppData\Roaming\npm\node_modules\node-red\settings.js
or 

    c:\Users\marcelo.miranda\.node-red\settings.js

The first thing that changed is the node-red port. Change 8080 to 80 as below:

    uiPort: process.env.PORT || 80,
    
The second change was uncomment the line 

    httpAdminRoot: '/admin',
    
Now save the "settings.js" and restart **node-red**
    
With this change your page application its goes::

    http://127.0.0.1:80
    
And now to access your **node-red flow** enter in:

    http://127.0.0.1:80/admin/

And now it is easy to configure your DNS server, for directly access your application. And remember now to access your flow is "IP/admin"!

Now you can create an ALIAS on your DNS server for the IP Project.

| NAME          |   TYPE        |   TARGET      |
| --------      | -----------   |-----------    |
| example.com   |      A        | 192.168.0.X   |

___
##6- PASSWORD in node-red flow

To protect your **node-red flow**, you can enable password. 

The first thing enter the **node_modules** directory:

    c:\Users\marcelo.miranda\AppData\Roaming\npm\node_modules

You need to make a key with this commnand and put your **password**:

    node -e "console.log(require('bcryptjs').hashSync(process.argv[1], 8));" your-password-here

Now save result number and edit the file [settings.js][9] again.

Find and uncomment the lines as bellow and place the generated password on the line.

    adminAuth: {
        type: "credentials",
        users: [{
           username: "admin",
            password: "your generated password",
            permissions: "*"
        }]
    },

Now save the "settings.js" and restart **node-red**

When you come back to:

    http://127.0.0.1:80/admin/

![alt tag](https://github.com/MarceloProjetos/HMI-controler-with-node-red/blob/master/images/node-red_login.png)

Put username: "admin" and password: 
___
##7-GULP Automation

Gulp is a toolkit that helps you automate painful or time-consuming tasks in your development.

You need to have [NodeJS][3] installed onto your computer before you can install Gulp. 

    npm install gulp -g
    
**Creating a Gulp Project**

The npm init command creates a package.json file for your project which stores information about the project

    npm init
    
Once the package.json file is created, we can install Gulp into the project by using the following command: 

    npm install gulp --save-dev
    
If you check the project folder when the command has finished executing, you should see that Gulp has created a **node_modules** folder

For complete instalation now using command:

    npm install

The gulp community is growing, with new plugins being added daily. See the [main website][14] for a complete list.

Type "gulp watch" and leave the window open, do not cancel because the process will be monitoring the files, if one has any changes, the final file will be generated again.

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
[9]:https://github.com/MarceloProjetos/HMI-controler-with-node-red/blob/master/NodeRed/settings.js
[10]:https://tortoisegit.org/
[11]:http://www.7-zip.org/
[12]:https://www.sublimetext.com/
[13]:https://packagecontrol.io/installation
[14]:http://gulpjs.com/plugins/
