// Automatically generated with Reach 0.1.12 (ae94865f)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (ae94865f)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc0, ctc1, ctc0],
      5: [ctc0, ctc1, ctc0],
      6: [ctc0, ctc1, ctc0],
      7: [ctc0, ctc1, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v114 = stdlib.protect(ctc0, interact.fortunePrice, 'for Alice\'s interact field fortunePrice');
  
  const txn1 = await (ctc.sendrecv({
    args: [v114],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:27:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v114, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v118], secs: v120, time: v119, didSend: v29, from: v117 } = txn1;
      
      sim_r.txns.push({
        amt: v118,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v118], secs: v120, time: v119, didSend: v29, from: v117 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v127, time: v126, didSend: v38, from: v125 } = txn2;
  ;
  let v130 = stdlib.checkedBigNumberify('./index.rsh:37:23:decimal', stdlib.UInt_max, '0');
  let v131 = v126;
  
  let txn3 = txn2;
  while (await (async () => {
    const v142 = stdlib.eq(v130, stdlib.checkedBigNumberify('./index.rsh:39:27:decimal', stdlib.UInt_max, '0'));
    
    return v142;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v147], secs: v149, time: v148, didSend: v55, from: v146 } = txn4;
    ;
    const v150 = stdlib.addressEq(v125, v146);
    stdlib.assert(v150, {
      at: './index.rsh:45:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    stdlib.protect(ctc1, await interact.showFortune(v147), {
      at: './index.rsh:48:27:application',
      fs: ['at ./index.rsh:48:27:application call to [unknown function] (defined at: ./index.rsh:48:27:function exp)', 'at ./index.rsh:48:27:application call to "liftedInteract" (defined at: ./index.rsh:48:27:application)'],
      msg: 'showFortune',
      who: 'Alice'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v117, v118, v125],
      evt_cnt: 0,
      funcNum: 4,
      lct: v148,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:49:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v154, time: v153, didSend: v64, from: v152 } = txn5;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v154, time: v153, didSend: v64, from: v152 } = txn5;
    ;
    const v155 = stdlib.addressEq(v117, v152);
    stdlib.assert(v155, {
      at: './index.rsh:49:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v158 = stdlib.protect(ctc0, await interact.getDecision(), {
      at: './index.rsh:53:55:application',
      fs: ['at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:15:function exp)'],
      msg: 'getDecision',
      who: 'Alice'
      });
    
    const txn6 = await (ctc.sendrecv({
      args: [v117, v118, v125, v158],
      evt_cnt: 1,
      funcNum: 5,
      lct: v153,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:55:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v160], secs: v162, time: v161, didSend: v74, from: v159 } = txn6;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc2, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v160], secs: v162, time: v161, didSend: v74, from: v159 } = txn6;
    ;
    const v163 = stdlib.addressEq(v117, v159);
    stdlib.assert(v163, {
      at: './index.rsh:55:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 6,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v167, time: v166, didSend: v83, from: v165 } = txn7;
    ;
    const v168 = stdlib.addressEq(v125, v165);
    stdlib.assert(v168, {
      at: './index.rsh:59:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const cv130 = v160;
    const cv131 = v166;
    
    v130 = cv130;
    v131 = cv131;
    
    txn3 = txn7;
    continue;
    
    
    
    
    
    
    
    }
  const v169 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:65:12:decimal', stdlib.UInt_max, '2'), v118);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(), {
    at: './index.rsh:68:24:application',
    fs: ['at ./index.rsh:67:7:application call to [unknown function] (defined at: ./index.rsh:67:19:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v118], secs: v120, time: v119, didSend: v29, from: v117 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptFortunePrice(v118), {
    at: './index.rsh:32:32:application',
    fs: ['at ./index.rsh:31:9:application call to [unknown function] (defined at: ./index.rsh:31:13:function exp)'],
    msg: 'acceptFortunePrice',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v117, v118],
    evt_cnt: 0,
    funcNum: 1,
    lct: v119,
    onlyIf: true,
    out_tys: [],
    pay: [v118, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v127, time: v126, didSend: v38, from: v125 } = txn2;
      
      sim_r.txns.push({
        amt: v118,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v130 = stdlib.checkedBigNumberify('./index.rsh:37:23:decimal', stdlib.UInt_max, '0');
      const v131 = v126;
      
      if (await (async () => {
        const v142 = stdlib.eq(v130, stdlib.checkedBigNumberify('./index.rsh:39:27:decimal', stdlib.UInt_max, '0'));
        
        return v142;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v169 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:65:12:decimal', stdlib.UInt_max, '2'), v118);
        sim_r.txns.push({
          kind: 'from',
          to: v125,
          tok: undefined /* Nothing */
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v127, time: v126, didSend: v38, from: v125 } = txn2;
  ;
  let v130 = stdlib.checkedBigNumberify('./index.rsh:37:23:decimal', stdlib.UInt_max, '0');
  let v131 = v126;
  
  let txn3 = txn2;
  while (await (async () => {
    const v142 = stdlib.eq(v130, stdlib.checkedBigNumberify('./index.rsh:39:27:decimal', stdlib.UInt_max, '0'));
    
    return v142;})()) {
    const v145 = stdlib.protect(ctc0, await interact.readFortune(), {
      at: './index.rsh:43:54:application',
      fs: ['at ./index.rsh:42:11:application call to [unknown function] (defined at: ./index.rsh:42:15:function exp)'],
      msg: 'readFortune',
      who: 'Bob'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v117, v118, v125, v145],
      evt_cnt: 1,
      funcNum: 3,
      lct: v131,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:45:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v147], secs: v149, time: v148, didSend: v55, from: v146 } = txn4;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc2, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v147], secs: v149, time: v148, didSend: v55, from: v146 } = txn4;
    ;
    const v150 = stdlib.addressEq(v125, v146);
    stdlib.assert(v150, {
      at: './index.rsh:45:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v154, time: v153, didSend: v64, from: v152 } = txn5;
    ;
    const v155 = stdlib.addressEq(v117, v152);
    stdlib.assert(v155, {
      at: './index.rsh:49:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v160], secs: v162, time: v161, didSend: v74, from: v159 } = txn6;
    ;
    const v163 = stdlib.addressEq(v117, v159);
    stdlib.assert(v163, {
      at: './index.rsh:55:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    stdlib.protect(ctc1, await interact.showDecision(v160), {
      at: './index.rsh:58:28:application',
      fs: ['at ./index.rsh:58:28:application call to [unknown function] (defined at: ./index.rsh:58:28:function exp)', 'at ./index.rsh:58:28:application call to "liftedInteract" (defined at: ./index.rsh:58:28:application)'],
      msg: 'showDecision',
      who: 'Bob'
      });
    
    const txn7 = await (ctc.sendrecv({
      args: [v117, v118, v125, v160],
      evt_cnt: 0,
      funcNum: 6,
      lct: v161,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:59:7:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v167, time: v166, didSend: v83, from: v165 } = txn7;
        
        ;
        const cv130 = v160;
        const cv131 = v166;
        
        await (async () => {
          const v130 = cv130;
          const v131 = cv131;
          
          if (await (async () => {
            const v142 = stdlib.eq(v130, stdlib.checkedBigNumberify('./index.rsh:39:27:decimal', stdlib.UInt_max, '0'));
            
            return v142;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v169 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:65:12:decimal', stdlib.UInt_max, '2'), v118);
            sim_r.txns.push({
              kind: 'from',
              to: v125,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc2, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v167, time: v166, didSend: v83, from: v165 } = txn7;
    ;
    const v168 = stdlib.addressEq(v125, v165);
    stdlib.assert(v168, {
      at: './index.rsh:59:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const cv130 = v160;
    const cv131 = v166;
    
    v130 = cv130;
    v131 = cv131;
    
    txn3 = txn7;
    continue;
    
    
    
    
    
    
    
    }
  const v169 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:65:12:decimal', stdlib.UInt_max, '2'), v118);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(), {
    at: './index.rsh:68:24:application',
    fs: ['at ./index.rsh:67:7:application call to [unknown function] (defined at: ./index.rsh:67:19:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAIAAEgBQYEBwImAgEAACI1ADEYQQKfKWRJIls1AYEIWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBQxAAPtJJQxAAKZJIQQMQABBIQQSRCEGNAESRDQESSISTDQCEhFEKGRJNQNXKCA1/4AEYbSsDLA0/zEAEkQ0A1cAIDQDJFs0/zQDgUhbMgZCAZBIIQQ0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8kWzX+VyggNf1JNQUXNfyABIGqms80/BZQsDT/MQASRDT/NP4WUDT9UDT8FlAoSwFXAFBnSCEGNQEyBjUCQgGQSCU0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8kWzX+VyggNf2ABJEnNPOwNP8xABJENP80/hZQNP1QKEsBVwBIZ0ghBDUBMgY1AkIBQUkjDEAAl0mBAwxAAFlIIQU0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8kWzX+VyggNf1JNQUXNfyABNQMbNY0/BZQsDT9MQASRDT/NP4WUDT9UChLAVcASGdIJTUBMgY1AkIA2yMSRCM0ARJENARJIhJMNAISEUQoZEk1AyRbNf+ABJqLkXSwNP+IAQU0A1cAIDT/MQAiMgZCAEZIgaCNBogA7iI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsDT/iADIMQA0/xZQKEsBVwAoZ0gjNQEyBjUCQgBeNf81/jX9Nfw1+zT+IhJBABw0+zT8FlA0/VAoSwFXAEhnSCEFNQEyBjUCQgAxsSKyASEHNPwLsggjshA0/bIHs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEHMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 80,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v118",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v118",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v147",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v160",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v147",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v160",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200122e3803806200122e8339810160408190526200002691620001bf565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1602081015151620000899034146007620000ef565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e6926002929091019062000119565b5050506200029e565b81620001155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001279062000261565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b6000818303604080821215620001d457600080fd5b80518082016001600160401b0380821183831017156200020457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021e57600080fd5b8351945060208501915084821081831117156200024b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b610f8080620002ae6000396000f3fe6080604052600436106100795760003560e01c8063a7661d541161004b578063a7661d54146100e1578063ab53f2c6146100f4578063c798003714610117578063f4cedab01461012a57005b80631e93b0f1146100825780632c10a159146100a6578063552d7b8e146100b957806383230757146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610c41565b61013d565b6100806100c7366004610c41565b61029f565b3480156100d857600080fd5b50600154610093565b6100806100ef366004610c41565b61046f565b34801561010057600080fd5b506101096105f0565b60405161009d929190610c64565b610080610125366004610c41565b61068d565b610080610138366004610c41565b61080c565b61014d6001600054146009610990565b6101678135158061016057506001548235145b600a610990565b60008080556002805461017990610cc1565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610cc1565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a9190610d12565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161023d929190610d77565b60405180910390a1610256816020015134146008610990565b61025e610b0f565b815181516001600160a01b0390911690526020808301518251820152815133604090910152808201805160009052514391015261029a816109ba565b505050565b6102af6006600054146015610990565b6102c9813515806102c257506001548235145b6016610990565b6000808055600280546102db90610cc1565b80601f016020809104026020016040519081016040528092919081815260200182805461030790610cc1565b80156103545780601f1061032957610100808354040283529160200191610354565b820191906000526020600020905b81548152906001019060200180831161033757829003601f168201915b505050505080602001905181019061036c9190610db4565b90507f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d3338360405161039f929190610e27565b60405180910390a16103b334156013610990565b80516103cb906001600160a01b031633146014610990565b604080516080808201835260008083526020808401828152848601838152606080870185815289516001600160a01b03908116808a528b87015186528b8b0151821685528c8701358352600790975543600155895195860196909652925197840197909752519092169481019490945251908301529060a0015b60405160208183030381529060405260029080519060200190610469929190610b5a565b50505050565b61047f6005600054146011610990565b6104998135158061049257506001548235145b6012610990565b6000808055600280546104ab90610cc1565b80601f01602080910402602001604051908101604052809291908181526020018280546104d790610cc1565b80156105245780601f106104f957610100808354040283529160200191610524565b820191906000526020600020905b81548152906001019060200180831161050757829003601f168201915b505050505080602001905181019061053c9190610db4565b90507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb190722338360405161056f929190610d77565b60405180910390a16105833415600f610990565b805161059b906001600160a01b031633146010610990565b604080516060810182526000808252602080830182815283850183815286516001600160a01b039081168652878401519092528686015190911690526006909155436001559151909161044591839101610e4e565b60006060600054600280805461060590610cc1565b80601f016020809104026020016040519081016040528092919081815260200182805461063190610cc1565b801561067e5780601f106106535761010080835404028352916020019161067e565b820191906000526020600020905b81548152906001019060200180831161066157829003601f168201915b50505050509050915091509091565b61069d6007600054146019610990565b6106b7813515806106b057506001548235145b601a610990565b6000808055600280546106c990610cc1565b80601f01602080910402602001604051908101604052809291908181526020018280546106f590610cc1565b80156107425780601f1061071757610100808354040283529160200191610742565b820191906000526020600020905b81548152906001019060200180831161072557829003601f168201915b505050505080602001905181019061075a9190610e7b565b90507fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae338360405161078d929190610d77565b60405180910390a16107a134156017610990565b60408101516107bc906001600160a01b031633146018610990565b6107c4610b0f565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169201919091526060830151818301805191909152514391015261029a816109ba565b61081c600460005414600d610990565b6108368135158061082f57506001548235145b600e610990565b60008080556002805461084890610cc1565b80601f016020809104026020016040519081016040528092919081815260200182805461087490610cc1565b80156108c15780601f10610896576101008083540402835291602001916108c1565b820191906000526020600020905b8154815290600101906020018083116108a457829003601f168201915b50505050508060200190518101906108d99190610db4565b90507f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc1338360405161090c929190610e27565b60405180910390a16109203415600b610990565b604081015161093b906001600160a01b03163314600c610990565b604080516060810182526000808252602080830182815283850183815286516001600160a01b039081168652878401519092528686015190911690526005909155436001559151909161044591839101610e4e565b816109b65760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b602081015151610a405760408051606081018252600080825260208083018281528385018381528651516001600160a01b03908116865287518401519092528651860151909116905260049091554360015591519091610a1c91839101610e4e565b6040516020818303038152906040526002908051906020019061029a929190610b5a565b8060000151604001516001600160a01b03166108fc610a686002846000015160200151610aaa565b6040518115909202916000818181858888f19350505050158015610a90573d6000803e3d6000fd5b5060008080556001819055610aa790600290610bde565b50565b6000811580610ace57508282610ac08183610efb565b9250610acc9083610f28565b145b610b095760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016109ad565b92915050565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610b55604051806040016040528060008152602001600081525090565b905290565b828054610b6690610cc1565b90600052602060002090601f016020900481019282610b885760008555610bce565b82601f10610ba157805160ff1916838001178555610bce565b82800160010185558215610bce579182015b82811115610bce578251825591602001919060010190610bb3565b50610bda929150610c14565b5090565b508054610bea90610cc1565b6000825580601f10610bfa575050565b601f016020900490600052602060002090810190610aa791905b5b80821115610bda5760008155600101610c15565b600060408284031215610c3b57600080fd5b50919050565b600060408284031215610c5357600080fd5b610c5d8383610c29565b9392505050565b82815260006020604081840152835180604085015260005b81811015610c9857858101830151858201606001528201610c7c565b81811115610caa576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610cd557607f821691505b60208210811415610c3b57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610d0d57600080fd5b919050565b600060408284031215610d2457600080fd5b6040516040810181811067ffffffffffffffff82111715610d5557634e487b7160e01b600052604160045260246000fd5b604052610d6183610cf6565b8152602083015160208201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214610da557600080fd5b80604085015250509392505050565b600060608284031215610dc657600080fd5b6040516060810181811067ffffffffffffffff82111715610df757634e487b7160e01b600052604160045260246000fd5b604052610e0383610cf6565b815260208301516020820152610e1b60408401610cf6565b60408201529392505050565b6001600160a01b038316815260608101610c5d602083018480358252602090810135910152565b81516001600160a01b03908116825260208084015190830152604092830151169181019190915260600190565b600060808284031215610e8d57600080fd5b6040516080810181811067ffffffffffffffff82111715610ebe57634e487b7160e01b600052604160045260246000fd5b604052610eca83610cf6565b815260208301516020820152610ee260408401610cf6565b6040820152606083015160608201528091505092915050565b6000816000190483118215151615610f2357634e487b7160e01b600052601160045260246000fd5b500290565b600082610f4557634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122038192966ff513c6b85f7d595541997af36dac0de7b2049fe67881dba8ef2b2b064736f6c634300080c0033`,
  BytecodeLen: 4654,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:29:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:71:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:40:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:46:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:50:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:56:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
