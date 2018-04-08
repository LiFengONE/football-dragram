import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    clearState: 'clear',
    shapesColor: 'yellow',
    equipmentColor: 'yellow',
    playersColor: 'green',
    linesColor: 'black',
    color: {
      green: '#45d695',
      blue: '#3f95dc',
      yellow: '#ecc434',
      red: '#e54f3a',
      black: '#2f313c',
      grey: '#d5d5d5'
    },
    tool: '',
    downloading:false
  },
  mutations: {
    changeClearState(state,newClearState){
      state.clearState = newClearState;
    },
    setShapesColor(state,newColor){
      state.shapesColor = newColor;
    },
    setEquipmentColor(state,newColor){
      state.equipmentColor = newColor;
    },
    setPlayersColor(state,newColor){
      state.playersColor = newColor;
    },
    setLinesColor(state,newColor){
      state.linesColor = newColor;
    },
    setTool(state,newTool){
      state.tool = newTool;
    },
    changeDownloading(state){
      state.downloading = ! state.downloading;
    }
  }
});

export default store
