"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=e(require("moment")),n=e(require("path")),r=e(require("data-store")),a=e(require("crypto-js")),o=e(require("puppeteer-extra")),i=e(require("web3")),s=e(require("@ethereumjs/common")),u=require("@ethereumjs/tx"),c=(require("readline"),e(require("inquirer"))),p=e(require("express")),l=e(require("cors")),d=require("child_process"),f=e(require("fs")),y=e(require("https"));function m(e,t,n,r,a,o,i){try{var s=e[o](i),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,a)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){m(o,r,a,i,s,"next",e)}function s(e){m(o,r,a,i,s,"throw",e)}i(void 0)}))}}var g,v,b,w,x,S,T,I=(function(e){var t=function(e){var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=Object.create((t&&t.prototype instanceof l?t:l).prototype),o=new T(r||[]);return a._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return{value:void 0,done:!0}}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=w(i,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=c(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(e,n,o),a}function c(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var p={};function l(){}function d(){}function f(){}var y={};s(y,a,(function(){return this}));var m=Object.getPrototypeOf,h=m&&m(m(I([])));h&&h!==t&&n.call(h,a)&&(y=h);var g=f.prototype=l.prototype=Object.create(y);function v(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var r;this._invoke=function(a,o){function i(){return new t((function(r,i){!function r(a,o,i,s){var u=c(e[a],e,o);if("throw"!==u.type){var p=u.arg,l=p.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(l).then((function(e){p.value=e,i(p)}),(function(e){return r("throw",e,i,s)}))}s(u.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=c(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,p;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function I(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return d.prototype=f,s(g,"constructor",f),s(f,"constructor",d),d.displayName=s(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},v(b.prototype),s(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},v(g),s(g,i,"Generator"),s(g,a,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=I,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;S(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:I(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}(b={exports:{}}),b.exports),E=a.enc.Base64.stringify(a.HmacSHA256("#","$")),A=function(){return v},G=function(e){var t;return(null!=(t=g.get("investPools"))?t:[]).some((function(t){return t.id===e}))},_=function(e){var t,n=null!=(t=g.get("investPools"))?t:[];n.push({id:e.id,name:e.name,investDate:(new Date).toISOString(),contributionStartDate:e.contributionStartDate,contributionEndDate:e.contributionEndDate}),g.set("investPools",n)},k=function(e){var t;return(null!=(t=g.get("pledgedPools"))?t:[]).some((function(t){return t.id===e}))},P=function(e){var t,n=null!=(t=g.get("pledgedPools"))?t:[];n.push({id:e.id,name:e.name,pledgeDate:(new Date).toISOString(),pledgeStartDate:e.pledgeStartDate,pledgeEndDate:e.pledgeEndDate}),g.set("pledgedPools",n)},L=function(){return g.get("gainsUserToken")},D=function(e){g.set("gainsUserToken",e)},U=function(){var e=JSON.parse(g.get("gainsUserToken")).accessToken;if(null===e)return 0;var n=e.split("."),r=Buffer.from(n[1],"base64"),a=JSON.parse(r.toString("ascii"));return t(new Date(1e3*a.exp)).diff(t(),"days")},R=function(){for(var e,t=E.split("{}"),n=null!=(e=g.get("walletPrivateKey"))?e:"",r=[],o=0;o<n.length;o++)r.push(n[o]);return a.AES.decrypt(r.join(""),t[0]).toString(a.enc.Utf8)},O=function(e){var t=E.split("()"),n=a.AES.encrypt(e,t[0]).toString();g.set("walletPrivateKey",n)},C=function(){return g.get("bscProvider")},M=function(e){g.set("bscProvider",e)},B=function(){return g.get("bscChainID")},N=function(e){g.set("bscChainID",e)},W=function(){return g.get("bscGasPriceGwei")},j=function(e){g.set("bscGasPriceGwei",e)},q=function(){return g.get("walletAddress")},H=function(e){g.set("walletAddress",e)},F=function(){return g.get("maxForDeal")},V=function(e){g.set("maxForDeal",e)},K=function(){return g.get("gainsInvestAddress")},Y=function(e){g.set("gainsInvestAddress",e)},J=function(){return g.get("gainsApiUrlBase")},z=function(e){g.set("gainsApiUrlBase",e)},Q=function(){return g.get("gainsUpdateInterval")},X=function(e){g.set("gainsUpdateInterval",e)},$=function(){return g.get("usdcAddress")},Z=function(e){g.set("usdcAddress",e)},ee=function(){var e;return null!=(e=g.get("botUpdateInterval"))?e:60},te=function(e){g.set("botUpdateInterval",e)},ne=[{inputs:[{internalType:"address",name:"_factory",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"InvalidContributionCollector",type:"error"},{inputs:[],name:"ZeroAddressFactory",type:"error"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"maximumAmount",type:"uint256"},{indexed:!1,internalType:"bytes32[]",name:"proof",type:"bytes32[]"}],name:"Contributed",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"factory",type:"address"}],name:"FactorySet",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"address",name:"_contributionCollector",type:"address"},{internalType:"address",name:"_account",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"uint256",name:"_maximumAmount",type:"uint256"},{internalType:"bytes32[]",name:"_proof",type:"bytes32[]"}],name:"contributeWithPledge",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"factory",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_contributionCollector",type:"address"},{internalType:"address",name:"_account",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"uint256",name:"_tier",type:"uint256"},{internalType:"uint256",name:"_maximumAmount",type:"uint256"},{internalType:"bytes32[]",name:"_proof",type:"bytes32[]"}],name:"flashContribute",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_factory",type:"address"}],name:"setFactory",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],re=function(e,t){return new e.eth.Contract(ne,t)},ae=function(e){console.log(function(e){return"string"==typeof e?t().format("DD/MM/YY HH:mm:ss")+" - "+e:t().format("DD/MM/YY HH:mm:ss")+" - "+JSON.stringify(e)}(e))},oe=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[],name:"_decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],ie=function(e,t){return new e.eth.Contract(oe,t)},se={init:function(e){return h(I.mark((function t(){var n,r;return I.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x=e,S=JSON.parse(x).accessToken,n=require("puppeteer-extra-plugin-stealth"),o.use(n()),t.next=6,o.launch({args:["--disable-web-security","--disable-features=IsolateOrigins","--disable-site-isolation-trials","--ignore-certificate-errors","--no-sandbox"],headless:!0,slowMo:0,devtools:!1});case 6:return r=t.sent,t.next=9,r.pages();case 9:return(w=t.sent[0]).on("console",(function(e){"access token expired"!==e.text()?console.log("PAGE LOG:",e.text()):ae("🚨 Gains expired token, it's neccesary to provide a new Gains Token!!")})),t.next=14,w.setExtraHTTPHeaders({"user-agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36"});case 14:return t.next=16,w.goto("https://app.gains-associates.com/login",{waitUntil:"networkidle0"});case 16:return t.next=18,w.evaluate((function(e,t){localStorage.setItem("user",e),localStorage.setItem("accessToken",t),localStorage.setItem("isWelcomeMsgShow","true"),localStorage.setItem("isDealsBtnShow","true"),localStorage.setItem("isQuizBtnShow","true"),localStorage.setItem("gainsConnectorId","Metamask"),localStorage.setItem("isPortfolioBtnShow","true"),localStorage.setItem("isWalletBtnShow","true"),localStorage.setItem("isLeaderBtnShow","true")}),x,S);case 18:return w.bringToFront(),t.next=21,w.goto("https://app.gains-associates.com/pools",{waitUntil:"networkidle0"});case 21:["SIGHUP","SIGINT","SIGQUIT","SIGILL","SIGTRAP","SIGABRT","SIGBUS","SIGFPE","SIGUSR1","SIGSEGV","SIGUSR2","SIGTERM"].forEach((function(e){process.on(e,(function(){r.close()}))}));case 22:case"end":return t.stop()}}),t)})))()},getUser:function(){var e=h(I.mark((function e(){var n;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue({url:"auth/autoLogin",method:"POST",body:null,printLog:!1});case 2:return e.abrupt("return",{id:(n=e.sent).id,username:n.username,tier:n.tier,totalGainsBalance:n.total_gains_balance,sessionExpirationDate:t(new Date(1e3*n.exp))});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getWallets:function(){var e=h(I.mark((function e(t){return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue({url:"user/"+t+"/wallet?page=1&rows=5&search=",method:"GET",body:null,printLog:!1});case 2:return e.abrupt("return",e.sent.rows.map((function(e){return{id:e.id,address:e.address}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pledge:function(){var e=h(I.mark((function e(t){return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue({url:"pool/"+t.poolId+"/pledge",method:"POST",body:{walletId:t.walletId,networkId:56,amount:t.amount},printLog:!0});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getPools:function(){return g.get("allPools")},updatePools:function(){var e=h(I.mark((function e(){return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue({url:"pool?type=upcoming,ongoing&page=1&rows=10&search=",method:"GET",body:null,printLog:!1});case 2:t=e.sent.rows,g.set("lastUpdated",new Date),g.set("allPools",t);case 4:case"end":return e.stop()}var t}),e)})));return function(){return e.apply(this,arguments)}}(),getWhitelist:function(){var e=h(I.mark((function e(t){var n;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue({url:"pool/"+t.poolId+"/network/56/user/"+t.userId+"/whitelist",method:"GET",body:null,printLog:!0});case 2:return e.abrupt("return",{status:(n=e.sent).status,proof:n.proof,whitelist:parseInt(n.whitelist),address:n.address,contract:n.contract,networkId:n.networkId});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),informInvestment:function(){var e=h(I.mark((function e(t){return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue({url:"pool/"+t.poolId+"/investments/"+t.userId,method:"POST",body:{amount:t.amount.toString(),address:t.address},printLog:!0});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),sendUsdcToInvest:function(){var e=h(I.mark((function e(t){var n,r,a,o,c,p,l,d,f,y,m,h;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=C(),r=parseInt(B()),a=new i(n),o=re(a,K()),c=o.methods.flashContribute(t.contributionCollector,t.address,a.utils.toHex(a.utils.toWei(t.amount.toString(),"ether")),t.tier,a.utils.toHex(a.utils.toWei(t.maximumAmount.toString(),"ether")),t.proof).encodeABI(),e.next=7,a.eth.getTransactionCount(q());case 7:return p={nonce:a.utils.toHex(e.sent),to:K(),value:"0x0",gasLimit:a.utils.toHex(35e4),gasPrice:a.utils.toHex(a.utils.toWei(W().toString(),"gwei")),data:c},l=s.custom({chainId:r}),d=u.Transaction.fromTxData(p,{common:l}),f=Buffer.from(R(),"hex"),y=d.sign(f),m=y.serialize(),h="0x"+m.toString("hex"),e.next=17,a.eth.sendSignedTransaction(h);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),isWalletAllowanceWithGains:function(){return h(I.mark((function e(){var t,n,r,a;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=C(),n=new i(t),r=ie(n,$()),e.next=5,r.methods.allowance(q(),K()).call();case 5:return a=parseFloat(n.utils.fromWei(e.sent)),e.abrupt("return",a>0);case 8:case"end":return e.stop()}}),e)})))()},approveUsdcWithGains:function(){return h(I.mark((function e(){var t,n,r,a,o,c,p,l,d,f,y,m;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=C(),n=parseInt(B()),r=new i(t),a=ie(r,$()),o=a.methods.approve(K(),"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").encodeABI(),e.next=7,r.eth.getTransactionCount(q());case 7:return c={nonce:r.utils.toHex(e.sent),to:$(),value:"0x0",gasLimit:r.utils.toHex(35e4),gasPrice:r.utils.toHex(r.utils.toWei(W().toString(),"gwei")),data:o},p=s.custom({chainId:n}),l=u.Transaction.fromTxData(c,{common:p}),d=Buffer.from(R(),"hex"),f=l.sign(d),y=f.serialize(),m="0x"+y.toString("hex"),e.next=17,r.eth.sendSignedTransaction(m);case 17:case"end":return e.stop()}}),e)})))()}};function ue(e){return ce.apply(this,arguments)}function ce(){return(ce=h(I.mark((function e(t){var n,r,a,o,i,s;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,r=t.method,o=t.printLog,i=null===(a=t.body)?null:JSON.stringify(a),o&&ae("GET"===r?"Gains API: "+r+" "+n+" > request":"Gains API: "+r+" "+n+" > request: \n"+JSON.stringify(a,null,2)),e.next=5,w.evaluate((function(e,t,n,r,a){return fetch(""+t+n,{headers:{accept:"application/json, text/plain, */*","accept-language":"en-US,en;q=0.9,es-ES;q=0.8,es;q=0.7",authorization:"Bearer "+e,"content-type":"application/json","sec-ch-ua":'" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',"sec-ch-ua-mobile":"?0","sec-ch-ua-platform":'"macOS"',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-site"},referrer:"https://app.gains-associates.com/",referrerPolicy:"strict-origin-when-cross-origin",body:r,method:a,mode:"cors",credentials:"include"}).then((function(e){return new Promise((function(t,n){e.ok?e.json().then((function(n){t({error:!1,status:e.status,body:n})})).catch((function(e){return n(e)})):e.text().then((function(n){t({error:!0,status:e.status,body:n})})).catch((function(e){return n(e)}))}))}))}),S,J(),n,i,r);case 5:if(!(s=e.sent).error){e.next=9;break}throw new Error("🚨 ERROR Gains API: "+r+" "+n+", status "+s.status+", body: "+s.body);case 9:return o&&ae("Gains API: "+r+" "+n+" > response: \n"+JSON.stringify(s.body,null,2)),e.abrupt("return",s.body);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(){return(pe=h(I.mark((function e(){return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),ae("🚨 GLOBAL ERROR: "+(null==e.t0?void 0:e.t0.message));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function le(){return de.apply(this,arguments)}function de(){return(de=h(I.mark((function e(){var t,r,a,o,i,s,u,c,p,l,d,f;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f=function(){return(f=h(I.mark((function e(t){var n,a,o;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!G(t.id)){e.next=2;break}return e.abrupt("return");case 2:return _(t),ae('⏱  Preparing to invest in "'+t.name+'", retrieving whitelist ...'),e.next=6,se.getWhitelist({poolId:t.id,userId:r.id});case 6:return n=e.sent,ae("⏱  Checking USDC approval..."),e.next=10,se.isWalletAllowanceWithGains();case 10:if(e.sent){e.next=16;break}return ae("⏱  Approving USDC to use with Gains Smart Contract..."),e.next=15,se.approveUsdcWithGains();case 15:ae("✅ USDC approved");case 16:if(a=F(),ae("⏱  Investing "+(o=n.whitelist>a?a:n.whitelist)+" USDC out of a maximum of "+n.whitelist+" USDC ..."),q().toLocaleLowerCase()===n.address.toLocaleLowerCase()){e.next=22;break}return ae("🚨 It has not been possible to invest, the whitelist wallet is "+n.address+" and the bot wallet is "+q()),e.abrupt("return");case 22:return e.next=24,se.sendUsdcToInvest({address:n.address,amount:o,contributionCollector:n.contract,tier:r.tier,maximumAmount:n.whitelist,proof:n.proof});case 24:return e.next=26,se.informInvestment({userId:r.id,poolId:t.id,amount:o,address:n.address});case 26:ae("✅ Investment in "+t.name+" finished! 🚀");case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)},d=function(e){return f.apply(this,arguments)},l=function(){return(l=h(I.mark((function e(t){var n;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.canPledge){e.next=2;break}return e.abrupt("return");case 2:if(!(t.pledge.length>0)){e.next=4;break}return e.abrupt("return");case 4:if(!k(t.id)){e.next=6;break}return e.abrupt("return");case 6:return n=F(),ae("⏱ Pledging to the pool: "+t.name),e.next=10,se.pledge({poolId:t.id,walletId:o.id,networkId:56,amount:n});case 10:P(t),ae('✅ Pledged finished for "'+t.name+'" with wallet "'+(null==o?void 0:o.address)+'" and $'+n);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)},p=function(e){return l.apply(this,arguments)},c=function(){return(c=h(I.mark((function e(){var t,n,r;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=se.getPools(),n=0;case 2:if(!(n<t.length)){e.next=21;break}if(r=t[n],e.prev=4,!fe(r)){e.next=10;break}return e.next=8,p(r);case 8:e.next=13;break;case 10:if(!ye(r)){e.next=13;break}return e.next=13,d(r);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),ae("🚨 ERROR in pledge or invest: "+(null==e.t0?void 0:e.t0.message));case 18:n++,e.next=2;break;case 21:setTimeout(u,1e3*ee());case 22:case"end":return e.stop()}}),e,null,[[4,15]])})))).apply(this,arguments)},u=function(){return c.apply(this,arguments)},s=function(){return(s=h(I.mark((function e(){return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,se.updatePools();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),ae("🚨 ERROR updating pools: "+(null==e.t0?void 0:e.t0.message));case 8:setTimeout(i,1e3*Q());case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)},i=function(){return s.apply(this,arguments)},t=require(n.resolve(process.cwd(),"package.json")),ae("##############################"),ae("Gains Bot is starting (v"+t.version+")..."),ae(""),"config.json"!==A()&&(ae("Gains API base: "+J()),ae("Config file: "+A()),ae("")),void 0!==L()&&""!==L()){e.next=16;break}return ae("🚨 You need to configure bot first!"),e.abrupt("return");case 16:if(!(U()<=0)){e.next=19;break}return ae("🚨 Gains session is expired! A new token is required"),e.abrupt("return");case 19:return ae("⏱  Initializing engine..."),e.next=22,se.init(L());case 22:return ae("⏱  Obtaining user information..."),e.next=25,se.getUser();case 25:return ae("Logged user: "+(r=e.sent).username),ae("Tier: "+r.tier+" ("+r.totalGainsBalance+" GAINS)"),ae("Gains session expiration: "+r.sessionExpirationDate.format("DD/MM/YY HH:mm:ss")+" ("+U()+" days left)"),e.next=31,se.getWallets(r.id);case 31:if((a=e.sent).forEach((function(e){ae("Wallet: "+e.address)})),ae("Maximum investment: "+F()+" USDC"),o=a.find((function(e){return e.address.toLocaleLowerCase()===q().toLocaleLowerCase()}))){e.next=38;break}return ae("🚨 The configured wallet is not registered in Gains: "+q()),e.abrupt("return");case 38:return e.next=40,i();case 40:return ae(""),ae("⏱  Waiting for invest..."),e.next=44,u();case 44:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(e){return t().isAfter(e.pledgeStartDate)&&t().isBefore(e.pledgeEndDate)}function ye(e){return t().isAfter(e.contributionStartDate)&&t().isBefore(e.contributionEndDate)}function me(){return(me=h(I.mark((function e(){return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("======================="),console.log("Gains Bot configuration"),console.log("=======================\n"),console.log("Config file: "+A()+"\n"),e.abrupt("return",c.prompt([{type:"input",name:"GAINS_USER_TOKEN",message:"Gains User Token",default:function(){return L()}},{type:"number",name:"GAINS_UPDATE_INTERVAL",message:"Gains > Update interval (seconds)",default:function(){return Q()}},{type:"number",name:"BOT_UPDATE_INTERVAL",message:"Bot > Update interval (seconds)",default:function(){return ee()}},{type:"input",name:"WALLET_ADDRESS",message:"Wallet > Direction 0x...",default:function(){return q()}},{type:"input",name:"WALLET_PRIVATE_KEY",message:"Wallet > Private Key",default:function(){return R()?"configured ✅":""}},{type:"number",name:"MAX_USDC_TO_INVEST",message:"Maximum investment in USDC",default:function(){return F()}},{type:"input",name:"BSC_PROVIDER",message:"BSC > Provider (dont touch)",default:function(){return C()}},{type:"input",name:"BSC_CHAIN_ID",message:"BSC > Chain ID (dont touch)",default:function(){return B()}},{type:"input",name:"BSC_GAS_PRICE",message:"BSC > Gas Price Gwei (dont touch)",default:function(){return W()}},{type:"input",name:"GAINS_INVEST_ADDRESS",message:"BSC > Gains Invest Address (dont touch)",default:function(){return K()}},{type:"input",name:"USDC_ADDRESS",message:"BSC > USDC Address (dont touch)",default:function(){return $()}},{type:"input",name:"GAINS_URL_API_BASE",message:"BSC > Gains API Base Url (dont touch)",default:function(){return J()}}]).then((function(e){D(e.GAINS_USER_TOKEN),X(e.GAINS_UPDATE_INTERVAL),H(e.WALLET_ADDRESS),"configured ✅"!==e.WALLET_PRIVATE_KEY&&(console.log("private key stored",e.WALLET_PRIVATE_KEY),O(e.WALLET_PRIVATE_KEY)),te(e.BOT_UPDATE_INTERVAL),V(e.MAX_USDC_TO_INVEST),M(e.BSC_PROVIDER),N(e.BSC_CHAIN_ID),j(e.BSC_GAS_PRICE),Y(e.GAINS_INVEST_ADDRESS),Z(e.USDC_ADDRESS),z(e.GAINS_URL_API_BASE),console.log("\n✅ The configuration has been stored"),console.log('\n🚨 Remember to restart de bot with "bot-restart"')})).catch((function(e){e.isTtyError?console.log("🚨 ERROR! Unable to configure the bot"):console.log("🚨 ERROR! ",e)})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function he(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Promise((function(t){ae("exec: "+e+" "+n.join(" "));var r=d.spawn(e,n),a=[];r.stdout.on("data",(function(e){a.push(e)})),r.stderr.on("data",(function(e){a.push(e)})),r.on("error",(function(e){a.push("ERROR: "+e.message)})),r.on("close",(function(e){a.push("Exit code: "+e),t(a.join("\n"))}))}))}function ge(){return ve.apply(this,arguments)}function ve(){return(ve=h(I.mark((function e(){return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",JSON.parse(f.readFileSync(n.resolve(__dirname,"config.json")).toString()));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var be,we=require("yargs/yargs")((0,require("yargs/helpers").hideBin)(process.argv)).argv;be=null!=(T=we.config)?T:"config.json",v=be,g=r({path:n.resolve(process.cwd(),v)}),we.configure?function(){me.apply(this,arguments)}():we.monitor?function(){var e,t=p();t.use(l()),t.use(p.json()),t.use(p.urlencoded({extended:!0}));var r=a.AES.decrypt(null!=(e=process.env.MONITOR_TOKEN)?e:"","ACC1024").toString(a.enc.Utf8);t.use((function(e,t,n){e.headers["x-auth"]===r?n():t.status(401).send("Not authorized")})),t.get("/monitor/ping",(function(e,t){t.status(200).send("pong!")})),t.post("/monitor/restart",function(){var e=h(I.mark((function e(t,n){return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.status(204).send(""),e.next=3,he("monitor-restart");case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),t.get("/bot/status",function(){var e=h(I.mark((function e(t,n){return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he("bot-status");case 2:n.send({data:e.sent});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),t.get("/bot/version",function(){var e=h(I.mark((function e(t,r){var a;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=JSON.parse(f.readFileSync(n.resolve(__dirname,"package.json")).toString()),r.send({data:a.version});case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),t.post("/bot/stop",function(){var e=h(I.mark((function e(t,n){return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he("bot-stop");case 2:n.send({data:e.sent});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),t.post("/bot/start",function(){var e=h(I.mark((function e(t,n){return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he("bot-start");case 2:n.send({data:e.sent});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),t.post("/bot/restart",function(){var e=h(I.mark((function e(t,n){return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he("bot-restart");case 2:n.send({data:e.sent});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),t.post("/bot/restart-all",function(){var e=h(I.mark((function e(t,n){return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he("restart-all");case 2:n.send({data:e.sent});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),t.post("/bot/upgrade",function(){var e=h(I.mark((function e(t,n){return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he("bot-upgrade");case 2:n.send({data:e.sent});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),t.get("/bot/gains-last-update",function(){var e=h(I.mark((function e(t,n){return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge();case 2:n.send({data:e.sent.lastUpdated});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),t.get("/bot/invest-pools",function(){var e=h(I.mark((function e(t,n){return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge();case 2:n.send({data:e.sent.investPools});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),t.get("/bot/pledged-pools",function(){var e=h(I.mark((function e(t,n){return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge();case 2:n.send({data:e.sent.pledgedPools});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),t.get("/bot/config",function(){var e=h(I.mark((function e(t,n){var r;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge();case 2:n.send({data:{walletAddress:(r=e.sent).walletAddress,walletPrivateKey:r.walletPrivateKey&&r.walletPrivateKey.length>0?"[configured]":"[not configured]",maxForDeal:r.maxForDeal,bscProvider:r.bscProvider,bscChainID:r.bscChainID,bscGasPriceGwei:r.bscGasPriceGwei,gainsInvestAddress:r.gainsInvestAddress,gainsApiUrlBase:r.gainsApiUrlBase,gainsUpdateInterval:r.gainsUpdateInterval,botUpdateInterval:r.botUpdateInterval,usdcAddress:r.usdcAddress,gainsUserToken:r.gainsUserToken}});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),t.get("/bot/all-pools",function(){var e=h(I.mark((function e(t,n){return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge();case 2:n.send({data:e.sent.allPools});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),t.get("/bot/log",function(){var e=h(I.mark((function e(t,n){var r;return I.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=["--raw","--nostream","--lines"]).push(void 0!==t.query.lines?parseInt(t.query.lines).toString():"500"),e.next=4,he.apply(void 0,["pm2","log","bot"].concat(r));case 4:n.send({data:e.sent});case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),t.all("*",(function(e,t){t.status(404).send("")}));var o=y.createServer({key:f.readFileSync(n.resolve(__dirname,"./monitor.key"),"utf8"),cert:f.readFileSync(n.resolve(__dirname,"./monitor.crt"),"utf8")},t).listen(1506,(function(){ae("Monitor listen on port 1506")}));["SIGHUP","SIGINT","SIGQUIT","SIGILL","SIGTRAP","SIGABRT","SIGBUS","SIGFPE","SIGUSR1","SIGSEGV","SIGUSR2","SIGTERM"].forEach((function(e){process.on(e,(function(){o.close((function(){ae("Monitor closed")}))}))}))}():function(){pe.apply(this,arguments)}(),["SIGHUP","SIGINT","SIGQUIT","SIGILL","SIGTRAP","SIGABRT","SIGBUS","SIGFPE","SIGUSR1","SIGSEGV","SIGUSR2","SIGTERM"].forEach((function(e){process.on(e,(function(){ae("Process finish: "+e)}))}));
//# sourceMappingURL=gains-investor-v2.cjs.production.min.js.map
