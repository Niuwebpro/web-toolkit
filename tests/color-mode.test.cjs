const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const assets = path.join(__dirname, '../plugins/dark-mode-toggle/assets');
function setup({saved=null, system=false, blocked=false}={}) {
  const handlers = {}, windowHandlers = {}, media = {matches: system, addEventListener(_,fn){this.change=fn;}};
  const data = new Map(saved ? [['wordpress-toolkit:color-mode',saved]] : []);
  const storage = {getItem(k){if(blocked)throw Error();return data.get(k)??null;}, setItem(k,v){if(blocked)throw Error();data.set(k,v);},removeItem(k){if(blocked)throw Error();data.delete(k);}};
  class Element { constructor(type){this.type=type;this.hidden=true;this.attributes={};} setAttribute(k,v){this.attributes[k]=v;} closest(selector){return selector===`[data-wpt-dark-${this.type}]`?this:null;} }
  const toggles=[new Element('toggle'),new Element('toggle')], systems=[new Element('system')];
  const document={documentElement:{dataset:{},style:{}},dispatchEvent(e){(handlers[e.type]||[]).forEach(fn=>fn(e));},addEventListener(type,fn){(handlers[type]??=[]).push(fn);},querySelectorAll(s){return s==='[data-wpt-dark-toggle]'?toggles:systems;}};
  const window={localStorage:storage,matchMedia:()=>media,addEventListener(type,fn){windowHandlers[type]=fn;}};
  const ctx=vm.createContext({window,document,Element,CustomEvent:class{constructor(type,options){this.type=type;this.detail=options.detail;}}});
  vm.runInContext(fs.readFileSync(path.join(assets,'init.js'),'utf8'),ctx);
  vm.runInContext(fs.readFileSync(path.join(assets,'controls.js'),'utf8'),ctx);
  return {mode:window.WordPressToolkitColorMode,root:document.documentElement,media,data,toggles,systems,storage,windowHandlers,click(el){document.dispatchEvent({type:'click',target:el});}};
}
test('system preference is applied before controls and follows changes',()=>{const s=setup({system:true});assert.equal(s.root.dataset.wptColorMode,'dark');s.media.matches=false;s.media.change();assert.equal(s.mode.dark,false);});
test('saved light overrides dark system and stays fixed',()=>{const s=setup({saved:'light',system:true});assert.equal(s.mode.dark,false);s.media.change();assert.equal(s.mode.dark,false);});
test('both switches synchronize, persist and return to system',()=>{const s=setup();s.click(s.toggles[0]);assert.equal(s.data.get('wordpress-toolkit:color-mode'),'dark');s.toggles.forEach(b=>{assert.equal(b.attributes['aria-checked'],'true');assert.equal(b.hidden,false);});s.click(s.systems[0]);assert.equal(s.mode.preference,'system');assert.equal(s.mode.dark,false);assert.equal(s.data.size,0);assert.equal(s.systems[0].attributes['aria-pressed'],'true');});
test('storage failure does not prevent toggling',()=>{const s=setup({blocked:true});s.click(s.toggles[1]);assert.equal(s.mode.dark,true);s.click(s.systems[0]);assert.equal(s.mode.preference,'system');});
test('invalid saved value falls back to system',()=>{const s=setup({saved:'invalid',system:true});assert.equal(s.mode.preference,'system');assert.equal(s.mode.dark,true);});
test('cross-tab update and clear synchronize state',()=>{const s=setup();s.windowHandlers.storage({key:'wordpress-toolkit:color-mode',newValue:'dark',storageArea:s.storage});assert.equal(s.mode.dark,true);s.windowHandlers.storage({key:null,newValue:null,storageArea:s.storage});assert.equal(s.mode.preference,'system');});
test('unrelated storage keys do not change the mode',()=>{const s=setup({saved:'dark'});s.windowHandlers.storage({key:'other',newValue:'light'});assert.equal(s.mode.dark,true);});
