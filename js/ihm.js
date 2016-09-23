
$(document).ready(function(){
  var text = "0";

  $("#LigarMaquina").on('click', function(data){
     
      message = new Messaging.Message("{\"LigarMaquina\":" + "1" + "}");
     	message.destinationName = "board/setup";
    	client.send(message, function(err, result) {
        if (err) {
          window.alert('erro');
        } 
      });
   
  });
 
 $("#tabs").tabs(); //tabs onde fica quase toda a pagina

     /******* - TAB 1 PRINCIPAL - *-***********/

/* Parar servo + motor de prensa + hidraulica */
 $("#botao_Parar_Maquina").button().click(function(){ 

      message = new Messaging.Message("{\"botao_Parar_Maquina\":" + "1" + "}");
      message.destinationName = "board/setup";
      client.send(message, function(err, result) {
        if (err) {
          window.alert('erro');
        } 
      });
    }); //Parar motores e hidraulica

/* Habilita modo manual e libera botões de controle */
 $("#botao_Manual").button().click(function(){ 

      message = new Messaging.Message("{\"botao_Manual\":" + "1" + "}");
      message.destinationName = "board/setup";
      client.send(message, function(err, result) {
        if (err) {
          window.alert('erro');
        } 
      });
    }); //Habilita modo manual e libera botões de controle

/* Coloca ela em modo Automatico e coloca para produzir */
 $("#botao_Produzir").button().click(function(){ 

      message = new Messaging.Message("{\"botao_Produzir\":" + "1" + "}");
      message.destinationName = "board/setup";
      client.send(message, function(err, result) {
        if (err) {
          window.alert('erro');
        } 
      });
    });// Coloca ela em modo Automatico e coloca para produzir

 
  $("#Desbobinador").on('click', function(data){
     
    var valor = $(this).attr('valor');
    //window.alert('Desbobinador = ' + valor);

      message = new Messaging.Message("{\"Desbobinador\":" + valor + "}");
     	message.destinationName = "board/setup";
    	client.send(message, function(err, result) {
        if (err) {
          window.alert('erro');
        } 
      });
  });
  $("#avancaPerfil").on('mousedown', function(data){ //M2.3
     
    //var valor = $(this).attr('valor');
    //window.alert('avancaPerfil = ' + valor);

      message = new Messaging.Message("{\"avancaPerfil\":" + "1" + "}");
      message.destinationName = "board/setup";
      client.send(message, function(err, result) {
        if (err) {
          window.alert('erro');
        } 
      });
  });
  $("#avancaPerfil").on('mouseup', function(data){ //M2.3
     
    //var valor = $(this).attr('valor');
    //window.alert('avancaPerfil = ' + valor);

      message = new Messaging.Message("{\"avancaPerfil\":" + "0" + "}");
      message.destinationName = "board/setup";
      client.send(message, function(err, result) {
        if (err) {
          window.alert('erro');
        } 
      });
  });
  $("#recuaPerfil").on('mousedown', function(data){ //M2.4
     
    //var valor = $(this).attr('valor');
    // window.alert('recuaPerfil = ' + valor);

      message = new Messaging.Message("{\"recuaPerfil\":" + "1" + "}");
      message.destinationName = "board/setup";
      client.send(message, function(err, result) {
        if (err) {
          window.alert('erro');
        } 
      });
  });
  $("#recuaPerfil").on('mouseup', function(data){ //M2.4
     
    //var valor = $(this).attr('valor');
    // window.alert('recuaPerfil = ' + valor);

      message = new Messaging.Message("{\"recuaPerfil\":" + "0" + "}");
      message.destinationName = "board/setup";
      client.send(message, function(err, result) {
        if (err) {
          window.alert('erro');
        } 
      });
  });
  $("#abrirTampa").on('mousedown', function(data){ //M31.10
     
     //var valor = $(this).attr('valor');
     //window.alert('abrirTampa = ' + valor);

      message = new Messaging.Message("{\"abrirTampa\":" + "1" + "}");
      message.destinationName = "board/setup";
      client.send(message, function(err, result) {
        if (err) {
          window.alert('erro');
        } 
      });
  });
    $("#abrirTampa").on('mouseup', function(data){ //M31.10
     
     //var valor = $(this).attr('valor');
     //window.alert('abrirTampa = ' + valor);

      message = new Messaging.Message("{\"abrirTampa\":" + "0" + "}");
      message.destinationName = "board/setup";
      client.send(message, function(err, result) {
        if (err) {
          window.alert('erro');
        } 
      });
  });
  $("#fecharTampa").on('mousedown', function(data){ //M31.11
     
     //var valor = $(this).attr('valor');
     //window.alert('fecharTampa = ' + valor);

      message = new Messaging.Message("{\"fecharTampa\":" + "1" + "}");
      message.destinationName = "board/setup";
      client.send(message, function(err, result) {
        if (err) {
          window.alert('erro');
        } 
      });
  });
  $("#fecharTampa").on('mouseup', function(data){ //M31.11
     
     var valor = $(this).attr('valor');
     //window.alert('fecharTampa = ' + valor);

      message = new Messaging.Message("{\"fecharTampa\":" + "0" + "}");
      message.destinationName = "board/setup";
      client.send(message, function(err, result) {
        if (err) {
          window.alert('erro');
        } 
      });
  });
  $("#ligarPrensa").on('click', function(data){ //M3.3
     
     var valor = $(this).attr('valor');
     //window.alert('ligarPrensa = ' + valor);

      message = new Messaging.Message("{\"LigarPrensa\":" + valor + "}");
      message.destinationName = "board/setup";
      client.send(message, function(err, result) {
        if (err) {
          window.alert('erro');
        } 
      });
  });
  

  /************************ - TAB 2 - *********************************/

  /*Numero de ciclos da prensa M23 unidade + M24 vezes 1000*/
  $('#NumeroCiclosPrensa')
    .keyboard({
        layout: 'custom',
            customLayout: {
                'default' : [
                    '7 8 9',
                    '4 5 6',
                    '1 2 3',
                    '{bksp} 0 {a} {c}'                
            	]
        	},
        maxLength : 6, /*numero maximo de carcteres nesse campo*/
        restrictInput : true, /*entrada de caracters restritas*/
        useCombos : false,/* espera funcao validade callback para funcionar*/
        acceptValid : true,
        validate : function(keyboard, value, isClosing){
          return value.length >= 2; /*Somente valido se conter pelo menos 1 numero de caracteres*/
        },
        accepted : function(e, keyboard, el) {
          message = new Messaging.Message("{\"PrsCiclosUnid_KEYBOARD\":" + parseInt(el.value) + "}");
          //window.alert(el.value); /*debug para mostrar valor*/
          message.destinationName = "AplanadoraN/registradores"; /*topico para onde vai o valor*/
          client.send(message, function(err, result) {
            if (err) {
              window.alert('erro');
            } 
          });
        },
        initialized : function(e, keyboard, el) {
          el.value = '5';
        }
    });

  /*A prensa vai lubrificar a cada X ciclos M25*/
  $('#NumeroCiclosFaltantes')
    .keyboard({
        layout: 'custom',
            customLayout: {
                'default' : [
                    '7 8 9',
                    '4 5 6',
                    '1 2 3',
                    '{bksp} 0 {a} {c}'                
            	]
        	},
        maxLength : 6, /*numero maximo de carcteres nesse campo*/
        restrictInput : true, /*entrada de caracters restritas*/
        useCombos : false,/* espera funcao validade callback para funcionar*/
        acceptValid : true,
        validate : function(keyboard, value, isClosing){
            return value.length >= 1; /*Somente valido se esse campo conter 1 caracter*/
        },
        accepted : function(e, keyboard, el) {
          message = new Messaging.Message("{\"NovoPrsCiclosUnd_KEYBOARD\":" + parseInt(el.value) + "}");
          //window.alert(el.value); /*debug para mostrar valor*/
          message.destinationName = "AplanadoraN/registradores"; /*topico para onde vai o valor*/
          client.send(message, function(err, result) {
            if (err) {
              window.alert("erro");
            } 
          });
        },
        initialized   : function(e, keyboard, el) {
          el.value = '1000';
        }
    });

   /*Botão que inicia 1 ciclo de lubrificação para teste M3.6 Inverter o bit e só*/
    $("#botao_lubrificar").button({
               icons: {
                  primary: "ui-icon-info"
               }
            });

  /*Botao de sentido do motor da prensa, nunca deve iniciar o node-red com ele invertido. M2.14 = 0 sentido normal aceita escrita pelo modbus*/
   $("#botao_InverterRotacao").button({
               icons: {
                  primary: "ui-icon-arrowrefresh-1-e"
               }
            });

  /*Numero que corrige a relação de transmição da maquina multiplicando o numero de pulsos do encoder M20*/
  $('#FatorEncoder')
    .keyboard({
        layout: 'custom',
            customLayout: {
                'default' : [
                    '7 8 9',
                    '4 5 6',
                    '1 2 3',
                    '{bksp} 0 {a} {c}'                
            	]
        	},
        maxLength : 5, /*numero maximo de carcteres nesse campo*/
        restrictInput : true, /*entrada de caracters restritas*/
        useCombos : false,/* espera funcao validade callback para funcionar*/
        acceptValid : true,
        validate : function(keyboard, value, isClosing){
            return value.length >= 3; /*Somente valido se esse campo conter 3 caracter*/
        },
        accepted : function(e, keyboard, el) {
          message = new Messaging.Message("{\"EncFactor_KEYBOARD\":" + parseInt(el.value) + "}");
          //window.alert(el.value); /*debug para mostrar valor*/
          message.destinationName = "AplanadoraN/registradores"; /*topico para onde vai o valor*/
          client.send(message, function(err, result) {
            if (err) {
              window.alert("erro");
            } 
          });
        },
        initialized   : function(e, keyboard, el) {
          el.value = '9996';
        }
    });

  /*Tamanho verdadeiro da peça que saiu da maquina salvar. Calcular valores no java script*/
  $('#TamanhoRealPeca')
    .keyboard({
        layout: 'custom',
            customLayout: {
                'default' : [
                    '7 8 9',
                    '4 5 6',
                    '1 2 3',
                    '{bksp} 0 {a} {c}'                
            	]
        	},
        maxLength : 6, /*numero maximo de carcteres nesse campo*/
        restrictInput : true, /*entrada de caracters restritas*/
        useCombos : false,/* espera funcao validade callback para funcionar*/
        acceptValid : true,
        validate : function(keyboard, value, isClosing){
            return value.length >= 2; /*Somente valido se esse campo conter 2 caracteres*/
        },
        accepted : function(e, keyboard, el) {
          message = new Messaging.Message("{\"TamanhoRealPeca_KEYBOARD\":" + parseInt(el.value) + "}");
          //window.alert(el.value); /*debug para mostrar valor*/
          message.destinationName = "AplanadoraN/registradores"; /*topico para onde vai o valor*/
          client.send(message, function(err, result) {
            if (err) {
              window.alert("erro");
            } 
          });
        },
        initialized   : function(e, keyboard, el) {
          el.value = '0';
        }
    });

  /*Tamanho que deveria ter a peça, que saiu da maquina em mm.  Calcular valores no java script*/
  $('#TamanhoDesejadoPeca')
    .keyboard({
        layout: 'custom',
            customLayout: {
                'default' : [
                    '7 8 9',
                    '4 5 6',
                    '1 2 3',
                    '{bksp} 0 {a} {c}'                
            	]
        	},
        maxLength : 6, /*numero maximo de carcteres nesse campo*/
        restrictInput : true, /*entrada de caracters restritas*/
        useCombos : false,/* espera funcao validade callback para funcionar*/
        acceptValid : true,
        validate : function(keyboard, value, isClosing){
          return value.length >= 3; /*Somente valido se conter esse numero de caracteres*/
        },
        accepted : function(e, keyboard, el) {
          message = new Messaging.Message("{\"TamanhoDesejadoPeca_KEYBOARD\":" + parseInt(el.value) + "}");
          //window.alert(el.value); /*debug para mostrar valor*/
          message.destinationName = "AplanadoraN/registradores"; /*topico para onde vai o valor*/
          client.send(message, function(err, result) {
            if (err) {
              window.alert("erro");
            } 
          });
        },
        initialized   : function(e, keyboard, el) {
          el.value = '0';
        }
    });

/* botão que recalcula o fator de encoder Calcula a proporção entre #TamanhoDesejadoPeca e #TamanhoRealPeca e gera um novo #FatorEncoder*/
  $("#botao_RecalcularFator").button({
      icons: {
        primary: "ui-icon-arrowrefresh-1-e"
      }
  });

  $("#botao_RecalcularFator").mouseup(function(event){
  	x = $('#TamanhoDesejadoPeca').val();
  	y = $('#TamanhoRealPeca').val();
  	if ((x>=2)&&(y>=2)){
      	$("#dialog_fator").dialog("open");
      	event.preventDefault();
    }else if ((x<=2)&&(y>=2)){
    	$('#TamanhoDesejadoPeca').effect( "highlight", {}, 350 );
    	$('#TamanhoDesejadoPeca').effect( "bounce", {times:4}, 350 );
    }else if ((x>=2)&&(y<=2)){
    	$('#TamanhoRealPeca').effect( "highlight", {}, 350 );
    	$('#TamanhoRealPeca').effect( "bounce", {times:4}, 350 );
    }else{
    	$('#TamanhoDesejadoPeca').effect( "highlight", {}, 350 );
    	$('#TamanhoRealPeca').effect( "highlight", {}, 350 );
    	$('#TamanhoDesejadoPeca').effect( "bounce", {times:4}, 350 );
    	$('#TamanhoRealPeca').effect( "bounce", {times:4}, 350 );
    }

  });

   /********** TOOLTIPS ******/
  $( "#ciclosOK").tooltip();
  $( "#Desbobinador").tooltip();
  $( "#recuaPerfil").tooltip();
  $( "#avancaPerfil").tooltip();
  $( "#abrirTampa").tooltip();
  $( "#fecharTampa").tooltip();
  $( "#ligarPrensa").tooltip();
  $( "#TamanhoRealPeca").tooltip();
  $( "#TamanhoDesejadoPeca").tooltip();

  /************************ Caixa de Dialogo *****************************/
    $("#dialog_fator").dialog({
        autoOpen: false,
        width: 400,
        hide : "explode",
        modal : true, /*Bloqueia a tela até ter uma resposta */
        buttons: [{
            text: "Ok",
            click: function(data) {
              message = new Messaging.Message("{\"RecalcularFator\":" + "1" + "}");
              message.destinationName = "AplanadoraN/registradores"; /*topico para onde vai o valor*/
              client.send(message, function(err, result) {
                if (err) {
                  window.alert('erro');
                } 
              });
              $(this).dialog("close");
            }
            }, 
            {
            text: "Cancel",
            click: function() {
                $(this).dialog("close");
            }
        }]
    });

    
/*Velocidade maxima que o servo motor vai atingir no modo automatico M14*/
  $('#VelMaxServoAuto')
    .keyboard({
        layout: 'custom',
            customLayout: {
                'default' : [
                    '7 8 9',
                    '4 5 6',
                    '1 2 3',
                    '{bksp} 0 {a} {c}'                
            	]
        	},
        maxLength : 6, /*numero maximo de carcteres nesse campo*/
        restrictInput : true, /*entrada de caracters restritas*/
        useCombos : false,/* espera funcao validade callback para funcionar*/
        acceptValid : true,
        validate : function(keyboard, value, isClosing){
          return value.length >= 3; /*Somente valido se conter esse numero de caracteres*/
        },
        accepted : function(e, keyboard, el) {
          message = new Messaging.Message("{\"AplanVelAuto_KEYBOARD\":" + parseInt(el.value) + "}");
          //window.alert(el.value); /*debug para mostrar valor*/
          message.destinationName = "AplanadoraN/registradores"; /*topico para onde vai o valor*/
          client.send(message, function(err, result) {
            if (err) {
              window.alert("erro");
            } 
          });
        },
        initialized   : function(e, keyboard, el) {
          el.value = '100';
        }
    });

/*Velocidade maxima que o servo motor vai atingir no modo manual M17*/
  $('#VelMaxServoManual')	
    .keyboard({
        layout: 'custom',
            customLayout: {
                'default' : [
                    '7 8 9',
                    '4 5 6',
                    '1 2 3',
                    '{bksp} 0 {a} {c}'                
            	]
        	},
        maxLength : 6, /*numero maximo de carcteres nesse campo*/
        restrictInput : true, /*entrada de caracters restritas*/
        useCombos : false,/* espera funcao validade callback para funcionar*/
        acceptValid : true,
        validate : function(keyboard, value, isClosing){
            return value.length >= 3; /*Somente valido se conter esse numero de caracteres*/
        },
        accepted : function(e, keyboard, el) {
          message = new Messaging.Message("{\"AplanVelMan_KEYBOARD\":" + parseInt(el.value) + "}");
          //window.alert(el.value); /*debug para mostrar valor*/
          message.destinationName = "AplanadoraN/registradores"; /*topico para onde vai o valor*/
          client.send(message, function(err, result) {
            if (err) {
              window.alert("erro");
            } 
          });
        },
        initialized   : function(e, keyboard, el) {
          el.value = '100';
        }
    });

/*Passo em "mm" da aplanadora, no caso da linha N 200mm é o padrão M18*/
  $('#PassoAplanadora')
    .keyboard({
        layout: 'custom',
            customLayout: {
                'default' : [
                    '7 8 9',
                    '4 5 6',
                    '1 2 3',
                    '{bksp} 0 {a} {c}'                
            	]
        	},
        maxLength : 6, /*numero maximo de carcteres nesse campo*/
        restrictInput : true, /*entrada de caracters restritas*/
        useCombos : false,/* espera funcao validade callback para funcionar*/
        acceptValid : true,
        validate : function(keyboard, value, isClosing){
          return value.length >= 3; /*Somente valido se conter esse numero de caracteres*/
        },
        accepted : function(e, keyboard, el) {
          message = new Messaging.Message("{\"AplanPasso_KEYBOARD\":" + parseInt(el.value) + "}");
          //window.alert(el.value); /*debug para mostrar valor*/
          message.destinationName = "AplanadoraN/registradores"; /*topico para onde vai o valor*/
          client.send(message, function(err, result) {
            if (err) {
              window.alert("erro");
            } 
          });
        },
        initialized : function(e, keyboard, el) {
          el.value = '200';
        }
    });

/*Registrador de Erro no posicionamento M19*/
  $('#MaqUItErroPos').addClass("ui-widget ui-widget-content ui-corner-all");


/******** Encoder *************/

/*Perimetro em milimetros da roda do encoder que entra em contato com o produto M22*/
  $('#Perimetro')
    .keyboard({
        layout: 'custom',
            customLayout: {
                'default' : [
                    '7 8 9',
                    '4 5 6',
                    '1 2 3',
                    '{bksp} 0 {a} {c}'                
            	]
        	},
        maxLength : 6, /*numero maximo de carcteres nesse campo*/
        restrictInput : true, /*entrada de caracters restritas*/
        useCombos : false,/* espera funcao validade callback para funcionar*/
        acceptValid : true,
        validate : function(keyboard, value, isClosing){
          return value.length >= 3; /*Somente valido se conter esse numero de caracteres*/
        },
        accepted : function(e, keyboard, el) {
          message = new Messaging.Message("{\"EncPerim_KEYBOARD\":" + parseInt(el.value) + "}");
          //window.alert(el.value); /*debug para mostrar valor*/
          message.destinationName = "AplanadoraN/registradores"; /*topico para onde vai o valor*/
          client.send(message, function(err, result) {
            if (err) {
              window.alert("erro");
            } 
          });
        },
        initialized   : function(e, keyboard, el) {
          el.value = '1000';
        }
    });


/*Resolução em pulsos por volta do encoder M21*/
  $('#Resolucao')
    .keyboard({
        layout: 'custom',
            customLayout: {
                'default' : [
                    '7 8 9',
                    '4 5 6',
                    '1 2 3',
                    '{bksp} 0 {a} {c}'                
            	]
        	},
        maxLength : 6, /*numero maximo de carcteres nesse campo*/
        restrictInput : true, /*entrada de caracters restritas*/
        useCombos : false,/* espera funcao validade callback para funcionar*/
        acceptValid : true,
        validate : function(keyboard, value, isClosing){
          return value.length >= 3; /*Somente valido se conter esse numero de caracteres*/
        },
        accepted : function(e, keyboard, el) {
          message = new Messaging.Message("{\"EncResol_KEYBOARD\":" + parseInt(el.value) + "}");
          //window.alert(el.value); /*debug para mostrar valor*/
          message.destinationName = "AplanadoraN/registradores"; /*topico para onde vai o valor*/
          client.send(message, function(err, result) {
            if (err) {
              window.alert("erro");
            } 
          });
        },
        initialized   : function(e, keyboard, el) {
          el.value = '1000';
        }
    });

/*Valor medido pela POP do encoder que esta medindo o perfil M5*/
  $('#EncoderValor').addClass("ui-widget ui-widget-content ui-corner-all");

/* botão de reset do parametros e da coleção parametros*/
    $("#botao_Reset_parametros").button({
               icons: {
                  primary: "ui-icon-refresh"
               }
            });

/************************ - ACTIVEMQ - *********************************/

 	 if( !window.WebSocket) {
 	   $("#connect").html("\
 	       <h1>Não conectado!</h1>\
 	       <p>\
 	       Use WebKit ou FireFox ou Google Chrome. Ou servidor de fila não inicializado!\
 	       </p>\
  	  ");
	  } else {
	    $(function() {  
	      var clientId = "root-" + Math.floor(Math.random() * 10000);   
	    
	      client = new Messaging.Client("localhost", 61614, clientId);

	      client.onConnect = onConnect;
	  
	      client.onMessageArrived = onMessageArrived;
	      client.onConnectionLost = onConnectionLost;            

	      client.connect({userName:"admin",password:"admin",onSuccess:onConnect,onFailure:onFailure}); 
	      return false;
	    });  

      var onConnect = function(frame) { /* O cliente notifica que esta conectado ao servidor.*/
        alert("Conectado ao sitema");
        client.subscribe("AplanadoraN/Estado");
        client.subscribe("AplanadoraN/registradores"); /* Escuta o node-red*/
      };  

      var debug = function(str) { // this allows to display debug logs directly on the web page
        alert(document.createTextNode(str + "\n"));
      };

      function onFailure(failure) {
        alert("Falha ao conectar");
        alert(failure.errorMessage);
      }  

      function onMessageArrived(message) {
      	//console.log(message);
        var p = document.createElement("p");
        var t = document.createTextNode(message.payloadString);

        var msg = JSON.parse(message.payloadString);
        console.log(JSON.stringify(msg, null, 2 )); //Mostra toda mensagem
        
          if (msg.PRENSA_CICLOS !== undefined) {
          	$('#NumeroCiclosPrensa').val(msg.PRENSA_CICLOS);
          } 
          if (msg.MAQUINA_ON === 1) {
            $('#LigarMaquina').addClass("on");  
          }
          if (msg.MAQUINA_ON === 0) {
            $('#LigarMaquina').removeClass("on");
          }
          if (msg.POS_ATUAL !== undefined) {  				
          	$('#EncoderValor').val(msg.POS_ATUAL);				
          } 
          if (msg.ERRO_POS !== undefined) {  				
          	$('#MaqUItErroPos').val(msg.ERRO_POS);				
          }
          if (msg.APLANADORA_FECHADA === 1) {
            $('#fecharTampa').hide();
          }
          if (msg.APLANADORA_FECHADA === 0) {
            $('#fecharTampa').show();
          } 
          if (msg.EncPerim !== undefined) {  				//<--Perimetro M22
          	$('#Perimetro').val(msg.EncPerim);				//<--Tudo JQuery UI!
          }  
          if (msg.EncResol !== undefined){ 			//<--Resolucao encoder M21
          	$('#Resolucao').val(msg.EncResol);
          }
          if (msg.EncFactor !== undefined){ 		//<--Fator de encoder M20
          	$('#FatorEncoder').val(msg.EncFactor);
            $('#TamanhoDesejadoPeca').val(0);
            $('#TamanhoRealPeca').val(0);
          }
          if (msg.AplanPasso !== undefined){ 		//<--Passo da Aplanadora M18
          	$('#PassoAplanadora').val(msg.AplanPasso);
          } 
          if (msg.AplanVelMan !== undefined){ 		//<--Velocidade Max Manual M17 
          	$('#VelMaxServoManual').val(msg.AplanVelMan);
          } 
          if (msg.AplanVelAuto !== undefined){ 	//<--Velocidade Max Auto M14
          	$('#VelMaxServoAuto').val(msg.AplanVelAuto);
          }
          if (msg.PrsCiclosUnid !== undefined){ 		//<--Lubrificar a cada "X" ciclos M23
          	$('#NumeroCiclosPrensa').val(msg.PrsCiclosUnid);
          }
          if (msg.NovoPrsCiclosUnd !== undefined){ 	//<--Proxima lubrificação em "X" ciclos M25
          	$('#NumeroCiclosFaltantes').val(msg.NovoPrsCiclosUnd);
          }  
          //info - warning - error
          if (msg.message !== undefined){
          	var m = "<p><span class=\"ui-icon " + (msg.type === "warning" ? "ui-icon-alert" : msg.type === "error" ? "ui-icon-circle-close" : "ui-icon-info") + "\" style=\"float: left; margin-right: .3em;\"></span><strong>Alerta:</strong>" + (msg.message || '') + "</p>";
              $('#Mensagem').attr('class', (msg.type === "error" ? 'ui-state-error' : 'ui-state-highlight') + ' ui-corner-all');
              $('#Mensagem').html(m);
              //console.log( $('#Mensagem').html()); //Debug 
          } 
      }

      function onConnectionLost(responseObject) {
        if (responseObject.errorCode !== 0) {
          alert(client.clientId + ": " + responseObject.errorCode + "\n");
        }
      }    
    }
});  




