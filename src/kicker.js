/*                                                                                                                                                 
                                             bbbbbbbb                                                                                            
        CCCCCCCCCCCCC                        b::::::b                                                 TTTTTTTTTTTTTTTTTTTTTTTKKKKKKKKK    KKKKKKK
     CCC::::::::::::C                        b::::::b                                                 T:::::::::::::::::::::TK:::::::K    K:::::K
   CC:::::::::::::::C                        b::::::b                                                 T:::::::::::::::::::::TK:::::::K    K:::::K
  C:::::CCCCCCCC::::C                         b:::::b                                                 T:::::TT:::::::TT:::::TK:::::::K   K::::::K
 C:::::C       CCCCCCyyyyyyy           yyyyyyyb:::::bbbbbbbbb        eeeeeeeeeeee    rrrrr   rrrrrrrrrTTTTTT  T:::::T  TTTTTTKK::::::K  K:::::KKK
C:::::C               y:::::y         y:::::y b::::::::::::::bb    ee::::::::::::ee  r::::rrr:::::::::r       T:::::T          K:::::K K:::::K   
C:::::C                y:::::y       y:::::y  b::::::::::::::::b  e::::::eeeee:::::eer:::::::::::::::::r      T:::::T          K::::::K:::::K    
C:::::C                 y:::::y     y:::::y   b:::::bbbbb:::::::be::::::e     e:::::err::::::rrrrr::::::r     T:::::T          K:::::::::::K     
C:::::C                  y:::::y   y:::::y    b:::::b    b::::::be:::::::eeeee::::::e r:::::r     r:::::r     T:::::T          K:::::::::::K     
C:::::C                   y:::::y y:::::y     b:::::b     b:::::be:::::::::::::::::e  r:::::r     rrrrrrr     T:::::T          K::::::K:::::K    
C:::::C                    y:::::y:::::y      b:::::b     b:::::be::::::eeeeeeeeeee   r:::::r                 T:::::T          K:::::K K:::::K   
 C:::::C       CCCCCC       y:::::::::y       b:::::b     b:::::be:::::::e            r:::::r                 T:::::T        KK::::::K  K:::::KKK
  C:::::CCCCCCCC::::C        y:::::::y        b:::::bbbbbb::::::be::::::::e           r:::::r               TT:::::::TT      K:::::::K   K::::::K
   CC:::::::::::::::C         y:::::y         b::::::::::::::::b  e::::::::eeeeeeee   r:::::r               T:::::::::T      K:::::::K    K:::::K
     CCC::::::::::::C        y:::::y          b:::::::::::::::b    ee:::::::::::::e   r:::::r               T:::::::::T      K:::::::K    K:::::K
        CCCCCCCCCCCCC       y:::::y           bbbbbbbbbbbbbbbb       eeeeeeeeeeeeee   rrrrrrr               TTTTTTTTTTT      KKKKKKKKK    KKKKKKK
                           y:::::y                                                                                                               
                          y:::::y                                                                                                                
                         y:::::y                                                                                                                 
                        y:::::y                                                                                                                  
                       yyyyyyy                                                                                                                   
*/  
const LineAPI = require('./api');
const request = require('request');
const fs = require('fs');
const unirest = require('unirest');
const webp = require('webp-converter');
const path = require('path');
const rp = require('request-promise');
const config = require('./config');
const { Message, OpType, Location } = require('../curve-thrift/line_types');
/*                                                                                                                                                 
                                             bbbbbbbb                                                                                            
        CCCCCCCCCCCCC                        b::::::b                                                 TTTTTTTTTTTTTTTTTTTTTTTKKKKKKKKK    KKKKKKK
     CCC::::::::::::C                        b::::::b                                                 T:::::::::::::::::::::TK:::::::K    K:::::K
   CC:::::::::::::::C                        b::::::b                                                 T:::::::::::::::::::::TK:::::::K    K:::::K
  C:::::CCCCCCCC::::C                         b:::::b                                                 T:::::TT:::::::TT:::::TK:::::::K   K::::::K
 C:::::C       CCCCCCyyyyyyy           yyyyyyyb:::::bbbbbbbbb        eeeeeeeeeeee    rrrrr   rrrrrrrrrTTTTTT  T:::::T  TTTTTTKK::::::K  K:::::KKK
C:::::C               y:::::y         y:::::y b::::::::::::::bb    ee::::::::::::ee  r::::rrr:::::::::r       T:::::T          K:::::K K:::::K   
C:::::C                y:::::y       y:::::y  b::::::::::::::::b  e::::::eeeee:::::eer:::::::::::::::::r      T:::::T          K::::::K:::::K    
C:::::C                 y:::::y     y:::::y   b:::::bbbbb:::::::be::::::e     e:::::err::::::rrrrr::::::r     T:::::T          K:::::::::::K     
C:::::C                  y:::::y   y:::::y    b:::::b    b::::::be:::::::eeeee::::::e r:::::r     r:::::r     T:::::T          K:::::::::::K     
C:::::C                   y:::::y y:::::y     b:::::b     b:::::be:::::::::::::::::e  r:::::r     rrrrrrr     T:::::T          K::::::K:::::K    
C:::::C                    y:::::y:::::y      b:::::b     b:::::be::::::eeeeeeeeeee   r:::::r                 T:::::T          K:::::K K:::::K   
 C:::::C       CCCCCC       y:::::::::y       b:::::b     b:::::be:::::::e            r:::::r                 T:::::T        KK::::::K  K:::::KKK
  C:::::CCCCCCCC::::C        y:::::::y        b:::::bbbbbb::::::be::::::::e           r:::::r               TT:::::::TT      K:::::::K   K::::::K
   CC:::::::::::::::C         y:::::y         b::::::::::::::::b  e::::::::eeeeeeee   r:::::r               T:::::::::T      K:::::::K    K:::::K
     CCC::::::::::::C        y:::::y          b:::::::::::::::b    ee:::::::::::::e   r:::::r               T:::::::::T      K:::::::K    K:::::K
        CCCCCCCCCCCCC       y:::::y           bbbbbbbbbbbbbbbb       eeeeeeeeeeeeee   rrrrrrr               TTTTTTTTTTT      KKKKKKKKK    KKKKKKK
                           y:::::y                                                                                                               
                          y:::::y                                                                                                                
                         y:::::y                                                                                                                 
                        y:::::y                                                                                                                  
                       yyyyyyy                                                                                                                   
*/                                    
const myBot = [''];
var groupList = new Array();
var vx = {};var midnornama,pesane,kickhim;var waitMsg = "no";
var komenTL = "➧Hello \n     ➧I'm Kicker My Creator ⇩\n\nhttp://line.me/ti/p/~cybertk0\n\nCyͥbeͣrͫ TK\n   Kicker & Security  V.2.1.0    !"; 
var limitposts = '10'; 

