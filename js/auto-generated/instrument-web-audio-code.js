goog.provide('audion.autoGenerated.tracingCode');
/** @type {string} */
audion.autoGenerated.tracingCode = '(function(){var f=this;f.i=!0;var h={},k=null,m={};function n(a){a.tag=823710097;window.postMessage(a,window.location.origin||"*")}function t(){var a=0,l;for(l in h)a++;return a}function u(){k||0==t()||(k=f.requestAnimationFrame(function(){k=f.requestAnimationFrame(function(){for(var a in h);k&&f.cancelAnimationFrame(k)})}))}\n(function(){function a(e,c){return function(){return c.call(this,e,arguments)}}function l(e,c){Object.defineProperty(e,"__resource_id__",{value:c,writable:!1})}function q(e){var c=p++;l(e,c);m[c]={id:c,node:e};for(var a in e){var d=e[a];if(d instanceof AudioParam){var b=p++;l(d,b);m[b]={id:b,audioNodeId:c,propertyName:a}}}n({type:3,nodeId:c,nodeType:e.constructor.name})}function b(a,c){var b=a.apply(this,c);q(b);return b}var p=1,r=AudioContext;AudioNode.prototype.connect=a(AudioNode.prototype.connect,\nfunction(a,c){var b=a.apply(this,c);if(0==c.length||!c[0])return b;var d=c[0],g=d.__resource_id__;g&&(d instanceof AudioNode?n({type:4,sourceNodeId:this.__resource_id__,destinationNodeId:g}):d instanceof AudioParam&&(d=m[g],n({type:5,sourceNodeId:this.__resource_id__,destinationNodeId:d.audioNodeId,destinationParamName:d.propertyName})));return b});AudioNode.prototype.disconnect=a(AudioNode.prototype.disconnect,function(a,c){var b=a.apply(this,c);if(0==c.length||!c[0])return n({type:6,nodeId:this.__resource_id__}),\nb;var d=c[0],g=d.__resource_id__;g&&(d instanceof AudioNode?n({type:7,sourceNodeId:this.__resource_id__,disconnectedFromNodeId:g}):d instanceof AudioParam&&(d=m[g],n({type:8,sourceNodeId:this.__resource_id__,disconnectedFromNodeId:d.audioNodeId,audioParamName:d.propertyName})));return b});AudioContext.prototype.createAnalyser=a(AudioContext.prototype.createAnalyser,b);AudioContext.prototype.createBiquadFilter=a(AudioContext.prototype.createBiquadFilter,b);AudioContext.prototype.createBufferSource=\na(AudioContext.prototype.createBufferSource,b);AudioContext.prototype.createChannelMerger=a(AudioContext.prototype.createChannelMerger,b);AudioContext.prototype.createChannelSplitter=a(AudioContext.prototype.createChannelSplitter,b);AudioContext.prototype.createConvolver=a(AudioContext.prototype.createConvolver,b);AudioContext.prototype.createDelay=a(AudioContext.prototype.createDelay,b);AudioContext.prototype.createDynamicsCompressor=a(AudioContext.prototype.createDynamicsCompressor,b);AudioContext.prototype.createGain=\na(AudioContext.prototype.createGain,b);AudioContext.prototype.createMediaElementSource=a(AudioContext.prototype.createMediaElementSource,b);AudioContext.prototype.createMediaStreamDestination=a(AudioContext.prototype.createMediaStreamDestination,b);AudioContext.prototype.createMediaStreamSource=a(AudioContext.prototype.createMediaStreamSource,b);AudioContext.prototype.createOscillator=a(AudioContext.prototype.createOscillator,b);AudioContext.prototype.createPanner=a(AudioContext.prototype.createPanner,\nb);AudioContext.prototype.createStereoPanner=a(AudioContext.prototype.createStereoPanner,b);AudioContext=function(){var a=new r,b=p++;l(a,b);m[b]={id:b};n({type:2,contextId:b});q(a.destination);return a};AudioContext.prototype=r.prototype;AudioContext.prototype.constructor=AudioContext;window.addEventListener("message",function(a){if(a.source==window&&(a=a.data)&&823710097==a.tag)switch(a.type){case 11:h[a.audioNodeId]=1;u();break;case 12:delete h[a.audioNodeId]}})})();\n})();';