function _listenerUUID(len=5){
  let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  let uuid = '';
  for(let i = 0; i < len; i++){
    uuid += chars[parseInt(Math.random() * chars.length)]
  }
  return uuid;
}
class Notify{
  static getInstance(){
    if(!_instance) _instance = new Notify();
    return _instance;
  }
  constructor(){
    this._observers = new Map();
  }
  listen(target, event, callback){
    let observers = this._observers.get(event);
    if(!target._listenerUUID){
      target._listenerUUID = _listenerUUID();
    }
    if(!observers){
      observers = new Map();
      observers.set(target._listenerUUID, {target:target, callback:callback})
      this._observers.set(event, observers);
    }
    else{
      if(!observers.has(target._listenerUUID)){
        observers.set(target.tag, {target:target, callback:callback})
        this._observers.set(event, observers);
      }
    }
  }
  trigger(event, params){
    if(this._observers.has(event)){
      let observers = this._observers.get(event);
      for (let v in observers.values){
        v.callback();
      }
    }
  }
  ignore(target, event){
    if(!target._listenerUUID) return;
    let observers = this._observers.get(event);
    if(target._listenerUUID && observers.has(target._listenerUUID)){
      observers.delete(target._listenerUUID);
    }
  }
  ignoreScope(target){
    if(!target._listenerUUID) return;
    for(let obs in this._observers){
      if(obs.has(target._listenerUUID)){
        obs.delete(target._listenerUUID);
      }
    }
  }
}
let _instance = null;
module.exports = Notify.getInstance();