/*    
──────────────────────────────▓▓█───────
────────────────────────────▒██▒▒█──────
───────────────────────────█▓▓▓░▒▓▓─────
─────────────────────────▒█▓▒█░▒▒▒█─────
────────────────────────▒█▒▒▒█▒▒▒▒▓▒────
─▓▓▒░──────────────────▓█▒▒▒▓██▓▒░▒█────
─█▓▓██▓░──────────────▓█▒▒▒▒████▒▒▒█────
─▓█▓▒▒▓██▓░──────────▒█▒▒▒▒▒██▓█▓░░▓▒───
─▓▒▓▒▒▒▒▒▓█▓░──░▒▒▓▓██▒▒▒▒▒▒█████▒▒▒▓───
─▓░█▒▒▒▒▒▒▒▓▓█▓█▓▓▓▓▒▒▒▒▒▒▒▒██▓██▒░▒█───
─▓░▓█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓████▒▒▒█───
─▓░▓██▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒▒▓██░░░█───
─▓░▓███▒▒▒▒▒▒▒▒▒▒▒▓█▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▒▓▓──
─▒▒▒██▓▒▓█▓▒▒▒▒▒▒▒▓▒▒▒▒▒▒▓▓▓▒▒▒▒▒▒▒▓▒█──
──▓▒█▓▒▒▒▒▓▒▒▒▒▒▒▒▒▒▒▒▓█▓▓▓▓█▓▒▒▒▒▒▒▒▓▒─
──▓▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓──────▓█▓▒▒▒▒▒▓█─
──▒▒▓▒▒▒▓▓▓▒▒▒▒▒▒▒▒▒▓▓───░▓▓───█▓▒▒▒▒▒█─
───█▒▒▓▓▓▒▒▓▓▒▒▒▒▒▒▓▓───█████▓──█▓▒▒▒▒▓▒
───▓▓█▒─────▒▓▒▒▒▒▒█───░██████──░█▒▒▒▒▓▓
───▓█▒──▒███─▒▓▒▒▒▒█────██████───▓▒▒▒▒▒▓
───██───█████─█▒▒▒▒█─────███▓────▓▓▒▒▒▒▓
───█▓───█████─▒▓▒▒▒█─────────────█▓▓▓▒▒▓
───█▓───░███──░▓▒▒▒▓█──────────░█▓▒▒▒▓▒▓
───██─────────▒▓▒▒▒▒▓▓──────░▒▓█▓────░▓▓
───▓█░────────█▓██▓▒▒▓█▓▓▓▓██▓▓▒▓▒░░▒▓▒▓
───▒██░──────▓▒███▓▒▒▒▒▓▓▓▓▒▒▒▒▒▒▓▓▓▓▒▓─
────█▓█▓▓▒▒▓█▓▒░██▒▒▓▓█▓▒▒▒▒▒▒▒▒▒▒▒▒▓▓█▒
────▓─░▓▓▓▓▓▒▓▓▓▓▒▓▓▓▒▓▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓
────▒▒▒▓▒▒▒▒▒▒▓█░─░░░─▓▓▒▒▒▒▒▒▒▒▒▒▒▓██▓▒
─────█▓▒▒▒▒▒▒▒▒▓▓─░░░─▓▓▒▒▒▒▒▒▒▒▒▓▓▓▒▒▓▒
──────██▓▓▒▒▒▒▒▒█▒░░░░█▒▒▒▒▒▒▒▒▓█▓▓▒▒▒▒▒
─────░─▒██▓▓▒▒▒▒▒█▓▒▒▓▒▒▒▒▒▒▓███▓▒▒▒▒▒▓▓
──────────░▒▓▓▓▓▒▒▓▓▓▓▓▓████▓▓█▒▒▒▒▒▓▓█░*/

