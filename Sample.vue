<template>
  <div>
    <obg-button type="square" @click='onClick' style="width:200px; height:50px; margin:auto;">Hide</obg-button>
    <obg-list>
      <obg-list-item>
    <div v-if="showtemp==true" style="font-size: 25px; color: deepskyblue;">ApplicationShown Event Pass!!</div>
    <div v-else style="font-size: 25px;">ApplicationShown Event Not Yet!!</div>
      </obg-list-item>
      <obg-list-item>
    <div v-if="hidetemp==true" style="font-size: 25px; color: deepskyblue;">ApplicationHidden Event Pass!!</div>
    <div v-else style="font-size: 25px;">ApplicationHidden Event Not Yet!!</div>
      </obg-list-item>
      <obg-list-item>
    <div v-if="activatedtemp==true" style="font-size: 25px; color: deepskyblue;">ApplicationActivated Event Pass!!</div>
    <div v-else style="font-size: 25px;">ApplicationActivated Event Not Yet!!</div>
      </obg-list-item>
      <obg-list-item>
    <div v-if="deactivatedtemp==true" style="font-size: 25px; color: deepskyblue;">ApplicationDeactivated Event Pass!!</div>
    <div v-else style="font-size: 25px;">ApplicationDeactivated Event Not Yet!!</div>
      </obg-list-item>
      <obg-list-item>
    <div v-if="colortemp==true" style="font-size: 25px; color: deepskyblue;">AmbientColorChanged Event Pass!!</div>
    <div v-else style="font-size: 25px;">AmbientColorChanged Event Not Yet!!</div>
      </obg-list-item>
      <obg-list-item>
    <div v-if="languagetemp==true" style="font-size: 25px; color: deepskyblue;">LanguageChanged Event Pass!!</div>
    <div v-else style="font-size: 25px;">LanguageChanged Event Not Yet!!</div>
      </obg-list-item>
      <obg-list-item>
    <div v-if="maintemp==true" style="font-size: 25px; color: deepskyblue;">ApplicationMain Event Pass!!</div>
    <div v-else style="font-size: 25px;">ApplicationMain Event Not Yet!!</div>
      </obg-list-item>
      <obg-list-item>
    <div v-if="backtemp==true" style="font-size: 25px; color: deepskyblue;">ApplicationBack Event Pass!!</div>
    <div v-else style="font-size: 25px;">ApplicationBack Event Not Yet!!</div>
      </obg-list-item>
  </obg-list>
    <!--<obg-list style="height:69px;" :hideDummyItem="true">
      <obg-list-item class="header">
        <div class="text category">Category</div>
        <div class="text">API</div>
        <div class="text">Actual Data</div>
        <div class="text">Expected Data</div>
        <div class="text result">Result</div>
      </obg-list-item>
    </obg-list>
    <obg-list>
      <obg-list-item v-for="object in Answersheet" :key="object.api">
        <div class="text category">{{object.category}}</div>
        <div class="text">{{object.api}}</div>
        <div class="text">{{ActualResult(object.category,object.api)}}</div> 
        <div class="text">{{object.expected}}</div>
        <div v-if="compare(ActualResult(object.category,object.api),object.expected)==true" class="text result" style="color:deepskyblue;">Pass</div>
        <div v-else class="text result" style="color:deeppink;">Fail</div>
      </obg-list-item>
  </obg-list>-->
  </div>
</template>
<script>
// import doAPITest from '../store/apis.js'
import button from 'obigo-js-ui-rnbs/components/button'
import answers from '../assets/resources/answers.json'
import {list, listItem} from 'obigo-js-ui-rnbs/components/list'
export default {
  mounted () {
    const app = window.applicationFramework.applicationManager
    app.getOwnerApplication(window.document).addEventListener('ApplicationShown', this.shown)
    app.getOwnerApplication(window.document).addEventListener('ApplicationHidden', this.hidden)
    app.getOwnerApplication(window.document).addEventListener('ApplicationActivated', this.activated)
    app.getOwnerApplication(window.document).addEventListener('ApplicationDeactivated', this.deactivated)
    app.getOwnerApplication(window.document).addEventListener('AmbientColorChanged', this.colorchanged)
    app.getOwnerApplication(window.document).addEventListener('LanguageChanged', this.languagechanged)
    app.addEventListener('ApplicationMain', this.main)
    app.addEventListener('ApplicationBack', this.back)
  },
  data () {
    return {
      hidetemp: false,
      showtemp: false,
      activatedtemp: false,
      deactivatedtemp: false,
      colortemp: false,
      languagetemp: false,
      maintemp: false,
      backtemp: false
    }
  },
  computed: {
    Answersheet: function () {
      let arr = []
      let answersObject = Object(answers)
      for (let key in answersObject) {
        for (let childKey in answersObject[key]) {
          let obj = {}
          obj.category = key
          obj.api = childKey
          obj.expected = answersObject[key][childKey]
          arr.push(obj)
        }
      }
      return arr
    }
  },
  components: {
    'obg-button': button,
    'obg-list': list,
    'obg-list-item': listItem
  },
  methods: {
    compare: function (a, b) {
      if (a === b) return true
      else return false
    },
    onClick (evt) {
      console.log(evt)
      window.applicationFramework.applicationManager.getOwnerApplication(window.document).hide()
    },
    hidden: function () {
      this.hidetemp = true
      // window.applicationFramework.applicationManager.getOwnerApplication(window.document).show()
    },
    shown: function () {
      this.showtemp = true
    },
    activated: function () {
      this.activatedtemp = true
      console.log('Application Activated!!!!!!!!!!')
    },
    deactivated: function () {
      this.deactivatedtemp = true
      console.log('Application Deactivated!!!!!!!!!!')
    },
    colorchanged: function (color) {
      this.colortemp = true
      console.log('Ambient Color Changed!!!!!!!!!!')
    },
    languagechanged: function (language) {
      this.languagetemp = true
      console.log('Language Changed!!!!!!!!!!')
    },
    main: function (app) {
      this.maintemp = true
    },
    back: function (app) {
      this.backtemp = true
    }
    /* ActualResult: function (key, keys) {
      var tmp = doAPITest[key][keys]
      var wrongAnswer = 'MissLoading'
      if (tmp) {
        console.log(tmp)
        return tmp
      } else {
        return wrongAnswer
      }
    } */
  }
}
</script>
<style lang='scss' scoped>
  .pop-contents{
    padding:20px 20px;
    p{
      text-align:center;
      font-size:20px;
    }
  }
  .obg-list{
  height: 354px;
  .obg-list-item{
    &.header{
      pointer-events: none;
    }
    .text{
      font-size:17px;
      margin: auto 0 auto 22px;
      width: 160px;
      text-align: center;
    }
    .category{
      width: 100px;
      margin-right: 10px;
      color: #ffffff;
    }
    .result{
      float: right;
      width: 100px;
      text-align: center;
    }
  }
}
</style>
