<template>
  <div>
    <obg-list>
      <obg-list-item>
    <div v-if="showtemp==true" style="padding:23px; font-size:25px; color:deepskyblue;">ApplicationShown Event Pass!!</div>
    <div v-else style="padding:23px; font-size:25px;">ApplicationShown Event Not Yet!!</div>
        <obg-button type="square" class = 'testbutton' @click='onClick1'>test</obg-button>
      </obg-list-item>
      <obg-list-item>
    <div v-if="hidetemp==true" style="padding:23px; font-size:25px; color:deepskyblue;">ApplicationHidden Event Pass!!</div>
    <div v-else style="padding:23px; font-size:25px;">ApplicationHidden Event Not Yet!!</div>
        <obg-button type="square" class = 'testbutton' @click='onClick2'>test</obg-button>
      </obg-list-item>
      <obg-list-item>
    <div v-if="appmessagetemp==true" style="padding:23px; font-size:25px; color:deepskyblue;">ApplicationMessage Event Pass!!</div>
    <div v-else style="padding:23px; font-size:25px;">ApplicationMessage Event Not Yet!!</div>
        <obg-button type="square" class = 'testbutton' style="width:130px; right:130px;" @click='unregisterListener'>unregister</obg-button>
        <obg-button type="square" class = 'testbutton' @click='onClick3'>test</obg-button>
      </obg-list-item>
      <obg-list-item>
    <div v-if="appaccessedtemp==true" style="padding:23px; font-size:25px; color:deepskyblue;">ApplicationAccessed Event Pass!!</div>
    <div v-else style="padding:23px; font-size:25px;">ApplicationAccessed Event Not Yet!!</div>
        <obg-button type="square" class = 'testbutton' @click='onClick4'>test</obg-button>
      </obg-list-item>
      <obg-list-item>
    <div v-if="loadedtemp==true" style="padding:23px; font-size:25px; color:deepskyblue;">ApplicationLoaded Event Pass!!</div>
    <div v-else style="padding:23px; font-size:25px;">ApplicationLoaded Event Not Yet!!</div>
        <obg-button type="square" class = 'testbutton' @click='onClick5'>test</obg-button>
      </obg-list-item>
      <obg-list-item>
    <div v-if="maintemp==true" style="padding:23px; font-size:25px; color:deepskyblue;">ApplicationMain Event Pass!!</div>
    <div v-else style="padding:23px; font-size:25px;">ApplicationMain Event Not Yet!!</div>
        <obg-button type="square" class = 'testbutton' @click='onClick6'>test</obg-button>
      </obg-list-item>
      <obg-list-item>
    <div v-if="backtemp==true" style="padding:23px; font-size:25px; color:deepskyblue;">ApplicationBack Event Pass!!</div>
    <div v-else style="padding:23px; font-size:25px;">ApplicationBack Event Not Yet!!</div>
        <obg-button type="square" class = 'testbutton' @click='onClick7'>test</obg-button>
      </obg-list-item>
  </obg-list>
    <!-- <obg-list style="height:69px;" :hideDummyItem="true">
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
  </obg-list> -->
  </div>
</template>
<script>
// import doAPITest from '../store/apis.js'
import button from 'obigo-js-ui-rnbs/components/button'
// import answers from '../assets/resources/answers.json'
import {list, listItem} from 'obigo-js-ui-rnbs/components/list'
export default {
  mounted () {
    const am = window.applicationFramework.applicationManager
    const app = window.applicationFramework.applicationManager.getOwnerApplication(window.document)
    app.addEventListener('ApplicationShown', () => { this.showtemp = true; console.log('applicationshown') })
    app.addEventListener('ApplicationHidden', () => { this.hidetemp = true; console.log('applicationhidden') })
    app.addEventListener('AmbientColorChanged', (color) => { this.colortemp = true; console.log(color.str) })
    app.addEventListener('LanguageChanged', (language) => { this.languagetemp = true; console.log(language.str) })
    app.addEventListener('ChangedLockoutStatus', (status) => { this.lockouttemp = true; console.log(status) })
    app.addEventListener('ApplicationMessage', (message, targetOrigin, sender) => { this.appmessagetemp = true; console.log(message) })
    app.registerMessageListener('onCommand')
    am.addEventListener('ApplicationAccessed', (wd, permission) => { this.appaccessedtemp = true; console.log('applicationaccessed'); console.log(wd) })
    am.addEventListener('ApplicationLoaded', (appl) => { this.loadedtemp = true; console.log('applicationloaded'); console.log(appl.visible) })
    am.addEventListener('ApplicationMain', (appl) => { this.maintemp = true; console.log('appliactionmain'); console.log(appl.visible) })
    am.addEventListener('ApplicationBack', (appl) => { this.backtemp = true; console.log('appliactionback'); console.log(appl.visible) })
  },
  data () {
    return {
      hidetemp: false,
      showtemp: false,
      appmessagetemp: false,
      appaccessedtemp: false,
      loadedtemp: false,
      maintemp: false,
      backtemp: false
    }
  },
  /* computed: {
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
  }, */
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
    onClick2: function () {
      const app = window.applicationFramework.applicationManager.getOwnerApplication(window.document)
      app.hide()
      setTimeout(function () { app.show() }, 1000)
    },
    unregisterListener: function () {
      const app = window.applicationFramework.applicationManager.getOwnerApplication(window.document)
      app.unregisterMessageListener('onCommand') // filter-name을 unregister 시키면 postmessage 메소드가 동작하지 말아야 하는데 동작함... 왜 그러지?
    },
    onClick3: function () {
      const app = window.applicationFramework.applicationManager.getOwnerApplication(window.document)
      app.postMessage('Message', app.getDescriptor().id + '?' + 'filter-name=onCommand', null)
    },
    onClick4: function () {
      const app = window.applicationFramework.applicationManager.getOwnerApplication(window.document)
      const am = window.applicationFramework.applicationManager
      app.startWidget(am.widgets.item(3), false)
      setTimeout(function () { app.show() }, 1000)
      setTimeout(function () { app.stopWidget(am.widgets.item(3)) }, 1000)
    },
    onClick6: function () {
      const app = window.applicationFramework.applicationManager.getOwnerApplication(window.document)
      app.main()
      setTimeout(function () { app.show() }, 1000)
    },
    onClick7: function () {
      const app = window.applicationFramework.applicationManager.getOwnerApplication(window.document)
      app.back()
      setTimeout(function () { app.show() }, 1000)
    }
    /* ActualResult: function (key, keys) {
      if (doAPITest[key]) {
        return doAPITest[key][keys]
      } else {
        var NoAPI = 'NoAPI'
        return NoAPI
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
  .testbutton
  {
    margin:5px;
    height:60px; 
    width:110px; 
    position:absolute; 
    right:10px;
  }
</style>