function isTkkicKerBot(param) {
    return myBot.includes(param);
}

function isBanned(banList, param) {
    return banList.includes(param);
}

function firstToUpperfCase(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
}

function isTGet(string,param){
	return string.includes(param);
}

function isImg(param) {
    return imgArr.includes(param);
}

function ambilKata(params, kata1, kata2){
    if(params.indexOf(kata1) === false) return false;
    if(params.indexOf(kata2) === false) return false;
    let start = params.indexOf(kata1) + kata1.length;
    let end = params.indexOf(kata2, start);
    let returns = params.substr(start, end - start);
    return returns;
}

class LINE extends LineAPI {
    constructor() {
        super();
		this.limitposts = limitposts;
        this.receiverID = '';
        this.checkReader = [];
        this.stateStatus = {
            kicker: 1,
			merhaba: 1 
        }
    }
 /*                                                                                                                                                 
                                             bbbbbbbb                                                                                            
        CCCCCCCCCCCCC                        b::::::b                                                 TTTTTTTTTTTTTTTTTTTTTTTKKKKKKKKK    KKKKKKK
     CCC::::::::::::C                        b::::::b                                                 T:::::::::::::::::::::TK:::::::K    K:::::K
   CC:::::::::::::::C                        b::::::b                                                 T:::::::::::::::::::::TK:::::::K    K:::::K
  C:::::CCCCCCCC::::C                         b:::::b                                                 T:::::TT:::::::TT:::::TK:::::::K   K::::::K
 C:::::C       CCCCCCyyyyyyy           yyyyyyyb:::::bbbbbbbbb        eeeeeeeeeeee    rrrrr   rrrrrrrrrTTTTTT  T:::::T  TTTTTTKK::::::K  K:::::KKK
C:::::C               y:::::y         y:::::y b::::::::::::::bb    ee::::::::::::ee  r::::rrr:::::::::r       T:::::T          K:::::K K:::::K   
C:::::C                y:::::y       y:::::y  b::::::::::::::::b  e::::::eeeee:::::eer:::::::::::::::::r      T:::::T          K::::::K:::::K    
C:::::C                 y:::::y     y:::::y   b:::::bbbbb:::::::be::::::e     e:::::err::::::rrrrr::::::r     T:::::T          K:::::::::::K     
C:::::C                  y:::::y   y:::::y    b:::::b    b::::::be:::::::eeeee::::::e r:::::r     r:::::r     T:::::T          K:::::::::::K     
C:::::C                   y:::::y y:::::y     b:::::b     b:::::be:::::::::::::::::e  r:::::r     rrrrrrr     T:::::T          K::::::K:::::K    
C:::::C                    y:::::y:::::y      b:::::b     b:::::be::::::eeeeeeeeeee   r:::::r                 T:::::T          K:::::K K:::::K   
 C:::::C       CCCCCC       y:::::::::y       b:::::b     b:::::be:::::::e            r:::::r                 T:::::T        KK::::::K  K:::::KKK
  C:::::CCCCCCCC::::C        y:::::::y        b:::::bbbbbb::::::be::::::::e           r:::::r               TT:::::::TT      K:::::::K   K::::::K
   CC:::::::::::::::C         y:::::y         b::::::::::::::::b  e::::::::eeeeeeee   r:::::r               T:::::::::T      K:::::::K    K:::::K
     CCC::::::::::::C        y:::::y          b:::::::::::::::b    ee:::::::::::::e   r:::::r               T:::::::::T      K:::::::K    K:::::K
        CCCCCCCCCCCCC       y:::::y           bbbbbbbbbbbbbbbb       eeeeeeeeeeeeee   rrrrrrr               TTTTTTTTTTT      KKKKKKKKK    KKKKKKK
                           y:::::y                                                                                                               
                          y:::::y                                                                                                                
                         y:::::y                                                                                                                 
                        y:::::y                                                                                                                  
                       yyyyyyy                                                                                                                   
*/   
/*
███████▓█████▓▓╬╬╬╬╬╬╬╬▓███▓╬╬╬╬╬╬╬▓╬╬▓█ 
████▓▓▓▓╬╬▓█████╬╬╬╬╬╬███▓╬╬╬╬╬╬╬╬╬╬╬╬╬█ 
███▓▓▓▓╬╬╬╬╬╬▓██╬╬╬╬╬╬▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
████▓▓▓╬╬╬╬╬╬╬▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
███▓█▓███████▓▓███▓╬╬╬╬╬╬▓███████▓╬╬╬╬▓█ 
████████████████▓█▓╬╬╬╬╬▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬█ 
███▓▓▓▓▓▓▓╬╬▓▓▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
████▓▓▓╬╬╬╬▓▓▓▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
███▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
█████▓▓▓▓▓▓▓▓█▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
█████▓▓▓▓▓▓▓██▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ 
█████▓▓▓▓▓████▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ 
████▓█▓▓▓▓██▓▓▓▓██╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ 
████▓▓███▓▓▓▓▓▓▓██▓╬╬╬╬╬╬╬╬╬╬╬╬█▓╬▓╬╬▓██ 
█████▓███▓▓▓▓▓▓▓▓████▓▓╬╬╬╬╬╬╬█▓╬╬╬╬╬▓██ 
█████▓▓█▓███▓▓▓████╬▓█▓▓╬╬╬▓▓█▓╬╬╬╬╬╬███ 
██████▓██▓███████▓╬╬╬▓▓╬▓▓██▓╬╬╬╬╬╬╬▓███ 
███████▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬████ 
███████▓▓██▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓████ 
████████▓▓▓█████▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█████ 
█████████▓▓▓█▓▓▓▓▓███▓╬╬╬╬╬╬╬╬╬╬╬▓██████ 
██████████▓▓▓█▓▓▓╬▓██╬╬╬╬╬╬╬╬╬╬╬▓███████ 
███████████▓▓█▓▓▓▓███▓╬╬╬╬╬╬╬╬╬▓████████ 
██████████████▓▓▓███▓▓╬╬╬╬╬╬╬╬██████████ 
███████████████▓▓▓██▓▓╬╬╬╬╬╬▓███████████*/