/******Referencia*****/
//$("#ciclosOK").button(); //Somente leitura, toda vez que um ciclo termina sem erros ciclo++. Caso tenha um erro zera o valor!

 //$("#botao_Parar_Maquina").css({ width: '280px', 'padding-top': '10px', 'padding-bottom': '10px', 'font-size':'1.4em'}); exemplo de mudar CSS javscript

/*Funcao de configura o botão radio em botões verticais
Script
(function( $ ){ 
$.fn.buttonsetv = function() {
  $(':radio', this).wrap('<div style="margin: 2px"/>');
  $(this).buttonset();
    $('label', this).each(function(index){
    $(this).width(240); //largura do botão
    $(this).height(50); //altura do botão
  })
  $('label:first', this).removeClass('ui-corner-left').addClass('ui-corner-top');
  $('label:last', this).removeClass('ui-corner-right').addClass('ui-corner-bottom');
};
})( jQuery );

//Chama funcao que alinha verticalmente os botoes
$(document).ready(function(){
    $("#radio").buttonsetv();
})
HTML
<div id="radio">
<input type="radio" id="radio1" name="radio" value="1"/><label for="radio1">Parar Maquina</label>
<input type="radio" id="radio2" name="radio" value="2"/><label for="radio2">Manual</label>
<input type="radio" id="radio5" name="radio" value="5"/><label for="radio5">Desligar Hidraulica</label>
<input type="radio" id="radio6" name="radio" value="6"/><label for="radio6">Produzir</label>
</div>
****************************/