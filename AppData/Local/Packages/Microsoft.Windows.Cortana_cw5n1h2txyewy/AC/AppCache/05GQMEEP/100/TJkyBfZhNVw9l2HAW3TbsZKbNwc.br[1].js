!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";var i=n(2);e.AWTPiiKind=i.AWTPiiKind;var r=n(3);e.AWT=r["default"],e.AWT_COLLECTOR_URL_UNITED_STATES="https://us.pipe.aria.microsoft.com/Collector/3.0/",e.AWT_COLLECTOR_URL_GERMANY="https://de.pipe.aria.microsoft.com/Collector/3.0/",e.AWT_COLLECTOR_URL_JAPAN="https://jp.pipe.aria.microsoft.com/Collector/3.0/",e.AWT_COLLECTOR_URL_AUSTRALIA="https://au.pipe.aria.microsoft.com/Collector/3.0/",e.AWT_COLLECTOR_URL_EUROPE="https://eu.pipe.aria.microsoft.com/Collector/3.0/"},function(t,e){"use strict";var n;!function(t){t[t.NotSet=0]="NotSet",t[t.DistinguishedName=1]="DistinguishedName",t[t.GenericData=2]="GenericData",t[t.IPV4Address=3]="IPV4Address",t[t.IPv6Address=4]="IPv6Address",t[t.MailSubject=5]="MailSubject",t[t.PhoneNumber=6]="PhoneNumber",t[t.QueryString=7]="QueryString",t[t.SipAddress=8]="SipAddress",t[t.SmtpAddress=9]="SmtpAddress",t[t.Identity=10]="Identity",t[t.Uri=11]="Uri",t[t.Fqdn=12]="Fqdn",t[t.IPV4AddressLegacy=13]="IPV4AddressLegacy"}(n=e.AWTPiiKind||(e.AWTPiiKind={}))},function(t,e,n){"use strict";var i=n(2),r=n(4),o=n(12),u=n(15),s="allTkns",a=/^[a-zA-Z0-9]([a-zA-Z0-9]|_|\.){2,98}[a-zA-Z0-9]$/,c=/\./g,h=/^[a-zA-Z0-9](([a-zA-Z0-9|_|\.]){0,98}[a-zA-Z0-9])?$/,d=function(){function t(){}return t.initialize=function(t,e){if(void 0===e&&(e={}),this._isInitialized)throw"Already Initialized";this._defaultTenantToken=t,this._overrideValuesFromConfig(e),r["default"].initialize(this._config),this._isInitialized=!0},t.flush=function(t){this._isInitialized&&!this._isDestroyed&&r["default"].flush(t)},t.flushAndTeardown=function(){this._isInitialized&&!this._isDestroyed&&(this._isDestroyed=!0,r["default"].flushAndTeardown())},t.setContext=function(t,e,n){void 0===n&&(n=s),e=this._sanitizeProperty(t,e),null!==e&&(this._contextProperties[n]||(this._contextProperties[n]={}),this._contextProperties[n][t]=e)},t.logEvent=function(t){var e=this;if(this._isInitialized){if(!t.name||!t.properties)return;t.name=t.name.toLowerCase(),t.name.replace(c,"_");var n="";if(t.type?(t.type.toLowerCase(),n="custom."):t.type="custom",!a.test(t.name)||!a.test(t.type))return;if(t.type=n+t.type,isNaN(t.timestamp)&&(t.timestamp=(new Date).getTime()),t.tenantToken||(t.tenantToken=this._defaultTenantToken),t.id=o.newGuid(),Object.keys(t.properties).forEach(function(n){t.properties[n]=e._sanitizeProperty(n,t.properties[n]),null===t.properties[n]&&delete t.properties[n]}),this._addContextIfAbsent(t,t.tenantToken),this._addContextIfAbsent(t,s),0===Object.keys(t.properties).length)return;this._setDefaultProperty(t,"EventInfo.InitId",this._getInitId(t.tenantToken)),this._setDefaultProperty(t,"EventInfo.Sequence",this._getSequenceId(t.tenantToken)),this._setDefaultProperty(t,"EventInfo.SdkVersion",u.FullVersionString),this._setDefaultProperty(t,"EventInfo.Name",t.name),this._setDefaultProperty(t,"EventInfo.Time",new Date(t.timestamp).toISOString()),r["default"].sendEvent(t)}},t._overrideValuesFromConfig=function(t){t.collectorUrl&&(this._config.collectorUrl=t.collectorUrl),t.sendingTimer>1e3&&(this._config.sendingTimer=t.sendingTimer)},t._getInitId=function(t){return void 0===this._initIdMap[t]&&(this._initIdMap[t]=o.newGuid()),this._initIdMap[t]},t._getSequenceId=function(t){return void 0===this._sequenceIdMap[t]&&(this._sequenceIdMap[t]=0),(++this._sequenceIdMap[t]).toString()},t._setDefaultProperty=function(t,e,n){t.properties[e]={value:n,pii:i.AWTPiiKind.NotSet}},t._addContextIfAbsent=function(t,e){if(this._contextProperties[e]){var n=this._contextProperties[e];Object.keys(n).forEach(function(e){t.properties[e]||(t.properties[e]=n[e])})}},t._sanitizeProperty=function(t,e){return"string"!=typeof e&&"number"!=typeof e&&"boolean"!=typeof e||(e={value:e}),h.test(t)&&void 0!==e&&null!==e&&null!==e.value&&void 0!==e.value&&""!==e.value?("undefined"==typeof e.pii&&(e.pii=i.AWTPiiKind.NotSet),e.value=e.value.toString(),o.isPii(e.pii)?e:null):null},t}();d._isInitialized=!1,d._isDestroyed=!1,d._contextProperties={},d._sequenceIdMap={},d._initIdMap={},d._config={collectorUrl:"https://browser.pipe.aria.microsoft.com/Collector/3.0/",sendingTimer:1e3},Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=d},function(t,e,n){"use strict";var i=n(5),r=n(6),o=n(13),u=n(14),s=n(15),a=250,c=2936012,h=4,d=function(){function t(){}return t.initialize=function(t){this._inboundQueues.push([]),this._recordBatcher=new i["default"](c,this._outboundQueue),this._newEventsAllowed=!0,"undefined"==typeof Uint8Array&&(this._urlString+="&content-encoding=base64"),this._sendingTimer=t.sendingTimer,this._urlString=t.collectorUrl+this._urlString+"&x-apikey="},t.sendEvent=function(t){var e=this;this._newEventsAllowed&&(this._inboundQueues[this._inboundQueues.length-1].push(t),!this._running&&this._timeout<0&&!this._isCurrentlyFlushing&&(this._timeout=setTimeout(function(){return e._batchAndSendEvents(!1)},this._sendingTimer)))},t.flushAndTeardown=function(){this._newEventsAllowed=!1,this._batchAndSendEvents(!0)},t.flush=function(t){this._inboundQueues.push([]),this._isCurrentlyFlushing?this._flushQueue.push(t):(this._isCurrentlyFlushing=!0,this._flush(t))},t._batchAndSendEvents=function(t){for(this._running=!0;this._inboundQueues[0].length>0&&this._outboundQueue.length<1;)this._recordBatcher.addEventToBatch(this._inboundQueues[0].pop());0===this._outboundQueue.length&&this._recordBatcher.flushBatch(),this._sendRequest(this._outboundQueue.pop(),0,t)},t._retryRequestIfNeeded=function(t,e,n,i,r){var u=this,s=!0;if(t&&"undefined"!=typeof t.status){var a=this._killSwitch.setKillSwitchTenants(t.getResponseHeader("kill-tokens"),t.getResponseHeader("kill-duration-seconds"));a.forEach(function(t){delete e[t],n--}),(!o["default"].shouldRetryForStatus(t.status)||n<=0)&&(s=!1)}s&&r<h?setTimeout(function(){return u._sendRequest(e,r+1,!1)},o["default"].getMillisToBackoffForRetry(r)):this._handleRequestFinished(null)},t._sendRequest=function(t,e,n){var i=this,o=new XMLHttpRequest,u=0,s="";if(Object.keys(t).forEach(function(e){i._killSwitch.isTenantKilled(e)?delete t[e]:(s.length>0&&(s+=","),s+=e,u++)}),o.open("POST",this._urlString+s,!n),n||(o.ontimeout=function(){i._retryRequestIfNeeded(o,t,u,s,e)},o.onerror=function(){i._retryRequestIfNeeded(o,t,u,s,e)},o.onload=function(){i._handleRequestFinished(o)}),u>0){var a=r["default"].getPayloadBlob(t,u);"undefined"==typeof Uint8Array?o.send(r["default"].base64Encode(a)):o.send(new Uint8Array(a))}else n&&this._handleRequestFinished(null)},t._handleRequestFinished=function(t){var e=this;t&&this._killSwitch.setKillSwitchTenants(t.getResponseHeader("kill-tokens"),t.getResponseHeader("kill-duration-seconds")),this._inboundQueues[0].length>0?this._timeout=setTimeout(function(){return e._batchAndSendEvents(!1)},this._sendingTimer):(this._timeout=-1,this._running=!1)},t._flush=function(t){var e=this;this._running||(this._timeout>-1&&(clearTimeout(this._timeout),this._timeout=-1),this._inboundQueues[0].length>0&&this._batchAndSendEvents(!1)),this._checkPrimaryInboundQueueEmpty(function(){e._inboundQueues.shift(),null!==t&&void 0!==t&&t(),e._flushQueue.length>0?setTimeout(function(){return e._flush(e._flushQueue.shift())},e._sendingTimer):(e._isCurrentlyFlushing=!1,e._inboundQueues[0].length>0&&(e._timeout=setTimeout(function(){return e._batchAndSendEvents(!1)},e._sendingTimer)))})},t._checkPrimaryInboundQueueEmpty=function(t){var e=this;0===this._inboundQueues[0].length?this._checkOutboundQueueEmptyAndSent(t):setTimeout(function(){return e._checkPrimaryInboundQueueEmpty(t)},a)},t._checkOutboundQueueEmptyAndSent=function(t){var e=this;this._running?setTimeout(function(){return e._checkOutboundQueueEmptyAndSent(t)},a):t()},t}();d._outboundQueue=[],d._inboundQueues=[],d._newEventsAllowed=!1,d._killSwitch=new u["default"],d._isCurrentlyFlushing=!1,d._flushQueue=[],d._running=!1,d._timeout=-1,d._urlString="?qsp=true&content-type=application%2Fbond-compact-binary&client-id=NO_AUTH&sdk-version="+s.FullVersionString,Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=d},function(t,e,n){"use strict";var i=n(6),r=function(){function t(t,e){this._maxRequestSize=t,this._outboundQueue=e,this._currentBatch={},this._currentBatchSize=0}return t.prototype.addEventToBatch=function(t){var e=i["default"].getEventBlob(t);e.length>this._maxRequestSize||(this._currentBatchSize+e.length>this._maxRequestSize?this.flushBatch():(void 0===this._currentBatch[t.tenantToken]&&(this._currentBatch[t.tenantToken]=[]),this._currentBatch[t.tenantToken].push(e),this._currentBatchSize+=e.length))},t.prototype.flushBatch=function(){this._currentBatchSize>0&&(this._outboundQueue.push(this._currentBatch),this._currentBatch={},this._currentBatchSize=0)},t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r},function(t,e,n){"use strict";var i=n(7),r=n(2),o=n(12),u=function(){function t(){}return t.getPayloadBlob=function(t,e){var n=new i.IO.MemoryStream,r=new i.CompactBinaryProtocolWriter(n);return r.WriteFieldBegin(i.BondDataType.BT_MAP,3),r.WriteMapContainerBegin(e,i.BondDataType.BT_STRING,i.BondDataType.BT_LIST),Object.keys(t).forEach(function(e){r.WriteString(e);var n=t[e];r.WriteContainerBegin(1,i.BondDataType.BT_STRUCT),r.WriteFieldBegin(i.BondDataType.BT_STRING,2),r.WriteString("act_default_source"),r.WriteFieldBegin(i.BondDataType.BT_STRING,5),r.WriteString(o.newGuid()),r.WriteFieldBegin(i.BondDataType.BT_INT64,6),r.WriteInt64(o.numberToBondInt64(Date.now())),r.WriteFieldBegin(i.BondDataType.BT_LIST,8),r.WriteContainerBegin(n.length,i.BondDataType.BT_STRUCT);for(var u=0;u<n.length;++u)r.WriteBlob(n[u]);r.WriteStructEnd(!1)}),r.WriteStructEnd(!1),n.GetBuffer()},t.getEventBlob=function(t){var e=new i.IO.MemoryStream,n=new i.CompactBinaryProtocolWriter(e);n.WriteFieldBegin(i.BondDataType.BT_STRING,1),n.WriteString(t.id),n.WriteFieldBegin(i.BondDataType.BT_INT64,3),n.WriteInt64(o.numberToBondInt64(t.timestamp)),n.WriteFieldBegin(i.BondDataType.BT_STRING,5),n.WriteString(t.type),n.WriteFieldBegin(i.BondDataType.BT_STRING,6),n.WriteString(t.name);var u=[],s=[];return Object.keys(t.properties).forEach(function(e){var n=t.properties[e];n.pii===r.AWTPiiKind.NotSet?u.push(e):s.push(e)}),u.length&&(n.WriteFieldBegin(i.BondDataType.BT_MAP,13),n.WriteMapContainerBegin(u.length,i.BondDataType.BT_STRING,i.BondDataType.BT_STRING),u.forEach(function(e){n.WriteString(e),n.WriteString(t.properties[e].value)})),s.length&&(n.WriteFieldBegin(i.BondDataType.BT_MAP,30),n.WriteMapContainerBegin(s.length,i.BondDataType.BT_STRING,i.BondDataType.BT_STRUCT),s.forEach(function(e){n.WriteString(e),n.WriteFieldBegin(i.BondDataType.BT_INT32,1),n.WriteInt32(1),n.WriteFieldBegin(i.BondDataType.BT_INT32,2),n.WriteInt32(t.properties[e].pii),n.WriteFieldBegin(i.BondDataType.BT_STRING,3),n.WriteString(t.properties[e].value),n.WriteStructEnd(!1)})),n.WriteStructEnd(!1),e.GetBuffer()},t.base64Encode=function(t){return i.Encoding.Base64.GetString(t)},t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=u},function(t,e,n){"use strict";var i=n(8);e.BondDataType=i.BondDataType;var r=n(9);e.Encoding=r;var o=n(11);e.IO=o;var u=n(10);e.Int64=u.Int64,e.UInt64=u.UInt64,e.Number=u.Number;var s=function(){function t(t){this._stream=t}return t.prototype.WriteBlob=function(t){this._stream.Write(t,0,t.length)},t.prototype.WriteContainerBegin=function(t,e){this.WriteUInt8(e),this.WriteUInt32(t)},t.prototype.WriteMapContainerBegin=function(t,e,n){this.WriteUInt8(e),this.WriteUInt8(n),this.WriteUInt32(t)},t.prototype.WriteFieldBegin=function(t,e){e<=5?this._stream.WriteByte(t|e<<5):e<=255?(this._stream.WriteByte(192|t),this._stream.WriteByte(e)):(this._stream.WriteByte(224|t),this._stream.WriteByte(e),this._stream.WriteByte(e>>8))},t.prototype.WriteInt32=function(t){t=r.Zigzag.EncodeZigzag32(t),this.WriteUInt32(t)},t.prototype.WriteInt64=function(t){this.WriteUInt64(r.Zigzag.EncodeZigzag64(t))},t.prototype.WriteString=function(t){if(""===t)this.WriteUInt32(0);else{var e=r.Utf8.GetBytes(t);this.WriteUInt32(e.length),this._stream.Write(e,0,e.length)}},t.prototype.WriteStructEnd=function(t){this.WriteUInt8(t?i.BondDataType.BT_STOP_BASE:i.BondDataType.BT_STOP)},t.prototype.WriteUInt32=function(t){var e=r.Varint.GetBytes(u.Number.ToUInt32(t));this._stream.Write(e,0,e.length)},t.prototype.WriteUInt64=function(t){var e=r.Varint64.GetBytes(t);this._stream.Write(e,0,e.length)},t.prototype.WriteUInt8=function(t){this._stream.WriteByte(u.Number.ToUInt8(t))},t}();e.CompactBinaryProtocolWriter=s},function(t,e){"use strict";var n;!function(t){t[t.BT_STOP=0]="BT_STOP",t[t.BT_STOP_BASE=1]="BT_STOP_BASE",t[t.BT_UINT8=3]="BT_UINT8",t[t.BT_UINT32=5]="BT_UINT32",t[t.BT_UINT64=6]="BT_UINT64",t[t.BT_STRING=9]="BT_STRING",t[t.BT_STRUCT=10]="BT_STRUCT",t[t.BT_LIST=11]="BT_LIST",t[t.BT_MAP=13]="BT_MAP",t[t.BT_INT32=16]="BT_INT32",t[t.BT_INT64=17]="BT_INT64",t[t.BT_UNAVAILABLE=127]="BT_UNAVAILABLE"}(n=e.BondDataType||(e.BondDataType={}))},function(t,e,n){"use strict";var i=n(10),r=function(){function t(){}return t.GetBytes=function(t){for(var e=[],n=0;n<t.length;++n){var i=t.charCodeAt(n);i<128?e.push(i):i<2048?e.push(192|i>>6,128|63&i):i<55296||i>=57344?e.push(224|i>>12,128|i>>6&63,128|63&i):(i=65536+((1023&i)<<10|1023&t.charCodeAt(++n)),e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i))}return e},t}();e.Utf8=r;var o=function(){function t(){}return t.GetString=function(t){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=[],i=t.length%3,r=function(t){return[e.charAt(t>>18&63),e.charAt(t>>12&63),e.charAt(t>>6&63),e.charAt(63&t)].join("")},o=0,u=t.length-i;o<u;o+=3){var s=(t[o]<<16)+(t[o+1]<<8)+t[o+2];n.push(r(s))}switch(i){case 1:var s=t[t.length-1];n.push(e.charAt(s>>2)),n.push(e.charAt(s<<4&63)),n.push("==");break;case 2:var a=(t[t.length-2]<<8)+t[t.length-1];n.push(e.charAt(a>>10)),n.push(e.charAt(a>>4&63)),n.push(e.charAt(a<<2&63)),n.push("=")}return n.join("")},t}();e.Base64=o;var u=function(){function t(){}return t.GetBytes=function(t){for(var e=[];4294967168&t;)e.push(127&t|128),t>>>=7;return e.push(127&t),e},t}();e.Varint=u;var s=function(){function t(){}return t.GetBytes=function(t){for(var e=t.low,n=t.high,i=[];n||4294967168&e;)i.push(127&e|128),e=(127&n)<<25|e>>>7,n>>>=7;return i.push(127&e),i},t}();e.Varint64=s;var a=function(){function t(){}return t.EncodeZigzag32=function(t){return t=i.Number.ToInt32(t),t<<1^t>>31},t.EncodeZigzag64=function(t){var e=t.low,n=t.high,r=n<<1|e>>>31,o=e<<1;2147483648&n&&(r=~r,o=~o);var u=new i.UInt64("0");return u.low=o,u.high=r,u},t}();e.Zigzag=a},function(t,e){"use strict";var n=function(){function t(t){this.low=0,this.high=0,this.low=parseInt(t,10),this.low<0&&(this.high=-1)}return t.prototype.Equals=function(e){var n=new t(e);return this.low===n.low&&this.high===n.high},t}();e.Int64=n;var i=function(){function t(t){this.low=0,this.high=0,this.low=parseInt(t,10)}return t.prototype.Equals=function(e){var n=new t(e);return this.low===n.low&&this.high===n.high},t}();e.UInt64=i;var r=function(){function t(){}return t.ToByte=function(t){return this.ToUInt8(t)},t.ToInt16=function(t){var e=(32768&t)<<16>>16;return 32767&t|e},t.ToInt32=function(t){var e=2147483648&t;return 2147483647&t|e},t.ToUInt8=function(t){return 255&t},t.ToUInt32=function(t){return 4294967295&t},t}();e.Number=r},function(t,e,n){"use strict";var i=n(10),r=function(){function t(){this._buffer=[]}return t.prototype.WriteByte=function(t){this._buffer.push(i.Number.ToByte(t))},t.prototype.Write=function(t,e,n){for(;n--;)this.WriteByte(t[e++])},t.prototype.GetBuffer=function(){return this._buffer},t}();e.MemoryStream=r},function(t,e,n){"use strict";function i(t){var e=new u.Int64("0");return e.low=4294967295&t,e.high=Math.floor(t/4294967296),e}function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(s,function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)})}function o(t){return!isNaN(t)&&null!==t&&t>=0&&t<=13}var u=n(10),s=/[xy]/g;e.numberToBondInt64=i,e.newGuid=r,e.isPii=o},function(t,e){"use strict";var n=.8,i=1.2,r=3e3,o=12e4,u=function(){function t(){}return t.shouldRetryForStatus=function(t){return!(t>=300&&t<500&&408!==t||501===t||505===t)},t.getMillisToBackoffForRetry=function(t){var e=0,u=r*n,s=r*i,a=Math.floor(Math.random()*(s-u))+u;return e=Math.pow(4,t)*a,Math.min(e,o)},t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=u},function(t,e){"use strict";var n=1e3,i=function(){function t(){this._killedTokenDictionary={}}return t.prototype.setKillSwitchTenants=function(t,e){var i=this;if(t&&e)try{var r=t.split(",");if("this-request-only"===e)return r;var o=parseInt(e,10)*n;r.forEach(function(t){i._killedTokenDictionary[t]=Date.now()+o})}catch(u){return[]}return[]},t.prototype.isTenantKilled=function(t){return void 0!==this._killedTokenDictionary[t]&&this._killedTokenDictionary[t]>Date.now()||(delete this._killedTokenDictionary[t],!1)},t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i},function(t,e){"use strict";e.Version="1.2.0",e.FullVersionString="AWT-Web-CJS-"+e.Version}])});
//# sourceMappingURL=aria-webjs-compact-sdk-1.2.0.min.js.map