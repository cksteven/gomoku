"use strict"
define("gomoku/app",["exports","gomoku/resolver","ember-load-initializers","gomoku/config/environment"],function(e,t,o,i){Object.defineProperty(e,"__esModule",{value:!0})
var r=Ember.Application.extend({modulePrefix:i.default.modulePrefix,podModulePrefix:i.default.podModulePrefix,Resolver:t.default});(0,o.default)(r,i.default.modulePrefix),e.default=r}),define("gomoku/components/gomoku-game",["exports","gomoku/mixins/shared-stuff","ember-data"],function(e,t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend(t.default,{didInsertElement:function(){this.drawGrid()},actions:{putStone:function(e){if(this.get("currentPlayerWin"))return!1
var t=this.get("rect"),o=this.get("squareSize"),i=Math.floor((e.clientX-t.left)/o),r=Math.floor((e.clientY-t.top)/o)
this.drawStone(i,r)}},drawStone:function(e,t){if(this.isValid(e,t)){var o=this.get("currentPlayerBlack"),i=o?"#000":"#FFF"
this.drawCircle(e,t,i),this.isWin()?(this.set("currentPlayerWin",!0),alert((o?"BLACK":"WHITE")+" wins!\nPlease refresh the page to start a new game.")):this.set("currentPlayerBlack",!o)}},isValid:function(e,t){var o=this.get("grid")
if(o[e][t]>0)return!1
var i=this.get("currentPlayerBlack")
return o[e][t]=i?1:2,!0},isWin:function(){for(var e=this.get("currentPlayerBlack")?1:2,t=!1,o=this.get("grid"),i=this.get("height"),r=0;r<i;r++)for(var n=0;n<i-4;n++){for(var a=!0,l=0;l<5;l++)o[r][n+l]!==e&&(a=!1)
a&&(t=!0),a=!0
for(var u=0;u<5;u++)o[n+u][r]!==e&&(a=!1)
a&&(t=!0)}for(var d=4;d<i;d++)for(var s=0;s<d-3;s++){for(var f=!0,m=0;m<5;m++)o[d-s-m][s+m]!==e&&(f=!1)
f&&(t=!0),f=!0
for(var c=0;c<5;c++)o[d-s-c][i-1-s-c]!==e&&(f=!1)
f&&(t=!0),f=!0
for(var p=0;p<5;p++)o[i-1-d+s+p][s+p]!==e&&(f=!1)
f&&(t=!0),f=!0
for(var g=0;g<5;g++)o[i-1-d+s+g][i-1-s-g]!==e&&(f=!1)
f&&(t=!0)}return t}})}),define("gomoku/helpers/app-version",["exports","gomoku/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,o){function i(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.default.APP.version,n=i.versionOnly||i.hideSha,a=i.shaOnly||i.hideVersion,l=null
return n&&(i.showExtended&&(l=r.match(o.versionExtendedRegExp)),l||(l=r.match(o.versionRegExp))),a&&(l=r.match(o.shaRegExp)),l?l[0]:r}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=i,e.default=Ember.Helper.helper(i)}),define("gomoku/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("gomoku/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("gomoku/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","gomoku/config/environment"],function(e,t,o){Object.defineProperty(e,"__esModule",{value:!0})
var i=void 0,r=void 0
o.default.APP&&(i=o.default.APP.name,r=o.default.APP.version),e.default={name:"App Version",initialize:(0,t.default)(i,r)}}),define("gomoku/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("gomoku/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("gomoku/initializers/export-application-global",["exports","gomoku/config/environment"],function(e,t){function o(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var o
if("undefined"!=typeof window)o=window
else if("undefined"!=typeof global)o=global
else{if("undefined"==typeof self)return
o=self}var i,r=t.default.exportApplicationGlobal
i="string"==typeof r?r:Ember.String.classify(t.default.modulePrefix),o[i]||(o[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete o[i]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=o,e.default={name:"export-application-global",initialize:o}}),define("gomoku/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("gomoku/mixins/shared-stuff",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Mixin.create({ctx:Ember.computed(function(){return document.getElementById("myCanvas").getContext("2d")}),rect:Ember.computed(function(){return document.getElementById("myCanvas").getBoundingClientRect()}),grid:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],squareSize:40,width:Ember.computed(function(){return this.get("grid.firstObject.length")}),height:Ember.computed(function(){return this.get("width")}),pixelWidth:Ember.computed(function(){return this.get("width")*this.get("squareSize")}),pixelHeight:Ember.computed(function(){return this.get("height")*this.get("squareSize")}),drawSquare:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#000",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=this.get("ctx"),n=this.get("squareSize"),a=e*n,l=t*n
r.beginPath(),r.lineWidth=i,r.strokeStyle=o,r.rect(a,l,n,n),r.closePath(),r.stroke()},drawCircle:function(e,t,o){var i=this.get("ctx"),r=this.get("squareSize"),n=(e+.5)*r,a=(t+.5)*r
i.fillStyle=o,i.beginPath(),i.arc(n,a,r/2-2,0,2*Math.PI,!1),i.closePath(),i.fill()},drawGrid:function(){var e=this
this.get("grid").forEach(function(t,o){t.forEach(function(t,i){e.drawSquare(i,o)})})},currentPlayerBlack:!0,currentPlayerWin:!1})}),define("gomoku/models/game",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Model.extend({game_id:t.default.attr(),grid:t.default.attr(),currentPlayerBlack:t.default.attr(),currentPlayerWin:t.default.attr()})}),define("gomoku/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("gomoku/router",["exports","gomoku/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var o=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
o.map(function(){this.route("game",{path:"/game/:game_id"}),this.route("games")}),e.default=o}),define("gomoku/routes/game",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({model:function(e){return console.log(e.game_id),this.store.findRecord("game",e.game_id).then(function(e){console.log("TEST")})}})}),define("gomoku/routes/games",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({model:function(){var e=this.get("store")
e.createRecord("game",1,2,3,4),e.findRecord("game",1).then(function(e){console.log(e)})}})}),define("gomoku/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("gomoku/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"VU2IZ+kQ",block:'{"symbols":[],"statements":[[1,[21,"gomoku-game"],false]],"hasEval":false}',meta:{moduleName:"gomoku/templates/application.hbs"}})}),define("gomoku/templates/components/gomoku-game",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"j+lAcaw5",block:'{"symbols":[],"statements":[[7,"canvas"],[12,"onclick",[27,"action",[[22,0,[]],"putStone"],null]],[11,"id","myCanvas"],[12,"width",[28,[[21,"pixelWidth"]]]],[12,"height",[28,[[21,"pixelHeight"]]]],[9],[10]],"hasEval":false}',meta:{moduleName:"gomoku/templates/components/gomoku-game.hbs"}})}),define("gomoku/templates/game",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"uauQ7AeU",block:'{"symbols":[],"statements":[[1,[21,"outlet"],false]],"hasEval":false}',meta:{moduleName:"gomoku/templates/game.hbs"}})}),define("gomoku/templates/games",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"PqYqXsV1",block:'{"symbols":[],"statements":[[7,"p"],[9],[0,"TEST"],[10]],"hasEval":false}',meta:{moduleName:"gomoku/templates/games.hbs"}})}),define("gomoku/config/environment",[],function(){try{var e="gomoku/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),o={default:JSON.parse(unescape(t))}
return Object.defineProperty(o,"__esModule",{value:!0}),o}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("gomoku/app").default.create({name:"gomoku",version:"0.0.0"})
