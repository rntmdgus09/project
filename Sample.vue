<template>
  <div>
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
    <div v-if="colortemp==true" style="font-size: 25px; color: deepskyblue;">AmbientColorChanged Event Pass!!</div>
    <div v-else style="font-size: 25px;">AmbientColorChanged Event Not Yet!!</div>
      </obg-list-item>
      <obg-list-item>
    <div v-if="languagetemp==true" style="font-size: 25px; color: deepskyblue;">LanguageChanged Event Pass!!</div>
    <div v-else style="font-size: 25px;">LanguageChanged Event Not Yet!!</div>
      </obg-list-item>
      <obg-list-item>
    <div v-if="lockouttemp==true" style="font-size: 25px; color: deepskyblue;">ChangedLockoutStatus Event Pass!!</div>
    <div v-else style="font-size: 25px;">ChangedLockoutStatus Event Not Yet!!</div>
      </obg-list-item>
      <obg-list-item>
    <div v-if="memoryusagetemp==true" style="font-size: 25px; color: deepskyblue;">MemoryUsage Event Pass!!</div>
    <div v-else style="font-size: 25px;">MemoryUsage Event Not Yet!!</div>
      </obg-list-item>
      <obg-list-item>
    <div v-if="loadedtemp==true" style="font-size: 25px; color: deepskyblue;">ApplicationLoaded Event Pass!!</div>
    <div v-else style="font-size: 25px;">ApplicationLoaded Event Not Yet!!</div>
      </obg-list-item>
      <obg-list-item>
    <div v-if="maintemp==true" style="font-size: 25px; color: deepskyblue;">ApplicationMain Event Pass!!</div>
    <div v-else style="font-size: 25px;">ApplicationMain Event Not Yet!!</div>
      </obg-list-item>
      <obg-list-item>
    <div v-if="backtemp==true" style="font-size: 25px; color: deepskyblue;">ApplicationBack Event Pass!!</div>
    <div v-else style="font-size: 25px;">ApplicationBack Event Not Yet!!</div>
      </obg-list-item>
      <obg-list-item>
    <div v-if="updatedsubscriptiontemp==true" style="font-size: 25px; color: deepskyblue;">UpdatedSubscriptionStatus Event Pass!!</div>
    <div v-else style="font-size: 25px;">UpdatedSubscriptionStatus Event Not Yet!!</div>
      </obg-list-item>
      <obg-list-item>
    <div v-if="updatedexpirationtemp==true" style="font-size: 25px; color: deepskyblue;">UpdatedExpirationDate Event Pass!!</div>
    <div v-else style="font-size: 25px;">UpdatedExpirationDate Event Not Yet!!</div>
      </obg-list-item>
      <obg-list-item>
    <div v-if="updatedprivacytemp==true" style="font-size: 25px; color: deepskyblue;">UpdatedPrivacyModeStatus Event Pass!!</div>
    <div v-else style="font-size: 25px;">UpdatedPrivacyModeStatus Event Not Yet!!</div>
      </obg-list-item>
      <obg-list-item>
    <div v-if="updatedconfigurationtemp==true" style="font-size: 25px; color: deepskyblue;">UpdatedConfigurations Event Pass!!</div>
    <div v-else style="font-size: 25px;">UpdatedConfigurations Event Not Yet!!</div>
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
    const am = window.applicationFramework.applicationManager.getOwnerApplication(window.document)
    am.addEventListener('ApplicationShown', () => { this.showtemp = true })
    am.addEventListener('ApplicationHidden', () => { this.hidetemp = true })
    am.addEventListener('AmbientColorChanged', (color) => { this.colortemp = true; console.log(color.str) })
    am.addEventListener('LanguageChanged', (language) => { this.languagetemp = true; console.log(language.str) })
    am.addEventListener('ChangedLockoutStatus', (status) => { this.lockouttemp = true; console.log(status) })
    am.addEventListener('MemoryUsage', (usage) => { this.memoryusagetemp = true; console.log(usage) })
    app.addEventListener('ApplicationLoaded', (appl) => { this.loadedtemp = true; console.log(appl.visible) })
    app.addEventListener('ApplicationMain', (appl) => { this.maintemp = true; console.log(appl.visible) })
    app.addEventListener('ApplicationBack', (appl) => { this.backtemp = true; console.log(appl.visible) })
    app.addEventListener('UpdatedSubscriptionStatus', (wdc) => { this.updatedsubscriptiontemp = true; console.log(wdc) })
    app.addEventListener('UpdatedExpirationDate', (date) => { this.updatedexpirationtemp = true; console.log(date) })
    app.addEventListener('UpdatedPrivacyModeStatus', (status) => { this.updatedprivacytemp = true; console.log(status) })
    app.addEventListener('UpdatedConfigurations', (configurations) => { this.updatedprivacytemp = true; console.log(configurations) })
  },
  data () {
    return {
      hidetemp: false,
      showtemp: false,
      colortemp: false,
      languagetemp: false,
      lockouttemp: false,
      memoryusagetemp: false,
      loadedtemp: false,
      maintemp: false,
      backtemp: false,
      updatedsubscriptiontemp: false,
      updatedexpirationtemp: false,
      updateprivacytemp: false,
      updatedconfigurationtemp: false
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
