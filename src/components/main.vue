<template>
<div class="main">
    <div id="scene">
        <div class="ground">
            <div class="ground_row row" v-for="n in 14" :key="n">
                <div class="ground_child col-1" v-for="m in 12" :key="m">
                    <!-- 中央にキャラクター配置(row:7,col:7) -->
                    <div v-if="n==7 && m == 6">
                        <Chara ref='chara_ref' />
                    </div>
                </div>
            </div>
            <Message ref='message_ref' />
            <Event ref='connect_item_controller' />
        </div>
        <Control v-on:stage_reload="reload_call" v-on:btn_click="front_chk" />
        <DetailsDisplay ref='details_ref' v-on:details_item="connect_item_controller" v-on:details_item_close="conntent_item_close" />
        <Bgm />
    </div>
</div>
</template>

<script>
import * as mainjs from "../assets/js/index.js";
import * as stagejs from "../assets/js/stage.js";
import * as bgmjs from "../assets/js/bgm.js";
import Chara from "./character.vue";
import Control from "./controller.vue";
import DetailsDisplay from "./details_display.vue";
import Message from "./message.vue";
import Event from "./event.vue";
import Bgm from "./bgm.vue";
import {
    log
} from 'util';

export default {
    name: "game",
    data() {
        return {
            col: 0,
            row: 0,
            stage: "",
            temp_arr: [],
            player_direction: '',
            counts: 0,
        };
    },
    components: {
        Chara,
        Control,
        Message,
        Bgm,
        DetailsDisplay,
        Event
    },
    mounted() {
        let mounted_stage = 'STAGE_ground';
        this.load_call(mounted_stage, 0, 0);
    },
    watch: {
        counts(to, from) {
            this.$refs.chara_ref[0].player_direction(this.player_direction);
        }
    },
    methods: {
        //初期ロード
        load_call(mounted_stage, col, row) {
            stagejs.reset_stage();
            this.remove_class(this.temp_arr);
            this.temp_arr = [];
            this.dedication_id();
            this.col = col;
            this.row = row;
            //stage_loadの引数 スタート地点col,row,stage
            this.stage_load(this.col, this.row, mounted_stage);
            this.temp_arr = stagejs.display_temp_stage;
            this.stage = mounted_stage;
        },
        //移動時ロード direction->方向
        reload_call(col, row, direction) {
                //Menu等_open時のボタン操作
            if (mainjs.read_message_display_() != false) return false;
            if (mainjs.read_details_display_() != false) {
                this.$refs.details_ref.details_controller(direction);
                return false;
            }
            this.counts = this.counts + 1;
            this.player_direction = direction;
            //当たり判定
            let hit_return = stagejs.judge_hit(this.temp_arr, col, row);
            if (hit_return == 1) return false;
            //ステージ移動
            if (hit_return != 0) {
                //NEXTステージ名,col,row
                bgmjs.Bgm_sound(hit_return[3]);
                this.load_call(hit_return[0], hit_return[1], hit_return[2]);
                return false;
            }

            this.col = this.col + col;
            this.row = this.row + row;
            //一つ前のステージクラス削除
            this.remove_class(this.temp_arr);
            //新規クラス追加
            this.stage_load(this.col, this.row, this.stage);
        },
        dedication_id() {
            //各フィールドにid付与
            let dedication_element = document.getElementsByClassName("ground_child");
            for (let i = 0; i < dedication_element.length; i++) {
                dedication_element[i].setAttribute("id", "ground_child_" + i);
            }
        },
        stage_load(col, row, stage_name) {
            //ステージロード
            let stage_load_arr = stagejs.display_stage_reflect(col, row, stage_name);

            for (let j = 0; j < stage_load_arr.length; j++) {
                document.getElementById("ground_child_" + j).classList.add(stagejs.STAGE_DISPLAY[stage_load_arr[j]]);
            }
            this.temp_arr = stage_load_arr;
        },
        remove_class(stage_temp_arr) {
            for (let k = 0; k < stage_temp_arr.length; k++) {
                document.getElementById("ground_child_" + k).classList.remove(stagejs.STAGE_DISPLAY[stage_temp_arr[k]]);
            }
        },
        front_chk() {
            //Menu開いている時のクリック
            if(mainjs.read_details_display_() != false){
                this.$refs.details_ref.decision_click();
                return false;
                }
            
            //キャラクターの上下左右に位置する情報をゲット
            let direction_chk = {
                'top': 65,
                'right': 78,
                'left': 76,
                'bottom': 89,
            }
            let event_content;
            let direction_classList = document.getElementById('ground_child_' + direction_chk[this.player_direction]).classList;
            for (let ii = 0; ii < direction_classList.length; ii++) {
                for (let jj = 0; jj < Object.keys(stagejs.EVENT_).length; jj++) {
                    if (direction_classList[ii] == Object.keys(stagejs.EVENT_)[jj]) {
                        event_content = stagejs.EVENT_[Object.keys(stagejs.EVENT_)[jj]];
                    }

                }
            }
            if (event_content != undefined) this.$refs.message_ref.throw_event(event_content);
        },
        connect_item_controller(ev){
             this.$refs.connect_item_controller.event_start(ev);
        },
        conntent_item_close(){
            this.$refs.connect_item_controller.event_close();
        }
    }
};
</script>

<style scoped>
.main {
    width: inherit;
    height: inherit;
}

#scene {
    position: relative;
    width: 360px;
    height: inherit;
    margin: 0 auto;
}

.ground {
    /* width: 30px;
    height: 30px;
    position: relative;
    overflow: hidden; */
}

.ground_row {
    margin: 0px !important;
}

.ground_child {
    width: 30px;
    height: 30px;
    margin: 0 !important;
}

.field1 {
    background: url("../assets/img/field/field1.png") no-repeat center center;
    object-fit: cover;
}

.yama1 {
    background: url("../assets/img/field/yama1.png") no-repeat center center;
    object-fit: cover;
}

.water1 {
    background: url("../assets/img/field/water1.png") no-repeat center center;
    object-fit: cover;
}
.kusa1 {
    background: url("../assets/img/field/kusa1.png") no-repeat center center;
    object-fit: cover;
}

.man_front {
    background: url("../assets/img/chara/man_front.png"),
        url("../assets/img/field/field1.png"),
        no-repeat center center;
    object-fit: cover;
}
</style>