    poll(operation) {
        if(operation.type == 25 || operation.type == 26) {
            const txt = (operation.message.text !== '' && operation.message.text != null ) ? operation.message.text : '' ;
            let message = new Message(operation.message);
            this.receiverID = message.to = (operation.message.to === myBot[0]) ? operation.message.from_ : operation.message.to ;
            Object.assign(message,{ ct: operation.createdTime.toString() });
            if(waitMsg == "yes" && operation.message.from_ == vx[0] && this.stateStatus.mute != 1){
				this.textMessage(txt,message,message.text)
			}else if(this.stateStatus.mute != 1){this.textMessage(txt,message);
			}else if(txt == "unmute" && isTkkicKerBot(operation.message.from_) && this.stateStatus.mute == 1){
			    this.stateStatus.mute = 0;
			    this._sendMessage(message,"ヽ(^。^)ノ")
		    }else{console.info("muted");}
        }
/*                                                                                                                                                 
                                             bbbbbbbb                                                                                            
        CCCCCCCCCCCCC                        b::::::b                                                 TTTTTTTTTTTTTTTTTTTTTTTKKKKKKKKK    KKKKKKK
     CCC::::::::::::C                        b::::::b                                                 T:::::::::::::::::::::TK:::::::K    K:::::K
   CC:::::::::::::::C                        b::::::b                                                 T:::::::::::::::::::::TK:::::::K    K:::::K
  C:::::CCCCCCCC::::C                         b:::::b                                                 T:::::TT:::::::TT:::::TK:::::::K   K::::::K
 C:::::C       CCCCCCyyyyyyy           yyyyyyyb:::::bbbbbbbbb        eeeeeeeeeeee    rrrrr   rrrrrrrrrTTTTTT  T:::::T  TTTTTTKK::::::K  K:::::KKK
C:::::C               y:::::y         y:::::y b::::::::::::::bb    ee::::::::::::ee  r::::rrr:::::::::r       T:::::T          K:::::K K:::::K   
C:::::C                y:::::y       y:::::y  b::::::::::::::::b  e::::::eeeee:::::eer:::::::::::::::::r      T:::::T          K::::::K:::::K    
C:::::C                 y:::::y     y:::::y   b:::::bbbbb:::::::be::::::e     e:::::err::::::rrrrr::::::r     T:::::T          K:::::::::::K     
C:::::C                  y:::::y   y:::::y    b:::::b    b::::::be:::::::eeeee::::::e r:::::r     r:::::r     T:::::T          K:::::::::::K     
C:::::C                   y:::::y y:::::y     b:::::b     b:::::be:::::::::::::::::e  r:::::r     rrrrrrr     T:::::T          K::::::K:::::K    
C:::::C                    y:::::y:::::y      b:::::b     b:::::be::::::eeeeeeeeeee   r:::::r                 T:::::T          K:::::K K:::::K   
 C:::::C       CCCCCC       y:::::::::y       b:::::b     b:::::be:::::::e            r:::::r                 T:::::T        KK::::::K  K:::::KKK
  C:::::CCCCCCCC::::C        y:::::::y        b:::::bbbbbb::::::be::::::::e           r:::::r               TT:::::::TT      K:::::::K   K::::::K
   CC:::::::::::::::C         y:::::y         b::::::::::::::::b  e::::::::eeeeeeee   r:::::r               T:::::::::T      K:::::::K    K:::::K
     CCC::::::::::::C        y:::::y          b:::::::::::::::b    ee:::::::::::::e   r:::::r               T:::::::::T      K:::::::K    K:::::K
        CCCCCCCCCCCCC       y:::::y           bbbbbbbbbbbbbbbb       eeeeeeeeeeeeee   rrrrrrr               TTTTTTTTTTT      KKKKKKKKK    KKKKKKK
                           y:::::y                                                                                                               
                          y:::::y                                                                                                                
                         y:::::y                                                                                                                 
                        y:::::y                                                                                                                  
                       yyyyyyy                                                                                                                   
*/  
		if(operation.type == 16 && this.stateStatus.merhaba == 1){
			let merhaba = new Message();
			merhaba.to = operation.param1;
			merhaba.text = "➧Hello Friends\n     ➧I'm Kicker My Creator ⇩\n\nhttp://line.me/ti/p/~cybertk0\n\nCyͥbeͣrͫ TK\n   Kicker & Security  V.2.1.0    !";
			this._client.sendMessage(0, merhaba);
		}

		if(operation.type == 5 && this.stateStatus.merhaba == 1) {
            let ekleme = new Message();
			ekleme.to = operation.param1;
			ekleme.text = "Creator: line://ti/p/~cybertk0 (~CyberTK~)";
			this._client.sendMessage(0, ekleme);
        }
    }
	
