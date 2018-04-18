import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    clearState: 'clear',
    hasGrid:false,
    toClear : true,
    toDelete : true,
    toRotate : true,
    isSelected:false,
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
    downloading:false,
    playerText:false,
    text:'GK'
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
    },
    changeToClear(state){
      state.toClear = ! state.toClear;
    },
    changeToDelete(state){
      state.toDelete = ! state.toDelete;
    },
    changeToRotate(state){
      state.toRotate = ! state.toRotate;
    },
    changeGirdState(state){
      state.hasGrid = ! state.hasGrid;
    },
    changeSelectState(state,newState){
      state.isSelected = newState;
    },
    changePlayerTextState(state,newState){
      state.playerText = newState;
    },
    setText(state,newState){
      state.text = newState;
    }
  }
});

export default store
