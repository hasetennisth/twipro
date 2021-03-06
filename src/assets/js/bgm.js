import { type } from "os";

let bgm = {//name,filename
    'back01':'nervous',
    'talk':'decision22',
    'enter01':'enter',
    'serif':'serif_voice01'
};
let load_bgm = {};

let isSound = false;
export function play_sound(filename){
    isSound = true;
    load_bgm[filename].volume =0.4;
    load_bgm[filename].play();
}
export function stop_sound(filename){
    isSound = false;
    load_bgm[filename].pause();
}
export function load_sound(filename){
//bgm obj作成　& load処理完了
    for(let i = 0; i < Object.keys(bgm).length; i++){
        load_bgm[Object.keys(bgm)[i]] = new Audio(require('../media/' + bgm[Object.keys(bgm)[i]] +'.mp3'));
        load_bgm[Object.keys(bgm)[i]].load();
    }
    isSound = false;
    load_bgm[filename].pause();
    load_bgm[filename].currentTime = 0;
    
}
let now_play_sound ='';
//効果音再生
export function Bgm_sound(filename){
    if(isSound != true)return false;
    //今なっている音は止める
    if(now_play_sound != ''){
    load_bgm[now_play_sound].pause();
    load_bgm[now_play_sound].currentTime = 0;
    }
    load_bgm[filename].play();
    now_play_sound = filename;
}
export function Bgm_stop(filename){
    load_bgm[filename].pause();
    load_bgm[filename].currentTime = 0;
}
