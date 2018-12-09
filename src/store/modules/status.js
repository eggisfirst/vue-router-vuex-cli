
const state = {
  tabStatus: 0

  
}

const mutations = {
  setTabStatus: (state, str) => state.tabStatus= str


}

const actions = {

}

const getters = {
  // homeArrFilter: state => state.homeArr.map(function(item, index, arr) {
  //   return item + '0'
  // })
}

export default {
  state,
  getters,
  actions,
  mutations
}