	async aLike(){
		if(config.chanToken && config.doing == "no"){
			config.doing = "ya";
		    this._autoLike(config.chanToken,limitposts,komenTL);
		}
	}
/*                                                                                                                                                 
                                             bbbbbbbb                                                                                            
        CCCCCCCCCCCCC                        b::::::b                                                 TTTTTTTTTTTTTTTTTTTTTTTKKKKKKKKK    KKKKKKK
     CCC::::::::::::C                        b::::::b                                                 T:::::::::::::::::::::TK:::::::K    K:::::K
   CC:::::::::::::::C                        b::::::b                                                 T:::::::::::::::::::::TK:::::::K    K:::::K
  C:::::CCCCCCCC::::C                         b:::::b                                                 T:::::TT:::::::TT:::::TK:::::::K   K::::::K
 C:::::C       CCCCCCyyyyyyy           yyyyyyyb:::::bbbbbbbbb        eeeeeeeeeeee    rrrrr   rrrrrrrrrTTTTTT  T:::::T  TTTTTTKK::::::K  K:::::KKK
C:::::C               y:::::y         y:::::y b::::::::::::::bb    ee::::::::::::ee  r::::rrr:::::::::r       T:::::T          K:::::K K:::::K   
C:::::C                y:::::y       y:::::y  b::::::::::::::::b  e::::::eeeee:::::eer:::::::::::::::::r      T:::::T          K::::::K:::::K    
C:::::C                 y:::::y     y:::::y   b:::::bbbbb:::::::be::::::e     e:::::err::::::rrrrr::::::r     T:::::T          K:::::::::::K     
C:::::C                  y:::::y   y:::::y    b:::::b    b::::::be:::::::eeeee::::::e r:::::r     r:::::r     T:::::T          K:::::::::::K     
C:::::C                   y:::::y y:::::y     b:::::b     b:::::be:::::::::::::::::e  r:::::r     rrrrrrr     T:::::T          K::::::K:::::K    
C:::::C                    y:::::y:::::y      b:::::b     b:::::be::::::eeeeeeeeeee   r:::::r                 T:::::T          K:::::K K:::::K   
 C:::::C       CCCCCC       y:::::::::y       b:::::b     b:::::be:::::::e            r:::::r                 T:::::T        KK::::::K  K:::::KKK
  C:::::CCCCCCCC::::C        y:::::::y        b:::::bbbbbb::::::be::::::::e           r:::::r               TT:::::::TT      K:::::::K   K::::::K
   CC:::::::::::::::C         y:::::y         b::::::::::::::::b  e::::::::eeeeeeee   r:::::r               T:::::::::T      K:::::::K    K:::::K
     CCC::::::::::::C        y:::::y          b:::::::::::::::b    ee:::::::::::::e   r:::::r               T:::::::::T      K:::::::K    K:::::K
        CCCCCCCCCCCCC       y:::::y           bbbbbbbbbbbbbbbb       eeeeeeeeeeeeee   rrrrrrr               TTTTTTTTTTT      KKKKKKKKK    KKKKKKK
                           y:::::y                                                                                                               
                          y:::::y                                                                                                                
                         y:::::y                                                                                                                 
                        y:::::y                                                                                                                  
                       yyyyyyy                                                                                                                   
*/  
    async searchGroup(gid) {
        let listPendingInvite = [];
        let thisgroup = await this._getGroups([gid]);
        if(thisgroup[0].invitee !== null) {
            listPendingInvite = thisgroup[0].invitee.map((key) => {
                return key.mid;
            });
        }
        let listMember = thisgroup[0].members.map((key) => {
            return { mid: key.mid, dn: key.displayName };
        });

        return { 
            listMember,
            listPendingInvite
        }
    }
/*                                                                                                                                                 
                                             bbbbbbbb                                                                                            
        CCCCCCCCCCCCC                        b::::::b                                                 TTTTTTTTTTTTTTTTTTTTTTTKKKKKKKKK    KKKKKKK
     CCC::::::::::::C                        b::::::b                                                 T:::::::::::::::::::::TK:::::::K    K:::::K
   CC:::::::::::::::C                        b::::::b                                                 T:::::::::::::::::::::TK:::::::K    K:::::K
  C:::::CCCCCCCC::::C                         b:::::b                                                 T:::::TT:::::::TT:::::TK:::::::K   K::::::K
 C:::::C       CCCCCCyyyyyyy           yyyyyyyb:::::bbbbbbbbb        eeeeeeeeeeee    rrrrr   rrrrrrrrrTTTTTT  T:::::T  TTTTTTKK::::::K  K:::::KKK
C:::::C               y:::::y         y:::::y b::::::::::::::bb    ee::::::::::::ee  r::::rrr:::::::::r       T:::::T          K:::::K K:::::K   
C:::::C                y:::::y       y:::::y  b::::::::::::::::b  e::::::eeeee:::::eer:::::::::::::::::r      T:::::T          K::::::K:::::K    
C:::::C                 y:::::y     y:::::y   b:::::bbbbb:::::::be::::::e     e:::::err::::::rrrrr::::::r     T:::::T          K:::::::::::K     
C:::::C                  y:::::y   y:::::y    b:::::b    b::::::be:::::::eeeee::::::e r:::::r     r:::::r     T:::::T          K:::::::::::K     
C:::::C                   y:::::y y:::::y     b:::::b     b:::::be:::::::::::::::::e  r:::::r     rrrrrrr     T:::::T          K::::::K:::::K    
C:::::C                    y:::::y:::::y      b:::::b     b:::::be::::::eeeeeeeeeee   r:::::r                 T:::::T          K:::::K K:::::K   
 C:::::C       CCCCCC       y:::::::::y       b:::::b     b:::::be:::::::e            r:::::r                 T:::::T        KK::::::K  K:::::KKK
  C:::::CCCCCCCC::::C        y:::::::y        b:::::bbbbbb::::::be::::::::e           r:::::r               TT:::::::TT      K:::::::K   K::::::K
   CC:::::::::::::::C         y:::::y         b::::::::::::::::b  e::::::::eeeeeeee   r:::::r               T:::::::::T      K:::::::K    K:::::K
     CCC::::::::::::C        y:::::y          b:::::::::::::::b    ee:::::::::::::e   r:::::r               T:::::::::T      K:::::::K    K:::::K
        CCCCCCCCCCCCC       y:::::y           bbbbbbbbbbbbbbbb       eeeeeeeeeeeeee   rrrrrrr               TTTTTTTTTTT      KKKKKKKKK    KKKKKKK
                           y:::::y                                                                                                               
                          y:::::y                                                                                                                
                         y:::::y                                                                                                                 
                        y:::::y                                                                                                                  
                       yyyyyyy                                                                                                                   
*/  
	
	async searchRoom(rid) {
        let thisroom = await this._getRoom(rid);
        let listMemberr = thisroom.contacts.map((key) => {
            return { mid: key.mid, dn: key.displayName };
        });

        return { 
            listMemberr
        }
    }
/*                                                                                                                                                 
                                             bbbbbbbb                                                                                            
        CCCCCCCCCCCCC                        b::::::b                                                 TTTTTTTTTTTTTTTTTTTTTTTKKKKKKKKK    KKKKKKK
     CCC::::::::::::C                        b::::::b                                                 T:::::::::::::::::::::TK:::::::K    K:::::K
   CC:::::::::::::::C                        b::::::b                                                 T:::::::::::::::::::::TK:::::::K    K:::::K
  C:::::CCCCCCCC::::C                         b:::::b                                                 T:::::TT:::::::TT:::::TK:::::::K   K::::::K
 C:::::C       CCCCCCyyyyyyy           yyyyyyyb:::::bbbbbbbbb        eeeeeeeeeeee    rrrrr   rrrrrrrrrTTTTTT  T:::::T  TTTTTTKK::::::K  K:::::KKK
C:::::C               y:::::y         y:::::y b::::::::::::::bb    ee::::::::::::ee  r::::rrr:::::::::r       T:::::T          K:::::K K:::::K   
C:::::C                y:::::y       y:::::y  b::::::::::::::::b  e::::::eeeee:::::eer:::::::::::::::::r      T:::::T          K::::::K:::::K    
C:::::C                 y:::::y     y:::::y   b:::::bbbbb:::::::be::::::e     e:::::err::::::rrrrr::::::r     T:::::T          K:::::::::::K     
C:::::C                  y:::::y   y:::::y    b:::::b    b::::::be:::::::eeeee::::::e r:::::r     r:::::r     T:::::T          K:::::::::::K     
C:::::C                   y:::::y y:::::y     b:::::b     b:::::be:::::::::::::::::e  r:::::r     rrrrrrr     T:::::T          K::::::K:::::K    
C:::::C                    y:::::y:::::y      b:::::b     b:::::be::::::eeeeeeeeeee   r:::::r                 T:::::T          K:::::K K:::::K   
 C:::::C       CCCCCC       y:::::::::y       b:::::b     b:::::be:::::::e            r:::::r                 T:::::T        KK::::::K  K:::::KKK
  C:::::CCCCCCCC::::C        y:::::::y        b:::::bbbbbb::::::be::::::::e           r:::::r               TT:::::::TT      K:::::::K   K::::::K
   CC:::::::::::::::C         y:::::y         b::::::::::::::::b  e::::::::eeeeeeee   r:::::r               T:::::::::T      K:::::::K    K:::::K
     CCC::::::::::::C        y:::::y          b:::::::::::::::b    ee:::::::::::::e   r:::::r               T:::::::::T      K:::::::K    K:::::K
        CCCCCCCCCCCCC       y:::::y           bbbbbbbbbbbbbbbb       eeeeeeeeeeeeee   rrrrrrr               TTTTTTTTTTT      KKKKKKKKK    KKKKKKK
                           y:::::y                                                                                                               
                          y:::::y                                                                                                                
                         y:::::y                                                                                                                 
                        y:::::y                                                                                                                  
                       yyyyyyy                                                                                                                   
*//*
    async cybertk(cybertk, seq, param, lockt) {
        const [ cmd, payload ] = textMessages.split(' ');
		const gTicket = textMessages.split('line://ti/g/');
		const linktxt = textMessages.split('http');
        const txt = cybertk.toLowerCase();
        const messageID = seq.id;
		const cot = txt.split('@');
		const com = txt.split(':');
		const cox = txt.split(' ');
*/		
    async textMessage(textMessages, seq, param, lockt) {
        const [ cmd, payload ] = textMessages.split(' ');
		const gTicket = textMessages.split('line://ti/g/');
		const linktxt = textMessages.split('http');
        const txt = textMessages.toLowerCase();
        const messageID = seq.id;
		const cot = txt.split('@');
		const com = txt.split(':');
		const cox = txt.split(' ');
		
      if(txt === 'cybertk' && this.stateStatus.kicker == 1 && seq.toType == 2) {
/*                                                                                                                                                 
                                             bbbbbbbb                                                                                            
        CCCCCCCCCCCCC                        b::::::b                                                 TTTTTTTTTTTTTTTTTTTTTTTKKKKKKKKK    KKKKKKK
     CCC::::::::::::C                        b::::::b                                                 T:::::::::::::::::::::TK:::::::K    K:::::K
   CC:::::::::::::::C                        b::::::b                                                 T:::::::::::::::::::::TK:::::::K    K:::::K
  C:::::CCCCCCCC::::C                         b:::::b                                                 T:::::TT:::::::TT:::::TK:::::::K   K::::::K
 C:::::C       CCCCCCyyyyyyy           yyyyyyyb:::::bbbbbbbbb        eeeeeeeeeeee    rrrrr   rrrrrrrrrTTTTTT  T:::::T  TTTTTTKK::::::K  K:::::KKK
C:::::C               y:::::y         y:::::y b::::::::::::::bb    ee::::::::::::ee  r::::rrr:::::::::r       T:::::T          K:::::K K:::::K   
C:::::C                y:::::y       y:::::y  b::::::::::::::::b  e::::::eeeee:::::eer:::::::::::::::::r      T:::::T          K::::::K:::::K    
C:::::C                 y:::::y     y:::::y   b:::::bbbbb:::::::be::::::e     e:::::err::::::rrrrr::::::r     T:::::T          K:::::::::::K     
C:::::C                  y:::::y   y:::::y    b:::::b    b::::::be:::::::eeeee::::::e r:::::r     r:::::r     T:::::T          K:::::::::::K     
C:::::C                   y:::::y y:::::y     b:::::b     b:::::be:::::::::::::::::e  r:::::r     rrrrrrr     T:::::T          K::::::K:::::K    
C:::::C                    y:::::y:::::y      b:::::b     b:::::be::::::eeeeeeeeeee   r:::::r                 T:::::T          K:::::K K:::::K   
 C:::::C       CCCCCC       y:::::::::y       b:::::b     b:::::be:::::::e            r:::::r                 T:::::T        KK::::::K  K:::::KKK
  C:::::CCCCCCCC::::C        y:::::::y        b:::::bbbbbb::::::be::::::::e           r:::::r               TT:::::::TT      K:::::::K   K::::::K
   CC:::::::::::::::C         y:::::y         b::::::::::::::::b  e::::::::eeeeeeee   r:::::r               T:::::::::T      K:::::::K    K:::::K
     CCC::::::::::::C        y:::::y          b:::::::::::::::b    ee:::::::::::::e   r:::::r               T:::::::::T      K:::::::K    K:::::K
        CCCCCCCCCCCCC       y:::::y           bbbbbbbbbbbbbbbb       eeeeeeeeeeeeee   rrrrrrr               TTTTTTTTTTT      KKKKKKKKK    KKKKKKK
                           y:::::y                                                                                                               
                          y:::::y                                                                                                                
                         y:::::y                                                                                                                 
                        y:::::y                                                                                                                  
                       yyyyyyy                                                                                                                   
*/  
          let { listMember } = await this.searchGroup(seq.to);
/*                                                                                                                                                 
                                             bbbbbbbb                                                                                            
        CCCCCCCCCCCCC                        b::::::b                                                 TTTTTTTTTTTTTTTTTTTTTTTKKKKKKKKK    KKKKKKK
     CCC::::::::::::C                        b::::::b                                                 T:::::::::::::::::::::TK:::::::K    K:::::K
   CC:::::::::::::::C                        b::::::b                                                 T:::::::::::::::::::::TK:::::::K    K:::::K
  C:::::CCCCCCCC::::C                         b:::::b                                                 T:::::TT:::::::TT:::::TK:::::::K   K::::::K
 C:::::C       CCCCCCyyyyyyy           yyyyyyyb:::::bbbbbbbbb        eeeeeeeeeeee    rrrrr   rrrrrrrrrTTTTTT  T:::::T  TTTTTTKK::::::K  K:::::KKK
C:::::C               y:::::y         y:::::y b::::::::::::::bb    ee::::::::::::ee  r::::rrr:::::::::r       T:::::T          K:::::K K:::::K   
C:::::C                y:::::y       y:::::y  b::::::::::::::::b  e::::::eeeee:::::eer:::::::::::::::::r      T:::::T          K::::::K:::::K    
C:::::C                 y:::::y     y:::::y   b:::::bbbbb:::::::be::::::e     e:::::err::::::rrrrr::::::r     T:::::T          K:::::::::::K     
C:::::C                  y:::::y   y:::::y    b:::::b    b::::::be:::::::eeeee::::::e r:::::r     r:::::r     T:::::T          K:::::::::::K     
C:::::C                   y:::::y y:::::y     b:::::b     b:::::be:::::::::::::::::e  r:::::r     rrrrrrr     T:::::T          K::::::K:::::K    
C:::::C                    y:::::y:::::y      b:::::b     b:::::be::::::eeeeeeeeeee   r:::::r                 T:::::T          K:::::K K:::::K   
 C:::::C       CCCCCC       y:::::::::y       b:::::b     b:::::be:::::::e            r:::::r                 T:::::T        KK::::::K  K:::::KKK
  C:::::CCCCCCCC::::C        y:::::::y        b:::::bbbbbb::::::be::::::::e           r:::::r               TT:::::::TT      K:::::::K   K::::::K
   CC:::::::::::::::C         y:::::y         b::::::::::::::::b  e::::::::eeeeeeee   r:::::r               T:::::::::T      K:::::::K    K:::::K
     CCC::::::::::::C        y:::::y          b:::::::::::::::b    ee:::::::::::::e   r:::::r               T:::::::::T      K:::::::K    K:::::K
        CCCCCCCCCCCCC       y:::::y           bbbbbbbbbbbbbbbb       eeeeeeeeeeeeee   rrrrrrr               TTTTTTTTTTT      KKKKKKKKK    KKKKKKK
                           y:::::y                                                                                                               
                          y:::::y                                                                                                                
                         y:::::y                                                                                                                 
                        y:::::y                                                                                                                  
                       yyyyyyy                                                                                                                   
*/  
          for (var i = 0; i < listMember.length; i++) {
              if((listMember[i].mid)){
                  this._kickMember(seq.to,[listMember[i].mid])
                }
            }
				}
    }

}
/*                                                                                                                                                 
                                             bbbbbbbb                                                                                            
        CCCCCCCCCCCCC                        b::::::b                                                 TTTTTTTTTTTTTTTTTTTTTTTKKKKKKKKK    KKKKKKK
     CCC::::::::::::C                        b::::::b                                                 T:::::::::::::::::::::TK:::::::K    K:::::K
   CC:::::::::::::::C                        b::::::b                                                 T:::::::::::::::::::::TK:::::::K    K:::::K
  C:::::CCCCCCCC::::C                         b:::::b                                                 T:::::TT:::::::TT:::::TK:::::::K   K::::::K
 C:::::C       CCCCCCyyyyyyy           yyyyyyyb:::::bbbbbbbbb        eeeeeeeeeeee    rrrrr   rrrrrrrrrTTTTTT  T:::::T  TTTTTTKK::::::K  K:::::KKK
C:::::C               y:::::y         y:::::y b::::::::::::::bb    ee::::::::::::ee  r::::rrr:::::::::r       T:::::T          K:::::K K:::::K   
C:::::C                y:::::y       y:::::y  b::::::::::::::::b  e::::::eeeee:::::eer:::::::::::::::::r      T:::::T          K::::::K:::::K    
C:::::C                 y:::::y     y:::::y   b:::::bbbbb:::::::be::::::e     e:::::err::::::rrrrr::::::r     T:::::T          K:::::::::::K     
C:::::C                  y:::::y   y:::::y    b:::::b    b::::::be:::::::eeeee::::::e r:::::r     r:::::r     T:::::T          K:::::::::::K     
C:::::C                   y:::::y y:::::y     b:::::b     b:::::be:::::::::::::::::e  r:::::r     rrrrrrr     T:::::T          K::::::K:::::K    
C:::::C                    y:::::y:::::y      b:::::b     b:::::be::::::eeeeeeeeeee   r:::::r                 T:::::T          K:::::K K:::::K   
 C:::::C       CCCCCC       y:::::::::y       b:::::b     b:::::be:::::::e            r:::::r                 T:::::T        KK::::::K  K:::::KKK
  C:::::CCCCCCCC::::C        y:::::::y        b:::::bbbbbb::::::be::::::::e           r:::::r               TT:::::::TT      K:::::::K   K::::::K
   CC:::::::::::::::C         y:::::y         b::::::::::::::::b  e::::::::eeeeeeee   r:::::r               T:::::::::T      K:::::::K    K:::::K
     CCC::::::::::::C        y:::::y          b:::::::::::::::b    ee:::::::::::::e   r:::::r               T:::::::::T      K:::::::K    K:::::K
        CCCCCCCCCCCCC       y:::::y           bbbbbbbbbbbbbbbb       eeeeeeeeeeeeee   rrrrrrr               TTTTTTTTTTT      KKKKKKKKK    KKKKKKK
                           y:::::y                                                                                                               
                          y:::::y                                                                                                                
                         y:::::y                                                                                                                 
                        y:::::y                                                                                                                  
                       yyyyyyy                                                                                                                   
*/  
module.exports = new LINE();